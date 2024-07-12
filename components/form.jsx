import React from "react";
import Image from "next/image";

function Form({ section2Ref }) {
  const [formdata, setFormdata] = React.useState({
    name: "",
    email: "",
    address: "",
    color: "",
    city: "",
    state: "",
  });

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
    <section ref={section2Ref}>
      <aside className="flex flex-col items-center justify-center py-14">
        <div className="mb-4 lg:mb-10 text-center lg:max-w-[850px] px-5 md:px-40">
          <h3 className="font-mono text-5xl lg:text-5xl mb-2">
            Discover Your Perfect Fit!
          </h3>
          <p className="text-lg">
            Our Larissa GYM WEAR comes in two stunning colors to suit your style
            and preference. Whether you prefer the timeless elegance of black or
            the fresh look of pastel green, our collection has something for
            you.
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
      </aside>
      <div
        id="form"
        className="w-dvw relative grid place-items-center pt-32 pb-20 bg-[url('/pattern-rbg.svg')] bg-no-repeat"
      >
        <h3 className=" absolute top-10 text-5xl font-mono">Pre-Order Now!</h3>
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
            defaultValue=""
            onChange={handleChange}
            className=" text-[#9CA3AF] mb-1 select select-bordered rounded-md w-full max-w-xs"
          >
            <option value="" disabled>
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
  );
}

export default Form;
