import { Link } from "react-router-dom";

export default function Sidebar()
{
  return (
    <div className="w-64 bg-slate-600 text-white h-screen p-4">
      <nav className="flex flex-col space-y-3 ">
        <Link to="/" className="hover:bg-gray-200 p2 text-white rounded" >รายการการ์ดสินค้า</Link>
        <Link to="/how" className="hover:bg-gray-200 p2 text-white rounded" >การจัดเด็ค</Link>
      </nav>

    </div>
  );

}