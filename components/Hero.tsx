import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { LINKS, SECTION_IDS } from '../constants';
import { Store } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  const scrollToService = () => {
    document.getElementById(SECTION_IDS.SERVICE_INTRO)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-dream-blue overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-20 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Store size={16} className="text-yellow-300" />
              <span className="text-sm font-medium tracking-wide text-white">소상공인을 위한 필수 플랫폼</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              DREAM<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">WISH</span>
            </h1>

            {/* Event Banner */}
            <div className="mb-8 bg-blue-600/40 border border-blue-400/30 rounded-xl p-4 max-w-xl mx-auto lg:mx-0 backdrop-blur-md shadow-lg text-left">
                <div className="flex flex-col gap-1">
                    <p className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        🎉 지금 입점 신청 시 <span className="text-yellow-300 border-b-2 border-yellow-300">1개월 무료</span>
                    </p>
                    <p className="text-xs md:text-sm text-blue-200/80">
                        * 단, 판매 발생 시 거래 수수료는 별도로 부과됩니다.
                    </p>
                </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-10 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              누구나 쉽고 자유롭게 광고할 수 있는 세상.<br/>
              <strong className="font-bold text-white">복잡한 기술 없이</strong> 라이브 커머스를 시작하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
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

            {/* Stats Bar */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10 text-blue-200 border-t border-white/10 pt-8 w-full max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-yellow-300">Free</span>
                  <span className="text-sm text-white whitespace-nowrap">첫 달 이용료 무료</span>
               </div>
               
               <div className="hidden md:block h-6 w-px bg-white/20"></div>
               
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">100%</span>
                  <span className="text-sm text-white whitespace-nowrap">모든 수익 내 통장으로</span>
               </div>
               
               <div className="hidden md:block h-6 w-px bg-white/20"></div>
               
               <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">Easy</span>
                  <span className="text-sm text-white whitespace-nowrap">쉬운 스토어 관리</span>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Phone Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end relative items-center min-h-[600px] lg:min-h-[700px] w-full"
          >
             {/* Glowing effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-10"></div>
             
             {/* Phones Container - 3 Phones in a Fan shape */}
             <div className="relative w-full h-[600px] flex items-center justify-center">
                
                {/* 1. Home Screen (Left) */}
                <div className="absolute top-10 left-0 lg:-left-4 z-10 transform -rotate-[15deg] scale-[0.65] lg:scale-[0.7] origin-bottom-right shadow-2xl rounded-[3rem] transition-transform hover:z-40 hover:scale-[0.75] hover:rotate-0 duration-500">
                    <PhoneMockup type="home" className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                </div>
                
                {/* 2. Select Screen (Center) */}
                <div className="absolute top-0 z-20 transform scale-[0.65] lg:scale-[0.7] shadow-2xl rounded-[3rem] transition-transform hover:z-40 hover:scale-[0.75] duration-500">
                    <PhoneMockup type="select" className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                </div>

                {/* 3. Profile Screen (Right) */}
                <div className="absolute top-10 right-0 lg:-right-4 z-10 transform rotate-[15deg] scale-[0.65] lg:scale-[0.7] origin-bottom-left shadow-2xl rounded-[3rem] transition-transform hover:z-40 hover:scale-[0.75] hover:rotate-0 duration-500">
                    <PhoneMockup type="profile" className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};