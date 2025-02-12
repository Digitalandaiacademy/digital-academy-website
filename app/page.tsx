import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  MonitorSmartphone, 
  Video, 
  Globe,
  ChevronRight,
  ArrowRight,
  Palette
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
            alt="Digital Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#353c6b]/90 to-[#99325a]/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transformez votre entreprise avec nos solutions digitales sur mesure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expertise en marketing digital, création de contenu et développement web
          </p>
          <Link href="/services">
            <Button size="lg" className="bg-[#7abbed] hover:bg-[#99325a] text-white">
              Découvrez nos services
              <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#353c6b]">
            Nos Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7abbed]/10 rounded-full flex items-center justify-center mb-6">
                <MonitorSmartphone className="w-8 h-8 text-[#7abbed]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Campagnes Publicitaires</h3>
              <p className="text-gray-600 mb-6">
                Stratégies marketing personnalisées pour maximiser votre visibilité en ligne.
              </p>
              <Link href="/services#marketing" className="text-[#7abbed] hover:text-[#99325a] flex items-center">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#99325a]/10 rounded-full flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-[#99325a]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Création de Spots</h3>
              <p className="text-gray-600 mb-6">
                Production vidéo professionnelle pour captiver votre audience.
              </p>
              <Link href="/services#video" className="text-[#7abbed] hover:text-[#99325a] flex items-center">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#353c6b]/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-[#353c6b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
              <p className="text-gray-600 mb-6">
                Sites web modernes et applications sur mesure pour votre entreprise.
              </p>
              <Link href="/services#web" className="text-[#7abbed] hover:text-[#99325a] flex items-center">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7abbed]/10 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-[#7abbed]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design Graphique</h3>
              <p className="text-gray-600 mb-6">
                Créations visuelles uniques pour donner vie à votre identité de marque.
              </p>
              <Link href="/services#design" className="text-[#7abbed] hover:text-[#99325a] flex items-center">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#353c6b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#7abbed] hover:bg-[#99325a] text-white">
              Contactez-nous dès aujourd'hui
              <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}