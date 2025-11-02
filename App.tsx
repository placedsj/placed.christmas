import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import GalleryPage from "@/pages/gallery";
import HandbookPage from "@/pages/handbook";
import BookingPage from "@/pages/enhanced-booking";
import ContactPage from "@/pages/contact";
import AdminPage from "@/pages/admin";
import LaunchAdminPage from "@/pages/launch-admin";
import CheckoutPage from "@/pages/checkout";
import CustomerPortalPage from "@/pages/customer-portal";
import AskAProPage from "@/pages/ask-a-pro";
import HowItWorksPage from "@/pages/how-it-works";
import PackageBuilderPage from "@/pages/package-builder";
import TestimonialsPage from "@/pages/testimonials";
import AppointmentSchedulerPage from "@/pages/appointment-scheduler";
import TrustAuthorityPage from "@/pages/trust-authority";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/handbook" component={HandbookPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/launch" component={LaunchAdminPage} />
      <Route path="/portal" component={CustomerPortalPage} />
      <Route path="/ask-a-pro" component={AskAProPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/package-builder" component={PackageBuilderPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/appointments" component={AppointmentSchedulerPage} />
      <Route path="/trust" component={TrustAuthorityPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
