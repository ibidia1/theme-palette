import React from 'react';
import { Logo } from './Logo';
import { ECGPattern } from './ECGPattern';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Play, Users, BookOpen, Award, BarChart3, CheckCircle } from 'lucide-react';
import exampleImage from 'figma:asset/ce68be0444da4cc118b163703a2b916a74bdeb1d.png';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Logo variant="primary" size="md" />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">Cours</a>
            <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">QCM</a>
            <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">Résidanat</a>
            <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">À propos</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-600">Connexion</Button>
            <Button className="bg-medical-blue hover:bg-blue-600 text-white">Inscription</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl leading-tight text-slate-900">
                  Réussissez votre{' '}
                  <span className="text-medical-blue">Résidanat</span>
                  <br />
                  avec{' '}
                  <span className="text-medical-orange font-bold">QE.tn</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  La plateforme de référence pour préparer le concours de résidanat en Tunisie. 
                  Cours complets, QCM intelligents, et suivi personnalisé.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-medical-blue hover:bg-blue-600 text-white px-8 py-4 text-lg"
                >
                  Commencer Maintenant
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Voir la Démo
                </Button>
              </div>

              <div className="pt-8">
                <ECGPattern animated className="opacity-40" />
              </div>
            </div>

            <div className="lg:pl-12">
              <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl text-slate-800">Plateforme Premium</h3>
                    <p className="text-slate-600">Tout ce dont vous avez besoin pour réussir</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-medical-blue" />
                      <span className="text-slate-700">Cours complets et actualisés</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-medical-green" />
                      <span className="text-slate-700">QCM intelligents avec analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-medical-orange" />
                      <span className="text-slate-700">Communauté d'étudiants actifs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-medical-red" />
                      <span className="text-slate-700">Certification de progression</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-slate-500">Rejoignez plus de</p>
                      <p className="text-3xl text-medical-blue">5,000+</p>
                      <p className="text-sm text-slate-600">étudiants en médecine</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl text-medical-blue">92%</p>
              <p className="text-sm text-slate-600">Taux de réussite</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl text-medical-orange">15,000+</p>
              <p className="text-sm text-slate-600">QCM disponibles</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl text-medical-green">24/7</p>
              <p className="text-sm text-slate-600">Support disponible</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl text-medical-red">100+</p>
              <p className="text-sm text-slate-600">Heures de cours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl text-slate-900">
              Une plateforme complète pour votre succès
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez tous les outils dont vous avez besoin pour exceller dans votre préparation au résidanat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl mb-4 text-slate-800">Cours Structurés</h3>
              <p className="text-slate-600">
                Contenu pédagogique organisé par spécialités, créé par des experts médicaux
              </p>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-medical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-medical-orange" />
              </div>
              <h3 className="text-xl mb-4 text-slate-800">Analytics Avancés</h3>
              <p className="text-slate-600">
                Suivez votre progression en temps réel avec des analyses détaillées de performance
              </p>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-medical-green" />
              </div>
              <h3 className="text-xl mb-4 text-slate-800">Communauté Active</h3>
              <p className="text-slate-600">
                Échangez avec d'autres étudiants et bénéficiez de l'entraide collective
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-r from-medical-blue to-blue-600 text-white">
            <div className="space-y-6">
              <h2 className="text-3xl">
                Prêt à commencer votre préparation ?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Rejoignez des milliers d'étudiants qui font confiance à QE.tn pour leur réussite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-medical-blue hover:bg-gray-100 px-8 py-4"
                >
                  Commencer gratuitement
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo variant="primary" size="md" />
              <p className="text-slate-600">
                La plateforme de référence pour la préparation au résidanat médical en Tunisie
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-slate-800">Plateforme</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Cours</a>
                <a href="#" className="block text-slate-600 hover:text-medical-blue">QCM</a>
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Examens blancs</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-slate-800">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Centre d'aide</a>
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Contact</a>
                <a href="#" className="block text-slate-600 hover:text-medical-blue">FAQ</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-slate-800">Légal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Conditions d'utilisation</a>
                <a href="#" className="block text-slate-600 hover:text-medical-blue">Politique de confidentialité</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t text-center">
            <p className="text-slate-500">
              © 2024 QE.tn - Tous droits réservés. Plateforme d'apprentissage médical pour la Tunisie.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}