import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const CoolFeatures = () => {
  return (
    <div className="flex flex-col justify-center px-4 md:px-12 w-full">
      <Header content="Cool features" />
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  );
};

export default CoolFeatures;
