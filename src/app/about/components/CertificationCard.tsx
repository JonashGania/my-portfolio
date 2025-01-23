
interface CertificationCardProps {
    name: string,
    company: string,
    link: string
}

const CertificationCard = ({ name, company, link }: CertificationCardProps) => {
    return (
      <div className="bg-[rgba(60,60,60,0.6)] flex flex-col w-[320px] py-2 px-3 rounded-lg">
        <span className="text-white text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </span>
        <span className="text-gray-300 text-">{company}</span>
        <div className="pt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-white text-sm"
          >
            View Certificate
            <div className="text-white group-hover:translate-x-2 transition duration-300 pl-2">
              &rarr;
            </div>
          </a>
        </div>
      </div>
    );
};

export default CertificationCard