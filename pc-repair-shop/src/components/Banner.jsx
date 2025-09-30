import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function Banner() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex items-center justify-center">
      <Carousel orientation="horizontal" plugins={[plugin.current]} opts={{ loop: true, align: "center" }}>
        <CarouselContent className={"w-200 h-40"}>
          <CarouselItem className={"flex items-center justify-center"}>
            <h2 className="text-lg">Kampagne</h2>
          </CarouselItem>
          <CarouselItem className={"flex items-center justify-center"}>
            <h2 className="text-lg">Tilbud</h2>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Banner;
