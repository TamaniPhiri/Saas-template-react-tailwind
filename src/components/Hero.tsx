const Hero = () => {
  return (
    <div className="flex items-center min-h-screen relative justify-center w-full px-4 md:px-12">
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
        <h1 className="text-[52px] leading-tight m-0 md:text-[62px] lg:text-[72px] text-center max-w-2xl font-bold">Build your very own SaaS website with Dalma</h1>
      </div>
    </div>
  );
};

export default Hero;
