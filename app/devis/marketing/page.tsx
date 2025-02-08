"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MonitorSmartphone } from 'lucide-react'
import { submitForm } from '@/lib/submit-form'
import { toast } from 'sonner'

export default function MarketingQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    campaignType: '',
    budget: '',
    objectives: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitForm(formData, 'marketing')
      toast.success('Votre demande de devis a été envoyée avec succès !')
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        campaignType: '',
        budget: '',
        objectives: ''
      })
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du formulaire.')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#353c6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#7abbed]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MonitorSmartphone className="w-8 h-8 text-[#7abbed]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Devis Marketing Digital</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour vos campagnes publicitaires digitales
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
              <h2 className="text-2xl font-bold text-[#353c6b]">Détails de la campagne</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de campagne
                </label>
                <Select 
                  value={formData.campaignType}
                  onValueChange={(value) => setFormData({...formData, campaignType: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de campagne" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Réseaux sociaux</SelectItem>
                    <SelectItem value="google">Google Ads</SelectItem>
                    <SelectItem value="content">Stratégie de contenu</SelectItem>
                    <SelectItem value="complete">Solution complète</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget mensuel estimé (FCFA)
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
                    <SelectItem value="50000">Moins de 50,000</SelectItem>
                    <SelectItem value="100000">50,000 - 100,000</SelectItem>
                    <SelectItem value="200000">100,000 - 200,000</SelectItem>
                    <SelectItem value="500000">200,000 - 500,000</SelectItem>
                    <SelectItem value="1000000">Plus de 500,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Objectifs de la campagne
                </label>
                <Textarea 
                  value={formData.objectives}
                  onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                  placeholder="Décrivez les objectifs que vous souhaitez atteindre avec cette campagne"
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#7abbed] hover:bg-[#99325a] text-white">
              Demander le devis
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}