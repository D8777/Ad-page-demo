import { ProtectionEngine } from '@/components/protection-engine'
import { siteConfig } from '@/src/config/site-config'

export default function Page() {
  const faqSchema = siteConfig.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } }))
  return <>
    <ProtectionEngine />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'AutoRepair', name: siteConfig.shopName, telephone: siteConfig.phone, address: { '@type': 'PostalAddress', streetAddress: siteConfig.location, addressLocality: siteConfig.city, addressRegion: 'WA', postalCode: '98134', addressCountry: 'US' }, makesOffer: siteConfig.packages.map((item) => ({ '@type': 'Offer', name: item.name, price: item.price, priceCurrency: 'USD' })) }, { '@type': 'FAQPage', mainEntity: faqSchema }] }) }} />
  </>
}
