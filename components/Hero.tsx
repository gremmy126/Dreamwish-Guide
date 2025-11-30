
import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeScreen, ProfileScreen, MakeScreen } from './MobileScreens';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-blue-600 overflow-hidden flex items-center pt-24 pb-12">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-300 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-white space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-50 text-sm font-medium">
            <span>🎉</span> 소상공인을 위한 라이브커머스
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            DREAM
            <br />
            <span className="text-blue-200">WISH</span>
          </h1>
          
          <p className="text-blue-100 text-lg md:text-xl max-w-md leading-relaxed">
            누구나 쉽고 자유롭게 광고를 할 수 있는 세상.<br />
            드림위시가 소상공인 여러분의 꿈을 응원합니다.
          </p>

          {/* Contact Number in Hero */}
          <div className="flex items-center gap-2 text-blue-200 font-medium bg-blue-800/30 px-4 py-2 rounded-lg border border-blue-500/30">
            <Phone size={18} />
            <span>입점/제휴 문의: 010-9110-8716</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full md:w-auto">
            <a 
              href="http://pf.kakao.com/_CLran"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
            >
              라이브 시작하기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/service-intro"
              className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={20} />
              서비스 소개서 보기
            </Link>
          </div>
        </div>

        {/* Visual Content (Phones) */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0 h-[400px] md:h-[600px] w-full perspective-1000">
            {/* Container for Phones - using strict dimensions to ensure alignment */}
            <div className="relative w-[300px] md:w-[400px] h-full flex items-center justify-center">
                 
                 {/* Phone 1 (Left - Tilted - Profile) */}
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-20 w-[140px] md:w-[180px] aspect-[9/19] bg-slate-900 rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform -rotate-12 hover:rotate-0 hover:z-30 transition-all duration-500 z-10 overflow-hidden">
                    <ProfileScreen />
                 </div>
                 
                 {/* Phone 2 (Right - Tilted - Make) */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-20 w-[140px] md:w-[180px] aspect-[9/19] bg-slate-900 rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform rotate-12 hover:rotate-0 hover:z-30 transition-all duration-500 z-10 overflow-hidden">
                    <MakeScreen />
                 </div>

                 {/* Phone 3 (Center - Main - Home) */}
                 <div className="absolute z-20 w-[180px] md:w-[220px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden bg-white">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-slate-900 rounded-b-xl z-50 pointer-events-none"></div>
                    <HomeScreen />
                 </div>
                 
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
