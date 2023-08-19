interface HeaderProps {
  widthFull?: boolean;
  center?: boolean;
  content?: string;
}
const Header: React.FC<HeaderProps> = ({ widthFull, center, content }) => {
  return (
    <h1
      className={`${widthFull ? "w-full" : ""} ${
        center ? "text-center" : "text-left"
      } text-[40px] md:text-[48px] lg:text-[56px] font-bold`}
    >
      {content}
    </h1>
  );
};

export default Header;
