
import React from 'react';

// ==========================================
// SCALING SCRIPT
// ==========================================
const ResizeScript = `
  <script>
    function resize() {
      const baseWidth = 375;
      // Use offsetWidth to get the container width, fallback to innerWidth
      const availableWidth = document.documentElement.offsetWidth || window.innerWidth;
      const scale = availableWidth / baseWidth;
      
      const root = document.getElementById('app-root');
      if (root) {
        root.style.transform = 'scale(' + scale + ')';
        root.style.transformOrigin = 'top left';
        root.style.width = baseWidth + 'px';
        // Calculate height to fill the iframe exactly based on the scale
        const availableHeight = document.documentElement.offsetHeight || window.innerHeight;
        root.style.height = (availableHeight / scale) + 'px';
      }
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resize);
    window.addEventListener('DOMContentLoaded', resize);
    // Trigger immediately
    resize();
  </script>
`;

// ==========================================
// 1. HOME SCREEN
// ==========================================
const HomeHTML = `
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", Roboto, sans-serif; background: #fff; color: #111; margin: 0; padding: 0; overflow: hidden; }
    
    #app-root { width: 375px; background: #fff; min-height: 100vh; position: relative; display: flex; flex-direction: column; }

    /* Header */
    .header { height: 56px; display: flex; justify-content: space-between; align-items: center; padding: 0 16px; flex-shrink: 0; }
    .search-btn { width: 36px; height: 36px; border-radius: 50%; border: 0; display: flex; align-items: center; justify-content: center; background: #f8fafc; }
    .search-btn img { width: 18px; opacity: 0.6; }
    .header-right { display: flex; gap: 8px; }
    .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
    .icon-btn img { width: 24px; }
    .menu-icon { width: 24px; height: 24px; stroke: #1e293b; stroke-width: 2; fill: none; }

    /* Hero Banner */
    .hero-wrap { padding: 4px 16px 16px; flex-shrink: 0; }
    .hero { background: #020617; border-radius: 20px; padding: 24px 20px; color: #fff; position: relative; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
    .hero::after { content: ''; position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%); border-radius: 50%; filter: blur(40px); z-index: 0; }
    .hero-content { position: relative; z-index: 1; }
    
    .hero-tag { display: inline-block; font-size: 11px; color: #93c5fd; background: rgba(30, 58, 138, 0.5); padding: 4px 8px; border-radius: 100px; margin-bottom: 10px; border: 1px solid rgba(96, 165, 250, 0.3); }
    .hero h1 { font-size: 22px; font-weight: 700; line-height: 1.35; margin-bottom: 10px; letter-spacing: -0.5px; }
    .hero p { font-size: 12px; color: #cbd5e1; margin-bottom: 20px; line-height: 1.5; opacity: 0.9; }
    
    .hero-btns { display: flex; gap: 10px; margin-bottom: 20px; }
    .btn-primary { flex: 1; background: #2563eb; color: #fff; border: none; height: 40px; border-radius: 10px; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
    .btn-secondary { flex: 1; background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); height: 40px; border-radius: 10px; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
    
    .hero-footer { display: flex; justify-content: space-between; font-size: 10px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; }
    .hero-footer span strong { color: #fff; margin-left: 4px; }

    /* Categories */
    .section { padding: 16px; flex: 1; }
    .section-title { font-size: 16px; font-weight: 700; margin-bottom: 16px; color: #0f172a; display: flex; justify-content: space-between; align-items: center; }
    .cat-tabs { display: flex; gap: 8px; margin-bottom: 20px; }
    .cat-tab { padding: 8px 14px; border-radius: 100px; font-size: 13px; font-weight: 600; border: 1px solid #e2e8f0; background: #fff; color: #64748b; white-space: nowrap; }
    .cat-tab.active { background: #0f172a; color: #fff; border-color: #0f172a; }

    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px 8px; }
    .grid-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .grid-icon { width: 52px; height: 52px; border-radius: 20px; background: #f8fafc; border: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; }
    .grid-icon img { width: 32px; height: 32px; object-fit: contain; }
    .grid-label { font-size: 11px; color: #475569; font-weight: 500; letter-spacing: -0.5px; text-align: center; }
    
    .today-live { margin-top: 24px; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px; }
    .today-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .today-title { font-size: 15px; font-weight: 700; }
    .today-link { font-size: 12px; color: #2563eb; font-weight: 600; }
    .today-empty { background: #f8fafc; border-radius: 8px; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px; }

    /* Bottom Nav */
    .nav { height: 56px; background: #fff; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-around; align-items: center; margin-top: auto; flex-shrink: 0; }
    .nav-item { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; height: 100%; }
    .nav-icon { width: 24px; height: 24px; opacity: 0.4; }
    .nav-item.active .nav-icon { opacity: 1; filter: brightness(0); }
  </style>
</head>
<body>
  <div id="app-root">
    <header class="header">
      <div class="search-btn"><img src="https://dreamwish.co.kr/public/images/etc/search-icon.png"></div>
      <div class="header-right">
        <div class="icon-btn"><img src="https://dreamwish.co.kr/public/images/etc/bell-icon.png"></div>
        <div class="icon-btn">
            <svg class="menu-icon" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </header>

    <div class="hero-wrap">
      <div class="hero">
        <div class="hero-content">
            <span class="hero-tag">사업자를 위한 라이브커머스 홈</span>
            <h1>사장님의 상점을<br>라이브로 키우는 첫 화면</h1>
            <p>상점 만들기부터 라이브 방송, 숏폼 광<br>고까지 한 화면에서 관리해 보세요.</p>
            <div class="hero-btns">
            <div class="btn-primary">상점 신청</div>
            <div class="btn-secondary">라이브 관리</div>
            </div>
            <div class="hero-footer">
                <span>오늘 신청된 상점 수 <strong>124</strong></span>
                <span>최근 방송 유지율 <strong>98%</strong></span>
            </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">우리 업종 선택하기</div>
      <div class="cat-tabs">
        <div class="cat-tab active">식품</div>
        <div class="cat-tab">패션</div>
        <div class="cat-tab">미용</div>
        <div class="cat-tab">기타 서비스</div>
      </div>
      <div class="grid">
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/meat.png"></div><span class="grid-label">정육/가공</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/fish.png"></div><span class="grid-label">수산/해산물</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/vegetable.png"></div><span class="grid-label">농산물</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/tea.png"></div><span class="grid-label">건강식품</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/kimchi.png"></div><span class="grid-label">반찬/즉석</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/hotdog.png"></div><span class="grid-label">간편식</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/Local-products.png"></div><span class="grid-label">지역 특산물</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/bakery.png"></div><span class="grid-label">베이커리</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/juice.png"></div><span class="grid-label">주스</span></div>
        <div class="grid-item"><div class="grid-icon"><img src="https://dreamwish.co.kr/public/images/food/fruit.png"></div><span class="grid-label">과일</span></div>
      </div>
      
      <div class="today-live">
        <div class="today-head">
            <span class="today-title">오늘의 라이브</span>
            <span class="today-link">라이브 관리</span>
        </div>
        <div class="today-empty">진행 중인 라이브가 없습니다.</div>
      </div>
    </div>

    <div class="nav">
      <div class="nav-item active"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/store.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/live.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/make.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/chat.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/profile.svg"></div>
    </div>
  </div>
  ${ResizeScript}
</body>
</html>
`;

