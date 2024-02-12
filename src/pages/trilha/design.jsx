import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import lessonsData from "./json/design.json";

function Design() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons(lessonsData);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/" className="flex items-center transition delay-75 text-zinc-200 hover:text-purple-400">
          <FaArrowLeft className="w-6 h-6 mr-2" />
          Voltar para a página inicial
        </Link>
      </div>
      <h1 className="text-3xl text-zinc-200 font-semibold text-center mb-6">Trilha de Estudos de Design</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-zinc-900 shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg text-purple-500 font-semibold mb-2">{lesson.title}</h2>
              <ul className="list-disc text-zinc-400 pl-4">
                {lesson.topics.map((topic, index) => (
                  <li key={index} className="mb-2">{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design;
