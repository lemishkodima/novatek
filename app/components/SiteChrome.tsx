import Link from 'next/link';
import { nav } from '../content';

export function Header() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="NOVATEK International home"><span className="brand-mark">N</span><span className="brand-name">NOVATEK<small>INTERNATIONAL</small></span></Link><nav className="main-nav" aria-label="Main navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><a className="button button-small button-light" data-analytics="header_email" href="mailto:sergey@novatek-international.com?subject=NOVATEK%20project%20enquiry">Discuss a project <span>↗</span></a><details className="mobile-menu"><summary aria-label="Open menu">☰</summary><nav>{nav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a data-analytics="mobile_email" href="mailto:sergey@novatek-international.com?subject=NOVATEK%20project%20enquiry">Discuss a project ↗</a></nav></details></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div><Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span className="brand-name">NOVATEK<small>INTERNATIONAL</small></span></Link><p>AI · Robotics · Data Solutions</p></div><div className="footer-links">{nav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><a className="button button-outline" data-analytics="footer_email" href="mailto:sergey@novatek-international.com?subject=Let%E2%80%99s%20build%20the%20future">Let’s build what’s next <span>↗</span></a></div><div className="footer-bottom"><span>© NOVATEK International. All rights reserved.</span><a href="https://www.novatek-international.com">www.novatek-international.com</a></div></footer>;
}
