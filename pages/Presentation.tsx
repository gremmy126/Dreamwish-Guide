import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Store, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Wallet, 
  Building2,
  Zap,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  // Slide 1: Cover
  {
    id: 1,
    render: () => (
      <div className="h-full flex flex-col justify-center items-start px-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8 text-blue-200 border border-blue-400/30 bg-blue-800/30 px-4 py-2 rounded-full w-fit">
            <Store size={20} />
            <span className="font-semibold tracking-wide">PARTNER GUIDE</span>
          </div>
          <h1 className="text-8xl font-black tracking-tighter leading-none mb-6">
            DREAM<br/>WISH
          </h1>
          <div className="h-2 w-32 bg-white mb-10"></div>
          <h2 className="text-4xl font-bold mb-4">소상공인을 위한 라이브커머스<br/>입점 안내서</h2>
          <p className="text-xl text-blue-100 max-w-2xl">
            누구나 쉽고 자유롭게 광고할 수 있는 세상,<br/>드림위시가 함께 만듭니다.
          </p>
        </div>
      </div>
    )
  },
  // Slide 2: Vision
  {
    id: 2,
    render: () => (
      <div className="h-full flex items-center px-20 bg-white">
        <div className="grid grid-cols-2 gap-16 w-full items-center">
          <div>
            <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">01. VISION & MISSION</h3>
            <h2 className="text-5xl font-black text-slate-900 leading-tight mb-10">
              상권 붕괴 문제를<br/>
              <span className="text-blue-600">기술과 연결</span>로<br/>
              해결합니다.
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p className="border-l-4 border-blue-600 pl-6 py-2">
                <strong className="text-slate-900 block mb-2 text-xl">Our Goal</strong>
                소상공인이 자유롭게 판매하고 광고하는 환경을 조성하여<br/>최종적으로 마을 전체의 경제를 활성화합니다.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-[3rem] relative">
             <div className="absolute top-10 right-10 text-9xl font-black text-slate-200/50 select-none">GOAL</div>
             <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <Users className="text-blue-600 mb-4" size={40} />
                    <h4 className="font-bold text-xl mb-2">연결</h4>
                    <p className="text-slate-500">판매자와 고객의<br/>직접적인 소통</p>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white mt-12">
                    <TrendingUp className="text-white mb-4" size={40} />
                    <h4 className="font-bold text-xl mb-2">성장</h4>
                    <p className="text-blue-100">매출 증대와<br/>단골 고객 확보</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 3: Problem
  {
    id: 3,
    render: () => (
      <div className="h-full flex flex-col justify-center px-20 bg-slate-50">
        <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">02. PROBLEM</h3>
        <h2 className="text-5xl font-black text-slate-900 mb-16">우리가 해결하려는 문제</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: '비효율성', desc: '높은 광고비 대비\n낮은 매출 효율', value: '광고비 90만원', sub: '매출 0원 위험' },
            { title: '높은 비용', desc: '과도한 판매 수수료로\n수익성 악화', value: '수수료 40%', sub: '순이익 감소' },
            { title: '정보 부족', desc: '복잡한 마케팅 정보로\n인한 사업 포기', value: '폐업률', sub: '지속 상승' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-blue-600 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-500 whitespace-pre-line mb-8">{item.desc}</p>
              <div className="bg-slate-100 w-full py-6 rounded-2xl">
                <p className="text-3xl font-black text-blue-600 mb-1">{item.value}</p>
                <p className="text-slate-400 text-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  // Slide 4: Solution
  {
    id: 4,
    render: () => (
      <div className="h-full flex flex-col justify-center px-20 bg-white">
        <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">03. SOLUTION</h3>
        <h2 className="text-5xl font-black text-slate-900 mb-16">명쾌한 해결책</h2>
        
        <div className="space-y-6">
          {[
            { title: '데이터 기반 매출관리', desc: '낭비되는 돈과 시간을 찾아내 운영 효율 극대화' },
            { title: '라이브 광고 시스템', desc: '시청자를 단골로 만드는 선순환 구조 구축' },
            { title: '실시간 쿠폰/이벤트', desc: '방송과 연동된 즉각적인 구매 전환 유도' }
          ].map((sol, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-200 shrink-0">
                {i + 1}
              </div>
              <div className="flex-grow bg-slate-50 p-8 rounded-2xl border border-slate-100 group-hover:border-blue-300 transition-colors flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{sol.title}</h4>
                  <p className="text-slate-600 text-lg">{sol.desc}</p>
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  // Slide 5: Product Overview
  {
    id: 5,
    render: () => (
      <div className="h-full flex flex-col justify-center px-20 bg-slate-900 text-white">
        <div className="flex justify-between items-end mb-16">
            <div>
                <h3 className="text-blue-400 font-bold text-xl tracking-widest mb-4">04. PRODUCT</h3>
                <h2 className="text-5xl font-black">드림위시 플랫폼</h2>
            </div>
            <div className="text-right text-slate-400">
                Core Features<br/>Overview
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
           <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <Wallet className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">구독료 0원</h4>
              <p className="text-slate-300 leading-relaxed">매월 나가는 고정비 부담을 완전히 없앴습니다.<br/>오직 판매되었을 때만 수수료가 발생합니다.</p>
           </div>
           <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-6 flex items-center justify-center">
                <TrendingUp className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">데이터 분석</h4>
              <p className="text-slate-300 leading-relaxed">고객 이탈 지점을 정확히 파악하고<br/>매출 상승을 위한 인사이트를 제공합니다.</p>
           </div>
           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl col-span-2 flex items-center justify-between relative overflow-hidden">
              <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-2">라이브 커머스 최적화</h4>
                  <p className="text-blue-100 text-lg">끊김 없는 고화질 방송과 실시간 소통 기능 지원</p>
              </div>
              <div className="flex items-center justify-center bg-white/20 w-16 h-16 rounded-full backdrop-blur-md">
                 <Store size={32} className="text-white" />
              </div>
           </div>
        </div>
      </div>
    )
  },
  // Slide 6: Why Dreamwish? (Benefits)
  {
    id: 6,
    render: () => (
      <div className="h-full flex items-center px-20 bg-white">
        <div className="w-full">
            <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4 text-center">05. WHY DREAMWISH</h3>
            <h2 className="text-5xl font-black text-slate-900 mb-16 text-center">왜 드림위시인가요?</h2>
            
            <div className="grid grid-cols-3 gap-0 border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-slate-50 p-10 flex flex-col items-center text-center border-r border-slate-200">
                    <div className="text-slate-400 text-lg font-bold mb-4">타사 플랫폼</div>
                    <div className="text-4xl font-bold text-slate-500 mb-2">정산 지연</div>
                    <div className="text-sm text-slate-400">복잡한 정산 주기</div>
                </div>
                <div className="bg-blue-600 p-10 flex flex-col items-center text-center text-white relative z-10 transform scale-110 shadow-2xl">
                    <div className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4">DreamPay</div>
                    <div className="text-5xl font-black mb-2">즉시 정산</div>
                    <div className="text-sm text-blue-100 opacity-90">판매 즉시 포인트 적립</div>
                    <div className="mt-6 bg-blue-700 w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                        <Zap size={16} /> 수수료 자동 차감
                    </div>
                </div>
                <div className="bg-slate-50 p-10 flex flex-col items-center text-center border-l border-slate-200">
                    <div className="text-slate-400 text-lg font-bold mb-4">오픈마켓</div>
                    <div className="text-4xl font-bold text-slate-500 mb-2">복잡함</div>
                    <div className="text-sm text-slate-400">어려운 입점 절차</div>
                </div>
            </div>
            
            <p className="text-center text-slate-500 mt-10 text-lg">
                드림페이를 통해 정산 주기를 없애고<br/>소상공인의 자금 회전을 돕습니다.
            </p>
        </div>
      </div>
    )
  },
  // Slide 7: Process
  {
    id: 7,
    render: () => (
      <div className="h-full flex flex-col justify-center px-20 bg-slate-50">
        <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">06. PROCESS</h3>
        <h2 className="text-5xl font-black text-slate-900 mb-16">입점 절차 안내</h2>
        
        <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>
            
            <div className="grid grid-cols-4 gap-4 relative z-10">
                {[
                    { step: '01', title: '입점 신청', desc: '앱에서 간편 신청' },
                    { step: '02', title: '서류 심사', desc: '영업일 기준 1~3일' },
                    { step: '03', title: '승인 완료', desc: '판매 권한 부여' },
                    { step: '04', title: '상품 등록', desc: '판매 시작' },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                        <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-blue-600 transition-colors">
                            {i + 1}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
  },
  // Slide 8: Documents
  {
    id: 8,
    render: () => (
      <div className="h-full flex items-center px-20 bg-white">
        <div className="w-full grid grid-cols-2 gap-20">
             <div>
                <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">07. DOCUMENTS</h3>
                <h2 className="text-5xl font-black text-slate-900 mb-10">필요 서류 안내</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    빠른 심사를 위해 아래 서류를 미리 준비해주세요.<br/>
                    <strong>드림페이</strong> 사용으로 통장 사본은 필요하지 않습니다.
                </p>
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <p className="text-blue-800 font-bold flex items-center gap-2">
                        <CheckCircle2 size={20}/> 
                        TIP
                    </p>
                    <p className="text-blue-600 mt-2 text-sm">
                        스캔본이 아니어도 괜찮습니다. <br/>
                        글자가 잘 보이도록 스마트폰으로 촬영하여 업로드해주세요.
                    </p>
                </div>
             </div>
             
             <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
                <h4 className="text-2xl font-bold mb-6 pb-4 border-b border-slate-100">체크리스트</h4>
                <ul className="space-y-6">
                    {[
                        '사업자등록증 사본 1부',
                        '통신판매업신고증 사본 1부',
                        '대표자 신분증 사본 (뒷자리 마스킹)',
                        '법인 등기부등본 (법인인 경우)'
                    ].map((doc, i) => (
                        <li key={i} className="flex items-center gap-4 text-lg text-slate-700">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <CheckCircle2 size={16} />
                            </div>
                            {doc}
                        </li>
                    ))}
                </ul>
             </div>
        </div>
      </div>
    )
  },
  // Slide 9: FAQ
  {
    id: 9,
    render: () => (
      <div className="h-full flex flex-col justify-center px-20 bg-slate-50">
        <h3 className="text-blue-600 font-bold text-xl tracking-widest mb-4">08. FAQ</h3>
        <h2 className="text-5xl font-black text-slate-900 mb-12">자주 묻는 질문</h2>
        
        <div className="grid grid-cols-2 gap-6">
             {[
                { q: '정산 주기는 어떻게 되나요?', a: '드림페이를 통해 정산 주기가 없습니다. 판매 즉시 수수료를 제외한 금액이 포인트로 적립됩니다.' },
                { q: '광고는 어떻게 하나요?', a: '드림페이 포인트를 충전하여 예산을 설정하고, 그 예산 범위 내에서 자유롭게 광고를 집행할 수 있습니다.' },
                { q: '입점 심사는 얼마나 걸리나요?', a: '신청 후 영업일 기준 1~3일 내에 완료되며, 결과는 앱 알림 및 문자로 안내드립니다.' },
                { q: '라이브 방송 장비가 필요한가요?', a: '스마트폰 하나만 있으면 언제 어디서든 고화질 라이브 방송이 가능합니다.' }
             ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                     <div className="flex items-start gap-4 mb-3">
                         <span className="text-blue-600 font-black text-xl">Q.</span>
                         <h4 className="text-xl font-bold text-slate-900">{item.q}</h4>
                     </div>
                     <p className="text-slate-500 pl-9 leading-relaxed">{item.a}</p>
                 </div>
             ))}
        </div>
      </div>
    )
  },
  // Slide 10: End / Contact
  {
    id: 10,
    render: () => (
      <div className="h-full flex flex-col justify-center items-center px-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none"></div>
        
        <div className="mb-10 animate-bounce">
            <Building2 size={80} className="text-blue-500" />
        </div>
        
        <h2 className="text-6xl font-black mb-8 leading-tight">
            사장님의 꿈을<br/>
            <span className="text-blue-500">드림위시</span>가 응원합니다.
        </h2>
        
        <p className="text-slate-400 text-xl mb-12">
            지금 바로 입점 신청하고 성공적인 비즈니스를 시작하세요.
        </p>
        
        <div className="flex gap-6">
             <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10">
                 <p className="text-slate-400 text-sm mb-1">입점 문의</p>
                 <p className="text-2xl font-bold">support@dreamwish.co.kr</p>
             </div>
             <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10">
                 <p className="text-slate-400 text-sm mb-1">대표 전화</p>
                 <p className="text-2xl font-bold">010-9110-8716</p>
             </div>
        </div>

        <div className="mt-20 text-slate-600 text-sm">
            © 2024 DREAMWISH. All Rights Reserved.
        </div>
      </div>
    )
  }
];

const Presentation: React.FC = () => {
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
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 md:p-8 relative">
      
      {/* Presentation Container (16:9 Aspect Ratio) */}
      <div className="relative w-full max-w-7xl aspect-video bg-white rounded-xl overflow-hidden shadow-2xl">
        
        {/* Slide Content */}
        <div className="w-full h-full">
            {slides[currentSlide].render()}
        </div>

        {/* Navigation Controls Overlay */}
        <div className="absolute bottom-6 right-8 flex items-center gap-4 z-50">
            <div className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-mono">
                {currentSlide + 1} / {totalSlides}
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-3 rounded-full bg-black/10 hover:bg-black/30 text-slate-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm border border-white/20"
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        {/* Fullscreen Hint */}
        <div className="absolute top-6 right-8 group z-50 flex gap-2">
             <button className="p-2 text-slate-300 hover:text-white transition-colors" title="전체화면 보기 (Preview)">
                <Maximize2 size={20} />
             </button>
        </div>
        
      </div>

      {/* Close Button (Fixed outside to ensure visibility) */}
      <Link 
        to="/" 
        className="fixed top-4 right-4 z-[9999] p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-lg flex items-center gap-2 border border-red-500"
        title="프레젠테이션 종료"
      >
        <X size={24} strokeWidth={2.5} />
        <span className="text-sm font-bold pr-1 hidden md:inline">닫기</span>
      </Link>
    </div>
  );
};

export default Presentation;