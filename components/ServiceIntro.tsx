import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '../constants';

export const ServiceIntro: React.FC = () => {
  return (
    <section id={SECTION_IDS.SERVICE_INTRO} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <span className="text-dream-blue font-bold tracking-widest text-sm uppercase mb-2 block">About Service</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  소상공인과 고객을<br/>
                  <span className="text-dream-blue">가장 가깝게</span> 연결합니다
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed word-keep-all">
                  드림위시는 기술의 장벽 없이 누구나 라이브 커머스를 통해 자신의 상품을 알리고 판매할 수 있는 플랫폼입니다. 
                  복잡한 장비나 전문적인 지식 없이도, 스마트폰 하나만 있다면 당신의 가게가 방송국이 됩니다.
              </p>
           </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">가장 빠른 시작</h3>
                <p className="text-gray-600 text-sm">입점 신청부터 방송 시작까지,<br/>불필요한 절차를 모두 없앴습니다.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">상생하는 플랫폼</h3>
                <p className="text-gray-600 text-sm">과도한 수수료와 광고비 경쟁 없이<br/>오직 상품의 가치로 승부하세요.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">강력한 홍보 효과</h3>
                <p className="text-gray-600 text-sm">라이브 방송과 숏폼 콘텐츠로<br/>고객의 시선을 사로잡으세요.</p>
            </div>
        </div>
      </div>
    </section>
  );
};