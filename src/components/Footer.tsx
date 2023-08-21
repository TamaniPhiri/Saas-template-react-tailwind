import { footLinks } from "../constants/footer-links";

const Footer = () => {
  return (
    <div className=" relative min-h-screen py-24 px-4 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7eaa512be423d96d9fcae_Bottom%20corner%20gradient.png"
        alt="bg"
        loading="lazy"
        className=" absolute bottom-0 z-10 right-0"
      />
      <div className="grid lg:grid-cols-2 z-50 grid-cols-1 px-4 overflow-hidden w-full mt-12 justify-center gap-5">
        {/* Left Grid Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center w-full justify-center gap-3">
          <div>
            <h1 className="text-base md:text-xl font-bold">Company pages</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li
                  className="py-2 text-sm md:text-base text-gray-400"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold">Other</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li
                  className="py-2 text-sm md:text-base text-gray-400"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold">Template</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li
                  className="py-2 text-sm md:text-base text-gray-400"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Grid Icons */}
        <div className="w-full flex gap-3 z-50 lg:justify-end">
          <div className="h-fit p-3 w-fit items-center justify-center bg-white rounded-full">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7e9e10e3c5b9299773072_instagram%201.svg"
              alt="instagram"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-fit py-3 px-4 w-fit items-center justify-center bg-white rounded-full">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7e9e10e3c5b5f88773071_Facebook%201.svg"
              alt="facebook"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-fit p-3 w-fit items-center justify-center bg-white rounded-full">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7e9e10e3c5b45f6773073_twitter%201.svg"
              alt="twitter"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
