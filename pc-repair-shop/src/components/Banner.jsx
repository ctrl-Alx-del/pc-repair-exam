import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function Banner() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex items-center justify-center">
      <Carousel orientation="horizontal" plugins={[plugin.current]} opts={{ loop: true, align: "center" }}>
        <CarouselContent className={"bannerContent w-200 h-30"}>
          <CarouselItem className={"flex items-center justify-center bg-lime-300"}>
            <h2 className="text-5xl">Kampagne</h2>
          </CarouselItem>
          <CarouselItem className={"flex items-center justify-center bg-yellow-300"}>
            <h2 className="text-5xl">Tilbud</h2>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Banner;
