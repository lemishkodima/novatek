import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '../content';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug[0]];
  if (!page) return {};
  return {
    title: `${page.label} | NOVATEK International`,
    description: page.intro,
    openGraph: { title: `${page.label} | NOVATEK International`, description: page.intro, images: page.image ? [page.image] : ['/images/hero-robotics.webp'] },
  };
}

function ContactAction() {
  return <section className="section section-paper contact-action"><div className="wrap contact-action-grid">
    <div data-reveal><p className="eyebrow eyebrow-dark">YOUR CONTACT</p><h2>Sergey Sergov</h2><p className="contact-role">Founder & CEO</p><p className="body-copy">Share the process you want to automate, the operational challenge you are facing and the outcome you want to achieve. We can begin with an assessment, a focused pilot or a partnership discussion.</p></div>
    <div className="contact-options" data-reveal><a data-analytics="contact_email" href="mailto:sergey@novatek-international.com?subject=NOVATEK%20project%20enquiry"><span>Founder</span><strong>sergey@novatek-international.com</strong><i>↗</i></a><a data-analytics="contact_info_email" href="mailto:info@novatek-international.com"><span>General</span><strong>info@novatek-international.com</strong><i>↗</i></a><a data-analytics="contact_partnerships_email" href="mailto:partnerships@novatek-international.com"><span>Partners</span><strong>partnerships@novatek-international.com</strong><i>↗</i></a><a data-analytics="contact_robotics_email" href="mailto:robotics@novatek-international.com"><span>Robotics</span><strong>robotics@novatek-international.com</strong><i>↗</i></a><a data-analytics="contact_phone" href="tel:+380968868184"><span>Phone</span><strong>+380 96 886 81 84</strong><i>↗</i></a><a href="https://international-novatek.com"><span>Website</span><strong>international-novatek.com</strong><i>↗</i></a></div>
    <div className="contact-brief" data-reveal><h3>What to include in your email</h3><ol><li>Your company and operating market</li><li>The process, site or product you want to improve</li><li>The current constraint or business objective</li><li>Your preferred next step: assessment, pilot or partnership</li></ol><a className="button button-dark" data-analytics="contact_start_email" href="mailto:sergey@novatek-international.com?subject=NOVATEK%20project%20enquiry&body=Company%3A%0AOperating%20market%3A%0AProcess%20or%20project%3A%0ACurrent%20challenge%3A%0APreferred%20next%20step%3A">Start an email <span>↗</span></a></div>
  </div></section>;
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = pages[slug[0]];
  if (!page || slug.length !== 1) notFound();
  const isContact = slug[0] === 'contact';
  const isIndustries = slug[0] === 'industries';
  const isKidsProduct = slug[0] === 'kids-ai-companion';
  const usesKidsProductVisual = page.image === '/images/kids-ai-companion.png';
  const heroHref = isContact ? 'mailto:sergey@novatek-international.com?subject=NOVATEK%20project%20enquiry' : isKidsProduct ? 'mailto:robotics@novatek-international.com?subject=NOVATEK%20Kids%20AI%20Companion%20waitlist' : '/contact';
  const heroLabel = isContact ? 'Email Sergey' : isKidsProduct ? 'Join the waitlist' : 'Discuss your project';

  return <main>
    <section className={`page-hero ${page.image ? 'page-hero-image' : ''} ${usesKidsProductVisual ? 'kids-product-hero' : ''}`} style={page.image ? { backgroundImage: `linear-gradient(90deg,rgba(5,14,24,.94),rgba(5,14,24,.7) 51%,rgba(5,14,24,.2)),url(${page.image})` } : undefined}><div className="wrap page-hero-content"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="page-intro">{page.intro}</p><a className="button button-primary" data-analytics={`${slug[0]}_hero_cta`} href={heroHref}>{heroLabel} <span>↗</span></a>{isKidsProduct && <a className="button button-outline page-hero-secondary" data-analytics="kids_partner" href="mailto:partnerships@novatek-international.com?subject=NOVATEK%20Kids%20AI%20Companion%20partnership">Partner with us <span>↗</span></a>}</div><span className="page-hero-index">NOVATEK / {page.label.toUpperCase()}</span></section>

    {isContact ? <ContactAction /> : <>
      {page.journey && <section className="journey-section section-paper"><div className="wrap"><div className="journey-heading" data-reveal><p className="eyebrow eyebrow-dark">FROM CHALLENGE TO SCALE</p><h2>A practical implementation path.</h2></div><div className="journey-grid"><article data-reveal><span>01</span><h3>Business problem</h3><p>{page.journey.problem}</p></article><article data-reveal><span>02</span><h3>What we deliver</h3><p>{page.journey.deliverable}</p></article><article data-reveal><span>03</span><h3>How the pilot works</h3><p>{page.journey.pilot}</p></article><article data-reveal><span>04</span><h3>Integration and scale</h3><p>{page.journey.integration}</p></article></div></div></section>}

      <section className="section section-paper detail-section"><div className="wrap"><div className="detail-top" data-reveal><p className="eyebrow eyebrow-dark">{isIndustries ? 'INDUSTRY APPLICATIONS' : 'CAPABILITIES'}</p><p className="detail-aside">Technology, engineering and business expertise brought together around your operational goals.</p></div><div className={`detail-grid ${isIndustries ? 'industry-detail-grid' : ''}`}>{page.sections.map((section, i) => <article id={section.id} className="detail-card" data-reveal key={section.title}>{section.image && <div className="detail-card-image" role="img" aria-label={`${section.title} technology application`} style={{ backgroundImage: `url(${section.image})` }}/>}<div className="detail-number">0{i + 1}</div><h2>{section.title}</h2>{section.challenge && <p className="industry-challenge"><strong>Challenge:</strong> {section.challenge}</p>}{section.body && <p>{section.body}</p>}{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}{section.ctaLabel && section.ctaHref && <a className="text-link industry-cta" data-analytics={`section_${i + 1}`} href={section.ctaHref}>{section.ctaLabel} <span>↗</span></a>}{section.nextStep && <a className="text-link industry-cta" data-analytics={`industry_${section.id}`} href={`mailto:sergey@novatek-international.com?subject=${encodeURIComponent(`NOVATEK ${section.title} enquiry`)}`}>{section.nextStep} <span>↗</span></a>}</article>)}</div></div></section>

      <section className="contact-band"><div className="wrap contact-row"><div data-reveal><p className="eyebrow">NEXT STEP</p><h2>Start with one operational challenge.</h2><p>Share the process, current constraint and outcome you want to achieve.</p></div><a className="button button-light" data-analytics={`${slug[0]}_email`} href={`mailto:sergey@novatek-international.com?subject=${encodeURIComponent(`NOVATEK ${page.label} enquiry`)}`}>Email our team <span>↗</span></a></div></section>
    </>}
  </main>;
}
