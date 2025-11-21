import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export type LegalType = 'terms' | 'privacy' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b bg-white shrink-0">
            <h2 className="text-xl font-bold text-gray-900">
              {type === 'terms' ? '이용약관 및 환불 정책' : '개인정보처리방침'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="text-gray-500" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {type === 'terms' ? <RefundPolicyContent /> : <PrivacyPolicyContent />}
          </div>

          <div className="p-4 border-t bg-gray-50 flex justify-end shrink-0">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Table = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="overflow-x-auto my-4 border rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r last:border-r-0">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2 whitespace-nowrap text-xs border-r last:border-r-0">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RefundPolicyContent = () => (
  <div className="space-y-8">
    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">1. 기본 원칙</h3>
      <p>드림위시는 판매자(사업자)와 구매자를 연결하는 중개 플랫폼입니다.</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><strong>판매자 귀책 사유:</strong> 판매자가 환불 책임을 부담합니다.</li>
        <li><strong>플랫폼 귀책 사유:</strong> 플랫폼이 환불 책임을 부담합니다.</li>
        <li><strong>구매자 귀책 사유:</strong> 판매자의 환불 정책에 따릅니다.</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">2. 환불 책임 주체</h3>
      
      <div className="mb-4">
        <h4 className="font-bold text-gray-800 mb-2">2-1. 판매자 책임 사유</h4>
        <p className="mb-2">다음의 경우 판매자가 환불 책임을 부담합니다:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>판매자가 서비스/상품을 제공하지 않은 경우</li>
          <li>제공된 서비스/상품이 게시된 설명과 현저히 다른 경우</li>
          <li>서비스/상품에 하자가 있는 경우</li>
          <li>판매자의 일방적인 거래 취소</li>
          <li>판매자가 약속한 기한 내 서비스를 제공하지 못한 경우</li>
          <li>판매자의 부적절한 행위로 서비스 제공이 불가능한 경우</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-bold text-gray-800 mb-2">2-2. 플랫폼 책임 사유</h4>
        <p className="mb-2">다음의 경우 플랫폼이 환불 책임을 부담합니다:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>플랫폼 시스템 오류로 인한 중복 결제</li>
          <li>플랫폼 시스템 장애로 서비스 이용이 불가능한 경우</li>
          <li>플랫폼의 잘못된 정보 제공으로 인한 피해</li>
          <li>결제 시스템 오류</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 mb-2">2-3. 구매자 책임 사유</h4>
        <p className="mb-2">다음의 경우 환불이 제한되거나 판매자의 환불 정책을 따릅니다:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>구매자의 단순 변심</li>
          <li>구매자의 착오로 인한 잘못된 주문</li>
          <li>구매자가 제공해야 할 정보를 제공하지 않아 서비스 제공이 지연된 경우</li>
          <li>서비스 이용 시작 후 구매자의 사정으로 취소하는 경우</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">3. 환불 가능 기간 및 조건</h3>
      <Table 
        headers={['시점', '구매자 변심', '판매자 귀책', '플랫폼 귀책']}
        rows={[
          ['거래 확정 전', '판매자 정책에 따름', '전액 환불', '전액 환불'],
          ['서비스 진행 중', '판매자 정책에 따름', '부분/전액 환불', '전액 환불'],
          ['서비스 완료 후', '환불 불가', '하자 발견 시 가능 (7일 이내)', '환불 불가']
        ]}
      />
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">4. 수수료 환불 규정</h3>
      <p className="font-semibold mb-2">플랫폼 수수료 환불 기준표</p>
      <Table 
        headers={['상황', '서비스 금액 환불', '수수료 환불', '환불 책임자']}
        rows={[
          ['서비스 시작 전 취소 (판매자 동의)', '100%', '100%', '판매자'],
          ['판매자 귀책으로 취소', '100%', '100%', '판매자'],
          ['플랫폼 오류', '100%', '100%', '플랫폼'],
          ['서비스 시작 후 구매자 변심', '판매자 정책에 따름', '환불 불가', '판매자'],
          ['서비스 완료 후 하자 발견', '판매자와 협의', '환불 불가', '판매자'],
          ['서비스 정상 완료', '환불 불가', '환불 불가', '-'],
        ]}
      />
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
        <strong className="block mb-2 text-gray-900">수수료 관련 중요 사항:</strong>
        <ul className="list-disc pl-5 text-xs space-y-1 text-gray-600">
          <li>거래가 성사되어 서비스가 시작된 경우, 플랫폼 수수료는 이미 발생한 것으로 간주됩니다.</li>
          <li>판매자 귀책 사유로 환불 시, 판매자는 서비스 금액과 수수료를 모두 부담합니다.</li>
          <li>플랫폼 귀책 사유로 환불 시, 플랫폼이 수수료를 환불합니다.</li>
          <li>구매자 단순 변심의 경우, 수수료는 환불되지 않으며 서비스 금액 환불은 판매자 정책에 따릅니다.</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">5. 환불 신청 방법</h3>
      <div className="space-y-2">
        <p><span className="font-bold">5-1. 신청 경로</span></p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>앱/웹사이트: 드림위시 내 '환불 신청' 기능</li>
          <li>이메일: support@dreamwish.co.kr</li>
          <li>고객센터: 010-9110-8716 (평일 09:00~18:00)</li>
        </ul>
        
        <p className="mt-4"><span className="font-bold">5-2. 필요 정보</span></p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>주문번호</li>
          <li>환불 사유 (구체적으로 작성)</li>
          <li>증빙 자료 (해당 시: 사진, 대화 내용 등)</li>
          <li>환불 받으실 계좌 정보</li>
        </ul>

        <p className="mt-4"><span className="font-bold">5-3. 신청 기한</span></p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>서비스 시작 전: 언제든지 가능 (판매자 동의 필요)</li>
          <li>서비스 진행 중: 문제 발생 즉시</li>
          <li>서비스 완료 후: 하자 발견 시 7일 이내</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">6. 환불 처리 절차</h3>
      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <strong className="text-red-800 block mb-2">6-1. 판매자 귀책 사유 환불</strong>
          <div className="text-sm text-gray-700 space-y-1">
             <p>1단계: 구매자 환불 신청</p>
             <p>↓</p>
             <p>2단계: 플랫폼 사실 확인 (1~3영업일)</p>
             <p>↓</p>
             <p>3단계: 판매자에게 소명 기회 제공</p>
             <p>↓</p>
             <p>4단계: 환불 승인/거부 결정</p>
             <p>↓</p>
             <p>5단계: 환불 처리 (승인 후 3~7영업일)</p>
          </div>
          <p className="mt-2 text-xs font-bold text-red-600">* 판매자가 환불 금액 및 수수료 전액 부담</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong className="text-blue-800 block mb-2">6-2. 플랫폼 귀책 사유 환불</strong>
          <div className="text-sm text-gray-700 space-y-1">
             <p>1단계: 구매자 환불 신청</p>
             <p>↓</p>
             <p>2단계: 플랫폼 오류 확인 (1영업일)</p>
             <p>↓</p>
             <p>3단계: 환불 승인 및 처리 (1~3영업일)</p>
          </div>
          <p className="mt-2 text-xs font-bold text-blue-600">* 플랫폼이 전액 환불</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <strong className="text-gray-800 block mb-2">6-3. 구매자 변심 환불</strong>
          <div className="text-sm text-gray-700 space-y-1">
             <p>1단계: 구매자 환불 요청</p>
             <p>↓</p>
             <p>2단계: 판매자에게 환불 요청 전달</p>
             <p>↓</p>
             <p>3단계: 판매자의 환불 정책에 따라 처리</p>
             <p>↓</p>
             <p>4단계: 판매자 승인 시 환불 (3~7영업일)</p>
          </div>
          <p className="mt-2 text-xs font-bold text-gray-600">* 수수료는 환불 불가</p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">7. 분쟁 조정</h3>
      <div className="pl-4 border-l-4 border-dream-blue">
        <p className="font-bold mb-2">판매자와 구매자 간 환불 관련 의견이 다를 경우:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>1차 협의: 당사자 간 직접 협의 (플랫폼 채팅 이용 권장)</li>
          <li>2차 중재: 플랫폼 고객센터 개입 및 중재</li>
          <li>3차 조정: 증빙 자료 검토 후 플랫폼 최종 판단</li>
          <li>법적 절차: 소비자보호원, 법원 등 외부 기관 이용</li>
        </ol>
      </div>
      <div className="mt-4">
        <p className="font-bold mb-2">플랫폼의 판단 기준:</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>서비스 제공 내역 확인</li>
          <li>양측의 채팅/메시지 기록</li>
          <li>결제 및 이용 기록, 관련 증빙 자료</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">8. 부분 환불 예시</h3>
      <p className="mb-4">서비스가 일부만 제공된 경우: <strong>환불 금액 = (총 결제액 - 이미 제공된 서비스 금액) - 수수료</strong></p>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border p-4 rounded bg-gray-50">
          <strong className="text-dream-blue block mb-2">1: 식품 정기배송</strong>
          <ul className="text-xs space-y-2">
            <li>
              <span className="font-bold">판매자 폐업 시:</span> 잔여 횟수분 + 수수료 전액 환불
            </li>
            <li>
              <span className="font-bold">구매자 맛 불만 취소:</span> 판매자 정책 따름 (보통 환불 불가)
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded bg-gray-50">
          <strong className="text-dream-blue block mb-2">2: 패션 맞춤 제작</strong>
          <ul className="text-xs space-y-2">
            <li>
              <span className="font-bold">판매자 납기 지연:</span> 잔여분 + 수수료 전액 환불
            </li>
            <li>
              <span className="font-bold">구매자 디자인 변경:</span> 제작 진행 정도에 따라 차감 환불
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded bg-gray-50">
          <strong className="text-dream-blue block mb-2">3: 미용/뷰티</strong>
          <ul className="text-xs space-y-2">
            <li>
              <span className="font-bold">샵 폐업:</span> 잔여 횟수분 + 수수료 전액 환불
            </li>
            <li>
              <span className="font-bold">트러블 발생(판매자 과실):</span> 잔여분 + 수수료 + 손해배상
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded bg-gray-50">
          <strong className="text-dream-blue block mb-2">4: 디자인/IT</strong>
          <ul className="text-xs space-y-2">
            <li>
              <span className="font-bold">판매자 연락 두절:</span> 미이행분 + 수수료 전액 환불
            </li>
            <li>
              <span className="font-bold">구매자 초안 불만족:</span> 작업비 차감 후 환불 (판매자 정책)
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-500">
        * 패키지/정기권은 개별 가격이 아닌 패키지 가격 기준으로 일할 계산됩니다.<br/>
        * 디지털 파일 전달 완료 시 환불이 제한될 수 있습니다.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">9. 결제수단별 환불 방법</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        <li>신용카드: 승인 취소 (3~7영업일)</li>
        <li>계좌이체: 구매자 계좌 입금 (1~3영업일)</li>
        <li>간편결제: 해당 계정으로 환불 (1~5영업일)</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">12. 문의</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="mb-1">환불 관련 문의사항은 아래로 연락 주시기 바랍니다.</p>
        <ul className="font-medium text-gray-800">
          <li>이메일: support@dreamwish.co.kr</li>
          <li>전화: 010-9110-8716</li>
          <li>운영시간: 평일 09:00~18:00 (주말/공휴일 제외)</li>
          <li>주소: 부산 사상구 덕상로 8-37, 202동 2504</li>
        </ul>
      </div>
    </section>
  </div>
);

