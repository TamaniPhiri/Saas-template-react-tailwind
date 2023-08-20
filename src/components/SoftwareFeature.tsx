const SoftwareFeature = () => {
  return (
    <div className="flex min-h-screen items-center justify-center w-full px-4 md:px-12">
      <div className="grid grid-cols-1 relative md:grid-cols-2 overflow-hidden bg-[#1a1a1a] rounded-3xl h-full w-full">
        <div className="flex flex-col"></div>
        <div className="">
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab431cc502479aec7741_Hero%20right%20gradient.png"
            alt="bg"
            loading="lazy"
            className="absolute right-0"
          />
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7c631bb44107758dcff46_Block%20cta%20image.png"
            alt="right"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareFeature;
