import { footLinks } from "../constants/footer-links";

const Footer = () => {
  return (
    <div className=" relative min-h-screen py-24 px-4 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c7eaa512be423d96d9fcae_Bottom%20corner%20gradient.png"
        alt="bg"
        loading="lazy"
        className=" absolute bottom-0 right-0"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 px-4 overflow-hidden w-full mt-12 items-center justify-center gap-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center w-full justify-center gap-3">
          <div>
            <h1 className="text-base md:text-xl font-bold">Company pages</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold">Other</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold">Template</h1>
            <ul>
              {footLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
