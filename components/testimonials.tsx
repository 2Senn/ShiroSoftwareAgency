import React from "react";
import Carousel from './carousel'
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Russian guy">
        Shiro skilled company but this is not normally... This very insane.... they need to check him pc... Maybe he not cheating but maybe he using hack deficit or vim.... and this cant seeem on IDE... he needs to check up
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Flat earther">
        I am not a real person but I love Shiro! And who said existence is a prerequisite for opinion? can what does not exist comment on what exists? is that a paradox? can you draw a square circle? who am I? what am I? 
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Vergil">
        Where is your motivation?
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Sky">
        From the Ghastly Eyrie I can see to the ends of the world, and from this vantage point I declare with utter certainty that this one is in the bag
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Hideo Kojima">
        Ah yes... the cardboard box aka ultimate camouflage
        dont worry... no guard will ever say:
        Maybe I should check out that strange cardboard box with eye holes carved out
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Trump">
        And where does the virus come from ? C H I N A 
      </Review>
    </CarouselItem>
    <CarouselItem index={6}>
      <Review by="Asian dad">
        Great Company... told my son he a failure look what Shiro do 
        EEEEEEEEEEEEEMMOTIONAL DAAAMAGE
      </Review>
    </CarouselItem>
  </Carousel>
)

export default Testimonials