// ==========================================
// 2. PROFILE SCREEN
// ==========================================
const ProfileHTML = `
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { margin: 0; font-family: 'Pretendard', 'Noto Sans KR', sans-serif; background: #0f172a; color: #111827; overflow: hidden; }
    
    #app-root { width: 375px; min-height: 100vh; background: radial-gradient(circle at top left, #e0f2fe 0, #ffffff 40%, #f9fafb 100%); position: relative; display: flex; flex-direction: column; }
    
    .header { display: flex; justify-content: space-between; align-items: center; height: 56px; padding: 0 16px; flex-shrink: 0; }
    .header .search-btn { background: #fff; border: 1px solid rgba(148, 163, 184, 0.45); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .header .searchImg { width: 18px; opacity: 0.7; }
    .header-icons { display: flex; gap: 8px; }
    .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
    .icon-btn img { width: 20px; opacity: 0.7; }
    .menu-icon { width: 24px; height: 24px; stroke: #333; stroke-width: 2; fill: none; }

    .profile-main { padding: 8px 16px 16px; flex: 1; }
    .profile-card { background: linear-gradient(135deg, #eff6ff, #e0f2fe); border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1); margin-top: 4px; margin-bottom: 12px; position: relative; overflow: hidden; border: 1px solid #dbeafe; }
    .profile-card::before { content: ''; position: absolute; inset: -40px 40%; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.2), transparent 60%); opacity: 0.7; }
    
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; position: relative; z-index: 2; }
    .card-label { font-size: 11px; color: #1d4ed8; font-weight: 700; padding: 4px 10px; border-radius: 100px; background: #fff; box-shadow: 0 2px 6px rgba(37,99,235,0.1); }
    .card-status { font-size: 11px; color: #64748b; }

    .card-body { position: relative; display: flex; align-items: center; gap: 16px; margin-bottom: 16px; z-index: 2; }
    .avatar { width: 72px; height: 72px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 4px 12px rgba(37,99,235,0.15); background: #fff; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .avatar img { width: 100%; height: 100%; object-fit: cover; }
    
    .info h2 { margin: 0 0 4px; font-size: 18px; font-weight: 700; color: #0f172a; }
    .stats { display: flex; gap: 8px; font-size: 11px; color: #475569; margin-bottom: 6px; }
    .stats span { padding: 2px 8px; border-radius: 6px; background: rgba(255,255,255,0.6); }
    .desc { margin: 0; font-size: 12px; color: #64748b; }

    .highlights { display: flex; gap: 10px; margin-bottom: 16px; }
    .hl-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .hl-circle { width: 50px; height: 50px; border-radius: 50%; border: 2px dashed #93c5fd; display: flex; align-items: center; justify-content: center; background: #fff; color: #3b82f6; font-size: 24px; }
    .hl-text { font-size: 10px; color: #64748b; }

    .actions { display: flex; gap: 8px; }
    .act-btn { flex: 1; border: none; border-radius: 10px; background: #fff; font-size: 11px; padding: 10px 0; color: #334155; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.03); text-align: center; }

    .tabs { margin-top: 24px; padding: 0 16px; display: flex; justify-content: center; gap: 60px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; }
    .tab { opacity: 0.4; position: relative; padding-bottom: 8px; }
    .tab.active { opacity: 1; }
    .tab.active::after { content: ""; position: absolute; bottom: -11px; left: 0; width: 100%; height: 2px; background: #2563eb; }
    .tab img { width: 24px; height: 24px; }

    .content-area { padding: 40px 16px; text-align: center; }
    .empty-state h3 { margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #1e293b; }
    .empty-state p { margin: 0 0 20px; font-size: 12px; color: #64748b; }
    .cta-btn { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #fff; border: none; padding: 14px 32px; border-radius: 100px; font-size: 14px; font-weight: 700; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3); display: inline-block; }

    .nav { height: 56px; background: #fff; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-around; align-items: center; margin-top: auto; flex-shrink: 0; }
    .nav-item { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; height: 100%; }
    .nav-icon { width: 24px; height: 24px; opacity: 0.4; }
    .nav-item.active .nav-icon { opacity: 1; filter: brightness(0); }
  </style>
</head>
<body>
  <div id="app-root">
    <header class="header">
      <div class="search-btn"><img class="searchImg" src="https://dreamwish.co.kr/public/images/etc/search-icon.png"></div>
      <div class="header-icons">
        <div class="icon-btn"><img src="https://dreamwish.co.kr/public/images/etc/bell-icon.png"></div>
        <div class="icon-btn">
            <svg class="menu-icon" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </header>

    <div class="profile-main">
      <div class="profile-card">
        <div class="card-header">
          <span class="card-label">사업자 프로필</span>
          <span class="card-status">프로필을 완성해보세요</span>
        </div>
        <div class="card-body">
          <div class="avatar">
            <img src="https://dreamwish.co.kr/public/images/logo/dreamwish-logo.svg" alt="프로필" />
          </div>
          <div class="info">
            <h2>이름</h2>
            <div class="stats"><span>0 광고</span><span>0 즐겨찾기</span></div>
            <p class="desc">상점에 대한 한 줄 소개를 적어주세요.</p>
          </div>
        </div>
        <div class="highlights">
          <div class="hl-item"><div class="hl-circle">+</div><span class="hl-text">하이라이트</span></div>
        </div>
        <div class="actions">
          <div class="act-btn">프로필 편집</div>
          <div class="act-btn">프로필 공유</div>
          <div class="act-btn">주문 및 예약</div>
        </div>
      </div>

      <div class="tabs">
        <div class="tab active"><img src="https://dreamwish.co.kr/public/images/etc/live-profile.png" /></div>
        <div class="tab"><img src="https://dreamwish.co.kr/public/images/etc/short-profile.png" /></div>
      </div>

      <div class="content-area">
        <div class="empty-state">
          <h3>첫 상점 오픈! 수익은 내꺼!</h3>
          <p>지금이 바로 그 타이밍.</p>
          <div class="cta-btn">라이브 만들기</div>
        </div>
      </div>
    </div>
    
    <div class="nav">
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/store.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/live.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/make.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/chat.svg"></div>
      <div class="nav-item active"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/profile.svg"></div>
    </div>
  </div>
  ${ResizeScript}
</body>
</html>
`;

