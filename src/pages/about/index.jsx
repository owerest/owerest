import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl text-purple-500 font-semibold mb-6">
        Sobre a Owerest Academy
      </h1>
      <p className="text-lg text-zinc-400 mb-6">
        A Owerest Academy é uma plataforma educacional que se dedica a oferecer cursos de tecnologia, hacking, programação, design e muito mais. Nosso objetivo é capacitar indivíduos de todos os níveis de habilidade e experiência, desde iniciantes até profissionais experientes, fornecendo-lhes recursos educacionais de alta qualidade e acessíveis.
      </p>
      <p className="text-lg text-zinc-400 mb-6">
        Nossos cursos são cuidadosamente elaborados por especialistas da indústria, garantindo que os alunos obtenham conhecimentos práticos e atualizados sobre os tópicos mais relevantes e em demanda no mundo da tecnologia.
      </p>
      <p className="text-lg text-zinc-400 mb-6">
        Na Owerest Academy, acreditamos no poder da educação para transformar vidas e impulsionar o progresso. Estamos comprometidos em criar uma comunidade inclusiva e colaborativa, onde os alunos possam aprender, crescer e se conectar com outros entusiastas da tecnologia em todo o mundo.
      </p>
      <p className="text-lg text-zinc-400 mb-6">
        Além disso, estamos no desenvolvimento de uma plataforma exclusiva para nossos alunos, onde eles terão acesso a recursos adicionais, interação com instrutores, fóruns de discussão e muito mais. Estamos empenhados em proporcionar uma experiência de aprendizado envolvente e eficaz para todos os que se juntam à nossa comunidade.
      </p>
      <Link to="/" className="flex items-center transition delay-75 text-zinc-200 hover:text-purple-400">
          <FaArrowLeft className="w-6 h-6 mr-2" />
          Voltar para a página inicial
        </Link>
    </div>
  );
}
