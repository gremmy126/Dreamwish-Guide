
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, ChevronLeft, ChevronRight, Store, ShoppingBag, MonitorPlay, 
  BarChart3, MousePointer2, Heart, Share2, MessageCircle,
  Search, Bell, Menu, Mic2, Plus, User,
  Beef, Fish, Carrot, Leaf, Utensils, Soup, MapPin, Croissant, CupSoda, Apple
} from 'lucide-react';
import { HomeScreen, ProfileScreen, MakeScreen, OrderScreen } from '../components/MobileScreens';

const slides = [
  // Slide 1: Cover / Intro with 3 Phones
  {
    id: 1,
    render: () => (
      <div className="h-full w-full flex flex-col justify-center items-center bg-blue-600 text-white relative overflow-hidden p-8">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl w-full h-full flex flex-col">
          {/* Title Section */}
          <div className="flex-shrink-0 mt-8 md:mt-12 mb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              DREAMWISH
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-100 leading-tight">
              로컬 비즈니스 성장을 위한<br/>
              <span className="text-white">인프라 설계를 목표로</span>
            </h2>
          </div>

          {/* 3 Phones Visual */}
          <div className="flex-1 relative flex justify-center items-end pb-8 md:pb-0">
             <div className="relative w-full max-w-[800px] h-[300px] md:h-[450px] flex justify-center items-end perspective-1000">
                 
                 {/* Phone 1 (Left) - Profile */}
                 <div className="absolute left-1/2 -translate-x-[140px] md:-translate-x-[220px] bottom-10 md:bottom-20 w-[120px] md:w-[180px] aspect-[9/19] bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform -rotate-6 z-10 overflow-hidden bg-white">
                    <ProfileScreen />
                 </div>

                 {/* Phone 2 (Right) - Make */}
                 <div className="absolute left-1/2 translate-x-[20px] md:translate-x-[40px] bottom-10 md:bottom-20 w-[120px] md:w-[180px] aspect-[9/19] bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform rotate-6 z-10 overflow-hidden bg-white">
                    <MakeScreen />
                 </div>

                 {/* Phone Main (Center) - Home */}
                 <div className="absolute left-1/2 -translate-x-[60px] md:-translate-x-[90px] bottom-0 z-20 w-[140px] md:w-[200px] aspect-[9/19] bg-slate-900 rounded-[1.8rem] md:rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-slate-900 rounded-b-lg z-50 pointer-events-none"></div>
                    <HomeScreen />
                 </div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 2: Easy and Fast
  {
    id: 2,
    render: () => (
      <div className="h-full w-full flex flex-col items-center justify-center bg-white p-8 md:p-16">
        <div className="max-w-6xl w-full h-full flex flex-col">
           <div className="mb-8 flex-shrink-0">
             <h3 className="text-blue-600 font-bold tracking-wider mb-2">01. EASY & FAST</h3>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900">
               쉽고 빠르게<br/>
               <span className="text-slate-400 text-3xl block mt-2 font-bold">개인사업자를 위한 라이브 커머스</span>
             </h2>
           </div>
           
           <div className="flex-1 relative flex items-center justify-center min-h-0">
              {/* Mockup Area */}
              <div className="relative h-[80%] md:h-[90%] aspect-[9/19] bg-white rounded-[2rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col select-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-50"></div>
                  <HomeScreen />
              </div>

              {/* Feature Points */}
              <div className="absolute top-[20%] left-4 md:left-[20%] bg-white p-3 md:p-4 rounded-xl shadow-lg border border-slate-100 max-w-[180px] hidden md:block animate-bounce duration-[3000ms]">
                 <div className="text-blue-600 font-bold mb-1">식품 · 패션 · 미용</div>
                 <div className="text-xs text-slate-500">트렌드따라 업종 분류</div>
                 <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-t border-r border-slate-100 rotate-45"></div>
              </div>
              
              <div className="absolute bottom-[30%] right-4 md:right-[20%] bg-white p-3 md:p-4 rounded-xl shadow-lg border border-slate-100 max-w-[180px] hidden md:block animate-bounce duration-[3500ms]">
                 <div className="text-blue-600 font-bold mb-1">상점 만들기</div>
                 <div className="text-xs text-slate-500">버튼 하나로 입점신청 빠르게</div>
                 <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-b border-l border-slate-100 rotate-45"></div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  // Slide 3: Low Fees & Budget
  {
    id: 3,
    render: () => (
      <div className="h-full w-full flex flex-col items-center justify-center bg-slate-50 p-8 md:p-16">
        <div className="max-w-6xl w-full h-full flex flex-col">
           <div className="flex-shrink-0 text-center mb-8">
             <h3 className="text-blue-600 font-bold tracking-wider mb-4">02. SOLUTION</h3>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
               수백만 사업자가 겪는 홍보·판매 문제<br/>
               <span className="text-blue-600">낮은 수수료와 적은 예산</span>으로 해결
             </h2>
             <p className="text-lg md:text-xl text-slate-600">
               이제는 광고를 더욱 쉽게, 나만의 상점과 상세페이지로
             </p>
           </div>

           <div className="flex-1 relative flex justify-center items-end md:items-center min-h-0 w-full">
              {/* Phones Container */}
              <div className="relative w-full max-w-[900px] h-[300px] md:h-[500px] flex justify-center items-end md:items-center">
                  
                  {/* Phone 1: Make Screen (Left) */}
                  <div className="absolute left-1/2 -translate-x-[140px] md:-translate-x-[260px] bottom-10 md:bottom-auto w-[140px] md:w-[220px] aspect-[9/19] bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform -rotate-12 hover:z-30 hover:rotate-0 transition-all duration-500 overflow-hidden bg-white z-10">
                     <MakeScreen />
                  </div>

                  {/* Phone 2: Order Screen (Right) */}
                  <div className="absolute left-1/2 translate-x-[140px] md:translate-x-[260px] bottom-10 md:bottom-auto w-[140px] md:w-[220px] aspect-[9/19] bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-slate-800 shadow-2xl transform rotate-12 hover:z-30 hover:rotate-0 transition-all duration-500 overflow-hidden bg-white z-10">
                     <OrderScreen />
                  </div>

                  {/* Phone 3: Home Screen (Center) */}
                  <div className="absolute z-20 bottom-0 md:bottom-auto w-[160px] md:w-[240px] aspect-[9/19] bg-slate-900 rounded-[1.8rem] md:rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden bg-white">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-slate-900 rounded-b-xl z-50 pointer-events-none"></div>
                      <HomeScreen />
                  </div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  // Slide 4: Efficiency
  {
    id: 4,
    render: () => (
      <div className="h-full w-full flex items-center justify-center bg-blue-600 text-white p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-50"></div>
        
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
           <div>
              <h3 className="text-blue-200 font-bold tracking-wider mb-4">03. EFFICIENCY</h3>
              {/* Updated Text - removed br */}
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                서비스를 찾는 고객과의 분리 더 효율적인 관리
              </h2>
              <div className="space-y-6">
                 <div className="flex items-start gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <MonitorPlay className="mt-1 text-blue-200 flex-shrink-0" />
                    <div>
                        <h4 className="text-xl font-bold mb-1">라이브 · 숏폼 · 배너</h4>
                        <p className="text-blue-100 text-sm">다양한 형태의 미디어로 고객의 시선을 사로잡으세요.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <MousePointer2 className="mt-1 text-blue-200 flex-shrink-0" />
                    <div>
                        <h4 className="text-xl font-bold mb-1">직관적인 인터페이스</h4>
                        <p className="text-blue-100 text-sm">복잡한 학습 없이 누구나 쉽게 관리할 수 있습니다.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="relative flex justify-center">
               <div className="w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/19] relative border-[8px] border-slate-900">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-50"></div>
                   <MakeScreen />
               </div>
           </div>
        </div>
      </div>
    )
  },
  // Slide 5: Conclusion
  {
    id: 5,
    render: () => (
      <div className="h-full w-full flex flex-col items-center justify-center bg-white p-8 md:p-16 text-center relative overflow-hidden">
         {/* Background Decorations */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[80px]"></div>
         </div>

         <div className="mb-12 relative z-10">
            <div className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] mb-8 shadow-xl shadow-blue-200 transform -rotate-3">
                <Store size={64} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                지금 바로 시작하세요
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                드림위시는 소상공인 여러분의 성공적인 비즈니스를 위해<br/>
                최고의 인프라를 제공합니다.
            </p>
         </div>
         
         <div className="flex flex-col md:flex-row gap-4 relative z-10">
             <a 
                href="https://play.google.com/store/apps/details?id=com.dreamwish"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-lg transition-all shadow-xl hover:-translate-y-1"
             >
                 앱 다운로드
             </a>
             <Link 
                to="/" 
                className="px-10 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold rounded-full text-lg transition-all shadow-lg hover:-translate-y-1"
             >
                 홈으로 돌아가기
             </Link>
         </div>
      </div>
    )
  }
];

const ServiceIntro: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') {
         // Optional: navigate home or just ignore
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center">
      {/* Slide Container */}
      <div className="w-full h-full md:max-w-screen-xl md:h-[85vh] bg-white md:rounded-2xl shadow-2xl overflow-hidden relative flex flex-col">
          
          {/* Content Area */}
          <div className="flex-1 w-full overflow-hidden relative">
              {slides[currentSlide].render()}
          </div>

          {/* Navigation Overlay (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end pointer-events-none z-50">
              {/* Page Indicator */}
              <div className="bg-black/5 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full font-mono text-sm font-bold shadow-sm pointer-events-auto text-slate-900">
                  {currentSlide + 1} / {totalSlides}
              </div>
              
              {/* Nav Buttons */}
              <div className="flex gap-3 pointer-events-auto">
                  <button 
                    onClick={prevSlide} 
                    disabled={currentSlide === 0}
                    className="p-3 bg-white hover:bg-slate-50 text-slate-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg border border-slate-100 transition-all active:scale-95"
                  >
                      <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextSlide} 
                    disabled={currentSlide === totalSlides - 1}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg shadow-blue-200 transition-all active:scale-95"
                  >
                      <ChevronRight size={24} />
                  </button>
              </div>
          </div>

          {/* Close Button (Top Right) */}
          <Link 
            to="/" 
            className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 text-slate-500 hover:text-slate-900 rounded-full transition-colors z-50"
            title="닫기"
          >
            <X size={24} />
          </Link>

      </div>
    </div>
  );
};

export default ServiceIntro;
