import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Tv, Smartphone, MapPin } from 'lucide-react';

const features = [
  {
    title: "낮은 수수료율",
    desc: "소상공인 분들을 위해 수수료율을 대폭 낮췄습니다. 부담 없이 시작하세요.",
    icon: <Coins className="w-10 h-10 text-white" />,
    bg: "bg-blue-500"
  },
  {
    title: "데이터기반 매출 파악",
    desc: "데이터로 고객이 어떤 단계에서 빠져나가는지 정확하게 파악하여 솔루션을 제공합니다.",
    icon: <MapPin className="w-10 h-10 text-white" />,
    bg: "bg-indigo-500"
  },
  {
    title: "라이브방송 몰입도",
    desc: "현실감 있는 라이브방송으로 더욱 재밌는 방송, 매력적인 상품으로 고객을 단골로 만듭니다.",
    icon: <Tv className="w-10 h-10 text-white" />,
    bg: "bg-purple-500"
  },
  {
    title: "숏폼 마케팅",
    desc: "긴 영상이 부담스럽다면 숏폼으로! 핵심만 짧고 굵게 전달하여 구매를 유도합니다.",
    icon: <Smartphone className="w-10 h-10 text-white" />,
    bg: "bg-pink-500"
  }
];

export const FeatureHighlight: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
            <span className="text-dream-blue font-bold tracking-widest text-sm uppercase mb-2 block">Product & Service</span>
            <h2 className="text-4xl font-black text-gray-900 mb-6">
                우리의 제품과 서비스
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                로컬 비즈니스 성장을 위한 인프라 설계를 목표로 합니다.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-dream-light hover:shadow-xl transition-all duration-300 group"
                >
                    <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mb-6 sm:mb-0 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed word-keep-all">{feature.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};