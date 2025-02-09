"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Palette, 
  Star,
  ArrowRight,
  PenTool,
  Layout,
  Package
} from 'lucide-react'

export default function DesignPortfolio() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
            alt="Design Portfolio Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Design Graphique</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez nos créations visuelles qui donnent vie aux marques
          </p>
        </div>
      </div>

      {/* Services Tabs - Updated for better mobile responsiveness */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="branding" className="space-y-12">
          {/* Updated TabsList styling */}
          <div className="sticky top-20 bg-white/80 backdrop-blur-md z-30 py-4">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2">
              <TabsTrigger value="branding" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
                Identité de Marque
              </TabsTrigger>
              <TabsTrigger value="print" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
                Supports Imprimés
              </TabsTrigger>
              <TabsTrigger value="packaging" className="data-[state=active]:bg-[#7abbed] data-[state=active]:text-white">
                Packaging
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Rest of the content remains the same but with adjusted spacing */}
          <div className="mt-8">
            <TabsContent value="branding" className="space-y-12">
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#353c6b]">Identité de Marque</h2>
                    <p className="text-gray-600">
                      Nous créons des identités visuelles uniques et mémorables qui reflètent
                      l'essence de votre marque et la distinguent de la concurrence.
                    </p>
                    <div className="flex gap-4">
                      <PenTool className="w-8 h-8 text-[#7abbed]" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Notre Approche</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Recherche approfondie</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Design conceptuel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Itérations créatives</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Guide de marque complet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in [animation-delay:200ms]">
                  <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : AfricaStyle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000&auto=format&fit=crop"
                        alt="Brand Identity Case Study"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Pour AfricaStyle, nous avons créé une identité de marque complète
                        qui célèbre la mode africaine contemporaine tout en respectant ses
                        racines traditionnelles.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                          <span>Logo moderne et versatile</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                          <span>Palette de couleurs vibrante</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                          <span>Motifs personnalisés</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in [animation-delay:400ms]">
                  {[
                    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?q=80&w=2071&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop"
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                    >
                      <Image
                        src={src}
                        alt={`Design Example ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-[#7abbed]/10 p-8 rounded-lg animate-fade-in [animation-delay:600ms]">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#7abbed] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">A</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#7abbed] text-[#7abbed]" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4">
                        "L'équipe de Digital & AI Academy a parfaitement capturé l'essence de
                        notre marque. Le nouveau design nous a permis de nous démarquer sur
                        le marché et d'attirer une clientèle plus large."
                      </p>
                      <p className="font-semibold">Aïcha Traoré</p>
                      <p className="text-sm text-gray-600">Fondatrice, AfricaStyle</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="print" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#353c6b]">Supports Imprimés</h2>
                  <p className="text-gray-600">
                    Nous concevons des supports de communication imprimés qui captivent
                    votre audience et transmettent efficacement votre message.
                  </p>
                  <div className="flex gap-4">
                    <Layout className="w-8 h-8 text-[#7abbed]" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Nos Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Flyers et brochures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Cartes de visite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Affiches publicitaires</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Menus et catalogues</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in [animation-delay:200ms]">
                <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Restaurant Le Gourmet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                      alt="Print Design Case Study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pour Le Gourmet, nous avons créé une gamme complète de supports
                      imprimés, du menu aux cartes de fidélité, en passant par les flyers
                      promotionnels.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Design de menu premium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Cartes de fidélité élégantes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Flyers événementiels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in [animation-delay:400ms]">
                {[
                  "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1512435100311-843b41ede25c?q=80&w=2070&auto=format&fit=crop"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                  >
                    <Image
                      src={src}
                      alt={`Print Design Example ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-[#7abbed]/10 p-8 rounded-lg animate-fade-in [animation-delay:600ms]">
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
                      "Les supports imprimés créés par Digital & AI Academy ont donné une
                      nouvelle dimension à notre image de marque. La qualité du design et
                      l'attention aux détails sont remarquables."
                    </p>
                    <p className="font-semibold">Marie Dupont</p>
                    <p className="text-sm text-gray-600">Propriétaire, Le Gourmet</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packaging" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#353c6b]">Design Packaging</h2>
                  <p className="text-gray-600">
                    Nous créons des packagings innovants qui attirent l'attention et
                    racontent l'histoire de votre marque dès le premier regard.
                  </p>
                  <div className="flex gap-4">
                    <Package className="w-8 h-8 text-[#7abbed]" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Notre Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Emballages produits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Étiquettes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Packaging alimentaire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                      <span>Coffrets cadeaux</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in [animation-delay:200ms]">
                <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Naturel & Bio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop"
                      alt="Packaging Case Study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pour la marque Naturel & Bio, nous avons développé une ligne
                      complète d'emballages écologiques qui reflètent leurs valeurs
                      environnementales.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Matériaux 100% recyclables</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Design minimaliste</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#7abbed]" />
                        <span>Information produit claire</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in [animation-delay:400ms]">
                {[
                  "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2033&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1627384113830-4c8c8a973e2c?q=80&w=2070&auto=format&fit=crop"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                  >
                    <Image
                      src={src}
                      alt={`Packaging Example ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-[#7abbed]/10 p-8 rounded-lg animate-fade-in [animation-delay:600ms]">
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
                      "Le nouveau packaging a complètement transformé la perception de notre
                      marque. Les ventes ont augmenté de 40% depuis son lancement."
                    </p>
                    <p className="font-semibold">Sarah Kouassi</p>
                    <p className="text-sm text-gray-600">Fondatrice, Naturel & Bio</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-[#353c6b] text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à donner vie à votre projet de design ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/design">
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