"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Play,
  Video,
  Clapperboard,
  Star,
  ArrowRight
} from 'lucide-react'

export default function VideoPortfolio() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579187707643-35646d22b596?q=80&w=2069&auto=format&fit=crop"
            alt="Video Production Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Production Vidéo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez nos créations vidéo qui captivent et engagent les audiences
          </p>
        </div>
      </div>

      {/* Services Tabs - Updated for better mobile responsiveness */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="spots" className="space-y-12">
          {/* Updated TabsList styling */}
          <div className="sticky top-20 bg-white/80 backdrop-blur-md z-30 py-4">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2">
              <TabsTrigger value="spots" className="data-[state=active]:bg-[#99325a] data-[state=active]:text-white">
                Spots Publicitaires
              </TabsTrigger>
              <TabsTrigger value="corporate" className="data-[state=active]:bg-[#99325a] data-[state=active]:text-white">
                Vidéos Corporate
              </TabsTrigger>
              <TabsTrigger value="motion" className="data-[state=active]:bg-[#99325a] data-[state=active]:text-white">
                Motion Design
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Rest of the content remains the same but with adjusted spacing */}
          <div className="mt-8">
            <TabsContent value="spots" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#353c6b]">Spots Publicitaires</h2>
                  <p className="text-gray-600">
                    Nous créons des spots publicitaires impactants qui racontent votre histoire et
                    marquent les esprits. Notre expertise couvre tous les formats, de la TV aux
                    réseaux sociaux.
                  </p>
                  <div className="flex gap-4">
                    <Play className="w-8 h-8 text-[#99325a]" />
                    <Video className="w-8 h-8 text-[#99325a]" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Nos Réalisations</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/your-video-id"
                      title="Spot Publicitaire Example"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600">
                    Exemple de spot publicitaire réalisé pour notre client dans le secteur de la restauration
                  </p>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : Campagne "Saveurs d'Afrique"</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                      alt="Food Campaign"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pour la marque "Saveurs d'Afrique", nous avons créé une série de spots
                      publicitaires mettant en valeur l'authenticité et la qualité de leurs produits.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>+200% de notoriété de marque</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>+150% de ventes pendant la campagne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>1M+ de vues sur les réseaux sociaux</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#99325a]/10 p-8 rounded-lg">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#99325a] flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">A</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#99325a] text-[#99325a]" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "Les spots publicitaires créés par Digital & AI Academy ont parfaitement
                      capturé l'essence de notre marque. Les résultats ont dépassé nos attentes."
                    </p>
                    <p className="font-semibold">Aminata Diallo</p>
                    <p className="text-sm text-gray-600">Directrice Marketing, Saveurs d'Afrique</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#353c6b]">Vidéos Corporate</h2>
                  <p className="text-gray-600">
                    Nos vidéos corporate racontent l'histoire de votre entreprise de manière
                    authentique et professionnelle. Nous mettons en valeur votre culture, vos
                    valeurs et votre expertise.
                  </p>
                  <div className="flex gap-4">
                    <Clapperboard className="w-8 h-8 text-[#99325a]" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Exemple de Réalisation</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/your-corporate-video"
                      title="Corporate Video Example"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600">
                    Vidéo corporate réalisée pour une entreprise leader dans le secteur technologique
                  </p>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : TechInnovate</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                      alt="Corporate Video"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pour TechInnovate, nous avons créé une vidéo corporate mettant en avant
                      leur culture d'innovation et leur impact sur le marché africain.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>Utilisée dans 5 événements majeurs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>+40% de candidatures spontanées</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>Renforcement de l'image de marque</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#99325a]/10 p-8 rounded-lg">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#99325a] flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">P</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#99325a] text-[#99325a]" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "La vidéo corporate a parfaitement capturé l'essence de notre entreprise.
                      Elle est devenue un outil précieux pour notre communication."
                    </p>
                    <p className="font-semibold">Paul Kamga</p>
                    <p className="text-sm text-gray-600">CEO, TechInnovate</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="motion" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#353c6b]">Motion Design</h2>
                  <p className="text-gray-600">
                    Notre expertise en motion design permet de donner vie à vos idées à travers
                    des animations créatives et impactantes. Parfait pour expliquer des concepts
                    complexes de manière simple et engageante.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Showreel</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/your-motion-reel"
                      title="Motion Design Showreel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600">
                    Aperçu de nos meilleures réalisations en motion design
                  </p>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#353c6b] mb-6">Étude de Cas : FinTech Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      alt="Motion Design Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pour FinTech Solutions, nous avons créé une série d'animations expliquant
                      leurs services financiers de manière simple et engageante.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>+80% de compréhension des services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>Utilisé dans 3 campagnes majeures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#99325a]" />
                        <span>500K+ vues sur les réseaux sociaux</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#99325a]/10 p-8 rounded-lg">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#99325a] flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">F</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#99325a] text-[#99325a]" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "Les animations ont transformé notre façon de communiquer avec nos clients.
                      Le travail de Digital & AI Academy est exceptionnel."
                    </p>
                    <p className="font-semibold">Fatou Sy</p>
                    <p className="text-sm text-gray-600">Directrice Marketing, FinTech Solutions</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-[#353c6b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à donner vie à votre projet vidéo ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/video">
              <Button className="bg-[#99325a] hover:bg-[#7abbed] text-white">
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