"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("green");
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/gym-bg.webp')",
        }}
      >
        <div className="hero-overlay bg-slate-50 bg-opacity-80"></div>
        <div className="hero-content flex-col lg:flex-row items-center relative">
          <div className="relative top-72 right-44 lg:top-32 lg:right-10">
            <svg
              width="184"
              height="192"
              viewBox="0 0 184 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=""
            >
              <path
                d="M182.648 183.128C178.597 187.405 171.028 191.799 163.237 191.977C157.571 192.103 152.323 190.012 148.058 185.927C139.232 177.468 138.372 158.735 137.621 142.22C137.204 133.157 136.747 122.877 134.696 119.768C131.836 115.376 124.509 108.471 107.735 111.458C94.4152 113.834 81.7884 115.329 73.6959 107.665C64.5031 98.9588 66.3544 85.5644 68.5325 76.244C69.271 73.0119 70.4408 69.8949 72.0105 66.9765C67.2371 63.1964 63.8062 58.7353 62.4015 54.3978C60.8072 49.4882 61.1485 43.5448 61.4696 37.8066C61.9457 29.5112 62.3974 21.6751 57.4255 18.3185C52.9599 15.3123 37.4838 14.4287 30.2947 16.7929C23.7769 18.9234 13.5899 18.9589 1.99423 6.93367C1.6401 6.5666 1.36158 6.13357 1.17454 5.65932C0.987495 5.18506 0.895589 4.67887 0.904109 4.16963C0.912629 3.66038 1.02138 3.15807 1.22417 2.69136C1.42696 2.22466 1.71981 1.80269 2.086 1.44957C2.45218 1.09646 2.88452 0.819116 3.35835 0.63335C3.83218 0.447587 4.33822 0.357049 4.84756 0.366916C5.3569 0.376784 5.85958 0.486848 6.32689 0.690842C6.7942 0.894836 7.21699 1.18879 7.57112 1.55585C12.4264 6.59173 19.8904 12.0448 27.8628 9.42376C35.8352 6.80273 54.2649 6.8425 61.7549 11.8939C70.3895 17.7206 69.7629 28.6339 69.2095 38.2642C68.9095 43.5287 68.6214 48.5014 69.7664 52.0262C70.775 55.1189 73.3834 58.1558 76.531 60.6768C76.9819 60.2006 77.4049 59.754 77.8356 59.3765C82.0627 55.4357 86.9774 53.4477 91.2962 53.9361C96.6192 54.5284 100.113 58.7801 100.195 64.7704C100.25 70.0573 97.3594 73.7039 92.4487 74.5175C88.6575 75.1291 83.6402 73.9231 78.5462 71.2419C77.4414 73.3904 76.607 75.6679 76.0619 78.0227C73.2511 90.0426 74.1576 97.4483 79.0031 102.037C84.4653 107.21 95.0526 105.831 106.352 103.814C122.037 101.019 134.401 105.177 141.174 115.524C144.395 120.438 144.815 129.89 145.362 141.875C146.018 156.197 146.832 174.017 153.401 180.345C156.233 183.027 159.368 184.313 163.024 184.23C168.933 184.098 174.615 180.307 176.996 177.793C177.702 177.048 178.675 176.614 179.703 176.588C180.73 176.561 181.727 176.944 182.474 177.651C183.221 178.359 183.657 179.333 183.687 180.361C183.716 181.388 183.336 182.384 182.63 183.129L182.648 183.128ZM83.3056 64.9216C86.4005 66.4052 89.3016 67.1611 91.1914 66.8526C91.9094 66.7359 92.4752 66.6434 92.4525 64.8379C92.4131 61.8384 91.0498 61.6861 90.4681 61.6233C88.7028 61.4381 85.9689 62.5013 83.2972 64.9304L83.3056 64.9216Z"
                fill="#FFC83E"
              ></path>
            </svg>
          </div>
          <div className="md:max-w-[500px] lg:max-w-md translate-y-[-40px] lg:translate-x-[-60px] text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-bold mb-3 font-mono">
              PRE-ORDER
            </h1>
            <p className="text-3xl text-gray-900 font-bold">𝓛𝓪𝓻𝓲𝓼𝓼𝓪 GYM WEAR</p>
            <p className="text-lg font-bold leading-8 mb-2">
              Get Fit & Look Slick This{""}
              <span className="bg-[url('/deco-brush.svg')] py-[7px] px-[05px] bg-brush bg-no-repeat bg-contain bg-center">
                Summer!
              </span>
            </p>
            <p className="text-lg leading-6 text-gray-950 font-medium font-sans">
              Secure your premium summer gym wear at unbeatable prices during
              our Annual Sale! Pre-order today and experience unmatched comfort,
              durability, and style that will make you look sweet while getting
              that summer body.
            </p>
            <button className="btn mt-3 px-10">Pre-order</button>
          </div>
          <div className="relative-translate-y-16 h-fit">
            <div className="absolute left-10 md:left-[60px] lg:left-[700px] bottom-[200px]">
              <div
                onClick={() => setColor("green")}
                className="cursor-pointer mb-4 ring-4 ring-offset-2 ring-[#959B84] bg-[#959B84] w-6 h-6 rounded-full"
              ></div>
              <div
                onClick={() => setColor("black")}
                className="cursor-pointer ring-4 ring-offset-2 ring-[#000] bg-[#000] w-6 h-6 rounded-full"
              ></div>
            </div>
            {color == "green" ? (
              <Image src="/img_1.webp" width={480} height={250} />
            ) : (
              <Image src="/img_3.webp" width={480} height={250} />
            )}
          </div>
        </div>
      </section>
      <section className=" p-14">
        <h3 className="text-center font-mono mb-5 text-5xl">
          <span className="relative font-kanit before:content-[''] before:absolute before:top-[50px] before:right-0 before:w-full before:h-3 before:bg-[url('/cross-out-underline.svg')] before:block before:bg-no-repeat">
            Colors
          </span>{" "}
          that Suit you!
        </h3>
        <div className="flex w-full flex-col lg:flex-row md:flex-col h-full">
          <div className="h-fit flex-grow place-items-center">
            <Image src="/img_2.webp" width={350} height={250} />
            <p className="text-center">Pastel Green</p>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className=" h-fit flex-grow place-items-center relative">
            <Image src="/img_4.webp" width={350} height={250} />
            <p className="text-center absolute top-0 left-1/2 transform -translate-x-1/2 lg:static">
              Black
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center py-14">
          <div className="mb-4 lg:mb-10 text-center lg:max-w-[850px] px-5 md:px-40">
            <h3 className="font-mono text-5xl lg:text-5xl mb-2">
              Discover Your Perfect Fit!
            </h3>
            <p className="text-lg">
              Our Larissa GYM WEAR comes in two stunning colors to suit your
              style and preference. Whether you prefer the timeless elegance of
              black or the fresh look of pastel green, our collection has
              something for you.
            </p>
          </div>
          <div className="flex">
            <div>
              <Image src="/img_2.webp" width={250} height={150} />
            </div>
            <div>
              <Image src="/img_4.webp" width={250} height={150} />
            </div>
            <div>
              <Image src="/img_1.webp" width={250} height={150} />
            </div>
            <div>
              <Image src="/img_3.webp" width={250} height={150} />
            </div>
          </div>
        </div>
        <div></div>
        <div
          id="form"
          className="w-dvw relative grid place-items-center pt-32 pb-20 bg-[url('/pattern-rbg.svg')] bg-no-repeat"
        >
          <h3 className=" absolute top-10 text-5xl font-mono">
            Pre-Order Now!
          </h3>
          <form className="w-6/12 min-w-96" action="" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="Name"
              className="block mb-1 input input-bordered input-accent w-full min-w-xs rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className="block mb-1 input input-bordered input-accent w-full min-w-xs rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="block mb-1 input input-accent w-full min-w-xs rounded-md"
            />
            <select className=" text-[#9CA3AF] mb-1 select select-bordered rounded-md w-full max-w-xs">
              <option disabled selected>
                Color?
              </option>
              <option>Pastel green</option>
              <option>Black</option>
            </select>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="City"
                className="input mb-1 input-bordered input-accent w-full min-w-xs rounded-md"
              />
              <input
                type="text"
                placeholder="State"
                className="input mb-1 input-bordered input-accent w-full min-w-xs rounded-md"
              />
            </div>
            <button className="btn rounded-md w-full mt-1">Pre-order</button>
          </form>
        </div>
      </section>
    </main>
  );
}
