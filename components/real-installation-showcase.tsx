import React from 'react';
import { Users, Truck, Shield, Award } from 'lucide-react';
import realInstallation from '@assets/image_1754704532843.png';

export function RealInstallationShowcase() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16">
      <div className="container-professional">
        <div className="text-center mb-12">
          <h2 className="font-festive text-4xl md:text-5xl font-bold text-christmas-gold mb-4 uppercase text-outlined">
            REAL INSTALLATION IN ACTION
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto font-semibold">
            See the PLACED Santa's Helpers team at work in Quispamsis, delivering professional Christmas light installations with safety and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-christmas-gold/30">
              <h3 className="text-3xl font-bold text-white mb-6 uppercase text-outlined">
                PROFESSIONAL INSTALLATION PROCESS
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-christmas-red p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-christmas-gold uppercase">EXPERT TEAM</h4>
                    <p className="text-light">Our trained professionals work together safely and efficiently on every installation project.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-christmas-green p-3 rounded-full flex-shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-christmas-gold uppercase">PROFESSIONAL EQUIPMENT</h4>
                    <p className="text-light">Commercial-grade ladders, safety gear, and quality lighting materials for every job.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-christmas-red p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-christmas-gold uppercase">SAFETY FIRST</h4>
                    <p className="text-light">Proper safety protocols and equipment protect both our team and your property.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-christmas-green p-3 rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-christmas-gold uppercase">QUALITY RESULTS</h4>
                    <p className="text-light">Attention to detail and commitment to excellence in every installation across Quispamsis.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-christmas-gold/20 rounded-lg border border-christmas-gold/50">
                <h4 className="text-2xl font-bold text-white mb-3 uppercase text-center">
                  YOUR CHRISTMAS, OUR HANDS
                </h4>
                <p className="text-christmas-cream text-center font-semibold">
                  Trust the professionals at PLACED Santa's Helpers to transform your home safely and beautifully this holiday season.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-christmas-red to-christmas-green p-4 rounded-3xl">
                <img
                  src={realInstallation}
                  alt="PLACED Santa's Helpers team installing Christmas lights on a home in Quispamsis"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border-4 border-christmas-gold">
                <div className="text-center">
                  <div className="text-2xl font-bold text-christmas-red uppercase">PLACED.ca</div>
                  <div className="text-sm text-slate-600 font-semibold">QUISPAMSIS, NB</div>
                  <div className="text-lg font-bold text-christmas-green">(506) 650-2122</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-christmas-red/20 border border-christmas-red/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-christmas-gold mb-4 uppercase">
              REAL TEAM, REAL RESULTS
            </h3>
            <p className="text-light font-semibold">
              This photo shows our actual PLACED team working on a real installation in the Quispamsis area. Professional equipment, branded uniforms, and commitment to safety on every job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}