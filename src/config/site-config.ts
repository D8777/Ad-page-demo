export const siteConfig = {
  shopName: 'Seattle Auto Detail and Tint',
  descriptor: 'Seattle Auto Detail & Tint · Demo',
  location: 'Airport Way S, Seattle, WA',
  city: 'Seattle',
  phone: '(206) 555-0123',
  weatherAngle: 'Engineered for Pacific Northwest Rain, Road Grime & Winter Salt',
  trustBadge: 'Certified GTechniq & XPEL Studio · Airport Way S, Seattle',
  priceNote: 'Based on compact/coupe baseline; final investment depends on vehicle size and required paint correction stages.',
  contactReassurance: 'No spam, no robotic sales calls. Marcus texts your exact quote and bay openings in under 8 minutes.',
  tintAddOn: { label: '+ Add Ceramic Window Tint', price: 349 },
  packages: [
    { name: 'GTechniq Ceramic Coating', price: 895, suffix: '+', eyebrow: 'Most Popular Paint Defense', badge: 'Most Popular in Seattle', description: 'A precision-prepped coating system for daily drivers that need durable gloss through every season.', specs: ['Paint decon + iron removal', '1-stage machine polish', '5-year Carfax-registered warranty', 'Ready for pick-up after overnight climate-controlled bay cure'] },
    { name: 'Full Vehicle Ceramic Tint', price: 349, suffix: '+', eyebrow: 'High-Performance Solar Shield', badge: '', description: 'Comfort-forward ceramic film that rejects heat without compromising visibility or a clean factory look.', specs: ['Up to 88% IR heat rejection', '99% UV block', 'Lifetime bubble guarantee', 'Same-day installation'] },
    { name: 'Complete PNW Winter Defense', price: 1195, suffix: '+', eyebrow: 'Complete PNW Seasonal Package', badge: '', description: 'The seasonal bundle for wet roads, winter salt, and the owner who wants one confident handoff.', specs: ['Full ceramic coating system', 'Glass water-repellent seal', 'Wheel-face road salt barrier', 'Ready for pick-up after 2 nights of climate-controlled bay cure'] },
  ],
  faqs: [
    { question: 'How much does ceramic coating cost in Seattle?', answer: 'Ceramic coating in Seattle typically starts at $895 for a professionally prepared vehicle. Final pricing depends on vehicle size, paint condition, correction needs, and the selected warranty duration. Every estimate includes a visual inspection before work begins.' },
    { question: 'Why is ceramic coating necessary for Pacific Northwest winter driving?', answer: 'Ceramic coating helps Seattle vehicles shed rain, road grime, and winter salt more easily. Its hydrophobic surface reduces bonded contamination and simplifies washing, while the cured film adds durable gloss and chemical resistance to properly prepared paint.' },
    { question: 'Can I drive my vehicle in the rain immediately after application?', answer: 'No. Fresh ceramic coatings need a controlled cure before exposure to rain or standing water. Seattle Auto Detail and Tint provides a protected handoff window and clear aftercare instructions, so your vehicle leaves only when the finish is ready for Seattle weather.' },
    { question: 'Do you offer loaner cars or rental options during multi-day cures?', answer: 'Loaner and rental options vary by appointment and package. During the estimate, Seattle Auto Detail and Tint confirms the expected bay time and can recommend a practical mobility plan before your vehicle is checked in for a multi-day protection service.' },
  ],
} as const

export type Package = (typeof siteConfig.packages)[number]
export type FAQ = (typeof siteConfig.faqs)[number]