// ==========================================
// 3. MAKE SCREEN
// ==========================================
const MakeHTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { margin: 0; padding: 0; font-family: 'Noto Sans KR', sans-serif; background: radial-gradient(circle at 15% 90%, rgba(37, 98, 174, 0.22) 0, transparent 55%), linear-gradient(135deg, #020617 0%, #0b1220 35%, #111827 70%, #020617 100%); color: #f1f5f9; overflow: hidden; }
    
    #app-root { width: 375px; min-height: 100vh; position: relative; display: flex; flex-direction: column; }
    
    .header { height: 56px; padding: 0 16px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .back-btn { background: rgba(255, 255, 255, 0.1); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
    .back-icon { width: 18px; height: 18px; stroke: #38bdf8; stroke-width: 2; fill: none; }
    .header-icons { display: flex; gap: 8px; }
    .icon-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
    .icon-btn img { width: 20px; filter: invert(1); opacity: 0.8; }
    .menu-icon { width: 20px; height: 20px; stroke: #fff; stroke-width: 2; fill: none; }

    .filter-bar { flex-shrink: 0; display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(15, 23, 42, 0.95); }
    .filter-btn { display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; font-size: 11px; border-radius: 100px; border: 1px solid rgba(148, 163, 184, 0.6); background: rgba(30, 41, 59, 0.6); color: #e5e7eb; white-space: nowrap; }
    .next-btn { margin-left: auto; border-radius: 100px; padding: 6px 16px; font-size: 11px; font-weight: 700; background: linear-gradient(135deg, #2562ae, #38bdf8); color: #fff; opacity: 0.5; }

    .main-content { flex: 1; padding: 16px; }
    .input-box { width: 100%; border-radius: 12px; border: 1px solid rgba(148, 163, 184, 0.5); background: rgba(15, 23, 42, 0.5); color: #e5e7eb; padding: 12px; font-size: 12px; margin-bottom: 10px; display: block; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
    .img-placeholder { border-radius: 16px; border: 1px dashed rgba(148, 163, 184, 0.6); background: rgba(30, 41, 59, 0.4); color: rgba(203, 213, 225, 0.7); font-size: 11px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px 10px; height: 100px; line-height: 1.4; }
    
    .bottom-tabs { position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%); width: 92%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 6px; background: rgba(15, 23, 42, 0.95); border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); z-index: 60; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .tab-btn { border-radius: 100px; padding: 8px 0; font-size: 11px; color: rgba(209, 213, 219, 0.7); background: transparent; text-align: center; font-weight: 500; }
    .tab-btn.active { background: #2562ae; color: #fff; font-weight: 700; box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4); }

    .nav { height: 54px; background-color: #020617; display: flex; justify-content: space-around; align-items: center; border-top: 1px solid rgba(30, 64, 175, 0.3); margin-top: auto; flex-shrink: 0; }
    .nav-item { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; height: 100%; }
    .nav-icon { width: 24px; height: 24px; filter: invert(1); opacity: 0.4; }
    .nav-item.active .nav-icon { opacity: 1; }
  </style>
</head>
<body>
  <div id="app-root">
    <header class="header">
      <div class="back-btn"><svg class="back-icon" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="header-icons">
        <div class="icon-btn"><img src="https://dreamwish.co.kr/public/images/etc/bell-icon.png"></div>
        <div class="icon-btn"><svg class="menu-icon" viewBox="0 0 20 20"><path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>
    </header>
    <div class="filter-bar">
      <div class="filter-btn">텍스트 굵기 ▾</div><div class="filter-btn">폰트 ▾</div><div class="filter-btn">텍스트 크기 ▾</div>
      <div class="next-btn">다음</div>
    </div>
    <div class="main-content">
      <div class="input-box">라이브 광고 제목을 임팩트있게 적어주세요.</div>
      <div class="input-box" style="height:50px; color:#94a3b8;">설명을 간략하게 2줄이상 적어주세요.</div>
      <div class="input-box" style="margin-top:4px; opacity:0.7">설명을 간략하게 2줄이상 적어주세요. 적어주세요.</div>
      <div class="input-box">수량을 적어주세요 (예: 1팩)</div>
      
      <div class="grid-2" style="margin-top:16px">
        <div class="img-placeholder">상점 썸네일을<br>선택해주세요.</div><div class="img-placeholder">상점 썸네일을<br>선택해주세요.</div>
      </div>
      <div class="grid-2">
        <div class="img-placeholder">사진을 선택해주세요.</div><div class="img-placeholder">사진을 선택해주세요.</div>
      </div>
      
      <div class="input-box" style="background:rgba(30,41,59,0.8); margin-top:10px;">텍스트를 입력하세요</div>
    </div>
    
    <div class="bottom-tabs">
      <div class="tab-btn active">라이브</div><div class="tab-btn">숏폼</div><div class="tab-btn">하이라이트</div><div class="tab-btn">배너</div>
    </div>
    
    <div class="nav">
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/store.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/live.svg"></div>
      <div class="nav-item active"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/make.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/chat.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/profile.svg"></div>
    </div>
  </div>
  ${ResizeScript}
</body>
</html>
`;

// ==========================================
// 4. ORDER SCREEN
// ==========================================
const OrderHTML = `
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", Roboto, sans-serif; background: #f1f5f9; color: #111; margin: 0; padding: 0; overflow: hidden; }
    
    #app-root { width: 375px; background: #f1f5f9; min-height: 100vh; position: relative; display: flex; flex-direction: column; }

    /* Header */
    .header { height: 56px; display: flex; justify-content: space-between; align-items: center; padding: 0 16px; background: #fff; flex-shrink: 0; border-bottom: 1px solid #e2e8f0; }
    .header-left { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; color: #1e293b; }
    .back-icon { width: 24px; height: 24px; stroke: #2563eb; stroke-width: 2; fill: none; }
    .header-right { display: flex; gap: 12px; }
    .header-icon { width: 24px; height: 24px; stroke: #2563eb; stroke-width: 2; fill: none; }
    .bell-icon { fill: #2563eb; stroke: none; }

    /* Tabs */
    .tabs { display: flex; height: 48px; background: #fff; border-bottom: 1px solid #e2e8f0; flex-shrink: 0; }
    .tab { flex: 1; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #64748b; }
    .tab.active { background: #2563eb; color: #fff; }

    /* Content */
    .content { padding: 16px; flex: 1; overflow-y: auto; }
    .date-row { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 12px; }
    .date-arrow { font-size: 10px; }

    .card { background: #fff; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative; margin: 0 16px; min-height: 300px; display: flex; flex-direction: column; justify-content: center; }
    .card-arrows { position: absolute; top: 50%; width: 100%; left: 0; transform: translateY(-50%); padding: 0 8px; display: flex; justify-content: space-between; pointer-events: none; }
    .nav-arrow { width: 24px; height: 24px; stroke: #2563eb; stroke-width: 2.5; fill: none; pointer-events: auto; }

    .info-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
    .info-item { font-size: 13px; color: #1e293b; font-weight: 500; }
    
    .divider { height: 1px; background: #cbd5e1; margin: 16px 0; }
    
    .total-item { font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
    
    .btn-view { width: 100%; height: 48px; background: #fff; border: 1px solid #e2e8f0; font-size: 15px; font-weight: 800; color: #0f172a; display: flex; align-items: center; justify-content: center; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

    /* Bottom Nav */
    .nav { height: 56px; background: #fff; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-around; align-items: center; margin-top: auto; flex-shrink: 0; }
    .nav-item { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; height: 100%; }
    .nav-icon { width: 24px; height: 24px; opacity: 0.4; }
    .nav-item.active .nav-icon { opacity: 1; filter: brightness(0); }
    .nav-icon-black { filter: brightness(0); opacity: 1; }
  </style>
</head>
<body>
  <div id="app-root">
    <header class="header">
      <div class="header-left">
        <svg class="back-icon" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        주문 및 예약
      </div>
      <div class="header-right">
        <svg class="header-icon bell-icon" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <svg class="header-icon" style="stroke:#2563eb" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </header>

    <div class="tabs">
      <div class="tab active">주문</div>
      <div class="tab">예약</div>
    </div>
    
    <div class="content">
      <div class="date-row">
        <span class="date-arrow">▼</span> 2025년 11월 12일
      </div>
      
      <div style="position:relative">
        <div class="card-arrows" style="left:-32px; width:calc(100% + 64px);">
            <svg class="nav-arrow" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg class="nav-arrow" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="card">
            <div class="info-list">
                <div class="info-item">최소 주문금액</div>
                <div class="info-item">총 주문금액</div>
                <div class="info-item">거래 수수료</div>
                <div class="info-item">할인 적용 여부</div>
                <div class="info-item">배송비</div>
            </div>
            <div class="divider"></div>
            <div class="total-item">결제금액</div>
            <div class="total-item">현재 매출액</div>
        </div>
      </div>
      
      <div class="btn-view">일자별 매출 보기</div>
    </div>

    <div class="nav">
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/store.svg"></div>
      <div class="nav-item"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/live.svg"></div>
      <div class="nav-item"><img class="nav-icon nav-icon-black" src="https://dreamwish.co.kr/public/images/menu/make.svg"></div>
      <div class="nav-item"><img class="nav-icon nav-icon-black" src="https://dreamwish.co.kr/public/images/menu/chat.svg"></div>
      <div class="nav-item active"><img class="nav-icon" src="https://dreamwish.co.kr/public/images/menu/profile.svg"></div>
    </div>
  </div>
  ${ResizeScript}
</body>
</html>
`;

// ==========================================
// EXPORT
// ==========================================
const ScreenFrame = ({ html, bg }: { html: string, bg: string }) => (
  <div className={`w-full h-full ${bg} overflow-hidden relative pointer-events-none select-none`}>
    <iframe 
      srcDoc={html}
      className="w-full h-full border-none block"
      title="Screen Preview"
      tabIndex={-1}
      scrolling="no"
      style={{ pointerEvents: 'none' }} 
    />
    <div className="absolute inset-0 z-50 bg-transparent"></div>
  </div>
);

export const HomeScreen = () => <ScreenFrame html={HomeHTML} bg="bg-white" />;
export const ProfileScreen = () => <ScreenFrame html={ProfileHTML} bg="bg-[#0f172a]" />;
export const MakeScreen = () => <ScreenFrame html={MakeHTML} bg="bg-[#0f172a]" />;
export const OrderScreen = () => <ScreenFrame html={OrderHTML} bg="bg-[#f1f5f9]" />;
