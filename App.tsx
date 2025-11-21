import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceIntro } from './components/ServiceIntro';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureHighlight } from './components/FeatureHighlight';
import { UserGuide } from './components/UserGuide';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { LINKS } from './constants';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LegalModal, LegalType } from './components/LegalModal';

const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<LegalType>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <ServiceIntro />

        <ProblemSolution />
        
        <FeatureHighlight />

        <UserGuide />

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-dream-dark text-white text-center">
           <div className="container mx-auto px-4">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
              >
                  <div className="inline-block bg-blue-600/30 text-blue-200 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
                    지금 신청하면 1개월 무료!
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                    첫 상점 오픈! 수익은 내꺼!<br/>
                    지금이 바로 그 타이밍.
                  </h2>
                  <p className="text-xl text-blue-200 mb-12">
                    버튼 하나로 입점신청을 빠르고 간편하게 시작하세요.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6">
                    <Button 
                        href={LINKS.KAKAO_ENTRY} 
                        className="bg-[#FEE500] text-[#191919] hover:bg-[#FDD835] min-w-[240px] shadow-lg shadow-yellow-500/20"
                    >
                        <span className="flex items-center gap-2">
                            <MessageCircle className="fill-current" />
                            카카오톡으로 무료 입점 신청
                        </span>
                    </Button>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 space-y-1">
                    <p>* 카카오 채널에서 1:1 상담이 진행됩니다.</p>
                    <p>* 무료 기간 중에도 판매 발생 시 거래 수수료는 별도로 부과됩니다.</p>
                  </div>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer 
        onOpenTerms={() => setLegalModalType('terms')} 
        onOpenPrivacy={() => setLegalModalType('privacy')} 
      />

      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
};

export default App;