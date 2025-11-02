import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { apiRequest } from '@/lib/queryClient';
import { DollarSign, Calendar, Users, CreditCard, TrendingUp, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  projectDetails: string;
  status: string;
  estimatedPrice: string;
  paymentStatus: string;
  paymentIntentId?: string;
  paidAmount?: string;
  paymentDate?: string;
  automatedBooking: boolean;
  createdAt: string;
  updatedAt: string;
}

export function AdminDashboard() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['/api/bookings'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/bookings');
      return response.json() as Promise<Booking[]>;
    },
  });

  const filteredBookings = bookings.filter(booking => 
    statusFilter === 'all' || booking.status === statusFilter
  );

  const stats = {
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    paidBookings: bookings.filter(b => b.paymentStatus === 'paid').length,
    totalRevenue: bookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + parseFloat(b.paidAmount || '0'), 0),
    automatedBookings: bookings.filter(b => b.automatedBooking).length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'processing': return 'bg-blue-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBookings}</div>
            <p className="text-xs text-muted-foreground">
              {stats.automatedBookings} automated bookings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()} CAD</div>
            <p className="text-xs text-muted-foreground">
              {stats.paidBookings} paid bookings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingBookings}</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Bookings</CardTitle>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bookings</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{booking.fullName}</h4>
                    {booking.automatedBooking && (
                      <Badge variant="outline" className="text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Automated
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{booking.email}</p>
                  <p className="text-sm text-muted-foreground">{booking.address}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Service: {booking.serviceType.replace(/-/g, ' ')}</span>
                    <span>Created: {format(new Date(booking.createdAt), 'MMM dd, yyyy')}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold">${booking.estimatedPrice} CAD</div>
                    {booking.paidAmount && (
                      <div className="text-sm text-green-600">
                        Paid: ${booking.paidAmount} CAD
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Badge className={`${getStatusColor(booking.status)} text-white`}>
                      {booking.status}
                    </Badge>
                    <Badge className={`${getPaymentStatusColor(booking.paymentStatus)} text-white`}>
                      {booking.paymentStatus}
                    </Badge>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {filteredBookings.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No bookings found for the selected filter.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="btn-primary">
              <Users className="w-4 h-4 mr-2" />
              View All Customers
            </Button>
            <Button variant="outline">
              <DollarSign className="w-4 h-4 mr-2" />
              Revenue Report
            </Button>
            <Button variant="outline">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Settings
            </Button>
            <Button variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}