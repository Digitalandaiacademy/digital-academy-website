"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Palette } from 'lucide-react'
import { submitForm } from '@/lib/submit-form'
import { toast } from 'sonner'

export default function DesignQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    location: '',
    designType: '',
    designPurpose: '',
    brandColors: '',
    existingBranding: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitForm(formData, 'design')
      toast.success('Votre demande de devis a été envoyée avec succès !')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        location: '',
        designType: '',
        designPurpose: '',
        brandColors: '',
        existingBranding: ''
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
            <Palette className="w-8 h-8 text-[#7abbed]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Devis Création Visuelle</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour vos projets de design graphique
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+237 6XX XXX XXX"
                    required
                  />
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localisation de l'entreprise
                </label>
                <Input 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Ex: Douala, Quartier"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#353c6b]">Détails du projet</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de design
                </label>
                <Select
                  value={formData.designType}
                  onValueChange={(value) => setFormData({...formData, designType: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de design" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logo">Logo</SelectItem>
                    <SelectItem value="flyer">Flyer</SelectItem>
                    <SelectItem value="brochure">Brochure</SelectItem>
                    <SelectItem value="carte">Carte de visite</SelectItem>
                    <SelectItem value="affiche">Affiche</SelectItem>
                    <SelectItem value="menu">Menu</SelectItem>
                    <SelectItem value="packaging">Packaging</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Objectif du design
                </label>
                <Textarea 
                  value={formData.designPurpose}
                  onChange={(e) => setFormData({...formData, designPurpose: e.target.value})}
                  placeholder="Décrivez l'objectif de votre projet de design (ex: lancement de marque, événement spécial...)"
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Couleurs souhaitées
                </label>
                <Input 
                  value={formData.brandColors}
                  onChange={(e) => setFormData({...formData, brandColors: e.target.value})}
                  placeholder="Ex: bleu, rouge, or..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Éléments de marque existants
                </label>
                <Textarea 
                  value={formData.existingBranding}
                  onChange={(e) => setFormData({...formData, existingBranding: e.target.value})}
                  placeholder="Décrivez les éléments de marque que vous avez déjà (logo, charte graphique...)"
                  className="min-h-[100px]"
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