interface HeaderProps {
  widthFull?: boolean;
  center?: boolean;
  content?: string;
  minWidth?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  widthFull,
  center,
  content,
  minWidth,
}) => {
  return (
    <h1
      className={`${widthFull ? "w-full" : ""} ${
        center ? "text-center" : ""
      } text-[32px] md:text-[36px] lg:text-[40px] leading-[2.4rem] mb-2 font-bold text-left  ${
        minWidth ? "max-w-sm" : ""
      }`}
    >
      {content}
    </h1>
  );
};

export default Header;
