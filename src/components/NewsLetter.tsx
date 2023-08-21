import Button from "./Global/Button";

const NewsLetter = () => {
  return (
    <div className="flex z-50 flex-col px-4 py-16">
      <div>
        <img
          src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab43601a607bdb2b4764_logo.svg"
          alt=""
        />
      </div>
      <div className="flex z-50 gap-4 md:flex-row pt-4 flex-col">
        <input
          type="text"
          className=" bg-transparent border-b flex focus:outline-none text-gray-500 border-b-gray-700 py-5"
          placeholder="Your email"
        />
        <Button content="Subscribe" widthFull={false} secondary />
      </div>
      <p className="text-sm md:text-base pt-4">✌ We promise not to spam!</p>
    </div>
  );
};

export default NewsLetter;
