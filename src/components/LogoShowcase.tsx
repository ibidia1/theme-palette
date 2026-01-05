import React from 'react';
import { Logo } from './Logo';
import { ECGPattern } from './ECGPattern';
import { Card } from './ui/card';

export function LogoShowcase() {
  return (
    <div className="space-y-12">
      {/* Main Logo Display */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
        <div className="space-y-8">
          <Logo variant="primary" size="xl" className="mx-auto" />
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl text-slate-600 mb-4">
              Plateforme d'excellence pour la préparation au résidanat médical en Tunisie
            </h2>
            <ECGPattern animated className="opacity-60" />
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section>
        <h3 className="text-2xl mb-8 text-center text-slate-800">Variations du Logo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 text-center bg-white">
            <h4 className="text-sm text-slate-500 mb-4">Version Principale</h4>
            <Logo variant="primary" size="lg" className="mx-auto" />
          </Card>
          
          <Card className="p-8 text-center bg-white">
            <h4 className="text-sm text-slate-500 mb-4">Version Secondaire</h4>
            <Logo variant="secondary" size="lg" className="mx-auto" />
          </Card>
          
          <Card className="p-8 text-center bg-slate-800">
            <h4 className="text-sm text-slate-300 mb-4">Version Blanche</h4>
            <Logo variant="white" size="lg" className="mx-auto" />
          </Card>
          
          <Card className="p-8 text-center bg-white">
            <h4 className="text-sm text-slate-500 mb-4">Version Minimale</h4>
            <Logo variant="minimal" size="lg" className="mx-auto" />
          </Card>
        </div>
      </section>

      {/* Size Variations */}
      <section>
        <h3 className="text-2xl mb-8 text-center text-slate-800">Tailles Disponibles</h3>
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h4 className="text-sm text-slate-500">Extra Large (Bannières)</h4>
            <Logo variant="primary" size="xl" className="mx-auto" />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm text-slate-500">Large (Headers)</h4>
            <Logo variant="primary" size="lg" className="mx-auto" />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm text-slate-500">Medium (Navigation)</h4>
            <Logo variant="primary" size="md" className="mx-auto" />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm text-slate-500">Small (Favicon/Mobile)</h4>
            <Logo variant="primary" size="sm" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Usage in Context */}
      <section>
        <h3 className="text-2xl mb-8 text-center text-slate-800">Utilisation en Contexte</h3>
        <div className="space-y-6">
          {/* Header mockup */}
          <Card className="p-0 overflow-hidden">
            <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
              <Logo variant="primary" size="md" />
              <div className="flex items-center space-x-6">
                <span className="text-sm text-slate-600">Cours</span>
                <span className="text-sm text-slate-600">QCM</span>
                <span className="text-sm text-slate-600">Résidanat</span>
                <span className="text-sm text-slate-600">Profil</span>
              </div>
            </div>
            <div className="p-6 bg-slate-50">
              <h4 className="text-sm text-slate-500 mb-2">Simulation d'en-tête de site web</h4>
            </div>
          </Card>

          {/* Mobile mockup */}
          <Card className="p-0 overflow-hidden max-w-sm mx-auto">
            <div className="bg-medical-blue text-white px-4 py-3 flex items-center justify-center">
              <Logo variant="white" size="sm" />
            </div>
            <div className="p-4 bg-slate-50">
              <h4 className="text-sm text-slate-500 text-center">Interface mobile</h4>
            </div>
          </Card>
        </div>
      </section>

      {/* Brand Colors */}
      <section>
        <h3 className="text-2xl mb-8 text-center text-slate-800">Palette de Couleurs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-full h-20 bg-medical-blue rounded-lg mb-2"></div>
            <h4 className="text-sm">Bleu Médical</h4>
            <p className="text-xs text-slate-500">#1e40af</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 bg-medical-red rounded-lg mb-2"></div>
            <h4 className="text-sm">Rouge Accent</h4>
            <p className="text-xs text-slate-500">#dc2626</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 bg-medical-green rounded-lg mb-2"></div>
            <h4 className="text-sm">Vert ECG</h4>
            <p className="text-xs text-slate-500">#059669</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 bg-slate-100 border rounded-lg mb-2"></div>
            <h4 className="text-sm">Gris Clair</h4>
            <p className="text-xs text-slate-500">#f1f5f9</p>
          </div>
        </div>
      </section>
    </div>
  );
}