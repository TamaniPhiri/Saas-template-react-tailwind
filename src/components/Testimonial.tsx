const Testimonial = () => {
  return (
    <div className="grid min-h-screen items-center md:grid-cols-2 px-4 md:px-12 grid-cols-1">
      <div className="flex w-full justify-center items-center">
        <div className="bg-[#b6ff9c] px-8 pt-8 rounded-xl w-fit text-black flex flex-col">
          <div className=" w-fit max-w-md">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold">
              “Working with Dalma has been a breeze from the very start.”
            </h1>
            <div className="flex items-center my-5 gap-2">
              <div>
                <img
                  src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30ecd9726db58623b59a3_Small%20portrait.png"
                  alt="Joe"
                  loading="lazy"
                  className=" object-cover object-center h-12"
                />
              </div>
              <div>
                <h1 className="font-semibold">Joe Schmoe</h1>
                <p className="text-gray-600">Director @Sitemark</p>
              </div>
            </div>
          </div>
          <div className="flex w-fit justify-start">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c30f17d05b1ed81196575e_Green%20block%20graphic.svg"
              alt="block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div>asls</div>
    </div>
  );
};

export default Testimonial;
