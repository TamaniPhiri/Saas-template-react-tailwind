interface ButtonProps {
  content?: string;
  widthFull?: boolean;
  secondary?: boolean;
  primary?: boolean;
  plain?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  widthFull,
  secondary,
  primary,
  plain,
}) => {
  return (
    <div
      className={`${widthFull ? "w-full" : ""} ${
        secondary ? "bg-[#b6ff9c] text-black" : ""
      } ${primary ? "bg-[#1a1a1a]" : ""} rounded-full ${
        plain ? "p-0 rounded-none" : "py-3 px-5"
      } text-center hover:scale-95 active:scale-105 font-semibold hover:opacity-70 transform transition-all duration-500 delay-200 cursor-pointer`}
    >
      {content}
    </div>
  );
};

export default Button;
