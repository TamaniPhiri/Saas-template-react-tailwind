import Button from "./Global/Button";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";
import SizeObserver from "../../utils/SizeObserver";
import CheckedItems from "./checked-items";
import { texts } from "../constants/Checked";
const Cta = () => {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 gap-3 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header
        content="Launch your fastest static sites to date with Dalma template!"
        center
        minWidth
      />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        center
        minWidth
      />
      <div className="flex gap-3 items-center my-5">
        <Button content="Get started" secondary />
        <Button content="Other templates" primary />
      </div>
      <div>
        <SizeObserver>
          <div className="grid place-items-center w-full md:max-w-md lg:max-w-3xl">
            <CheckedItems items={texts}/>
          </div>
        </SizeObserver>
      </div>
    </div>
  );
};

export default Cta;
