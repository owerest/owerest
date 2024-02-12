import { Link } from "react-router-dom";
import waitImage from "../../assets/img/wait.svg";
import "./index.css";
import { FaArrowLeft } from "react-icons/fa";

function EmBreve() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-center text-purple-500 font-bold mb-4">A trilha do curso de cibersegurança está em desenvolvimento...</h1>
      <img src={waitImage} alt="Em Breve" className="w-96 animate-float mb-8" />
      <Link
        to="/"
        className="flex items-center transition delay-75 text-zinc-200 hover:text-purple-400"
      >
        <FaArrowLeft className="w-6 h-6 mr-2" />
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default EmBreve;
