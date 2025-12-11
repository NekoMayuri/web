import React, { useState } from 'react';
import FrontendApp from './frontend';
import BackendApp from './backend';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // false = ลูกค้า, true = แอดมิน

  return (
    <div>
      {/* ปุ่มสลับหน้า (ลอยอยู่ขวาล่าง) เอาไว้ทดสอบ */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className="bg-black text-white px-4 py-2 rounded-full shadow-lg font-bold hover:scale-105 transition"
        >
          {isAdmin ? 'Switch to Shop' : 'Switch to Admin'}
        </button>
      </div>

      {/* เงื่อนไขการแสดงผล */}
      {isAdmin ? <BackendApp /> : <FrontendApp />}
    </div>
  );
}

export default App;