import { brands } from "../constants/Brand";

const Brands = () => {
  return (
    <div className="slider h-auto flex justify-center px-4 items-center w-full overflow-hidden relative">
      <div className="slide-track overflow-hidden">
        <div className="slide flex gap-16">
          {brands.map((item, index) => (
            <img key={index} src={item.image} alt={item.name} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
