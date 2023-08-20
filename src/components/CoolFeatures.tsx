import { coolFeature } from "../constants/CoolFeature";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const CoolFeatures = () => {
  return (
    <div className="flex relative flex-col gap-2 justify-center px-4 md:px-12 w-full">
      <Header content="Cool features" />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        minWidth
      />
      <div className="grid gap-5 z-40 lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 items-center justify-center w-full">
        {coolFeature.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-3 bg-white/10 bg-opacity-20 backdrop-blur-sm p-5 rounded-xl w-full"
          >
            <div
              className={`bg-[#b6ff9c] ${
                index === 0
                  ? "bg-white"
                  : index === 2
                  ? "bg-white"
                  : index === 4
                  ? "bg-white"
                  : ""
              } rounded-full p-3`}
            >
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
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab4349f925338e0e00c0_Hero%20left%20gradient.png"
        alt="bg"
        loading="lazy"
        className="absolute left-0 bottom-0 -top-20 z-10"
      />
    </div>
  );
};

export default CoolFeatures;
