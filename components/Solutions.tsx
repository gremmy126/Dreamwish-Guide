import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionItem } from '../types';

const solutionItems: SolutionItem[] = [
  {
    id: 1,
    title: '데이터기반 매출관리',
    description: 'Solution 1',
    benefit: '돈·시간이 낭비되는 지점을 줄여 매달 운영 효율이 대폭 상승한다.',
  },
  {
    id: 2,
    title: '라이브 광고 시스템',
    description: 'Solution 2',
    benefit: '라이브 시청자 → 상점 즐겨찾기 등록 → 재방문 알림. 이 흐름이 전환율을 자연스럽게 끌어올립니다.',
  },
  {
    id: 3,
    title: '쿠폰, 이벤트발행',
    description: 'Solution 3',
    benefit: '라이브 광고와 연동된 유일한 ‘실시간 쿠폰·이벤트 시스템’',
  },
];

const Solutions: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Solution</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">문제에 대한 우리의 명쾌한 해결책</h3>
          <p className="text-slate-600">
            앞서 제시한 문제점을 회사의 제품/서비스가 어떻게 명쾌하게 해결하는지 직관적으로 설명하세요.<br className="hidden md:block" />
            '우리는 핵심 기술과 방식을 통해 고객의 문제를 해결합니다' 형식으로 간결하게 표현하는 것이 좋습니다.
          </p>
        </div>

        <div className="space-y-6">
          {solutionItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 group">
              {/* Left: Feature Name */}
              <div className="md:w-1/3 bg-blue-600 rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 flex flex-col justify-center text-center md:text-left text-white relative overflow-hidden shadow-lg z-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                <span className="text-blue-200 text-sm font-medium mb-1">{item.description}</span>
                <h4 className="text-2xl font-bold">{item.title}</h4>
              </div>

              {/* Arrow Connector */}
              <div className="hidden md:flex items-center justify-center -ml-4 -mr-4 z-20 text-slate-300">
                <ArrowRight size={32} strokeWidth={1} className="group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Right: Benefit */}
              <div className="md:w-2/3 bg-slate-100 rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8 flex items-center shadow-inner hover:bg-blue-50 transition-colors duration-300">
                <p className="text-slate-700 font-medium text-lg leading-relaxed group-hover:text-blue-800">
                  {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;