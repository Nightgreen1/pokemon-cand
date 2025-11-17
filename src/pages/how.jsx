import { Link } from "react-router-dom";
import deckNav from "../assets/deck-navigation2.png";

export default function How() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">เครื่องมือในการจัดเด็ค</h2>

      {/* คลิกเพื่อไปหน้า /how2 */}
      <Link to="/how2">
        <img
          src={deckNav}
          alt="Deck Navigation"
          className="w-96 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer mx-auto"
        />
      </Link>
    </div>
  );
}


