import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">드림위시</h2>
          
          <div className="space-y-4 text-slate-400">
            <div className="flex items-start gap-4">
              <span className="font-bold text-white w-24">Contact.</span>
              <span>KIMDONGHYEON</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-white w-24">Tel.</span>
              <span>010-9110-8716</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-white w-24">Mail.</span>
              <a href="mailto:support@dreamwish.co.kr" className="hover:text-blue-400 transition-colors">
                support@dreamwish.co.kr
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} DREAMWISH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;