const PrivacyPolicyContent = () => (
  <div className="space-y-8">
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
      드림위시는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
    </div>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제1조 (개인정보의 처리 목적)</h3>
      <p>드림위시는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않습니다.</p>
      <div className="mt-3 grid md:grid-cols-3 gap-4">
        <div className="border p-3 rounded">
           <strong className="block mb-1">1. 회원 가입 및 관리</strong>
           <p className="text-xs text-gray-600">회원 가입의사 확인, 본인 식별·인증, 회원자격 유지·관리, 부정이용 방지</p>
        </div>
        <div className="border p-3 rounded">
           <strong className="block mb-1">2. 서비스 제공</strong>
           <p className="text-xs text-gray-600">서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 본인인증, 요금결제·정산</p>
        </div>
        <div className="border p-3 rounded">
           <strong className="block mb-1">3. 마케팅/광고</strong>
           <p className="text-xs text-gray-600">신규 서비스 개발, 이벤트 및 광고성 정보 제공</p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제2조 (개인정보의 처리 및 보유기간)</h3>
      <p className="mb-2">법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 동의받은 기간 내에서 개인정보를 처리·보유합니다.</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>회원 가입 및 관리: <span className="font-bold">회원 탈퇴 시까지</span></li>
        <li>재화 또는 서비스 제공: <span className="font-bold">거래 종료 후 5년</span></li>
      </ul>
      <div className="mt-3 bg-gray-50 p-3 rounded text-xs">
        <p className="font-bold mb-1">관련 법령에 따른 보존 기간:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>계약/청약철회 기록: 5년 (전자상거래법)</li>
          <li>대금결제 및 재화 공급 기록: 5년 (전자상거래법)</li>
          <li>소비자 불만/분쟁 처리 기록: 3년 (전자상거래법)</li>
          <li>표시/광고에 관한 기록: 6개월 (전자상거래법)</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제3조 (처리하는 개인정보의 항목)</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>
          <strong>필수항목:</strong> 이름, 이메일, 비밀번호, 휴대전화번호
        </li>
        <li>
          <strong>선택항목:</strong> 주소, 생년월일
        </li>
        <li>
          <strong>자동 수집 항목:</strong> IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록
        </li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제4조 (개인정보의 제3자 제공)</h3>
      <p>드림위시는 원칙적으로 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의나 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 제3자에게 제공합니다.</p>
      <div className="mt-2 p-2 bg-gray-100 text-center rounded font-bold text-gray-600">
        현재 제3자 제공 없음
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제5조 (개인정보 처리의 위탁)</h3>
      <p>드림위시는 원활한 개인정보 업무처리를 위하여 개인정보 처리업무를 위탁하고 있지 않습니다 (위탁 없음).</p>
      <p className="text-xs text-gray-500 mt-1">향후 위탁업무가 발생할 경우 지체없이 본 처리방침을 통해 공개하도록 하겠습니다.</p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제6조 (정보주체의 권리·의무 및 행사방법)</h3>
      <p>정보주체는 드림위시에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
      <div className="mt-3 border-l-4 border-dream-blue pl-4 py-2 bg-gray-50">
        <p className="font-bold">권리 행사 접수처:</p>
        <ul className="mt-1 space-y-1 text-sm">
          <li>이메일: admin@dreamwish.co.kr</li>
          <li>전화: 010-9110-8716</li>
          <li>주소: 부산 사상구 덕상로 8-37, 202동 2504</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제7조 (개인정보의 파기)</h3>
      <p>개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li><strong>전자적 파일:</strong> 복원이 불가능한 방법으로 영구 삭제</li>
        <li><strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제8조 (개인정보 보호책임자)</h3>
      <p>드림위시는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
      <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <ul className="space-y-1">
          <li><strong>성명:</strong> 김동현</li>
          <li><strong>직책:</strong> 대표</li>
          <li><strong>연락처:</strong> 010-9110-8716 / admin@dreamwish.co.kr</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제9조 (자동 수집 장치의 설치·운영 및 거부)</h3>
      <p>이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</p>
      <p className="mt-2 text-sm text-gray-600">웹브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴에서 쿠키 저장을 거부할 수 있습니다. 단, 거부 시 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제10조 (안전성 확보조치)</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>기술적 조치: 접근권한 관리, 암호화, 보안프로그램 설치</li>
        <li>물리적 조치: 자료보관실 접근통제 등</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-bold text-gray-900 mb-3">제11조 (권익침해 구제방법)</h3>
      <p className="mb-2">개인정보 침해에 대한 피해구제, 상담 등이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
        <li>개인정보 침해신고센터 (privacy.kisa.or.kr / 118)</li>
        <li>개인정보 분쟁조정위원회 (www.kopico.go.kr / 1833-6972)</li>
        <li>대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-3573)</li>
        <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
      </ul>
    </section>
  </div>
);