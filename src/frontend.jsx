import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

const FrontendApp = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      
      {/* --- Menu Top --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">VibeShop</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-600">หน้าแรก</a>
            <a href="#" className="hover:text-indigo-600">สินค้าใหม่</a>
            <a href="#" className="hover:text-indigo-600">โปรโมชั่น</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Banner/Slide --- */}
      <header className="bg-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Collection 2025</h1>
        <p className="text-lg mb-8 opacity-90">ลดสูงสุด 50% สำหรับสินค้าแฟชั่นใหม่ล่าสุด</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
          ช้อปเลย
        </button>
      </header>

      {/* --- Product Layout (Responsive Grid) --- */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-600 pl-3">สินค้าแนะนำ</h2>
        
        {/* Grid: 1 col (mobile), 2 (tablet), 4 (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
                <span>[Product Image]</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">สินค้าตัวอย่าง {item}</h3>
                <p className="text-gray-500 text-sm mb-3">หมวดหมู่แฟชั่น</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">฿1,290</span>
                  <button className="text-sm border border-indigo-600 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-600 hover:text-white transition">
                    ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white py-10 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">VibeShop</h4>
            <p className="text-gray-400 text-sm">ร้านค้าออนไลน์ที่คุณไว้วางใจ</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">เมนู</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">เกี่ยวกับเรา</a></li>
              <li><a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">ติดต่อเรา</h4>
            <p className="text-gray-400 text-sm">กรุงเทพมหานคร, ประเทศไทย</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontendApp;