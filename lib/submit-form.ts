import { FormData } from '@/types/form';

export async function submitForm(formData: FormData, formType: 'marketing' | 'video' | 'web') {
  // L'URL de votre Google Apps Script Web App
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  
  if (!SCRIPT_URL) {
    throw new Error('Google Script URL not configured');
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Ajout du mode no-cors pour éviter les erreurs CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    // Avec mode: 'no-cors', la réponse sera toujours de type 'opaque'
    // Nous ne pouvons pas vérifier le statut ou lire le contenu
    // Nous supposons donc que la requête a réussi si elle n'a pas généré d'erreur
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}