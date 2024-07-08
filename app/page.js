"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [color, setColor] = useState("green");

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    address: "",
    color: "",
    city: "",
    state: "",
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const element = [section1Ref.current, section2Ref.current];

    element.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    setFormdata({
      ...formdata,
      name: "",
      email: "",
      address: "",
      color: "",
      city: "",
      state: "",
    });

    if (formdata.name === "" || formdata.state === "") return;

    document.getElementById("my_modal_3").showModal();
  };

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setFormdata({ ...formdata, name: e.target.value });
        break;
      case "address":
        setFormdata({ ...formdata, address: e.target.value });
        break;
      case "email":
        setFormdata({ ...formdata, email: e.target.value });
        break;
      case "color":
        setFormdata({ ...formdata, color: e.target.value });
        break;
      case "city":
        setFormdata({ ...formdata, city: e.target.value });
        break;
      case "state":
        setFormdata({ ...formdata, state: e.target.value });
        break;
      default:
        break;
    }
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
            <a href="#form">
              <button className="btn mt-3 px-10">Pre-order</button>
            </a>
          </div>
          <div className="relative-translate-y-16 h-fit">
            <div className="absolute left-14 md:left-[60px] lg:left-[700px] bottom-[200px]">
              <div
                onClick={() => setColor("green")}
                className="cursor-pointer mb-4 ring-4 ring-offset-2 ring-[#959B84] bg-[#959B84] h-7 w-7 lg:w-6 lg:h-6 rounded-full"
              ></div>
              <div
                onClick={() => setColor("black")}
                className="cursor-pointer ring-4 ring-offset-2 ring-[#000] bg-[#000] h-7 w-7 lg:w-6 lg:h-6 rounded-full"
              ></div>
            </div>
            {color == "green" ? (
              <Image
                alt="Larissa gym wear model"
                src="/img_1.webp"
                width={480}
                height={250}
              />
            ) : (
              <Image
                alt="Larissa gym wear model"
                src="/img_3.webp"
                width={480}
                height={250}
              />
            )}
          </div>
        </div>
      </section>
      <section ref={section1Ref} className=" p-14">
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
            <p className="text-center absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:static lg:origin-center">
              Black
            </p>
          </div>
        </div>
      </section>
      <section ref={section2Ref}>
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
              <Image
                alt="Larissa gym wear model"
                src="/img_2.webp"
                width={250}
                height={150}
              />
            </div>
            <div>
              <Image
                alt="Larissa gym wear model"
                src="/img_4.webp"
                width={250}
                height={150}
              />
            </div>
            <div>
              <Image
                alt="Larissa gym wear model"
                src="/img_1.webp"
                width={250}
                height={150}
              />
            </div>
            <div>
              <Image
                alt="Larissa gym wear model"
                src="/img_3.webp"
                width={250}
                height={150}
              />
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
              name="name"
              value={formdata.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="block mb-1 input input-bordered input-accent w-full min-w-xs rounded-md"
            />
            <input
              name="email"
              value={formdata.email}
              onChange={handleChange}
              type="text"
              placeholder="Email"
              className="block mb-1 input input-bordered input-accent w-full min-w-xs rounded-md"
            />
            <input
              name="address"
              value={formdata.address}
              onChange={handleChange}
              type="text"
              placeholder="Address"
              className="block mb-1 input input-accent w-full min-w-xs rounded-md"
            />
            <select
              name="color"
              onChange={handleChange}
              className=" text-[#9CA3AF] mb-1 select select-bordered rounded-md w-full max-w-xs"
            >
              <option disabled selected>
                Color?
              </option>
              <option>Pastel green</option>
              <option>Black</option>
            </select>
            <div className="flex gap-1">
              <input
                name="city"
                value={formdata.city}
                onChange={handleChange}
                type="text"
                placeholder="City"
                className="input mb-1 input-bordered input-accent w-full min-w-xs rounded-md"
              />
              <input
                name="state"
                value={formdata.state}
                onChange={handleChange}
                type="text"
                placeholder="State"
                className="input mb-1 input-bordered input-accent w-full min-w-xs rounded-md"
              />
            </div>
            <button className="btn rounded-md w-full mt-1">Pre-order</button>
          </form>
        </div>
      </section>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          <svg
            width="98"
            height="132"
            viewBox="0 0 98 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute w-14 right-0 bottom-4"
          >
            <path
              d="M46.9684 132C46.3582 132 45.7557 132 45.1494 131.951C44.6766 131.926 44.2134 131.808 43.7861 131.603C43.3589 131.398 42.976 131.111 42.6593 130.758C42.3426 130.405 42.0982 129.993 41.9403 129.545C41.7824 129.098 41.7139 128.623 41.7388 128.149C41.7637 127.675 41.8815 127.21 42.0854 126.781C42.2893 126.353 42.5753 125.969 42.9272 125.651C43.2791 125.333 43.6899 125.088 44.1362 124.93C44.5825 124.771 45.0556 124.702 45.5283 124.727C59.2502 125.488 80.2707 113.551 88.494 95.2532C90.3887 91.0295 92.8253 83.1715 87.7777 78.0241C85.4623 75.6671 82.4724 74.3669 79.3953 73.7016C78.8117 74.5912 78.1978 75.458 77.546 76.3057C70.2663 85.7757 55.3659 99.5491 44.1982 98.6861C40.3329 98.3896 37.2785 96.4051 35.3686 92.9076C33.7959 90.0412 33.8528 86.6729 35.5278 83.4262C36.8428 80.8829 39.1126 78.3929 42.2807 76.0282C50.4888 69.8924 63.7825 65.2924 75.5111 65.95C79.9145 56.9515 80.4943 46.5046 76.269 41.2051C74.1355 38.5211 70.2057 34.8601 60.7584 34.0465C57.9495 33.8716 55.1304 33.9607 52.3381 34.3127C48.954 44.6038 40.4238 53.7999 32.5492 57.6548C25.6295 61.0421 19.7141 60.046 16.7317 54.9936C13.4121 49.3672 14.837 44.8052 16.6104 41.9654C21.4042 34.3089 34.9517 29.8381 46.4605 27.8993C46.8775 25.1558 46.5865 22.3509 45.6155 19.7523C43.6866 14.8102 39.3741 10.826 33.7846 8.82636C26.1677 6.10057 16.1709 6.92552 4.8781 11.2328C4.43594 11.401 3.96514 11.4803 3.49246 11.466C3.01978 11.4517 2.55454 11.3441 2.12329 11.1494C1.25236 10.7562 0.572784 10.032 0.234084 9.13617C-0.104616 8.24033 -0.0747715 7.24622 0.317165 6.3725C0.709101 5.49878 1.43098 4.81707 2.32397 4.47729C15.4206 -0.510484 26.8195 -1.33547 36.2062 2.02519C43.7549 4.72817 49.6286 10.2292 52.3192 17.1178C53.5254 20.2528 54.0299 23.6155 53.7971 26.9678C56.3162 26.7255 58.8507 26.6861 61.3761 26.85C70.5506 27.6408 77.2656 30.8607 81.9039 36.7039C87.5693 43.8358 87.6603 56.1151 82.8893 67.1666C86.6655 68.1971 90.111 70.1919 92.8898 72.9565C98.8621 79.0391 99.6276 88.0187 95.0385 98.2223C87.5883 114.893 66.7497 132 46.9684 132ZM70.8423 73.1922C69.8684 73.2568 68.9665 73.3519 68.1707 73.4583C60.4022 74.4848 52.1373 77.6934 46.6008 81.822C43.6298 84.0383 40.5641 87.3648 41.6744 89.4253C42.4096 90.7597 43.3266 91.3755 44.7514 91.4858C50.6972 91.961 62.3766 83.6885 70.8423 73.196V73.1922ZM44.0504 35.6889C34.8987 37.6619 25.622 41.2165 22.742 45.8165C21.9841 47.0482 21.3928 48.6639 22.9617 51.3213C24.163 53.359 27.5091 52.1044 29.4266 51.173C34.8722 48.5157 40.7611 42.4938 44.058 35.6927L44.0504 35.6889Z"
              fill="#FFC83E"
            ></path>
          </svg>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute bottom-0 w-8"
          >
            <path
              d="M23.375 0.944336C22.4467 0.944336 21.5565 1.29126 20.9001 1.9088C20.2437 2.52633 19.875 3.3639 19.875 4.23723V15.6514C19.875 16.5248 20.2437 17.3623 20.9001 17.9798C21.5565 18.5973 22.4467 18.9443 23.375 18.9443C24.3033 18.9443 25.1935 18.5973 25.8498 17.9798C26.5062 17.3623 26.875 16.5248 26.875 15.6514V4.23723C26.874 3.36418 26.5049 2.52715 25.8488 1.90981C25.1926 1.29247 24.303 0.945253 23.375 0.944336Z"
              fill="#FFC83E"
            ></path>
            <path
              d="M23.375 27.9443C22.4467 27.9443 21.5565 28.2913 20.9001 28.909C20.2437 29.5266 19.875 30.3644 19.875 31.2379V42.6508C19.875 43.5243 20.2437 44.362 20.9001 44.9797C21.5565 45.5973 22.4467 45.9443 23.375 45.9443C24.3033 45.9443 25.1935 45.5973 25.8498 44.9797C26.5062 44.362 26.875 43.5243 26.875 42.6508V31.2379C26.874 30.3647 26.5049 29.5275 25.8488 28.91C25.1926 28.2925 24.303 27.9453 23.375 27.9443Z"
              fill="#FFC83E"
            ></path>
            <path
              d="M15.5815 19.9443H4.16853C3.29503 19.9443 2.45731 20.3131 1.83965 20.9695C1.22199 21.6258 0.875 22.5161 0.875 23.4443C0.875 24.3726 1.22199 25.2628 1.83965 25.9192C2.45731 26.5756 3.29503 26.9443 4.16853 26.9443H15.5815C16.455 26.9443 17.2927 26.5756 17.9104 25.9192C18.528 25.2628 18.875 24.3726 18.875 23.4443C18.875 22.5161 18.528 21.6258 17.9104 20.9695C17.2927 20.3131 16.455 19.9443 15.5815 19.9443Z"
              fill="#FFC83E"
            ></path>
            <path
              d="M42.5884 19.9443H31.1685C30.295 19.9443 29.4573 20.3131 28.8396 20.9695C28.222 21.6258 27.875 22.5161 27.875 23.4443C27.875 24.3726 28.222 25.2628 28.8396 25.9192C29.4573 26.5756 30.295 26.9443 31.1685 26.9443H42.5815C43.455 26.9443 44.2927 26.5756 44.9104 25.9192C45.528 25.2628 45.875 24.3726 45.875 23.4443C45.875 22.5161 45.528 21.6258 44.9104 20.9695C44.2927 20.3131 43.455 19.9443 42.5815 19.9443H42.5884Z"
              fill="#FFC83E"
            ></path>
          </svg>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Success! Your Preorder is Confirmed
          </h3>
          <p className="py-4">
            Thank you for preordering from Larissa Gym Wear! We're excited to
            have you join our community of fitness enthusiasts. Your exclusive
            summer gym wear will be on its way soon.
          </p>
        </div>
      </dialog>
    </main>
  );
}
