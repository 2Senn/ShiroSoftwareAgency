import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from './slider'

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="px-10" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/instagram.png"
          width={150}
          height={50}
          alt="Instagram"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/gmail.png"
          width={150}
          height={50}
          alt="Gmail"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/linkedin.png"
          width={150}
          height={50}
          alt="LinkedIn"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/telegram.png"
          width={150}
          height={50}
          alt="Telegram"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/tripadvisor.png"
          width={150}
          height={50}
          alt="Trip Advisor"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/reddit.png"
          width={150}
          height={50}
          alt="Reddit"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/twitch.png"
          width={150}
          height={50}
          alt="Twitch"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className="" contentWidth={1500} initialOffsetX={10}>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/airbnb.png"
          width={150}
          height={50}
          alt="Airbnb"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/facebook.png"
          width={150}
          height={50}
          alt="Facebook"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/coinbase.png"
          width={150}
          height={50}
          alt="Coinbase"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/nasa.png"
          width={150}
          height={50}
          alt="Nasa"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/grammarly.png"
          width={150}
          height={50}
          alt="Grammarly"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/paypal.png"
          width={150}
          height={50}
          alt="Paypal"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="Shopify"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
)

export default ClientLogos
