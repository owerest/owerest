import PropTypes from 'prop-types';
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, teacherPhoto, teacherName, teacherPosition, url }) => {
  return (
    <div className="card-container bg-zinc-950 mb-10 border-[.5px] border-zinc-600 rounded-lg overflow-hidden relative w-full h-full sm:w-96 sm:h-96">
      <div className="card-tag absolute top-0 left-0 mt-[8px] ml-[10px] rounded bg-zinc-950 border-[0.1px] border-zinc-500 text-white font-bold px-4 py-1">
        Lançamento
      </div>
      <img
        className="card-image w-full h-40 object-cover object-center"
        src={imageUrl}
        alt="Imagem do curso"
      />
      <div className="p-4">
        <h2 className="card-title text-xl mb-2 text-zinc-100">{title}</h2>
        <div className="card-teacher-info flex mt-8 items-center">
          <img
            className="card-teacher-photo w-14 h-14 rounded-full mr-2 border-[2.5px] border-[rgb(109,62,160)]"
            src={teacherPhoto}
            alt="Foto do professor"
          />
          <div>
            <span className="card-teacher-name text-zinc-100 text-lg font-[500]">{teacherName}</span>
            <p className="card-teacher-position text-sm text-gray-500">{teacherPosition}</p>
          </div>
        </div>
      </div>
      <div className="p-1 px-5 mt-2 mb-2">
        <Link
          to={url}
          className="card-button flex items-center justify-center gap-1 rounded-[0.625rem] text-sm font-bold uppercase leading-[1.41px] transition-colors disabled:cursor-not-allowed disabled:opacity-75 py-[.3rem] max-h-[3.25rem] bg-transparent border border-[rgb(58,0,119)] hover:bg-[rgb(58,0,119)] w-full text-white md:w-full"
        >
          <span className='ml-5'>Ver trilha de aprendizado</span>
          <RiArrowRightSLine className="text-3xl text-white" />
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  teacherPhoto: PropTypes.string.isRequired,
  teacherName: PropTypes.string.isRequired,
  teacherPosition: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
