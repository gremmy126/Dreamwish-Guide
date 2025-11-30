
import React from 'react';
import { 
  CheckCircle2, 
  FileText, 
  UploadCloud, 
  Store, 
  CreditCard, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  Rocket,
  Smartphone
} from 'lucide-react';

const EntryGuide: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-10 md:pt-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
            <Store size={16} /> 셀러 지원 센터
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            드림위시 입점 안내서
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            성공적인 비즈니스의 시작, 드림위시와 함께하세요.<br/>
            복잡한 절차 없이 빠르고 간편하게 상점을 오픈할 수 있습니다.
          </p>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">5,000+</p>
              <p className="text-slate-500 text-sm mt-1">입점 파트너</p>
            </div>
            <div className="w-px bg-slate-700 h-12"></div>
            <div>
              <p className="text-3xl font-bold text-white">DreamPay</p>
              <p className="text-slate-500 text-sm mt-1">즉시 정산</p>
            </div>
            <div className="w-px bg-slate-700 h-12"></div>
            <div>
              <p className="text-3xl font-bold text-white">0원</p>
              <p className="text-slate-500 text-sm mt-1">초기 등록비</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Process</h2>
          <h3 className="text-3xl font-bold text-slate-900">입점 절차 안내</h3>
          <p className="text-slate-500 mt-4">총 4단계로 진행되며, 신청부터 승인까지 평균 3일 이내에 완료됩니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

          {[
            { step: '01', title: '입점 신청', desc: '앱에서 간편 신청', icon: Smartphone },
            { step: '02', title: '서류 심사', desc: '제출 서류 검토', icon: ShieldCheck },
            { step: '03', title: '승인 완료', desc: '판매 권한 부여', icon: CheckCircle2 },
            { step: '04', title: '상품 등록', desc: '상품 판매 시작', icon: UploadCloud },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <div className="text-center">
                <span className="text-blue-600 font-bold text-sm mb-1 block">STEP {item.step}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Checklist Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Documents</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">필요 서류 안내</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                원활한 입점 심사를 위해 아래 서류를 미리 준비해주세요.<br/>
                <strong>드림페이</strong>를 이용하므로 별도의 통장 사본은 필요하지 않습니다.
              </p>
              
              <div className="space-y-4">
                {[
                  '사업자등록증 사본 1부',
                  '통신판매업신고증 사본 1부',
                  '대표자 신분증 사본 (주민번호 뒷자리 마스킹)',
                  '인감증명서 (법인사업자의 경우)'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                       <CheckCircle2 size={14} className="text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-10 blur-2xl"></div>
               <div className="relative bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                  
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Rocket className="text-blue-400" />
                    지금 바로 시작하세요
                  </h4>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    드림위시는 여러분의 꿈을 응원합니다.<br/>
                    지금 앱을 다운로드하고 입점을 신청하세요.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/10">
                    <div className="flex items-start gap-4 mb-4">
                       <CreditCard className="text-blue-300 mt-1" size={24} />
                       <div>
                         <h5 className="font-bold text-white">드림페이 즉시 정산</h5>
                         <p className="text-slate-400 text-sm mt-1">판매 즉시 포인트 적립 (수수료 자동 차감)</p>
                       </div>
                    </div>
                    <div className="w-full h-px bg-white/10 my-4"></div>
                    <div className="flex items-start gap-4">
                       <Store className="text-purple-300 mt-1" size={24} />
                       <div>
                         <h5 className="font-bold text-white">입점비 0원</h5>
                         <p className="text-slate-400 text-sm mt-1">가입비 및 연회비 평생 무료</p>
                       </div>
                    </div>
                  </div>

                  <a 
                    href="http://pf.kakao.com/_CLran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 transition-all flex items-center justify-center gap-2 group"
                  >
                    입점 신청하기 (앱 다운로드)
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold text-slate-900">자주 묻는 질문</h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: '입점 심사 기간은 얼마나 걸리나요?', a: '입점 신청 후 영업일 기준 약 1~3일 정도 소요됩니다. 제출 서류에 미비한 점이 있을 경우 보완 요청으로 인해 기간이 늘어날 수 있습니다.' },
            { q: '개인 판매자도 입점이 가능한가요?', a: '현재 드림위시는 사업자 등록이 완료된 개인사업자 및 법인사업자만 입점이 가능합니다.' },
            { q: '정산은 언제 이루어지나요?', a: '드림위시는 "드림페이"를 통해 정산 주기가 없이 판매 즉시 정산됩니다. 수수료를 제외한 금액이 포인트로 즉시 적립되며 바로 사용하거나 출금하실 수 있습니다.' },
            { q: '광고는 어떻게 진행하나요?', a: '광고 예산을 설정하기 위해 드림페이 포인트를 충전하거나 판매 수익인 드림페이 포인트를 사용하여 자유롭게 광고를 집행하실 수 있습니다.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-blue-600">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EntryGuide;
