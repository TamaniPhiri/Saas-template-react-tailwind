import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeaturesTop = () => {
  return (
    <div className="flex flex-col min-h-screen py-20 w-full items-center justify-center px4 md:px-12">
      <Header content="Cool features" center />
      <div className="md:max-w-md max-w-xs">
        <Paragraph
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          center
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full items-center justify-center gap-5">
        <div className="grid grid-cols-2 bg-red-200 w-full items-center justify-center">
          <div className="flex flex-col items-center w-full justify-between">
            <h1>lasklask</h1>
            <p>aslkassl</p>
          </div>
          <div className="">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62bf0bed7b23d739e54aa1da_Clipped%20graphic%201.png"
              className=" object-cover object-center h-full w-full"
              loading="lazy"
              alt="Feature"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-red-200 w-full items-center justify-center">
          <div className="flex flex-col items-center w-full justify-between">
            <h1>lasklask</h1>
            <p>aslkassl</p>
          </div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62bf0bedf346dcf2b39f249d_Clipped%20graphic%202.png"
            className=" object-cover object-center h-full w-full"
            loading="lazy"
            alt="Feature"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesTop;
