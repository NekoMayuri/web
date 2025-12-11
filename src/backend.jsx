import React, { useState } from 'react';
import { LayoutDashboard, Package, Plus, Settings, Edit, Trash2 } from 'lucide-react';

const BackendApp = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">VibeAdmin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition ${activeTab === 'products' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Package className="w-5 h-5 mr-3" /> สินค้า
          </button>
          <button className="flex items-center w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <Settings className="w-5 h-5 mr-3" /> ตั้งค่า
          </button>
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 overflow-y-auto p-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">จัดการสินค้า</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 shadow-md">
            <Plus className="w-4 h-4 mr-2" /> เพิ่มสินค้าใหม่
          </button>
        </div>

        {/* --- Dashboard Stats (Optional View) --- */}
        {/* <div className="grid grid-cols-3 gap-6 mb-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">...Total Sales...</div>
        </div> */}

        {/* --- Table Section --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">รูปภาพ</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">ชื่อสินค้า</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">ราคา</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">สถานะ</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">เสื้อยืด Vibe Code #{item}</td>
                  <td className="px-6 py-4 text-gray-600">฿450.00</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">พร้อมขาย</span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-indigo-600"><Edit className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Add Form (Hidden/Modal Concept) --- */}
        <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold mb-4">ฟอร์มเพิ่มข้อมูลด่วน</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="ชื่อสินค้า" className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-300 outline-none" />
            <input type="number" placeholder="ราคา" className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-300 outline-none" />
            <textarea placeholder="รายละเอียด" className="border p-2 rounded-lg w-full md:col-span-2 focus:ring-2 focus:ring-indigo-300 outline-none" rows="3"></textarea>
          </div>
        </div>

      </main>
    </div>
  );
};

export default BackendApp;