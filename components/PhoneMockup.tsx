import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, ShoppingBag, Menu, User, Search, Home, Video, PlayCircle } from 'lucide-react';

interface PhoneMockupProps {
  variant: 'live' | 'store' | 'dashboard';
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant, className = '' }) => {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl ${className}`}>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
        
        {/* Status Bar */}
        <div className="h-8 bg-transparent absolute top-0 w-full z-20 flex justify-between px-6 items-center text-xs font-bold text-black/50">
          <span>12:30</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-black/20 rounded-sm"></div>
            <div className="w-4 h-4 bg-black/20 rounded-sm"></div>
          </div>
        </div>

        {/* Content based on Variant */}
        {variant === 'live' && (
          <div className="relative w-full h-full bg-slate-900 text-white">
            {/* Live Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-30">
                    <Video size={64} className="mx-auto mb-4" />
                    <p>Live Stream Feed</p>
                </div>
            </div>

            {/* UI Overlays */}
            <div className="absolute top-10 left-4 z-20 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-dream-blue flex items-center justify-center">
                <span className="font-bold text-xs">DW</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold shadow-sm">DreamWish</span>
                <span className="text-xs bg-red-500 px-1 rounded w-fit">LIVE 🔴</span>
              </div>
            </div>

            <div className="absolute bottom-20 left-4 right-4 z-20 space-y-3">
              <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10 max-w-[80%]">
                <p className="text-sm text-yellow-300 font-bold">User123</p>
                <p className="text-sm">와 고기 퀄리티 미쳤네요 ㄷㄷ</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10 max-w-[80%]">
                 <p className="text-sm text-blue-300 font-bold">Guest99</p>
                 <p className="text-sm">배송 얼마나 걸리나요?</p>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-4 items-center">
               <div className="bg-black/20 p-2 rounded-full backdrop-blur-md"><Heart className="text-red-500 fill-red-500" /></div>
               <div className="bg-black/20 p-2 rounded-full backdrop-blur-md"><MessageCircle /></div>
               <div className="bg-black/20 p-2 rounded-full backdrop-blur-md"><Share2 /></div>
            </div>

            <div className="absolute bottom-4 left-4 z-30">
               <div className="bg-white text-black p-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
                  <ShoppingBag className="text-dream-blue" size={20}/>
                  <div className="text-xs">
                    <p className="font-bold">한우 1++ 등심</p>
                    <p>45,000원</p>
                  </div>
               </div>
            </div>
          </div>
        )}

        {variant === 'store' && (
          <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
             {/* Header */}
             <div className="bg-white p-4 pt-10 shadow-sm flex justify-between items-center z-10">
                <Search className="text-gray-400" />
                <span className="font-bold text-dream-blue">DreamWish</span>
                <Menu className="text-gray-400" />
             </div>
             
             {/* Profile Area */}
             <div className="bg-white p-4 mb-2 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative border-2 border-dream-blue">
                   <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div>
                   <h3 className="font-bold text-lg">김동현 사장님</h3>
                   <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>광고 0</span>
                      <span>즐겨찾기 120</span>
                   </div>
                </div>
             </div>

             {/* Icons Grid */}
             <div className="grid grid-cols-4 gap-2 p-4 bg-white mb-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex flex-col items-center gap-1">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-dream-blue">
                        <ShoppingBag size={18} />
                     </div>
                     <span className="text-[10px] text-gray-500">메뉴 {i}</span>
                  </div>
                ))}
             </div>

             {/* Content Feed */}
             <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 p-4 space-y-3">
                   <div className="bg-white rounded-xl shadow-sm p-3 h-32 flex items-center justify-center text-gray-300">
                      상점 만들기 배너
                   </div>
                   <div className="bg-white rounded-xl shadow-sm p-3 h-40 flex items-center justify-center text-gray-300">
                      매출 현황 그래프
                   </div>
                </div>
             </div>

             {/* Bottom Nav */}
             <div className="bg-white border-t p-3 flex justify-between items-center text-gray-400">
                <Home className="text-dream-blue" />
                <Search />
                <div className="bg-dream-blue text-white p-3 rounded-full -mt-8 shadow-lg">
                   <Video size={24} />
                </div>
                <PlayCircle />
                <User />
             </div>
          </div>
        )}

      </div>
    </div>
  );
};