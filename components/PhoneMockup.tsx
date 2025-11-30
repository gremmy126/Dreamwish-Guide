import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
  type?: 'home' | 'select' | 'profile';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '', type = 'home' }) => {
  // State for Home Screen
  const [activeTab, setActiveTab] = useState('food');
  
  // State for Select Screen
  const [activeSelectTab, setActiveSelectTab] = useState('live');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // State for Profile Screen
  const [activeProfileTab, setActiveProfileTab] = useState('live');

  // --- Helpers for Home Screen ---
  const categories = {
    food: [
      { img: "meat.png", label: "정육/가공" },
      { img: "fish.png", label: "수산물·해산물" },
      { img: "vegetable.png", label: "농산물" },
      { img: "tea.png", label: "건강식품" },
      { img: "kimchi.png", label: "반찬·즉석식품" },
      { img: "hotdog.png", label: "간편식" },
      { img: "Local-products.png", label: "지역 특산물" },
      { img: "bakery.png", label: "베이커리" },
      { img: "juice.png", label: "주스" },
      { img: "fruit.png", label: "과일" }
    ],
    fashion: [
      { img: "women-clothes.png", label: "여성의류" },
      { img: "men-clothes.png", label: "남성의류" },
      { img: "sports.png", label: "스포츠·아웃도어" },
      { img: "suite.png", label: "정장" },
      { img: "shoes.png", label: "슈즈 & 잡화" },
      { img: "bag.png", label: "가방·백팩" },
      { img: "accessory.png", label: "악세사리" },
      { img: "hat.png", label: "모자·스카프" },
      { img: "kids.png", label: "아동·유아" },
      { img: "season.png", label: "시즌 특수" }
    ],
    beauty: [
      { img: "../hair/cut.png", label: "커트" },
      { img: "../hair/perm.png", label: "펌" },
      { img: "../hair/dyeing.png", label: "염색" },
      { img: "../hair/treatment.png", label: "트리트먼트" },
      { img: "../hair/styling.png", label: "스타일링" },
      { img: "../hair/calp-care.png", label: "두피관리" },
      { img: "../hair/hair-extensions.png", label: "붙임머리" },
      { img: "../hair/special-procedure.png", label: "특수시술" },
      { img: "../hair/Barber-Men.png", label: "바버 & 남성" },
      { img: "../hair/Wedding-Event.png", label: "웨딩 & 이벤트" }
    ],
    etc: [
      { img: "cosmetics.png", label: "뷰티" },
      { img: "design.png", label: "디자인" },
      { img: "publish.png", label: "출판" },
      { img: "contents.png", label: "콘텐츠" },
      { img: "local.png", label: "로컬 브랜드" }
    ]
  };

  const getImgPath = (category: string, img: string) => {
    if (img.startsWith('../')) {
        return `https://dreamwish.co.kr/public/images${img.replace('..', '')}`;
    }
    const folderMap: Record<string, string> = {
        food: 'food',
        fashion: 'fashion',
        etc: 'etc',
        beauty: 'hair'
    };
    return `https://dreamwish.co.kr/public/images/${folderMap[category]}/${img}`;
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }

  // --- Styles ---
  const styles = `
    .phone-container { font-family: 'Noto Sans KR', sans-serif; }
    
    /* === Layout: Fixed Header/Footer, Scrollable Body === */
    .screen-layout {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #fff;
    }
    .screen-header {
      flex-shrink: 0;
      height: 56px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      z-index: 50;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .screen-body {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      position: relative;
    }
    .screen-body::-webkit-scrollbar { display: none; }
    
    .screen-footer {
      flex-shrink: 0;
      height: 52px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 50;
      background: #fff;
      border-top: 1px solid #e5e7eb;
    }
    .screen-footer button {
        flex: 1;
        height: 100%;
        border: 0;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0;
    }
    .screen-footer img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }

    /* === Theme: Light (Home) === */
    .theme-light .screen-body { background: #f5f5f7; }

    /* === Theme: Dark (Select) === */
    .theme-dark .screen-layout {
        background: radial-gradient(circle at 15% 90%, rgba(37, 98, 174, 0.22) 0, transparent 55%),
                    linear-gradient(135deg, #020617 0%, #0b1220 35%, #111827 70%, #020617 100%);
        color: #fff;
    }
    .theme-dark .screen-header {
        background: rgba(15, 23, 42, 0.85);
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    }
    .theme-dark .screen-footer {
        background: #020617;
        border-top: 1px solid rgba(30, 64, 175, 0.5);
    }
    .theme-dark .screen-footer img {
        filter: invert(1);
    }

    /* === Theme: Profile (Specific CSS) === */
    .theme-profile .screen-layout {
       background: radial-gradient(circle at top left, #e0f2fe 0, #ffffff 40%, #f9fafb 100%);
       color: #111827;
    }
    .theme-profile .screen-header {
        background: transparent;
        box-shadow: 0 1px 12px rgba(15, 23, 42, 0.05);
        border-bottom: none;
    }
    .theme-profile .screen-footer {
        background: #fff;
        border-top: 1px solid #f0f0f0;
    }

    /* Profile Page Specifics */
    .profile-shell {
      background: linear-gradient(135deg, #eff6ff, #e0f2fe);
      border-radius: 20px;
      padding: 16px;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
      margin: 10px 16px 12px;
      position: relative;
      overflow: hidden;
    }
    .profile-shell::before { content: ''; position: absolute; inset: -40px 40%; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.27), transparent 60%); opacity: 0.7; }
    
    .profile-shell-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; position: relative; }
    .profile-shell-label { font-size: 11px; color: #1d4ed8; font-weight: 600; padding: 3px 8px; border-radius: 999px; background: rgba(37, 99, 235, 0.08); }
    .profile-shell-status { font-size: 11px; color: #6b7280; }

    .profile-top { display: flex; align-items: center; gap: 16px; padding: 6px 0 8px; position: relative; }
    .profile-avatar img { width: 76px; height: 76px; border-radius: 999px; object-fit: cover; border: 3px solid rgba(255, 255, 255, 0.9); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2); background: #e5e7eb; }
    
    .profile-info h2 { margin: 0 0 4px; font-size: 17px; font-weight: 600; color: #0f172a; }
    .profile-stats { display: flex; gap: 10px; font-size: 11px; color: #111827; margin-bottom: 4px; }
    .profile-stats span { padding: 3px 8px; border-radius: 999px; background: rgba(15, 23, 42, 0.04); }
    .profile-desc { margin: 2px 0 0; font-size: 12px; color: #4b5563; }

    .profile-highlights { display: flex; align-items: center; gap: 10px; padding: 8px 0 4px; overflow-x: auto; scrollbar-width: none; }
    .profile-highlights::-webkit-scrollbar { display: none; }
    .highlight-item { background: none; border: none; padding: 0; cursor: pointer; display: flex; flex-direction: column; align-items: center; font-size: 11px; color: #4b5563; }
    .highlight-thumb { width: 54px; height: 54px; border-radius: 999px; border: 2px dashed #2562ae; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.9); margin-bottom: 4px; }
    .highlight-plus { font-size: 20px; color: #2562ae; }

    .profile-actions { display: flex; justify-content: space-between; gap: 8px; padding: 8px 0 0; }
    .profile-actions button { flex: 1; border: 0; border-radius: 999px; background: rgba(15, 23, 42, 0.06); font-size: 11px; padding: 8px 0; cursor: pointer; color: #111827; font-weight: 500; }

    .profile-tabs { margin-top: 12px; padding: 0 16px; display: flex; justify-content: center; gap: 56px; position: relative; border-bottom: 1px solid rgba(148,163,184,0.35); }
    .profile-tabs::after { content: ""; position: absolute; left: 24px; right: 24px; bottom: 0; height: 1px; background: rgba(148, 163, 184, 0.35); }
    .profile-tab-btn { background: none; border: none; padding: 4px 0 10px; cursor: pointer; position: relative; }
    .profile-tab-btn img { width: 28px; opacity: 0.4; transition: opacity 0.18s ease; }
    .profile-tab-btn.active img { opacity: 1; transform: translateY(-1px); }
    .profile-tab-btn.active::after { content: ""; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 26px; height: 2px; border-radius: 999px; background: #2562ae; }
    
    .feed-empty { text-align: center; padding: 40px 16px 24px; }
    .feed-empty h3 { margin-bottom: 8px; font-size: 18px; color: #0f172a; }
    .feed-empty p { margin-top: 0; margin-bottom: 20px; font-size: 13px; color: #4b5563; }
    .blue-btn { display: inline-flex; align-items: center; justify-content: center; min-width: 180px; height: 44px; padding: 0 20px; border-radius: 999px; border: none; background: linear-gradient(135deg, #2562ae, #1d4ed8); color: #fff; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.35); }

    .feed-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; padding: 0 4px 16px; }
    .feed-card { position: relative; width: 100%; aspect-ratio: 1 / 1; background: #d1d5db; border-radius: 6px; }

    /* Home Page Specifics */
    .home-hero {
      border-radius: 20px;
      padding: 16px;
      margin: 12px 16px 24px;
      background: radial-gradient(circle at 15% 85%, rgba(37, 98, 174, 0.95) 0%, rgba(37, 98, 174, 0.4) 30%, transparent 60%),
                  linear-gradient(135deg, #020617 0%, #050816 35%, #0b1220 65%, #111827 100%);
      color: #e5f0ff;
    }
    .category-btn { display: flex; flex-direction: column; align-items: center; border: 0; background: transparent; padding: 0; cursor: pointer; gap: 4px; }
    .category-icon { width: 42px; height: 42px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; }
    .category-icon img { width: 70%; height: 70%; object-fit: contain; }

    /* Select Page Specifics */
    .filter-bar { position: sticky; top: 0; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(15, 23, 42, 0.65); }
    .dark-input { width: 100%; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(148, 163, 184, 0.3); border-radius: 12px; padding: 10px; color: #fff; font-size: 11px; margin-bottom: 8px; }
    .image-box-dark { border-radius: 16px; border: 1px dashed rgba(148, 163, 184, 0.5); background: rgba(15, 23, 42, 0.8); color: rgba(203, 213, 225, 0.8); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px; height: 90px; font-size: 11px; }
    .select-tabs { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); width: 90%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 4px; background: rgba(15, 23, 42, 0.95); border-radius: 999px; z-index: 40; border: 1px solid rgba(255,255,255,0.1); }
  `;

  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[3rem] h-[700px] w-[340px] shadow-2xl ${className} flex-shrink-0 phone-container`}>
      <style>{styles}</style>
      
      {/* Hardware Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[100px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[160px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[220px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[180px] rounded-e-lg"></div>
      
      {/* Screen Container */}
      <div className={`rounded-[2.2rem] overflow-hidden w-full h-full relative ${type === 'select' ? 'theme-dark' : type === 'profile' ? 'theme-profile' : 'theme-light'}`}>
        
        {/* ================= HOME SCREEN ================= */}
        {type === 'home' && (
            <div className="screen-layout">
                {/* FIXED HEADER */}
                <header className="screen-header">
                    <button className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center bg-white p-0">
                        <img className="w-5 h-5 invert" src="https://dreamwish.co.kr/public/images/etc/search-icon.png" alt="검색" />
                    </button>
                    <div className="flex gap-1.5">
                        <button className="p-2 rounded-full hover:bg-slate-100 border-0 bg-transparent cursor-pointer">
                            <img className="w-5 h-5 invert" src="https://dreamwish.co.kr/public/images/etc/bell-icon.png" alt="알림" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 bg-gray-900 border-0 cursor-pointer flex items-center justify-center">
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </header>

                {/* SCROLLABLE BODY */}
                <div className="screen-body">
                    <div className="home-hero">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/70 text-[10px] text-blue-100 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 라이브커머스 홈
                            </span>
                            <h1 className="text-[19px] font-bold leading-snug text-white m-0">
                                사장님의 상점을<br />라이브로 키우는 첫 화면
                            </h1>
                            <p className="text-[11px] text-blue-100 m-0">
                                상점 만들기부터 라이브 방송, 숏폼 광고까지 한 화면에서 관리해 보세요.
                            </p>
                            <div className="flex gap-2 mt-3">
                                <button className="bg-[#1768CE] text-white px-3.5 py-2 rounded-full text-[11px] font-semibold border-none cursor-pointer">상점 신청</button>
                                <button className="bg-transparent border border-slate-400 text-slate-200 px-3.5 py-2 rounded-full text-[11px] cursor-pointer">라이브 관리</button>
                            </div>
                            <div className="flex gap-x-3 gap-y-1 flex-wrap mt-2 text-[10px] text-blue-100">
                                <span>오늘 신청 <strong className="text-yellow-400">214</strong></span>
                                <span>방송 유지율 <strong className="text-yellow-400">94%</strong></span>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 mt-4 pb-4">
                        <h2 className="text-sm font-bold text-gray-900 mb-2">우리 업종 선택하기</h2>
                        <div className="flex gap-1.5 overflow-x-auto pb-1 mb-2 scrollbar-hide">
                            {Object.keys(categories).map((cat) => (
                                <button 
                                    key={cat}
                                    className={`px-3 py-1.5 rounded-full text-[11px] whitespace-nowrap transition-colors border-0 cursor-pointer ${activeTab === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
                                    onClick={() => setActiveTab(cat)}
                                >
                                    {cat === 'food' && '식품'}
                                    {cat === 'fashion' && '패션'}
                                    {cat === 'beauty' && '미용'}
                                    {cat === 'etc' && '기타'}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-5 gap-x-1.5 gap-y-3">
                             {categories[activeTab as keyof typeof categories].map((item, idx) => (
                                <button key={idx} className="category-btn group">
                                    <div className="category-icon group-hover:bg-blue-50 transition-colors">
                                        <img src={getImgPath(activeTab, item.img)} alt={item.label} />
                                    </div>
                                    <span className="text-[9px] text-gray-700 text-center leading-tight">{item.label}</span>
                                </button>
                            ))}
                        </div>
                        
                        <div className="mt-5 p-3 rounded-2xl bg-gray-50 border border-gray-200">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-[13px] font-bold text-gray-900">오늘의 라이브</h3>
                                <button className="text-[10px] text-blue-600 border-0 bg-transparent p-0 cursor-pointer">더보기</button>
                            </div>
                            <div className="text-[10px] text-gray-500 py-2">진행 중인 라이브가 없습니다.</div>
                        </div>
                    </div>
                </div>

                {/* FIXED FOOTER */}
                <nav className="screen-footer">
                    <button><img src="https://dreamwish.co.kr/public/images/menu/store.svg" alt="상점" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/live.svg" alt="라이브" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/make.svg" alt="광고 만들기" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/chat.svg" alt="채팅" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/profile.svg" alt="프로필" /></button>
                </nav>
            </div>
        )}

        {/* ================= SELECT SCREEN ================= */}
        {type === 'select' && (
            <div className="screen-layout">
                {/* FIXED HEADER */}
                <header className="screen-header">
                     <button className="w-8 h-8 rounded-full border border-slate-500/50 bg-slate-900/80 flex items-center justify-center p-0 cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="#2562AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </button>
                     <div className="flex gap-1.5">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-800 border-0 bg-transparent p-0 cursor-pointer">
                            <img className="w-5 h-5 invert" src="https://dreamwish.co.kr/public/images/etc/bell-icon.png" alt="알림" />
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-800 border-0 bg-transparent p-0 cursor-pointer">
                             <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                     </div>
                </header>

                {/* SCROLLABLE BODY */}
                <div className="screen-body pb-16">
                    <div className="filter-bar">
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                            {['텍스트 굵기', '폰트', '텍스트 크기'].map((filter) => (
                                 <div key={filter} className="relative">
                                    <button 
                                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-500 bg-slate-900 text-slate-200 text-[10px] whitespace-nowrap"
                                        onClick={() => toggleDropdown(filter)}
                                    >
                                        {filter} <ChevronDown size={10} />
                                    </button>
                                    {activeDropdown === filter && (
                                        <div className="absolute top-full left-0 mt-1 w-24 bg-slate-900 border border-slate-700 rounded-lg p-1 z-50 shadow-xl">
                                            <div className="p-1.5 text-[10px] text-gray-300 hover:bg-blue-900/50 rounded cursor-pointer">옵션 1</div>
                                            <div className="p-1.5 text-[10px] text-gray-300 hover:bg-blue-900/50 rounded cursor-pointer">옵션 2</div>
                                        </div>
                                    )}
                                 </div>
                            ))}
                        </div>
                        <button className="px-3 py-1.5 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white text-[10px] font-bold shadow-lg border-0 cursor-pointer shrink-0">
                            다음
                        </button>
                    </div>

                    <div className="px-4 py-4">
                        {activeSelectTab === 'live' && (
                            <div className="bg-slate-900/80 rounded-[18px] p-4 border border-slate-700">
                                 <div className="flex flex-col gap-2 mb-4">
                                    <input className="dark-input" placeholder="라이브 광고 제목을 적어주세요." readOnly />
                                    <input className="dark-input" placeholder="설명을 간략하게 2줄이상..." readOnly />
                                 </div>
                                 <div className="flex flex-col gap-2">
                                     <div className="grid grid-cols-2 gap-2">
                                         <div className="image-box-dark">상점 썸네일</div>
                                         <div className="image-box-dark">상점 썸네일</div>
                                     </div>
                                     <input className="dark-input" placeholder="텍스트를 입력하세요" readOnly />
                                     <div className="grid grid-cols-3 gap-2">
                                         <div className="image-box-dark !h-[70px] !rounded-full">사진</div>
                                         <div className="image-box-dark !h-[70px] !rounded-full">사진</div>
                                         <div className="image-box-dark !h-[70px] !rounded-full">사진</div>
                                     </div>
                                 </div>
                            </div>
                        )}
                        {activeSelectTab === 'shortform' && (
                             <div className="bg-slate-900/80 rounded-[18px] p-4 border border-slate-700">
                                <div className="image-box-dark !h-[200px] mb-4">사진 또는 짧은 영상을 선택해주세요</div>
                                <input className="dark-input" placeholder="댓글 유도 질문을 적어주세요." readOnly />
                             </div>
                        )}
                        {activeSelectTab === 'highlight' && (
                             <div className="bg-slate-900/80 rounded-[18px] p-4 border border-slate-700">
                                <div className="image-box-dark !h-[200px] mb-4 border-blue-400 border-2">하이라이트 영상 선택</div>
                                <input className="dark-input" placeholder="설명을 입력해주세요." readOnly />
                             </div>
                        )}
                         {activeSelectTab === 'banner' && (
                             <div className="bg-slate-900/80 rounded-[18px] p-4 border border-slate-700">
                                <div className="flex flex-col gap-2">
                                    <div className="image-box-dark !h-[60px]">배너 1</div>
                                    <div className="image-box-dark !h-[60px]">배너 2</div>
                                    <div className="image-box-dark !h-[60px]">배너 3</div>
                                </div>
                             </div>
                        )}
                    </div>

                    <div className="select-tabs">
                        {['live', 'shortform', 'highlight', 'banner'].map((tab) => (
                            <button 
                                key={tab}
                                className={`py-1.5 rounded-full text-[10px] bg-transparent border-none cursor-pointer ${activeSelectTab === tab ? 'text-white font-bold bg-gradient-to-r from-blue-600 to-sky-400 shadow-md' : 'text-slate-400'}`}
                                onClick={() => setActiveSelectTab(tab)}
                            >
                                {tab === 'live' && '라이브'}
                                {tab === 'shortform' && '숏폼'}
                                {tab === 'highlight' && '하이라이트'}
                                {tab === 'banner' && '배너'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FIXED FOOTER */}
                <nav className="screen-footer">
                    <button><img src="https://dreamwish.co.kr/public/images/menu/store.svg" alt="상점" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/live.svg" alt="라이브" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/make.svg" alt="광고 만들기" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/chat.svg" alt="채팅" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/profile.svg" alt="프로필" /></button>
                </nav>
            </div>
        )}

        {/* ================= PROFILE SCREEN ================= */}
        {type === 'profile' && (
            <div className="screen-layout">
                {/* FIXED HEADER */}
                <header className="screen-header">
                    <button className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center bg-white p-0 cursor-pointer">
                        <img className="w-5 h-5 invert" src="https://dreamwish.co.kr/public/images/etc/search-icon.png" alt="검색" />
                    </button>
                    <div className="flex gap-1.5">
                        <button className="p-2 rounded-full hover:bg-slate-100 border-0 bg-transparent cursor-pointer">
                            <img className="w-5 h-5 invert" src="https://dreamwish.co.kr/public/images/etc/bell-icon.png" alt="알림" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 bg-transparent border-0 cursor-pointer flex items-center justify-center">
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </header>

                {/* SCROLLABLE BODY */}
                <div className="screen-body">
                    <div className="profile-shell">
                        <div className="profile-shell-header">
                            <span className="profile-shell-label">사업자 프로필</span>
                            <span className="profile-shell-status">프로필을 완성해보세요</span>
                        </div>
                        <div className="profile-top">
                            <div className="profile-avatar">
                                <img src="https://dreamwish.co.kr/public/images/logo/dreamwish-logo.svg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>이름</h2>
                                <div className="profile-stats">
                                    <span>0 광고</span>
                                    <span>0 즐겨찾기</span>
                                </div>
                                <p className="profile-desc">상점에 대한 한 줄 소개를 적어주세요.</p>
                            </div>
                        </div>
                        <div className="profile-highlights">
                            <button className="highlight-item">
                                <div className="highlight-thumb">
                                    <span className="highlight-plus">+</span>
                                </div>
                                <span className="highlight-label">하이라이트</span>
                            </button>
                        </div>
                        <div className="profile-actions">
                            <button>프로필 편집</button>
                            <button>프로필 공유</button>
                            <button>주문 및 예약</button>
                        </div>
                    </div>

                    <div className="profile-tabs">
                        <button 
                            className={`profile-tab-btn ${activeProfileTab === 'live' ? 'active' : ''}`}
                            onClick={() => setActiveProfileTab('live')}
                        >
                            <img src="https://dreamwish.co.kr/public/images/etc/live-profile.png" alt="Live" />
                        </button>
                        <button 
                            className={`profile-tab-btn ${activeProfileTab === 'shorts' ? 'active' : ''}`}
                            onClick={() => setActiveProfileTab('shorts')}
                        >
                            <img src="https://dreamwish.co.kr/public/images/etc/short-profile.png" alt="Shorts" />
                        </button>
                    </div>

                    <div className="p-1">
                        {activeProfileTab === 'live' ? (
                            <div className="feed-empty">
                                <h3>첫 상점 오픈! 수익은 내꺼!</h3>
                                <p>지금이 바로 그 타이밍.</p>
                                <button className="blue-btn">라이브 만들기</button>
                            </div>
                        ) : (
                            <div className="feed-grid">
                                <div className="feed-card"></div>
                                <div className="feed-card"></div>
                                <div className="feed-card"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* FIXED FOOTER */}
                <nav className="screen-footer">
                    <button><img src="https://dreamwish.co.kr/public/images/menu/store.svg" alt="상점" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/live.svg" alt="라이브" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/make.svg" alt="광고 만들기" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/chat.svg" alt="채팅" /></button>
                    <button><img src="https://dreamwish.co.kr/public/images/menu/profile.svg" alt="프로필" /></button>
                </nav>
            </div>
        )}
      </div>
    </div>
  );
};