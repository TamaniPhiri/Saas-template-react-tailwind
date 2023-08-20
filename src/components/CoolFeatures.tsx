import { coolFeature } from "../constants/CoolFeature";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const CoolFeatures = () => {
  return (
    <div className="flex flex-col justify-center px-4 md:px-12 w-full">
      <Header content="Cool features" />
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center w-full">
        {coolFeature.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-3 bg-white/10 bg-opacity-20 backdrop-blur-sm p-5 rounded-xl w-full"
          >
            <div className="bg-[#b6ff9c] rounded-full p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="object-cover object-center h-10"
              />
            </div>

            <h1 className="font-bold text-xl md:text-2xl">{item.title}</h1>
            <p className="w-full md:text-base text-sm text-left text-zinc-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoolFeatures;
