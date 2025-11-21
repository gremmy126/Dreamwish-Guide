import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '../constants';
import { MessageCircle, CheckCircle, Store, Video } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "입점 신청",
        desc: "카카오톡 채널을 통해 간편하게 입점 신청서를 작성합니다.",
        icon: <MessageCircle className="w-8 h-8 text-white" />,
        color: "bg-[#FEE500] text-black border-yellow-400"
    },
    {
        id: 2,
        title: "상담 및 승인",
        desc: "담당 매니저와 1:1 상담 후 입점 승인이 완료됩니다.",
        icon: <CheckCircle className="w-8 h-8 text-white" />,
        color: "bg-green-500 border-green-600"
    },
    {
        id: 3,
        title: "스토어 설정",
        desc: "사장님만의 모바일 스토어를 개설하고 상품을 등록합니다.",
        icon: <Store className="w-8 h-8 text-white" />,
        color: "bg-blue-500 border-blue-600"
    },
    {
        id: 4,
        title: "라이브 시작",
        desc: "언제 어디서나 라이브 방송을 켜고 고객과 소통하며 판매합니다.",
        icon: <Video className="w-8 h-8 text-white" />,
        color: "bg-red-500 border-red-600"
    }
];

export const UserGuide: React.FC = () => {
  return (
    <section id={SECTION_IDS.USER_GUIDE} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <span className="text-dream-blue font-bold tracking-widest text-sm uppercase mb-2 block">User Guide</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                드림위시 이용 가이드
            </h2>
            <p className="text-gray-600">
                복잡한 서류 절차 없이 4단계로 바로 시작할 수 있습니다.
            </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

            <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 ${step.color.includes('bg-[#FEE500]') ? 'border-yellow-200' : step.color.replace('bg-', 'border-').replace('500', '200')} ${step.color.split(' ')[0]} mb-6 transition-transform hover:scale-110`}>
                            {step.icon}
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm w-full h-full border border-gray-100">
                            <div className="text-dream-blue font-black text-lg mb-2">STEP {step.id}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm word-keep-all">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 text-gray-600 text-sm">
                💡 입점 승인 후 초기 세팅은 드림위시 운영팀에서 <span className="font-bold text-dream-blue">무료로 지원</span>해드립니다.
            </div>
        </div>
      </div>
    </section>
  );
};