
import React from 'react';
import { Heart, Timer, BarChart3, Dumbbell, Carrot } from 'lucide-react';
import { HomeScreen } from './MobileScreens';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Vision & Mission</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                누구나 쉽고 자유롭게<br />
                광고를 할 수 있도록<br />
                돕는 것,<br />
                <span className="text-blue-600">그것이 우리의 목표입니다.</span>
              </h3>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed border-l-4 border-blue-100 pl-6">
              <p>
                드림위시는 소상공인을 위해 만들어진 비즈니스 광고 플랫폼입니다.
                복잡한 기술 없이 사진, 영상, 라이브방송을 올리면 누구나 바로
                광고를 시작할 수 있고, 고객은 매력적인 상품을 발견할 것입니다.
              </p>
              <p>
                우리는 상권붕괴 문제를 해결하기 위해 '소상공인이 자유롭게 판매하고
                광고 하는 세상을 만든다'와 같은 구조로, 최종적으로 마을 전체의
                문제를 해결하는 기업이 될 것 입니다.
              </p>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative bg-blue-50 rounded-3xl p-10 md:p-16 flex items-center justify-center">
            {/* Phone Mockup */}
            <div className="relative z-10 bg-white rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden max-w-[280px] w-full aspect-[9/19] bg-slate-900">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-50 pointer-events-none"></div>
               <HomeScreen />
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
              <Heart className="text-red-500" size={32} />
            </div>
            <div className="absolute bottom-20 left-8 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[4000ms]">
               <BarChart3 className="text-blue-500" size={32} />
            </div>
            <div className="absolute top-20 right-8 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[3500ms]">
               <Dumbbell className="text-purple-500" size={32} />
            </div>
            <div className="absolute bottom-10 right-12 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[4500ms]">
               <Carrot className="text-orange-500" size={32} />
            </div>
            <div className="absolute top-1/2 left-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[5000ms]">
               <Timer className="text-cyan-500" size={32} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;
