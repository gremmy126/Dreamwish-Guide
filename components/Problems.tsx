import React from 'react';
import { Gauge, Banknote, HelpCircle } from 'lucide-react';
import { ProblemItem } from '../types';

const problemItems: ProblemItem[] = [
  {
    id: 1,
    title: 'Problem 1',
    subtitle: '비효율성',
    description: '네이버·인스타 광고로 매달 30만~90만 원을 써도 매출이 0원일 확률이 높다.',
    icon: Gauge,
  },
  {
    id: 2,
    title: 'Problem 2',
    subtitle: '높은 비용',
    description: '판매 수수료 10~40%로 인해 매출의 절반 가까이가 사라진다.',
    icon: Banknote,
  },
  {
    id: 3,
    title: 'Problem 3',
    subtitle: '정보 부족',
    description: '광고·마케팅 정보가 지나치게 복잡하고 최종적으로 사업포기율이 상승한다.',
    icon: HelpCircle,
  },
];

const Problems: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Problem</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">우리가 해결하려는 문제의 핵심</h3>
          <p className="text-slate-600 text-lg">
            광고를 하고 싶어도, 돈·방법·시간이 없다.<br />
            광고비는 계속 오르는데, 매출은 그대로... 오히려 떨어진다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problemItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Phone Frame Aesthetic Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-10"></div>
              <div className="absolute inset-0 border-[10px] border-slate-900 rounded-[2.5rem] pointer-events-none z-0 group-hover:border-slate-800"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center pt-8 h-full">
                <span className="text-blue-600 font-semibold text-sm mb-8">{item.title}</span>
                
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problems;