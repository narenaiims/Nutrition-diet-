
"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTOR_INFO } from '../lib/constants';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer id="contact" role="contentinfo" className="bg-white border-t border-slate-200 pt-16 pb-24 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" aria-hidden="true">NR</div>
              <h3 className="font-bold text-lg">{DOCTOR_INFO.name}</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 opacity-80">
              Helping patients recover through science-backed nutrition and dedicated oncology supportive care.
            </p>
            <div className="flex gap-4">
              <a href={DOCTOR_INFO.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href={DOCTOR_INFO.maps} target="_blank" rel="noreferrer" aria-label="Maps" className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </a>
            </div>
          </div>
          
          <nav aria-labelledby="footer-location">
            <h4 id="footer-location" className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">{t.footer.locationLabel}</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {DOCTOR_INFO.clinic}
            </p>
            <p className="text-blue-600 font-bold text-sm">{t.common.timing}</p>
            <p className="text-slate-400 text-[10px] mt-2 italic">*Calls strictly during appointment hours</p>
          </nav>

          <nav aria-labelledby="footer-links">
            <h4 id="footer-links" className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Care Links</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href={DOCTOR_INFO.website} className="hover:text-blue-600 transition-colors">Official Website</a></li>
              <li><a href={`tel:${DOCTOR_INFO.phone}`} className="hover:text-blue-600 transition-colors">Emergency Contact (Secretary)</a></li>
              <li><Link href="/#explore" className="hover:text-blue-600 transition-colors">Supportive Care Library</Link></li>
              <li><a href={DOCTOR_INFO.social.youtube} className="hover:text-blue-600 transition-colors">Patient Awareness Videos</a></li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] text-slate-400 font-medium tracking-wide">
            © {new Date().getFullYear()} {DOCTOR_INFO.name}. {t.footer.rights}.
          </p>
          <nav className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-400" aria-label="Legal navigation">
            <Link href="/" className="hover:text-blue-600 transition-colors">{t.footer.privacy}</Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">{t.footer.terms}</Link>
          </nav>
        </div>
      </div>

      <div className="md:hidden fixed bottom-6 right-6 z-[100]">
        <a 
          href={DOCTOR_INFO.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Support"
          className="bg-green-600 text-white w-16 h-16 rounded-full shadow-[0_15px_35px_rgba(22,163,74,0.3)] flex items-center justify-center transition-all active:scale-95"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
