import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeatureDetails = () => {
  return (
    <div className="flex flex-col py-24 min-h-screen w-full items-center justify-center px-4 md:px-12">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:px-10">
        <div className="flex flex-col max-w-sm gap-3">
          <span>Software feature</span>
          <Header content="Build quickly and easily with Dalma" />
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus." />
          <div className="flex gap-3 items-center my-4">
            <img src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfee7fe5c224e5d1631_luminous-Color%20icon.svg" alt="Luminous" />
            <img src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfd8758bb7f808b95b1_Network-Color%20icon.svg" alt="Network" />
            <img src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfe54de256a6e45022b_Sitemark-Color%20icon.svg" alt="SiteMark" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58602b0b520b_Purchase%20chart%201.png"
            alt="features"
            loading="lazy"
            className=" object-cover rounded-xl bg-[#1a1a1a] p-3 md:p-6 object-center md:h-[22rem]"
          />
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58c7350b520a_Purchase%20chart%202.png"
            alt="features"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span>Software feature</span>
          <Header content="Create stunning websites with Dalma" />
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus." />
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
