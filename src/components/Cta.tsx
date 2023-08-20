import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const Cta = () => {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 gap-3 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header content="Launch your fastest static sites to date with Dalma template!" center />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        center
        minWidth
      />
    </div>
  );
};

export default Cta;
