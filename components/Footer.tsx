import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
           <div>
             <div className="mb-6 flex items-center gap-3">
               <span className="text-2xl font-bold text-white">Dreamwish</span>
             </div>
             <p className="mb-6 max-w-sm">
                소상공인과 함께 성장하는 라이브 커머스 플랫폼.<br/>
                지역 상권을 살리고 새로운 판로를 개척합니다.
             </p>
           </div>
           <div className="flex flex-col gap-4 md:items-end justify-center">
              <div className="flex items-center gap-2">
                 <Phone size={18} />
                 <span>Contact. 010-9110-8716</span>
              </div>
              <div className="flex items-center gap-2">
                 <Mail size={18} />
                 <a href="mailto:support@dreamwish.co.kr" className="hover:text-white transition-colors">support@dreamwish.co.kr</a>
              </div>
           </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
           <p>© 2025 Dreamwish. All rights reserved.</p>
           <div className="flex gap-6">
              <button onClick={onOpenTerms} className="hover:text-white transition-colors">이용약관</button>
              <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">개인정보처리방침</button>
           </div>
        </div>
      </div>
    </footer>
  );
};