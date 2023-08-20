import Button from "./Global/Button";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const SoftwareFeature = () => {
  return (
    <div className="flex min-h-screen py-28 items-center justify-center w-full px-4 md:px-12">
      <div className="grid grid-cols-1 relative md:grid-cols-2 overflow-hidden bg-[#1a1a1a] rounded-3xl h-full w-full">
        <div className="flex flex-col gap-3 z-40 p-4 md:p-8 lg:p-16 md:max-w-lg max-w-md">
          <span className="text-[#b6ff9c] font-bold text-lg">
            Software feature
          </span>
          <Header content="Create stunning websites with Dalma"/>
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus."/>
          <div className="flex gap-2 md:flex-row flex-col my-3">
            <Button content="Get started" secondary widthFull={false}/>
            <Button content="Other templates" primary widthFull={false}/>
          </div>
        </div>
        <div className="">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab431cc502479aec7741_Hero%20right%20gradient.png"
            alt="bg"
            loading="lazy"
            className="absolute right-0 z-10 bottom-0"
          />
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7c631bb44107758dcff46_Block%20cta%20image.png"
            alt="right"
            loading="lazy"
            className="z-40"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareFeature;
