import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';

// Initialize Stripe
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

interface CheckoutFormProps {
  bookingId: string;
  amount: number;
  onSuccess: () => void;
}

function CheckoutForm({ bookingId, amount, onSuccess }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Create payment intent when component mounts
    apiRequest('POST', '/api/create-payment-intent', {
      bookingId,
      amount,
      currency: 'cad'
    })
    .then(response => response.json())
    .then(data => {
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        toast({
          title: 'Payment Setup Failed',
          description: data.message || 'Unable to initialize payment processing',
          variant: 'destructive'
        });
      }
    })
    .catch(error => {
      toast({
        title: 'Payment Setup Error',
        description: 'Payment processing is currently unavailable. Please contact us directly.',
        variant: 'destructive'
      });
    });
  }, [bookingId, amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: 'if_required'
    });

    if (error) {
      toast({
        title: 'Payment Failed',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Payment Successful!',
        description: 'Your booking has been confirmed. We will contact you soon.',
      });
      onSuccess();
    }

    setIsProcessing(false);
  };

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button 
        type="submit" 
        disabled={!stripe || isProcessing} 
        className="w-full btn-primary"
        size="lg"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
            Processing Payment...
          </>
        ) : (
          <>
            <CreditCard className="w-4 h-4 mr-2" />
            Pay ${amount} CAD
          </>
        )}
      </Button>
    </form>
  );
}

export default function Checkout() {
  const [location, setLocation] = useLocation();
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  // Get booking data from URL params or session storage
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const bookingId = urlParams.get('bookingId') || sessionStorage.getItem('currentBookingId');
  const amount = parseFloat(urlParams.get('amount') || sessionStorage.getItem('currentBookingAmount') || '0');

  useEffect(() => {
    if (!bookingId || !amount) {
      setLocation('/booking');
    }
  }, [bookingId, amount, setLocation]);

  if (!stripePromise) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container-professional">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Payment Unavailable</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>Online payment processing is currently being set up.</p>
              <p>Please contact us directly to complete your booking:</p>
              <div className="space-y-2">
                <p className="font-semibold">Phone: (506) 555-0123</p>
                <p className="font-semibold">Email: info@placedchristmas.ca</p>
              </div>
              <Button onClick={() => setLocation('/booking')} className="btn-secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container-professional">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Payment Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>Your Christmas lighting booking has been confirmed.</p>
              <p>We will contact you within 24 hours to schedule your installation.</p>
              <Button onClick={() => setLocation('/')} className="btn-primary">
                Return Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-professional">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Complete Your Payment</CardTitle>
              <p className="text-center text-slate-600">
                Secure payment for your Christmas lighting service
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Booking Summary</h3>
                <div className="flex justify-between mt-2">
                  <span>Christmas Lighting Service</span>
                  <span>${amount} CAD</span>
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Professional installation in Quispamsis area
                </div>
              </div>

              {stripePromise && (
                <Elements 
                  stripe={stripePromise} 
                  options={{
                    appearance: {
                      theme: 'stripe',
                      variables: {
                        colorPrimary: '#3b82f6',
                      }
                    }
                  }}
                >
                  <CheckoutForm 
                    bookingId={bookingId!} 
                    amount={amount} 
                    onSuccess={() => setPaymentComplete(true)}
                  />
                </Elements>
              )}

              <div className="mt-6 text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => setLocation('/booking')}
                  className="text-slate-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}