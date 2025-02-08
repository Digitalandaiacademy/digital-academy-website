"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Globe } from 'lucide-react'
import { submitForm } from '@/lib/submit-form'
import { toast } from 'sonner'

export default function WebQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    projectType: '',
    features: '',
    budget: '',
    timeline: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitForm(formData, 'web')
      toast.success('Votre demande de devis a été envoyée avec succès !')
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        projectType: '',
        features: '',
        budget: '',
        timeline: ''
      })
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du formulaire.')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#353c6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#353c6b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-[#353c6b]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Devis Développement Web</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour votre projet web
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#353c6b]">Informations de contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <Input 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'entreprise
                </label>
                <Input 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#353c6b]">Détails du projet</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de projet
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({...formData, projectType: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Site web vitrine</SelectItem>
                    <SelectItem value="ecommerce">Site e-commerce</SelectItem>
                    <SelectItem value="application">Application web</SelectItem>
                    <SelectItem value="portal">Portail/Intranet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fonctionnalités principales
                </label>
                <Textarea 
                  value={formData.features}
                  onChange={(e) => setFormData({...formData, features: e.target.value})}
                  placeholder="Listez les principales fonctionnalités souhaitées pour votre projet"
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget estimé (FCFA)
                </label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({...formData, budget: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500000">Moins de 500,000</SelectItem>
                    <SelectItem value="1000000">500,000 - 1,000,000</SelectItem>
                    <SelectItem value="2000000">1,000,000 - 2,000,000</SelectItem>
                    <SelectItem value="5000000">2,000,000 - 5,000,000</SelectItem>
                    <SelectItem value="more">Plus de 5,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Délai souhaité
                </label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({...formData, timeline: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le délai souhaité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">1 mois</SelectItem>
                    <SelectItem value="2months">2 mois</SelectItem>
                    <SelectItem value="3months">3 mois</SelectItem>
                    <SelectItem value="6months">6 mois</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#353c6b] hover:bg-[#7abbed] text-white">
              Demander le devis
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}