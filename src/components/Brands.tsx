import { brands } from "../constants/Brand";

const Brands = () => {
  return (
    <div className="h-auto flex justify-center px-4 items-center w-full overflow-hidden flex-col relative">
        <h1>Trusted by these brands:</h1>
      <div className="overflow-hidden">
        <div className="slide flex bg-black gap-16">
          {brands.map((item, index) => (
            <img key={index} src={item.image} alt={item.name} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
