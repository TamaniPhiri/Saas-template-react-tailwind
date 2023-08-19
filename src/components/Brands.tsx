import { brands } from "../constants/Brand";

const Brands = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          {brands.map((item, index) => (
            <img key={index} src={item.image} alt="brands" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
