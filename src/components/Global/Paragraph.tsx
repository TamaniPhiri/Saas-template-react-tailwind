interface ParagraphProps {
  content?: string;
  center?: boolean;
  small?: boolean;
  minWidth?:boolean;
}
const Paragraph: React.FC<ParagraphProps> = ({ content, center, small ,minWidth}) => {
  return (
    <div
      className={`${center ? "text-center" : "text-left"} ${
        small ? "text-sm md:text-[16px]" : "text-[16px] md:text-[18px] lg:text-[20px]"
      } ${minWidth?"max-w-sm":""}`}
    >
      {content}
    </div>
  );
};

export default Paragraph;
