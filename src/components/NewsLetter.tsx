import Button from "./Global/Button";

const NewsLetter = () => {
  return (
    <div className="flex flex-col px-4 py-16">
      <div>
        <img
          src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab43601a607bdb2b4764_logo.svg"
          alt=""
        />
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        <input type="text" className=" bg-transparent border-b px-2 py-5"/>
        <Button content="Subscribe" widthFull={false} secondary/>
      </div>
    </div>
  );
};

export default NewsLetter;
