function toCase(str) {
  const lower = str.toLowerCase();
  const upper = str.toUpperCase();
  return `${lower}-${upper}`;
}

// window.prompt, window.alert ke liye Cypress stub karega.
// Tum bas function ko export NA karo, browser me export ki zarurat nahi.
