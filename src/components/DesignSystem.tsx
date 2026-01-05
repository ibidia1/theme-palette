import React from 'react';
import { Logo } from './Logo';
import { ECGPattern } from './ECGPattern';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Users, BookOpen, Award, BarChart3, CheckCircle, Stethoscope, GraduationCap, Target, Heart, Shield, Star } from 'lucide-react';

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-white">
      {/* Design System Header */}
      <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Logo variant="white" size="xl" className="mx-auto mb-8" />
          <h1 className="text-4xl mb-4">QE.tn Design System</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Système de design complet pour la plateforme d'excellence dédiée à la préparation 
            au résidanat médical en Tunisie. Identité moderne alliant innovation technologique et rigueur médicale.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Brand Identity */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Identité de Marque</h2>
          
          {/* Logo Variations */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-slate-800">Variations du Logo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="p-8 text-center bg-white border-2">
                <h4 className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Version Principale</h4>
                <Logo variant="primary" size="lg" className="mx-auto" />
                <div className="mt-4 text-xs text-slate-400">
                  Usage: Headers, documentation
                </div>
              </Card>
              
              <Card className="p-8 text-center bg-slate-50 border-2">
                <h4 className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Version Secondaire</h4>
                <Logo variant="secondary" size="lg" className="mx-auto" />
                <div className="mt-4 text-xs text-slate-400">
                  Usage: Alternate contexts
                </div>
              </Card>
              
              <Card className="p-8 text-center bg-slate-800 border-2">
                <h4 className="text-sm text-slate-300 mb-6 uppercase tracking-wider">Version Blanche</h4>
                <Logo variant="white" size="lg" className="mx-auto" />
                <div className="mt-4 text-xs text-slate-300">
                  Usage: Fonds sombres
                </div>
              </Card>
              
              <Card className="p-8 text-center bg-gray-100 border-2">
                <h4 className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Version Minimale</h4>
                <Logo variant="minimal" size="lg" className="mx-auto" />
                <div className="mt-4 text-xs text-slate-400">
                  Usage: Espaces restreints
                </div>
              </Card>
              
              <Card className="p-8 text-center bg-sepia-light border-2 border-sepia-brown/20">
                <h4 className="text-sm text-sepia-text mb-6 uppercase tracking-wider">Version Sépia</h4>
                <Logo variant="sepia" size="lg" className="mx-auto" />
                <div className="mt-4 text-xs text-sepia-muted">
                  Usage: Style vintage/rétro
                </div>
              </Card>
            </div>
          </div>

          {/* Logo Sizes */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-slate-800">Tailles de Logo</h3>
            <div className="space-y-8">
              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-sm text-slate-500 mb-4">Extra Large - Bannières et headers principaux</div>
                <Logo variant="primary" size="xl" className="mx-auto" />
                <div className="mt-2 text-xs text-slate-400">256x128px</div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg">
                <div className="text-sm text-slate-500 mb-4">Large - Pages de contenu</div>
                <Logo variant="primary" size="lg" className="mx-auto" />
                <div className="mt-2 text-xs text-slate-400">192x96px</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-sm text-slate-500 mb-4">Medium - Navigation</div>
                <Logo variant="primary" size="md" className="mx-auto" />
                <div className="mt-2 text-xs text-slate-400">128x64px</div>
              </div>
              <div className="text-center p-4 bg-white border rounded-lg">
                <div className="text-sm text-slate-500 mb-4">Small - Mobile et favicon</div>
                <Logo variant="primary" size="sm" className="mx-auto" />
                <div className="mt-2 text-xs text-slate-400">96x48px</div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Palettes de Couleurs</h2>
          
          {/* Palette Principale */}
          <div className="mb-12">
            <h3 className="text-xl mb-6 text-slate-800">Palette Principale</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-full h-24 bg-medical-blue rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Bleu Médical</h4>
                <p className="text-xs text-slate-500">#4f7cff</p>
                <p className="text-xs text-slate-400">Principal</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-medical-orange rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Orange Accent</h4>
                <p className="text-xs text-slate-500">#ff8f00</p>
                <p className="text-xs text-slate-400">QE.tn brand</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-medical-green rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Vert ECG</h4>
                <p className="text-xs text-slate-500">#059669</p>
                <p className="text-xs text-slate-400">Médical</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-medical-red rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Rouge Médical</h4>
                <p className="text-xs text-slate-500">#dc2626</p>
                <p className="text-xs text-slate-400">Alerte</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-slate-800 rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Noir Professionnel</h4>
                <p className="text-xs text-slate-500">#1e293b</p>
                <p className="text-xs text-slate-400">Texte principal</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-slate-100 border-2 border-slate-300 rounded-lg mb-4 shadow-lg"></div>
                <h4 className="text-sm mb-1">Gris Clair</h4>
                <p className="text-xs text-slate-500">#f1f5f9</p>
                <p className="text-xs text-slate-400">Arrière-plans</p>
              </div>
            </div>
          </div>

          {/* Palette Sépia */}
          <div className="mb-8">
            <h3 className="text-xl mb-6 text-slate-800">Palette Sépia</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-brown rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Brun Sépia</h4>
                <p className="text-xs text-slate-500">#8b6914</p>
                <p className="text-xs text-slate-400">Principal sépia</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-accent rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Accent Sépia</h4>
                <p className="text-xs text-slate-500">#d97706</p>
                <p className="text-xs text-slate-400">Accent vintage</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-dark rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Sépia Foncé</h4>
                <p className="text-xs text-slate-500">#7c5f0a</p>
                <p className="text-xs text-slate-400">Contraste</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-light border-2 border-sepia-brown/20 rounded-lg mb-4 shadow-lg"></div>
                <h4 className="text-sm mb-1">Sépia Clair</h4>
                <p className="text-xs text-slate-500">#fef3c7</p>
                <p className="text-xs text-slate-400">Arrière-plan</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-text rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Texte Sépia</h4>
                <p className="text-xs text-slate-500">#44403c</p>
                <p className="text-xs text-slate-400">Lisibilité</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-sepia-muted rounded-lg mb-4 shadow-lg border"></div>
                <h4 className="text-sm mb-1">Sépia Atténué</h4>
                <p className="text-xs text-slate-500">#a8a29e</p>
                <p className="text-xs text-slate-400">Secondaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* ECG Pattern */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Motif ECG Authentique</h2>
          
          <div className="space-y-8">
            <Card className="p-8">
              <h4 className="text-lg mb-4 text-center text-slate-700">Version Statique</h4>
              <ECGPattern />
            </Card>
            
            <Card className="p-8 bg-slate-50">
              <h4 className="text-lg mb-4 text-center text-slate-700">Version Animée</h4>
              <ECGPattern animated />
            </Card>
            
            <Card className="p-8 bg-medical-blue text-white">
              <h4 className="text-lg mb-4 text-center text-blue-100">Sur Fond Coloré</h4>
              <ECGPattern color="stroke-white" className="opacity-60" />
            </Card>
            
            <Card className="p-8 bg-sepia-light border-2 border-sepia-brown/20">
              <h4 className="text-lg mb-4 text-center text-sepia-text">Version Sépia</h4>
              <ECGPattern color="stroke-sepia-brown" className="opacity-80" />
            </Card>
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Composants UI</h2>
          
          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-xl mb-6 text-slate-800">Boutons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <h4 className="text-sm text-slate-500 mb-4">Bouton Principal</h4>
                <Button className="bg-medical-blue hover:bg-blue-600 text-white w-full">
                  <CheckCircle className="mr-2 w-4 h-4" />
                  Commencer
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <h4 className="text-sm text-slate-500 mb-4">Bouton Secondaire</h4>
                <Button variant="outline" className="border-slate-300 text-slate-700 w-full">
                  <Play className="mr-2 w-4 h-4" />
                  Voir la Démo
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <h4 className="text-sm text-slate-500 mb-4">Bouton Orange</h4>
                <Button className="bg-medical-orange hover:bg-orange-600 text-white w-full">
                  QE.tn Premium
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <h4 className="text-sm text-slate-500 mb-4">Bouton Ghost</h4>
                <Button variant="ghost" className="text-slate-600 w-full">
                  Connexion
                </Button>
              </Card>
            </div>
            
            {/* Boutons Sépia */}
            <h4 className="text-lg mb-4 text-slate-700 mt-8">Version Sépia</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-sepia-light rounded-lg border border-sepia-brown/20">
              <Card className="p-6 text-center bg-white/80">
                <h4 className="text-sm text-sepia-text mb-4">Bouton Sépia Principal</h4>
                <Button className="bg-sepia-brown hover:bg-sepia-dark text-white w-full">
                  <CheckCircle className="mr-2 w-4 h-4" />
                  Commencer
                </Button>
              </Card>
              
              <Card className="p-6 text-center bg-white/80">
                <h4 className="text-sm text-sepia-text mb-4">Bouton Sépia Accent</h4>
                <Button className="bg-sepia-accent hover:bg-orange-600 text-white w-full">
                  QE.tn Vintage
                </Button>
              </Card>
              
              <Card className="p-6 text-center bg-white/80">
                <h4 className="text-sm text-sepia-text mb-4">Bouton Sépia Outline</h4>
                <Button variant="outline" className="border-sepia-brown text-sepia-brown hover:bg-sepia-light w-full">
                  <Play className="mr-2 w-4 h-4" />
                  Voir
                </Button>
              </Card>
              
              <Card className="p-6 text-center bg-white/80">
                <h4 className="text-sm text-sepia-text mb-4">Bouton Sépia Ghost</h4>
                <Button variant="ghost" className="text-sepia-text hover:bg-sepia-light w-full">
                  Archives
                </Button>
              </Card>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-xl mb-6 text-slate-800">Cartes de Contenu</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="text-xl mb-4 text-slate-800">Cours Structurés</h3>
                <p className="text-slate-600">
                  Contenu pédagogique organisé par spécialités médicales
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-medical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-medical-orange" />
                </div>
                <h3 className="text-xl mb-4 text-slate-800">Analytics Avancés</h3>
                <p className="text-slate-600">
                  Suivez votre progression en temps réel
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-medical-green" />
                </div>
                <h3 className="text-xl mb-4 text-slate-800">Communauté Active</h3>
                <p className="text-slate-600">
                  Échangez avec d'autres étudiants en médecine
                </p>
              </Card>
            </div>
          </div>

          {/* Badges & Icons */}
          <div className="mb-12">
            <h3 className="text-xl mb-6 text-slate-800">Badges et Icônes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h4 className="text-sm text-slate-500 mb-4">Badges Médicaux</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-medical-blue text-white">Résidanat</Badge>
                  <Badge className="bg-medical-orange text-white">QE.tn</Badge>
                  <Badge className="bg-medical-green text-white">Médecine</Badge>
                  <Badge className="bg-medical-red text-white">Urgent</Badge>
                  <Badge variant="outline" className="border-medical-blue text-medical-blue">Premium</Badge>
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-sm text-slate-500 mb-4">Icônes Médicales</h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <Stethoscope className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                    <div className="text-xs text-slate-500">Stéthoscope</div>
                  </div>
                  <div className="text-center">
                    <GraduationCap className="w-8 h-8 text-medical-orange mx-auto mb-2" />
                    <div className="text-xs text-slate-500">Formation</div>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-medical-red mx-auto mb-2" />
                    <div className="text-xs text-slate-500">Cardiologie</div>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-medical-green mx-auto mb-2" />
                    <div className="text-xs text-slate-500">Objectifs</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Page Layout Examples */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Exemples de Mise en Page</h2>
          
          {/* Header Example */}
          <div className="mb-8">
            <h3 className="text-xl mb-4 text-slate-800">En-tête de Navigation</h3>
            <Card className="p-0 overflow-hidden">
              <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <Logo variant="primary" size="md" />
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">Cours</a>
                  <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">QCM</a>
                  <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">Résidanat</a>
                  <a href="#" className="text-slate-600 hover:text-medical-blue transition-colors">À propos</a>
                </nav>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-slate-600">Connexion</Button>
                  <Button size="sm" className="bg-medical-blue hover:bg-blue-600 text-white">Inscription</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Hero Section Example */}
          <div className="mb-8">
            <h3 className="text-xl mb-4 text-slate-800">Section Héros</h3>
            <Card className="p-12 bg-gradient-to-br from-slate-50 to-blue-50">
              <div className="text-center space-y-6">
                <h1 className="text-4xl lg:text-5xl text-slate-900">
                  Réussissez votre <span className="text-medical-blue">Résidanat</span>
                  <br />avec <span className="text-medical-orange">QE.tn</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  La plateforme de référence pour préparer le concours de résidanat en Tunisie
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-medical-blue hover:bg-blue-600 text-white">
                    Commencer Maintenant
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Play className="mr-2 w-5 h-5" />
                    Voir la Démo
                  </Button>
                </div>
                <div className="pt-6">
                  <ECGPattern animated className="opacity-40" />
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <h3 className="text-xl mb-4 text-slate-800">Section Statistiques</h3>
            <Card className="p-8">
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
            </Card>
          </div>

          {/* Footer Example */}
          <div>
            <h3 className="text-xl mb-4 text-slate-800">Pied de Page</h3>
            <Card className="p-8 bg-slate-50">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <Logo variant="primary" size="md" />
                  <p className="text-slate-600 text-sm">
                    Plateforme d'excellence pour la préparation au résidanat médical en Tunisie
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-slate-800">Plateforme</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">Cours</a>
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">QCM</a>
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">Examens</a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-slate-800">Support</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">Aide</a>
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">Contact</a>
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">FAQ</a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-slate-800">Légal</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">CGU</a>
                    <a href="#" className="block text-sm text-slate-600 hover:text-medical-blue">Confidentialité</a>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t text-center">
                <p className="text-sm text-slate-500">
                  © 2024 QE.tn - Plateforme d'apprentissage médical pour la Tunisie
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Typographie</h2>
          
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl text-slate-900 mb-2">Heading 1 - Titre Principal</h1>
                <p className="text-sm text-slate-500">text-4xl, font-medium, text-slate-900</p>
              </div>
              <div>
                <h2 className="text-3xl text-slate-800 mb-2">Heading 2 - Sous-titre</h2>
                <p className="text-sm text-slate-500">text-3xl, font-medium, text-slate-800</p>
              </div>
              <div>
                <h3 className="text-2xl text-slate-700 mb-2">Heading 3 - Section</h3>
                <p className="text-sm text-slate-500">text-2xl, font-medium, text-slate-700</p>
              </div>
              <div>
                <p className="text-lg text-slate-600 mb-2">
                  Paragraphe principal - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-sm text-slate-500">text-lg, font-normal, text-slate-600</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-2">
                  Texte secondaire et légendes
                </p>
                <p className="text-sm text-slate-500">text-sm, font-normal, text-slate-500</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Directives d'Utilisation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl mb-4 text-green-600 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                À Faire
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Utiliser le logo principal sur fond blanc</li>
                <li>• Respecter l'espace de protection autour du logo</li>
                <li>• Utiliser les couleurs de la palette officielle</li>
                <li>• Maintenir les proportions du logo</li>
                <li>• Intégrer le motif ECG avec parcimonie</li>
                <li>• Privilégier la lisibilité et l'accessibilité</li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl mb-4 text-red-600 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                À Éviter
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Déformer ou étirer le logo</li>
                <li>• Utiliser des couleurs non autorisées</li>
                <li>• Placer le logo sur des fonds complexes</li>
                <li>• Modifier l'espacement entre QE et .tn</li>
                <li>• Surcharger l'interface avec le motif ECG</li>
                <li>• Ignorer les contrastes d'accessibilité</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Medical Context */}
        <section>
          <h2 className="text-3xl mb-8 text-center text-slate-900">Contexte Médical</h2>
          
          <Card className="p-8 bg-gradient-to-r from-medical-blue/5 to-blue-50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Stethoscope className="w-12 h-12 text-medical-blue mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-slate-800">Excellence Médicale</h3>
                <p className="text-slate-600">
                  Rigueur et précision dans tous les aspects de la formation
                </p>
              </div>
              <div>
                <GraduationCap className="w-12 h-12 text-medical-orange mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-slate-800">Innovation Pédagogique</h3>
                <p className="text-slate-600">
                  Méthodes d'apprentissage modernes et technologiques
                </p>
              </div>
              <div>
                <Heart className="w-12 h-12 text-medical-red mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-slate-800">Engagement Tunisien</h3>
                <p className="text-slate-600">
                  Dédié spécifiquement au système médical tunisien
                </p>
              </div>
            </div>
          </Card>
        </section>

      </div>

      {/* Design System Footer */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Logo variant="white" size="lg" className="mx-auto mb-6" />
          <p className="text-slate-300 mb-4">
            Système de design QE.tn - Version 1.0
          </p>
          <p className="text-slate-400 text-sm">
            Plateforme d'excellence pour la préparation au résidanat médical en Tunisie
          </p>
        </div>
      </div>
    </div>
  );
}