import { Navigation } from '@/components/navigation';
import { AdminDashboard } from '@/components/admin-dashboard';
import { SEOHead } from '@/components/seo-head';
import { seoData } from '@/lib/seo';

export default function AdminPage() {
  return (
    <>
      <SEOHead data={seoData.admin} />
      <Navigation />
      
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container-professional">
          <div className="mb-8">
            <h1 className="font-playfair text-4xl font-bold text-slate-900 mb-2">
              Business Dashboard
            </h1>
            <p className="text-xl text-slate-600">
              Manage your automated Christmas lighting business operations
            </p>
          </div>

          <AdminDashboard />
        </div>
      </div>
    </>
  );
}