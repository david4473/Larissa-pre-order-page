import React from "react";
import Image from "next/image";

function Body({ section1Ref }) {
  return (
    <section ref={section1Ref} className=" p-14">
      <h3 className="text-center font-mono mb-5 text-5xl">
        <span className="relative font-kanit before:content-[''] before:absolute before:top-[50px] before:right-0 before:w-full before:h-3 before:bg-[url('/cross-out-underline.svg')] before:block before:bg-no-repeat">
          Colors
        </span>{" "}
        that Suit you!
      </h3>
      <div className="flex w-full flex-col lg:flex-row md:flex-col h-full">
        <div className="h-fit flex-grow place-items-center">
          <Image
            alt="Larissa gym wear model"
            src="/img_2.webp"
            width={350}
            height={250}
          />
          <p className="text-center">Pastel Green</p>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className=" h-fit flex-grow place-items-center relative">
          <Image
            alt="Larissa gym wear model"
            src="/img_4.webp"
            width={350}
            height={250}
          />
          <p className="text-center absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:static lg:origin-center">
            Black
          </p>
        </div>
      </div>
    </section>
  );
}

export default Body;
