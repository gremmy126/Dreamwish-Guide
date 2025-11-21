import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, HelpCircle, ArrowRight, BarChart3, Video, Gift } from 'lucide-react';

const problems = [
  {
    icon: <AlertTriangle size={40} className="text-gray-400" />,
    title: "비효율성",
    desc: "네이버/인스타 광고로 매달 30~90만원을 써도 매출이 0원일 확률이 높습니다."
  },
  {
    icon: <TrendingDown size={40} className="text-gray-400" />,
    title: "높은 비용",
    desc: "판매 수수료 10~40%로 인해 매출의 절반 가까이가 사라집니다."
  },
  {
    icon: <HelpCircle size={40} className="text-gray-400" />,
    title: "정보 부족",
    desc: "광고/마케팅 정보가 지나치게 복잡하고 최종적으로 사업 포기율이 상승합니다."
  }
];

const solutions = [
  {
    icon: <BarChart3 size={32} className="text-white" />,
    title: "데이터기반 매출관리",
    desc: "돈·시간이 낭비되는 지점을 줄여 매달 운영 효율이 대폭 상승합니다.",
    color: "bg-blue-600"
  },
  {
    icon: <Video size={32} className="text-white" />,
    title: "라이브 광고 시스템",
    desc: "라이브 시청자 → 상점 즐겨찾기 → 재방문 알림. 이 흐름이 전환율을 끌어올립니다.",
    color: "bg-indigo-600"
  },
  {
    icon: <Gift size={32} className="text-white" />,
    title: "쿠폰, 이벤트 발행",
    desc: "라이브 광고와 연동된 유일한 '실시간 쿠폰/이벤트 시스템'을 제공합니다.",
    color: "bg-blue-500"
  }
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl lg:text-4xl font-black text-gray-900 mb-6"
          >
            우리가 해결하려는 문제의 핵심
          </motion.h2>
          <p className="text-lg text-gray-600">
            광고를 하고 싶어도 돈·방법·시간이 없는 사장님들을 위해<br className="hidden md:block" />
            드림위시가 명쾌한 해결책을 제시합니다.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed word-keep-all">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-16">
           <div className="bg-dream-blue text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 animate-bounce">
              Dreamwish Solution <ArrowRight size={20} />
           </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center hover:shadow-lg transition-all"
            >
              <div className={`${item.color} w-full md:w-32 h-32 flex items-center justify-center shrink-0`}>
                 {item.icon}
              </div>
              <div className="p-8 flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-dream-blue mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
              <div className="hidden md:block pr-8 text-gray-300 group-hover:text-dream-blue transition-colors">
                <ArrowRight size={32} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};