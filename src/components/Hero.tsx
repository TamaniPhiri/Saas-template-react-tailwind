import Button from "./Global/Button";
import Paragraph from "./Global/Paragraph";

const Hero = () => {
  return (
    <div className="flex items-center flex-col min-h-screen relative justify-center w-full px-4 md:px-12">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab4349f925338e0e00c0_Hero%20left%20gradient.png"
        alt="bgRight"
        loading="lazy"
        className=" absolute left-0"
      />
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab431cc502479aec7741_Hero%20right%20gradient.png"
        alt="bgRight"
        loading="lazy"
        className=" absolute right-0"
      />
      <div>
        <h1 className="text-[52px] leading-tight m-0 md:text-[62px] lg:text-[72px] text-center font-bold">Build your very own SaaS <br className="lg:block"/> website with <span className="bg-clip-text text-transparent bg-gradient-to-b from-lime-400 via-white to-purple-500">Dalma</span></h1>
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." center/>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button content="Get started" secondary/>
        <Button content="Sign up" primary/>
      </div>
    </div>
  );
};

export default Hero;
