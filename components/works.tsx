import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./work";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile page={0} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We build:</div>
              <div>
                <WorkLink href="https://github.com/2Senn">
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight"><strong>uncompromised beauty</strong></div>
                </WorkLink>
              </div>

            </WorkLeft>
            <WorkRight progress={progress}>
              <video autoPlay loop muted
                playsInline className=" object-cover ">
                <source src="/assets/works/flower.m4v" type="video/mp4; codecs=hvc1" />
                <source src="/assets/works/flower.webm" type="video/webm; codecs=vp9" />
              </video>
            </WorkRight>
          </WorkContainer>
        )}>
        </Tile>
        <Tile page={1} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Let us construct your thoughts into an</div>
              <div>
                <WorkLink href="https://github.com/2Senn">

                <strong>industry leading app</strong>
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <video autoPlay loop muted
                playsInline className=" object-cover ">
                <source src="/assets/works/lofi.m4v" type="video/mp4; codecs=hvc1" />
                <source src="/assets/works/lofi.webm" type="video/webm; codecs=vp9" />
              </video>
            </WorkRight>
          </WorkContainer>
        )}>
        </Tile>
        <Tile page={2} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Bring your late night ideas to</div> 
              <div>
                <WorkLink href="https://github.com/2Senn">
                  <strong> L I F E </strong>
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <video autoPlay loop muted
                  playsInline className=" object-cover ">
                <source src="/assets/works/tape-night.m4v" type="video/mp4; codecs=hvc1" />
                <source src="/assets/works/tape-night.webm" type="video/webm; codecs=vp9" />
              </video>
            </WorkRight>
          </WorkContainer>
        )}>
        </Tile>
      </TileContent>
    </TileWrapper>


  )
}

export default Works
