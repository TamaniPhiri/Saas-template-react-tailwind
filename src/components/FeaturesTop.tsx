import Button from "./Global/Button";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeaturesTop = () => {
  return (
    <div className="flex flex-col min-h-screen py-20 w-full overflow-hidden items-center justify-center px4 md:px-12">
      <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold">
        Cool features
      </h1>
      <div className="md:max-w-md max-w-xs">
        <Paragraph
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          center
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-4 overflow-hidden w-full items-center justify-center gap-5">
        <div className="grid grid-cols-2 bg-[#1a1a1a] overflow-hidden rounded-xl w-full items-center justify-center">
          <div className="flex pl-6 pt-5 flex-col h-full justify-between w-full">
            <div>
              <Header content="Credit sending" center={false} />
              <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." small/>
            </div>
            <div className="mb-12">
              <Button content="Get started" secondary/>
            </div>
          </div>
          <div className="flex items-center h-full lg:w-full translate-x-20 md:translate-x-0 justify-end">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62bf0bed7b23d739e54aa1da_Clipped%20graphic%201.png"
              className="lg:object-fit object-cover object-left lg:object-center h-96"
              loading="lazy"
              alt="Feature"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#1a1a1a] overflow-hidden rounded-xl w-full items-center justify-center">
          <div className="flex pl-6 pt-5 flex-col h-full justify-between w-full">
            <div>
              <Header content="Scheduling" center={false} />
              <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." small/>
            </div>
            <div className="mb-12">
              <Button content="Get started" secondary/>
            </div>
          </div>
          <div className="flex items-center h-full lg:w-full translate-x-20 md:translate-x-0 justify-end">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62bf0bedf346dcf2b39f249d_Clipped%20graphic%202.png"
              className="lg:object-fit object-cover object-left lg:object-center h-96"
              loading="lazy"
              alt="Feature"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTop;
