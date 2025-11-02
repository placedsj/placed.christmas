import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, MapPin, Phone, Mail, Edit, Trash2, Plus, Star, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { Booking } from '@shared/schema';

export default function CustomerPortal() {
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch customer bookings
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['/api/customer/bookings', customerEmail],
    queryFn: async () => {
      const response = await apiRequest('GET', `/api/customer/bookings/${customerEmail}`);
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    },
    enabled: isAuthenticated && !!customerEmail,
  });

  // Customer authentication mutation
  const authMutation = useMutation({
    mutationFn: async ({ email, phone }: { email: string; phone: string }) => {
      const response = await apiRequest('POST', '/api/customer/auth', { email, phone });
      return await response.json();
    },
    onSuccess: () => {
      setIsAuthenticated(true);
      toast({
        title: "Welcome back!",
        description: "Successfully logged into your customer portal.",
      });
    },
    onError: (error) => {
      toast({
        title: "Authentication Failed",
        description: "Unable to verify your information. Please check your email and phone number.",
        variant: "destructive",
      });
    },
  });

  // Update booking mutation
  const updateBookingMutation = useMutation({
    mutationFn: async (updatedBooking: Partial<Booking>) => {
      const response = await apiRequest('PATCH', `/api/customer/bookings/${updatedBooking.id}`, updatedBooking);
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/customer/bookings'] });
      setEditingBooking(null);
      toast({
        title: "Booking Updated",
        description: "Your booking has been successfully updated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: "Unable to update your booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Cancel booking mutation
  const cancelBookingMutation = useMutation({
    mutationFn: async (bookingId: string) => {
      const response = await apiRequest('DELETE', `/api/customer/bookings/${bookingId}`);
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/customer/bookings'] });
      toast({
        title: "Booking Cancelled",
        description: "Your booking has been cancelled successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Cancellation Failed",
        description: "Unable to cancel your booking. Please contact us directly.",
        variant: "destructive",
      });
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4" />;
      case 'completed': return <Star className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    authMutation.mutate({ email: customerEmail, phone: customerPhone });
  };

  const handleUpdateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBooking) {
      updateBookingMutation.mutate(editingBooking);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-christmas-cream py-12">
        <div className="max-w-md mx-auto px-4">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-christmas-red">
                🎅 Customer Portal Login
              </CardTitle>
              <p className="text-christmas-green">
                Access your Christmas lighting bookings and manage your holiday magic!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-christmas-burgundy font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-christmas-burgundy font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(506) 650-2122"
                    required
                    className="mt-1"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary festive-glow"
                  disabled={authMutation.isPending}
                >
                  {authMutation.isPending ? 'Verifying...' : '🎄 Access Portal ✨'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-christmas-cream py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-christmas-red mb-2 christmas-twinkle">
            🎅 Welcome to Your Christmas Portal! 🎄
          </h1>
          <p className="text-christmas-green text-lg font-semibold">
            Manage your magical holiday lighting bookings with PLACED Santa's Helpers
          </p>
          <Button 
            onClick={() => setIsAuthenticated(false)} 
            variant="outline" 
            className="mt-4 border-christmas-red text-christmas-red hover:bg-christmas-red hover:text-white"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-christmas-red data-[state=active]:text-white">
              📅 My Bookings
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-christmas-green data-[state=active]:text-white">
              📋 Service History
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-christmas-gold data-[state=active]:text-white">
              👤 My Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-christmas-red">Active Bookings</h2>
              <Button className="btn-primary festive-glow" onClick={() => window.location.href = '/booking'}>
                <Plus className="mr-2 h-4 w-4" />
                🎄 New Booking
              </Button>
            </div>

            {isLoading ? (
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (bookings as Booking[]).length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <CalendarDays className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Bookings Found</h3>
                  <p className="text-gray-500 mb-4">You don't have any Christmas lighting bookings yet.</p>
                  <Button className="btn-primary festive-glow" onClick={() => window.location.href = '/booking'}>
                    🎄 Create Your First Booking ✨
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {(bookings as Booking[]).map((booking) => (
                  <Card key={booking.id} className="card-professional">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-christmas-red text-lg">
                            🏠 {booking.serviceType} Installation
                          </CardTitle>
                          <p className="text-christmas-green font-semibold">
                            {booking.fullName}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(booking.status)}>
                            {getStatusIcon(booking.status)}
                            <span className="ml-1 capitalize">{booking.status}</span>
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-christmas-burgundy">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span className="font-medium">
                              {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString() : 'Date TBD'}
                            </span>
                          </div>
                          <div className="flex items-center text-christmas-burgundy">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="font-medium">{booking.address || 'Address on file'}</span>
                          </div>
                          <div className="flex items-center text-christmas-burgundy">
                            <Phone className="h-4 w-4 mr-2" />
                            <span className="font-medium">{booking.phone}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {booking.estimatedPrice && (
                            <div className="text-lg font-bold text-christmas-green">
                              💰 Estimated: ${booking.estimatedPrice}
                            </div>
                          )}
                          <Badge className={getPaymentStatusColor(booking.paymentStatus)}>
                            Payment: {booking.paymentStatus}
                          </Badge>
                          {booking.paidAmount && (
                            <div className="text-sm text-christmas-burgundy font-medium">
                              Paid: ${booking.paidAmount}
                            </div>
                          )}
                        </div>
                      </div>

                      {booking.projectDetails && (
                        <div className="mb-4 p-3 bg-christmas-cream rounded-lg">
                          <p className="text-sm text-christmas-burgundy">
                            <strong>Project Details:</strong> {booking.projectDetails}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setEditingBooking(booking)}
                              className="border-christmas-green text-christmas-green hover:bg-christmas-green hover:text-white"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle className="text-christmas-red">
                                🎄 Edit Booking
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleUpdateBooking} className="space-y-4">
                              <div>
                                <Label htmlFor="edit-address" className="text-christmas-burgundy">Address</Label>
                                <Input
                                  id="edit-address"
                                  type="text"
                                  value={editingBooking?.address || ''}
                                  onChange={(e) => setEditingBooking(prev => prev ? {...prev, address: e.target.value} : null)}
                                />
                              </div>
                              <div>
                                <Label htmlFor="edit-details" className="text-christmas-burgundy">Project Details</Label>
                                <Textarea
                                  id="edit-details"
                                  value={editingBooking?.projectDetails || ''}
                                  onChange={(e) => setEditingBooking(prev => prev ? {...prev, projectDetails: e.target.value} : null)}
                                  placeholder="Any special requirements or notes..."
                                />
                              </div>
                              <div className="flex space-x-2">
                                <Button type="submit" className="btn-primary festive-glow flex-1" disabled={updateBookingMutation.isPending}>
                                  {updateBookingMutation.isPending ? 'Updating...' : 'Update Booking'}
                                </Button>
                                <Button type="button" variant="outline" onClick={() => setEditingBooking(null)}>
                                  Cancel
                                </Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                        
                        {booking.status === 'pending' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => cancelBookingMutation.mutate(booking.id)}
                            disabled={cancelBookingMutation.isPending}
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            {cancelBookingMutation.isPending ? 'Cancelling...' : 'Cancel'}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold text-christmas-red">Service History</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <Star className="h-12 w-12 text-christmas-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-christmas-green mb-2">Service History</h3>
                <p className="text-christmas-burgundy">
                  Your completed Christmas lighting installations will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold text-christmas-red">My Profile</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-christmas-red" />
                    <span className="text-christmas-burgundy font-medium">{customerEmail}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-christmas-green" />
                    <span className="text-christmas-burgundy font-medium">{customerPhone}</span>
                  </div>
                </div>
                <Button className="mt-6 btn-secondary festive-glow">
                  🎄 Update Profile Information
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}