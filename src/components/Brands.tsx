import { brands } from "../constants/Brand";

const Brands = () => {
  return (
    <div className="h-auto flex justify-center px-4 md:px-12 items-center w-full overflow-hidden flex-col relative">
      <h1 className="font-bold text-xl mb-6">Trusted by these brands:</h1>
      <div className="overflow-hidden bg-black mb-20">
        <div className="slide flex gap-16">
          {brands.map((item, index) => (
            <img key={index} src={item.image} alt={item.name} loading="lazy" />
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-black p-2">
        <img
          src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab438f3058330f16ff1c_Main%20UI.png"
          alt="UI"
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
};

export default Brands;
