import { useState } from "react";

export default function How2() {
  const [deck, setDeck] = useState([]);

  // โหลดรูปทั้งหมดใน assets (png / jpg / jpeg)
  const images = import.meta.glob("../assets/*.{png,jpg,jpeg}", { eager: true });

  // ฟิลเตอร์ครั้งเดียว → เขียนให้อ่านง่ายขึ้น
  const imgList = Object.values(images)
    .map((i) => i.default)
    .filter((src) => {
      // ✅ เพิ่ม "deck-navigation2" เข้าไปในคำต้องห้ามเพื่อกรองภาพที่ไม่ใช่การ์ดออก
      const banned = ["Photoroom", "pack", "guide", "book", "deck-navigation2"];
      return !banned.some((word) => src.includes(word));
    });

  // ⛔ ป้องกัน deck มีเกิน 60
  const handleAddCard = (src) => {
    if (deck.length >= 60) return;
    setDeck((prev) => [...prev, src]);
  };

  // ลบการ์ดตาม index
  const handleRemoveCard = (i) => {
    setDeck((prev) => prev.filter((_, idx) => idx !== i));
  };

  return (
    <div className="flex w-full h-full p-6 gap-6 flex-col">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-4">Pokémon Deck Builder</h1>

      <div className="flex w-full flex-1 gap-6 overflow-hidden">

        {/* ==== ซ้าย: Filter ==== */}
        <div className="w-1/4 border rounded-2xl p-5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">ค้นหาการ์ด</h2>
          <input
            type="text"
            placeholder="คีย์เวิร์ด: ชื่อโปเกมอน..."
            className="w-full border rounded-xl px-3 py-2 mb-5"
          />
          <h3 className="font-semibold mb-2">ประเภทของการ์ด</h3>
          <div className="flex flex-col gap-2 mb-4">
            <label><input type="radio" name="type" defaultChecked /> ทั้งหมด</label>
            <label><input type="radio" name="type" /> การ์ดโปเกมอน</label>
            <label><input type="radio" name="type" /> การ์ดเทรนเนอร์</label>
            <label><input type="radio" name="type" /> การ์ดพลังงาน</label>
          </div>
          <h3 className="font-semibold mb-2">เรกกูเลชั่น</h3>
          <div className="flex flex-col gap-2 mb-4">
            <label><input type="checkbox" /> สแตนดาร์ด</label>
            <label><input type="checkbox" /> ไวด์</label>
            <label><input type="checkbox" /> อื่น ๆ</label>
            <label><input type="checkbox" /> ทั้งหมด</label>
          </div>
        </div>

        {/* ==== กลาง: แสดงการ์ดใน assets ==== */}
        <div className="w-1/2 border rounded-2xl p-5 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">

            {imgList.length === 0 && (
              <p className="col-span-2 text-center text-gray-500">
                ไม่พบการ์ดใน src/assets/
              </p>
            )}

            {imgList.map((src, i) => (
              <div key={i} className="bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={src}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                  alt={`card ${i}`}
                  onClick={() => handleAddCard(src)}
                  title="คลิกเพื่อเพิ่มลงเด็ค"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ==== ขวา: เด็ค ==== */}
        <div className="w-1/3 border rounded-2xl p-5 flex flex-col">
          
          {/* Header ของเด็ค */}
          <div className="flex justify-between mb-4 items-center">
            <button className="px-5 py-2 bg-gray-200 rounded-xl">
              เช็คเรกกูเลชั่น
            </button>

            {/* แสดงจำนวนใบในเด็ค */}
            <div className="text-3xl font-bold">
              {String(deck.length).padStart(2, "0")}
              <span className="text-xl">/60</span>
            </div>

            <button className="px-5 py-2 bg-black text-white rounded-xl">
              ออกแบบเด็ค
            </button>
          </div>

          {/* กล่องแสดงการ์ดในเด็ค */}
          <div className="border border-dashed rounded-2xl flex-1 overflow-y-auto p-2">

            {deck.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-500">
                คลิกการ์ดจากตรงกลาง<br />เพื่อเพิ่มในเด็ค
              </div>
            )}

            <div className="grid grid-cols-6 gap-2">
              {deck.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`deck card ${index}`}
                  className="rounded-md cursor-pointer hover:opacity-80"
                  onClick={() => handleRemoveCard(index)}
                  title="คลิกเพื่อนำออก"
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}