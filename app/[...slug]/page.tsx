import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages } from '../content';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug[0]];
  if (!page) return {};
  return { title: `${page.label} | NOVATEK International`, description: page.intro };
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = pages[slug[0]];
  if (!page || slug.length !== 1) notFound();
  const image = page.image;
  return <main>
    <section className={`page-hero ${image ? 'page-hero-image' : ''}`} style={image ? { backgroundImage: `linear-gradient(90deg,rgba(5,14,24,.92),rgba(5,14,24,.67) 51%,rgba(5,14,24,.18)),url(${image})` } : undefined}><div className="wrap page-hero-content"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="page-intro">{page.intro}</p><Link className="button button-primary" href="/contact">Discuss your project <span>↗</span></Link></div><span className="page-hero-index">NOVATEK / {page.label.toUpperCase()}</span></section>
    <section className="section section-paper detail-section"><div className="wrap"><div className="detail-top"><p className="eyebrow eyebrow-dark">CAPABILITIES</p><p className="detail-aside">Technology, engineering and business expertise — brought together around your goals.</p></div><div className="detail-grid">{page.sections.map((section, i) => <article className="detail-card" key={section.title}><div className="detail-number">0{i + 1}</div><h2>{section.title}</h2>{section.body && <p>{section.body}</p>}{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</article>)}</div></div></section>
    <section className="contact-band"><div className="wrap contact-row"><div><p className="eyebrow">NEXT STEP</p><h2>Let’s make progress practical.</h2><p>Start a conversation about your business and where technology can help.</p></div><a className="button button-light" href={`mailto:sergey@novatek-international.com?subject=${encodeURIComponent(`NOVATEK ${page.label} enquiry`)}`}>Email our team <span>↗</span></a></div></section>
  </main>;
}
