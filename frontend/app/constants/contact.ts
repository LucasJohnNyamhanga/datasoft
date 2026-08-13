// Single source of truth for DataSoft's phone / WhatsApp contact details.
// Update the number here and it propagates everywhere it's used — nav,
// footer, drawer menu, outbound emails, and the KuaFit legal pages.

export const CONTACT_PHONE_DISPLAY = "+255 767 887 999";
const CONTACT_PHONE_DIGITS = "255767887999";
export const CONTACT_PHONE_HREF = `tel:+${CONTACT_PHONE_DIGITS}`;
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE_DIGITS}`;
