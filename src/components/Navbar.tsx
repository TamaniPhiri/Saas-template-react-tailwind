import Button from "./Global/Button";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 md:px-12 lg:px-20">
      <nav className="flex py-4 w-full justify-between items-center">
        <div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab43601a607bdb2b4764_logo.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <Button text="lime-400" bg="red-300" content="Purchase Template" secondary/>
          <a href="#">Docs</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
