import SliderContainer, { SliderItem } from "./slider";

const CheckedItems: React.FC<{ items: string[] }> = ({
  items,
}: {
  items: string[];
}) => (
  <>
    <SliderContainer className="flex items-center gap-3" contentWidth={1290} initialOffsetX={0}>
      {items.map((text,index) => (
        <SliderItem key={index} width={150}>
          <div className="flex bg-[#1a1a1a]">
            <span>icon</span>
            <span>{text}</span>
          </div>
        </SliderItem>
      ))}
    </SliderContainer>
  </>
);

export default CheckedItems;
