import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import How from "./pages/how";
import How2 from "./pages/how2";     // หน้าใหม่

export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <header className="bg-emerald-800 text-white p-4">
        <h1>Pokemon TCG Expansion Card</h1>
      </header>

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-white text-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how" element={<How />} />
            <Route path="/how2" element={<How2 />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-gray-700 text-white p-4 text-center">
        2025 Copyright
      </footer>
    </div>
  );
}

