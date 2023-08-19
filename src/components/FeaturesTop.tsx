import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeaturesTop = () => {
  return (
    <div className="flex flex-col min-h-screen py-20 w-full items-center justify-center px4 md:px-12">
      <Header content="Cool features" center />
      <div className="md:max-w-md max-w-xs">
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." center/>
      </div>
    </div>
  );
};

export default FeaturesTop;
