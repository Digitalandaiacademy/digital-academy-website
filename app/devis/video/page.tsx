"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Video } from 'lucide-react'
import { submitForm } from '@/lib/submit-form'
import { toast } from 'sonner'

export default function VideoQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    videoType: '',
    duration: '',
    description: '',
    deliveryDate: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitForm(formData, 'video')
      toast.success('Votre demande de devis a été envoyée avec succès !')
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        videoType: '',
        duration: '',
        description: '',
        deliveryDate: ''
      })
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du formulaire.')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#353c6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#99325a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="w-8 h-8 text-[#99325a]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Devis Production Vidéo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour votre projet de production vidéo
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
                  Type de vidéo
                </label>
                <Select
                  value={formData.videoType}
                  onValueChange={(value) => setFormData({...formData, videoType: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de vidéo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spot">Spot publicitaire</SelectItem>
                    <SelectItem value="corporate">Vidéo corporate</SelectItem>
                    <SelectItem value="motion">Motion design</SelectItem>
                    <SelectItem value="event">Captation d'événement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durée estimée
                </label>
                <Select
                  value={formData.duration}
                  onValueChange={(value) => setFormData({...formData, duration: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez la durée" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 secondes</SelectItem>
                    <SelectItem value="30">30 secondes</SelectItem>
                    <SelectItem value="60">1 minute</SelectItem>
                    <SelectItem value="120">2 minutes</SelectItem>
                    <SelectItem value="180">3 minutes ou plus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description du projet
                </label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Décrivez votre projet vidéo (concept, message clé, style souhaité...)"
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date souhaitée de livraison
                </label>
                <Input 
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#99325a] hover:bg-[#7abbed] text-white">
              Demander le devis
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}