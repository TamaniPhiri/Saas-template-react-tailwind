import Stars from "../constants/Stars";
import { reviews } from "../constants/Testimonials";

const Testimonial = () => {
  return (
    <div className="grid min-h-screen gap-12 items-center lg:grid-cols-2 px-4 md:px-12 grid-cols-1">
      {/* Left Green Card */}
      <div className="flex w-full lg:justify-center items-center">
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

      {/* Right Card- Reviews */}
      <div className="flex w-full flex-col lg:justify-center lg:items-center">
        <div className="flex flex-col w-full md:max-w-md lg:max-w-sm gap-8">
          {reviews.map((item, index) => (
            <div key={index}>
              <div>
                <Stars />
              </div>
              <h1 className="my-5 font-bold text-xl">"{item.message}"</h1>
              <div>
                <span>Rated {item.rate}/5</span> -{" "}
                <span className=" text-zinc-400">{item.reviews} Reviews</span>
              </div>
            </div>
          ))}
          <div className="flex text-left my-3 gap-3">
            <span>
              To learn more about us click{" "}
              <a href="#" className="text-[#b6ff9c]">
                here
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
