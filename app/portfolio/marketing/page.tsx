"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Facebook, 
  Instagram, 
  Search, 
  BarChart2, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star
} from 'lucide-react'

export default function MarketingPortfolio() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2069&auto=format&fit=crop"
            alt="Marketing Portfolio Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Marketing Digital</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez nos réalisations en marketing digital et les résultats obtenus pour nos clients
          </p>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="social" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
            <TabsTrigger value="social" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
              Réseaux Sociaux
            </TabsTrigger>
            <TabsTrigger value="google" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
              Google Ads
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
              Stratégie de Contenu
            </TabsTrigger>
          </TabsList>

          {/* Réseaux Sociaux Content */}
          <TabsContent value="social" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Gestion des Réseaux Sociaux</h2>
                <p className="text-gray-600">
                  Nous gérons les réseaux sociaux de nos clients avec une approche stratégique,
                  créative et orientée résultats. Notre expertise couvre Facebook, Instagram,
                  LinkedIn et TikTok.
                </p>
                <div className="flex gap-4">
                  <Facebook className="w-8 h-8 text-[#7abbed]" />
                  <Instagram className="w-8 h-8 text-[#7abbed]" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Nos Résultats Moyens</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-[#7abbed]" />
                    <div>
                      <p className="font-semibold">+150% d'engagement</p>
                      <p className="text-sm text-gray-600">Augmentation moyenne de l'engagement</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-6 h-6 text-[#7abbed]" />
                    <div>
                      <p className="font-semibold">+200% de followers</p>
                      <p className="text-sm text-gray-600">Croissance moyenne de la communauté</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Restaurant Le Gourmet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour Le Gourmet, nous avons mis en place une stratégie social media complète
                    qui a permis d'augmenter significativement leur visibilité et leurs réservations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>+300% de followers en 6 mois</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>+200% de réservations via les réseaux sociaux</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Taux d'engagement moyen de 8%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#7abbed]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#7abbed] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">M</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#7abbed] text-[#7abbed]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "L'équipe de Digital & AI Academy a complètement transformé notre présence sur les
                    réseaux sociaux. Nos réservations ont augmenté de manière significative et notre
                    communauté est plus engagée que jamais."
                  </p>
                  <p className="font-semibold">Marie Dupont</p>
                  <p className="text-sm text-gray-600">Propriétaire, Le Gourmet</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Google Ads Content */}
          <TabsContent value="google" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Campagnes Google Ads</h2>
                <p className="text-gray-600">
                  Nos campagnes Google Ads sont optimisées pour maximiser votre ROI et atteindre
                  vos objectifs commerciaux. Nous utilisons des stratégies avancées de ciblage et
                  d'enchères.
                </p>
                <div className="flex gap-4">
                  <Search className="w-8 h-8 text-[#7abbed]" />
                  <BarChart2 className="w-8 h-8 text-[#7abbed]" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Performance Moyenne</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-6 h-6 text-[#7abbed]" />
                    <div>
                      <p className="font-semibold">ROI moyen de 300%</p>
                      <p className="text-sm text-gray-600">Sur l'ensemble de nos campagnes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-[#7abbed]" />
                    <div>
                      <p className="font-semibold">-40% de coût par conversion</p>
                      <p className="text-sm text-gray-600">Optimisation continue des campagnes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : E-commerce ModeChic</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    alt="E-commerce Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour ModeChic, nous avons optimisé les campagnes Google Ads pour augmenter
                    les ventes en ligne tout en réduisant le coût par acquisition.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>+250% de ventes en ligne</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>-35% de coût par acquisition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>ROI de 450%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#7abbed]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#7abbed] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">S</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#7abbed] text-[#7abbed]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Les résultats de nos campagnes Google Ads ont dépassé toutes nos attentes.
                    L'équipe a su optimiser nos investissements pour maximiser nos ventes."
                  </p>
                  <p className="font-semibold">Sophie Martin</p>
                  <p className="text-sm text-gray-600">Directrice Marketing, ModeChic</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Stratégie de Contenu Content */}
          <TabsContent value="content" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Stratégie de Contenu</h2>
                <p className="text-gray-600">
                  Nous créons des stratégies de contenu qui racontent votre histoire, engagent
                  votre audience et convertissent vos visiteurs en clients fidèles.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Nos Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                    <span>Création de contenu SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                    <span>Articles de blog</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                    <span>Newsletters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                    <span>Infographies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Blog Santé&Bien-être</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
                    alt="Blog Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour le blog Santé&Bien-être, nous avons développé une stratégie de contenu
                    complète qui a permis d'augmenter significativement le trafic organique.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>+400% de trafic organique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>+10,000 abonnés newsletter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Top 3 des résultats Google pour les mots-clés ciblés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#7abbed]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#7abbed] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">L</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#7abbed] text-[#7abbed]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "La qualité du contenu produit par Digital & AI Academy est exceptionnelle.
                    Notre blog est maintenant une référence dans notre secteur."
                  </p>
                  <p className="font-semibold">Lucie Bernard</p>
                  <p className="text-sm text-gray-600">Fondatrice, Santé&Bien-être</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-[#353c6b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à booster votre présence digitale ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/marketing">
              <Button className="bg-[#7abbed] hover:bg-[#99325a] text-white">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#353c6b]">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}