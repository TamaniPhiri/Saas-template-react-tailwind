import Button from "./Global/Button";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeatureDetails = () => {
  return (
    <div className="flex flex-col py-24 min-h-screen md:h-auto w-full items-center justify-center px-4 md:px-12">
      <div className="w-full lg:min-h-screen justify-center items-center grid md:gap-8 md:grid-cols-2 grid-cols-1 lg:px-10">
        <div className="flex flex-col max-w-sm gap-3">
          <span className="text-[#b6ff9c] font-bold text-lg">
            Software feature
          </span>
          <Header content="Build quickly and easily with Dalma" />
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus." />
          <div className="flex gap-3 items-center mt-4">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfee7fe5c224e5d1631_luminous-Color%20icon.svg"
              alt="Luminous"
            />
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfd8758bb7f808b95b1_Network-Color%20icon.svg"
              alt="Network"
            />
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19cfe54de256a6e45022b_Sitemark-Color%20icon.svg"
              alt="SiteMark"
            />
          </div>
          <a
            href="#"
            className="flex items-center group justify-between w-full py-4 border-b border-gray-800"
          >
            <span>Integrate your favorite software.</span>
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c19d96b115e07d5798a0c7_Arrow%20right.svg"
              alt="rarr"
              loading="lazy"
              className="group-hover:translate-x-2 transform transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
        <div className="w-full flex justify-center md:mt-0 mt-10">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58602b0b520b_Purchase%20chart%201.png"
            alt="features"
            loading="lazy"
            className=" object-cover rounded-xl bg-[#1a1a1a] p-3 md:p-6 object-center md:h-[22rem]"
          />
        </div>
      </div>
      <div className="w-full lg:min-h-screen lg:pt-0 pt-24 md:gap-8 justify-center items-center grid md:grid-cols-2 grid-cols-1">
        <div className="w-full hidden md:flex justify-center md:mt-0 mt-10">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58c7350b520a_Purchase%20chart%202.png"
            alt="features"
            loading="lazy"
            className=" object-cover rounded-xl bg-[#1a1a1a] p-3 md:p-6 object-center md:h-[22rem]"
          />
        </div>
        <div className="flex flex-col max-w-sm gap-3">
          <span className="text-[#b6ff9c] font-bold text-lg">
            Software feature
          </span>
          <Header content="Create stunning websites with Dalma" />
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus." />
          <div className="flex gap-3 w-full py-4 border-b border-slate-800">
            <div className="bg-[#b6ff9c] h-fit flex items-center justify-center p-3 rounded-full">
              <img
                src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62cfb84622f09cd426ac6e40_icons8-Plumpy-77hDlnibqiKC-96-000000%201.png"
                alt="Feature"
                loading="lazy"
                className="object-cover w-12 object-center"
              />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-2xl font-bold">Gorgeous design</h1>
              <p className="text-[16px] pt-2 text-zinc-400 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <a href="https://webflow.com/templates/designers/veljko-ilic">
            <Button primary content="Other templates" />
          </a>
        </div>
        <div className="w-full md:hidden flex justify-center md:mt-0 mt-10">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58c7350b520a_Purchase%20chart%202.png"
            alt="features"
            loading="lazy"
            className=" object-cover rounded-xl bg-[#1a1a1a] p-3 md:p-6 object-center md:h-[22rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
