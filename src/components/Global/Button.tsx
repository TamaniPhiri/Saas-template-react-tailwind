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
    <button
      className={`${widthFull ? "w-full" : "md:w-fit w-full"} ${
        secondary ? "bg-[#b6ff9c] text-black" : ""
      } ${primary ? "bg-white/10 bg-opacity-20 backdrop-blur-sm" : ""} rounded-full ${
        plain ? "p-0 rounded-none" : "py-4 px-8"
      } text-center hover:scale-95 z-40 active:scale-105 w-fit font-semibold hover:opacity-70 transform transition-all duration-500 delay-200 cursor-pointer`}
    >
      {content}
    </button>
  );
};

export default Button;
