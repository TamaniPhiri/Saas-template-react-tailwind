import React from "react";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC<{ images: string[] }> = ({
  images
}: {
  images: string[];
}) => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      {images.map((image) => (
        <SliderItem width={150}>
          <img className="object-contain h-10" src={image} alt="" />
        </SliderItem>
      ))}
    </SliderContainer>
  </>
);

export default ClientLogos;