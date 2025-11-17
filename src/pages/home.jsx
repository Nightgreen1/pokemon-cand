import { useState } from "react";

// 👇 เปลี่ยนเป็นชื่อไฟล์จริงที่คุณบอก
import megaCard from '../assets/th_news_MA2_pillow_img-Photoroom.png';

// โหลดรูปทั้งหมดที่ขึ้นต้นด้วย th00012
const images = import.meta.glob("../assets/th00012*.png", { eager: true });

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [page, setPage] = useState(1);

  const imgList = Object.values(images).map((img) => img.default);

  const itemsPerPage = 20; // 5 แถว × 4 คอลัมน์ = 20 รูปต่อหน้า
  const totalPages = Math.ceil(imgList.length / itemsPerPage);

  const currentImages = imgList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const goPrev = () => page > 1 && setPage(page - 1);
  const goNext = () => page < totalPages && setPage(page + 1);

  return (
    <div className="p-6">

      {/* ก่อนกด แสดง mega card */}
      {!showGallery && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            วิวัฒนาการเมก้า การ์ดชุดเสริม "อัคคีสีคราม"
          </h2>

          <img
            src={megaCard}
            alt="Mega Card"
            className="mt-4 rounded-xl shadow-lg w-64 hover:scale-105 transition cursor-pointer"
            onClick={() => setShowGallery(true)}
          />
        </>
      )}

      {/* หลังคลิก แสดงแกลเลอรี */}
      {showGallery && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {currentImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={"card " + index}
                className="rounded-xl shadow-lg"
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-6">

            <button
              onClick={goPrev}
              disabled={page === 1}
              className="px-4 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              ← Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center
                  ${page === i + 1 ? "bg-gray-400 text-white" : "hover:bg-gray-100"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goNext}
              disabled={page === totalPages}
              className="px-4 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              Next →
            </button>

          </div>
        </>
      )}
    </div>
  );
}
