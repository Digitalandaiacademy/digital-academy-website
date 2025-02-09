import emailjs from '@emailjs/browser';
import { FormData } from '@/types/form';

// Configuration des IDs de template selon le type de formulaire
const TEMPLATE_IDS = {
  marketing: 'template_rczdmef',
  video: 'template_48zva6l',
  web: 'template_48zva6l'
};

export async function submitForm(formData: FormData, formType: 'marketing' | 'video' | 'web') {
  try {
    // Préparer le template des données
    const templateParams = {
      ...formData, // Mettre formData en premier
      form_type: formType,
      submission_date: new Date().toLocaleString(),
    };

    // Sélectionner le bon template ID selon le type de formulaire
    const templateId = TEMPLATE_IDS[formType];

    // Envoyer l'email
    const response = await emailjs.send(
      'service_9hh0axb',
      templateId,
      templateParams,
      'BcMsuRmtaR-65sZpO'
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Échec de l\'envoi du formulaire');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    throw error;
  }
}
