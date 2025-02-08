import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Target, Users, Lightbulb, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* About Hero Section */}
      <div className="relative bg-[#353c6b] text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="About Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez l'histoire de Digital & AI Academy et notre mission de transformation digitale
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop"
              alt="Obah Joseph Chanel"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#353c6b]">Notre Fondateur</h2>
            <h3 className="text-xl font-semibold text-[#99325a]">Obah Joseph Chanel</h3>
            <p className="text-gray-600 text-lg">
              Passionné par l'innovation digitale et l'intelligence artificielle, 
              Obah Joseph Chanel a fondé Digital & AI Academy avec une vision claire : 
              démocratiser l'accès aux technologies modernes pour les entreprises camerounaises.
            </p>
            <p className="text-gray-600 text-lg">
              Fort d'une expertise approfondie dans le domaine du digital et de l'IA, 
              il dirige une équipe talentueuse dédiée à la réussite de chaque projet client.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#353c6b] mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7abbed]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#7abbed]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque projet, en proposant des solutions 
                innovantes et sur mesure qui dépassent les attentes de nos clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#99325a]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#99325a]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                Nous croyons en la force du travail d'équipe et de la collaboration étroite 
                avec nos clients pour atteindre les meilleurs résultats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#353c6b]/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#353c6b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                L'innovation est au cœur de notre approche, nous explorons constamment 
                de nouvelles technologies pour offrir les meilleures solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353c6b] mb-8">Notre Vision</h2>
          <p className="text-gray-600 text-lg mb-8">
            Devenir un leader en Afrique centrale dans les services digitaux et la formation 
            en IA, marketing digital, et développement web. Nous aspirons à créer un impact 
            durable en accompagnant les entreprises dans leur transformation digitale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-[#7abbed] hover:bg-[#99325a] text-white">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-[#353c6b] hover:bg-[#7abbed] text-white">
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}