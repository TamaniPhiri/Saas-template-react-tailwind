import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";

const Comparison = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header content="What sets us apart" center/>
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." center/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <h1>{}</h1>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
