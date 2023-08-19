import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeaturesTop = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center px4 md:px-12">
      <Header content="Cool features" center />
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  );
};

export default FeaturesTop;
