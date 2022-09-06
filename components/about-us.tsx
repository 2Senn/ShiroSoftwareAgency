import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you achieve your dream app, faster. </strong>
          Our team of expert developers has created one of the best user experiences and most beautiful designs in leading apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-20">
          <Member id="faisal" name="Faisal" socialId="@mochvv" link="https://github.com/2Senn" />
          <Member id="malek" name="Malek" socialId="@munchek" link="https://github.com/2Senn" />
          <Member id="ahmad" name="Ahmad" socialId="@hhhherv" link="https://github.com/2Senn" />
          <Member id="ibrahim" name="Ibrahim" socialId="@ibiv3" link="https://github.com/2Senn" />
          <Member id="talha" name="Talha" socialId="@tu7sa" link="https://github.com/2Senn" />
        </div>
      </div>

    </section>
  )
}

export default AboutUs
