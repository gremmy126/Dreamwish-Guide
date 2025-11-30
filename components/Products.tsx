
import React from 'react';
import { ProductCoreItem } from '../types';
import { HomeScreen, MakeScreen, OrderScreen } from './MobileScreens';

const coreItems: ProductCoreItem[] = [
  {
    id: 1,
    title: '구독 없고 낮은 수수료율',
    description: '소상공인 분들을 위해 구독을 없애고 수수료율을 대폭 낮췄습니다.',
  },
  {
    id: 2,
    title: '데이터기반 매출 파악',
    description: '데이터로 고객이 어떤 단계에서 빠져나가는지 정확하게 파악합니다.',
  },
  {
    id: 3,
    title: '라이브방송 몰입도',
    description: '현실감있는 라이브방송으로 더욱 재밌는 방송, 매력적인 상품으로 고객들 단골고객으로.',
  },
  {
    id: 4,
    title: '향후 로드맵',
    description: '향후 인플루언서와의 협업을 통해 소상공인의 제품을 더욱 널리 알리고, 매출 증대로 직접 연결되도록 지원합니다.',
  },
];

const Products: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-200 font-bold tracking-wider uppercase mb-2">Product & Service</h2>
          <h3 className="text-4xl font-extrabold mb-4">우리의 제품과 서비스</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            소상공인을 위한 강력한 도구들을 만나보세요.
          </p>
        </div>

        {/* App Screenshot Gallery */}
        <div className="mb-24">
           <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { title: '메인 홈', desc: '상점 관리와 라이브 현황을 한눈에', component: <HomeScreen /> },
                { title: '주문 관리', desc: '직관적인 주문 및 예약 관리', component: <OrderScreen /> },
                { title: '상품 등록', desc: '간편한 상품 및 라이브 설정', component: <MakeScreen /> }
              ].map((screen, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                   <div className="relative w-[280px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-blue-900/50 bg-white">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-5 bg-slate-900 rounded-b-xl z-50 pointer-events-none"></div>
                      <div className="w-full h-full">
                        {screen.component}
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                   </div>
                   <div className="mt-6 text-center">
                      <h4 className="text-xl font-bold">{screen.title}</h4>
                      <p className="text-blue-200 text-sm mt-1">{screen.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="relative">
          {/* Central Desktop Mockup (Abstract) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] z-0 opacity-30 pointer-events-none">
             <div className="bg-white/10 rounded-full w-[600px] h-[600px] blur-[100px]"></div>
          </div>

          {/* Grid for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
            {coreItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white text-slate-900 p-8 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-b-8 border-blue-200`}
              >
                <span className="text-blue-600 font-bold text-sm mb-2 block">Core {item.id}.</span>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
