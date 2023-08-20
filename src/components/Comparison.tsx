import { comparisons } from "../constants/Comparisons";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const Comparison = () => {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 gap-3 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header content="What sets us apart" center />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        center
        minWidth
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-10 grid-cols-1 items-center justify-center w-full">
        {comparisons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="bg-[#b6ff9c] rounded-full p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="object-cover object-center h-10"
              />
            </div>
            <h1>{item.title}</h1>
            <p className="w-full text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
