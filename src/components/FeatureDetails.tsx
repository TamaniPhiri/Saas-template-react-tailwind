import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const FeatureDetails = () => {
  return (
    <div className="flex flex-col py-24 min-h-screen w-full items-center justify-center px-4 md:px-12">
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-3">
          <span>Software feature</span>
          <Header content="Build quickly and easily with Dalma" />
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend senectus." />
        </div>
        <div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30bd4926d58602b0b520b_Purchase%20chart%201.png"
            alt="features"
            loading="lazy"
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
