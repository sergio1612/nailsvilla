export const WHATSAPP_NUMBER = "919429031140"

export const DEFAULT_BOOKING_MESSAGE = `Hello NailsVilla by Rutika! I'd like to book a nail appointment in Ahmedabad.

Service:
Reference photo:
Preferred date:
Area:
Appointment preference: Home studio / Home visit`

export function buildWhatsAppUrl(message: string = DEFAULT_BOOKING_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppUrlWithPhone(phoneNumber: string) {
  const message = `${DEFAULT_BOOKING_MESSAGE}

My WhatsApp number: ${phoneNumber}`

  return buildWhatsAppUrl(message)
}
