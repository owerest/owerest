import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl text-purple-500 font-semibold mb-6">Contato</h1>
      <div className="flex items-center mb-4">
        <FaPhone className="w-6 text-purple-500 h-6 mr-2" />
        <span className="text-lg text-zinc-400">Telefone: (XX) XXXX-XXXX</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="w-6 text-purple-500 h-6 mr-2" />
        <span className="text-lg text-zinc-400">E-mail: contato@owerest.com</span>
      </div>
    </div>
  );
}
