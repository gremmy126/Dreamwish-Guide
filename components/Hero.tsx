import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { LINKS, SECTION_IDS } from '../constants';
import { Store } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToService = () => {
    document.getElementById(SECTION_IDS.SERVICE_INTRO)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-dream-blue overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 mx-auto">
              <Store size={16} className="text-yellow-300" />
              <span className="text-sm font-medium tracking-wide text-white">소상공인을 위한 필수 플랫폼</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
              DREAM<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">WISH</span>
            </h1>

            {/* Event Banner */}
            <div className="mb-8 bg-blue-600/40 border border-blue-400/30 rounded-xl p-4 max-w-xl mx-auto backdrop-blur-md shadow-lg">
                <div className="flex flex-col items-center gap-1">
                    <p className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        🎉 지금 입점 신청 시 <span className="text-yellow-300 border-b-2 border-yellow-300">1개월 무료</span> 이벤트!
                    </p>
                    <p className="text-xs md:text-sm text-blue-200/80">
                        * 단, 판매 발생 시 거래 수수료는 별도로 부과됩니다.
                    </p>
                </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              누구나 쉽고 자유롭게 광고할 수 있는 세상.<br/>
              <strong className="font-bold text-white">복잡한 기술 없이</strong> 라이브 커머스를 시작하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button href={LINKS.KAKAO_ENTRY} variant="white" className="shadow-xl min-w-[180px]">
                1개월 무료 신청하기
              </Button>
              <Button 
                onClick={scrollToService} 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-dream-blue min-w-[180px]"
              >
                서비스 소개서 보기
              </Button>
            </div>

            {/* Stats Bar - Updated to be single line (no br) per request */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-blue-200 border-t border-white/10 pt-8 w-full max-w-4xl mx-auto">
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-yellow-300">Free</span>
                  <span className="text-sm text-white">첫 달 이용료 무료</span>
               </div>
               
               <div className="hidden md:block h-6 w-px bg-white/20"></div>
               
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">100%</span>
                  <span className="text-sm text-white">매출 직접 연결</span>
               </div>
               
               <div className="hidden md:block h-6 w-px bg-white/20"></div>
               
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">Easy</span>
                  <span className="text-sm text-white">간편한 관리</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};