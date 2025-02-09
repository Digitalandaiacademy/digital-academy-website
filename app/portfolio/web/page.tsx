"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Star,
  ArrowRight
} from 'lucide-react'

export default function WebPortfolio() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Web Development Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Développement Web</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez nos réalisations en développement web et applications sur mesure
          </p>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="websites" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
            <TabsTrigger value="websites" className="data-[state=active]:bg-[#353c6b] data-[state=active]:text-white">
              Sites Web
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="data-[state=active]:bg-[#353c6b] data-[state=active]:text-white">
              E-commerce
            </TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-[#353c6b] data-[state=active]:text-white">
              Applications Web
            </TabsTrigger>
          </TabsList>

          {/* Sites Web Content */}
          <TabsContent value="websites" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Sites Web Professionnels</h2>
                <p className="text-gray-600">
                  Nous créons des sites web modernes, responsifs et optimisés pour les moteurs
                  de recherche. Notre approche combine design attractif et performance technique.
                </p>
                <div className="flex gap-4">
                  <Globe className="w-8 h-8 text-[#353c6b]" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Design responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Optimisation SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Performance optimale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Interface intuitive</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Cabinet d'Architectes ModernDesign</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
                    alt="Architecture Website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour ModernDesign, nous avons créé un site web vitrine mettant en valeur
                    leurs projets architecturaux avec une navigation fluide et un design épuré.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>+150% de demandes de devis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>-40% de taux de rebond</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>Top 3 sur Google pour les mots-clés ciblés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#353c6b]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#353c6b] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">J</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#353c6b] text-[#353c6b]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Le site web créé par Digital & AI Academy a transformé notre image en ligne.
                    Nous recevons régulièrement des compliments sur son design et sa facilité d'utilisation."
                  </p>
                  <p className="font-semibold">Jean Kouassi</p>
                  <p className="text-sm text-gray-600">Fondateur, ModernDesign</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* E-commerce Content */}
          <TabsContent value="ecommerce" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Solutions E-commerce</h2>
                <p className="text-gray-600">
                  Nous développons des boutiques en ligne performantes et sécurisées,
                  optimisées pour maximiser vos ventes et offrir une expérience d'achat
                  exceptionnelle.
                </p>
                <div className="flex gap-4">
                  <ShoppingCart className="w-8 h-8 text-[#353c6b]" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fonctionnalités</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Paiement sécurisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Gestion des stocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Mobile-first</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Analytics avancés</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : AfricaStyle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    alt="E-commerce Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour AfricaStyle, nous avons développé une boutique en ligne complète
                    permettant de vendre leurs créations de mode africaine à l'international.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>+300% de ventes en ligne</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>+200% de taux de conversion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>Expansion vers 5 nouveaux pays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#353c6b]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#353c6b] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">A</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#353c6b] text-[#353c6b]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Notre boutique en ligne nous a permis d'atteindre des clients dans toute
                    l'Afrique et même en Europe. Un véritable game-changer pour notre entreprise."
                  </p>
                  <p className="font-semibold">Aïcha Traoré</p>
                  <p className="text-sm text-gray-600">CEO, AfricaStyle</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Applications Web Content */}
          <TabsContent value="applications" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#353c6b]">Applications Web</h2>
                <p className="text-gray-600">
                  Nous développons des applications web sur mesure qui répondent aux besoins
                  spécifiques de votre entreprise, avec une attention particulière à
                  l'expérience utilisateur et la performance.
                </p>
                <div className="flex gap-4">
                  <LayoutDashboard className="w-8 h-8 text-[#353c6b]" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>API RESTful</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                    <span>Base de données SQL/NoSQL</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : LogiTrack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="Web Application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Pour LogiTrack, nous avons développé une application web de gestion
                    logistique permettant de suivre les livraisons en temps réel.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>-30% de temps de gestion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>+95% de satisfaction client</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#353c6b]" />
                      <span>ROI atteint en 6 mois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#353c6b]/10 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#353c6b] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">R</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#353c6b] text-[#353c6b]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "L'application développée par Digital & AI Academy a révolutionné notre
                    gestion logistique. Nous pouvons maintenant suivre nos livraisons en
                    temps réel et optimiser nos routes."
                  </p>
                  <p className="font-semibold">Robert Nkomo</p>
                  <p className="text-sm text-gray-600">Directeur Opérations, LogiTrack</p>
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
            Prêt à lancer votre projet web ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/web">
              <Button className="bg-[#353c6b] hover:bg-[#7abbed] text-white">
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