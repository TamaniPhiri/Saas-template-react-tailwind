import React, { useRef, useContext, useCallback } from "react";
import { SizeContext } from "../../utils/SizeObserver";
import useAnimationFrame from "./use-animation-frame";

interface Props {
  children: React.ReactNode;
  initialOffsetX: number;
  className: string;
  contentWidth: number;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none  ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
    </div>
  );
};

interface ItemProps {
  children: React.ReactNode;
  width: number;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center slide items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);

export default SliderContainer;
