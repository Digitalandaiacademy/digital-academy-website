import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MonitorSmartphone, Video, Globe, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Services Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des solutions digitales innovantes pour propulser votre entreprise vers le succès
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Marketing Digital */}
        <div id="marketing" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#7abbed]/10 rounded-full flex items-center justify-center">
                <MonitorSmartphone className="w-8 h-8 text-[#7abbed]" />
              </div>
              <h2 className="text-3xl font-bold text-[#353c6b]">Campagnes Publicitaires</h2>
              <p className="text-gray-600 text-lg">
                Maximisez votre visibilité en ligne avec nos stratégies marketing personnalisées. 
                Nous créons des campagnes publicitaires ciblées qui génèrent des résultats mesurables.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#7abbed]" />
                  <span>Publicité sur les réseaux sociaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#7abbed]" />
                  <span>Google Ads et SEA</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#7abbed]" />
                  <span>Stratégie de contenu digital</span>
                </li>
              </ul>
              <Link href="/devis/marketing">
                <Button className="bg-[#7abbed] hover:bg-[#99325a] text-white">
                  Demander un devis
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Marketing Digital"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Création de Spots */}
        <div id="video" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                alt="Production Vidéo"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-16 h-16 bg-[#99325a]/10 rounded-full flex items-center justify-center">
                <Video className="w-8 h-8 text-[#99325a]" />
              </div>
              <h2 className="text-3xl font-bold text-[#353c6b]">Création de Spots</h2>
              <p className="text-gray-600 text-lg">
                Des productions vidéo professionnelles qui captivent votre audience. 
                Nous créons des contenus visuels impactants pour tous vos besoins.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#99325a]" />
                  <span>Spots publicitaires</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#99325a]" />
                  <span>Vidéos corporate</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#99325a]" />
                  <span>Motion design</span>
                </li>
              </ul>
              <Link href="/devis/video">
                <Button className="bg-[#99325a] hover:bg-[#7abbed] text-white">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Développement Web */}
        <div id="web">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#353c6b]/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#353c6b]" />
              </div>
              <h2 className="text-3xl font-bold text-[#353c6b]">Développement Web</h2>
              <p className="text-gray-600 text-lg">
                Des solutions web sur mesure pour votre entreprise. 
                Nous développons des sites et applications performants et sécurisés.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#353c6b]" />
                  <span>Sites web responsifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#353c6b]" />
                  <span>Applications web</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#353c6b]" />
                  <span>E-commerce</span>
                </li>
              </ul>
              <Link href="/devis/web">
                <Button className="bg-[#353c6b] hover:bg-[#7abbed] text-white">
                  Demander un devis
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Développement Web"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#353c6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Link href="/contact">
            <Button className="bg-[#7abbed] hover:bg-[#99325a] text-white">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}