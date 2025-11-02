import { Button } from '@/components/ui/button';
import { Calendar, Calculator, Shield, Star, Clock } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      {/* FESTIVE CHRISTMAS SPARKLES */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full christmas-twinkle"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-red-300 rounded-full christmas-twinkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-green-300 rounded-full christmas-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-yellow-300 rounded-full christmas-twinkle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-400 rounded-full christmas-twinkle" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-400 rounded-full christmas-twinkle" style={{animationDelay: '0.3s'}}></div>
        
        {/* Christmas Stars */}
        <div className="absolute top-16 right-1/2 text-2xl christmas-twinkle" style={{animationDelay: '0.2s'}}>⭐</div>
        <div className="absolute bottom-32 left-1/2 text-3xl christmas-twinkle" style={{animationDelay: '1.2s'}}>✨</div>
        <div className="absolute top-1/3 left-20 text-2xl christmas-twinkle" style={{animationDelay: '0.7s'}}>🎄</div>
      </div>
      
      <div className="container-professional section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight">
                🎄 PLACED Santa's Helpers 🎅
                <span className="text-yellow-300 block christmas-twinkle text-5xl md:text-7xl">Your Christmas, Our Hands</span>
              </h1>
              <p className="text-xl text-yellow-100 leading-relaxed">
                🌟 Professional Christmas lighting installation services for homes and businesses across Quispamsis, Saint John, and surrounding New Brunswick areas! 
                Let Santa's Helpers transform your property into a magical holiday display that will make your neighbors jealous! ✨
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-300/30">
                <div className="flex flex-col sm:flex-row gap-4 text-yellow-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">📞</span>
                    <span className="font-bold text-lg">(506) 650-2122</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">✉️</span>
                    <span className="font-semibold">yourchristmas@placed.life</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">📍</span>
                    <span className="font-semibold">Quispamsis, NB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="btn-primary festive-glow jingle-bell w-full sm:w-auto text-lg px-8 py-4">
                  <Calendar className="mr-2 h-6 w-6" />
                  🎄 Book Santa's Helpers! 🎄
                </Button>
              </Link>
              <Link href="/portal">
                <Button size="lg" variant="outline" className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-800 festive-glow w-full sm:w-auto text-lg px-8 py-4">
                  <Shield className="mr-2 h-6 w-6" />
                  🎅 Customer Portal 🎄
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" className="btn-secondary festive-glow w-full sm:w-auto text-lg px-8 py-4">
                  <Calculator className="mr-2 h-6 w-6" />
                  ✨ Get Instant Quote ✨
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 text-yellow-100">
              <div className="flex items-center christmas-twinkle">
                <Shield className="text-yellow-300 mr-2 h-6 w-6" />
                <span className="font-semibold">🛡️ Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center christmas-twinkle" style={{animationDelay: '0.5s'}}>
                <Star className="text-yellow-300 mr-2 h-6 w-6" />
                <span className="font-semibold">⭐ 5-Star Christmas Magic</span>
              </div>
              <div className="flex items-center christmas-twinkle" style={{animationDelay: '1s'}}>
                <Clock className="text-yellow-300 mr-2 h-6 w-6" />
                <span className="font-semibold">🎅 Professional Installation</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="@assets/placedchristmas1logo_1754090695897.png" 
              alt="PLACED Santa's Helpers - Your Christmas, Our Hands" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500 festive-glow" 
            />
            
            {/* Festive Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl max-w-xs festive-glow gradient-card">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current christmas-twinkle" style={{animationDelay: `${i * 0.2}s`}} />
                  ))}
                </div>
                <span className="ml-2 text-sm font-bold text-red-700">5.0 ⭐</span>
              </div>
              <p className="text-sm text-red-800 font-semibold">"🎄 Absolutely magical! Our house is the neighborhood showpiece! ✨"</p>
              <p className="text-xs text-green-700 mt-2 font-medium">- Sarah M., Quispamsis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
