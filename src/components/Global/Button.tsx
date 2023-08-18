interface ButtonProps {
  bg?: string;
  text?: string;
  content?: string;
  widthFull?: boolean;
  secondary?: boolean;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  bg,
  text,
  content,
  widthFull,
  secondary,
  primary,
}) => {
  return (
    <div
      className={`${widthFull ? "w-full" : ""} ${
        secondary ? "bg-[#b6ff9c] text-black" : ""
      } ${primary ? "bg-[#1a1a1a]" : ""} p-3 rounded-full`}
    >
      {content}
    </div>
  );
};

export default Button;
