import React from "react";
import Rightchild from "./Rightchild";
import Leftchild from "./Leftchild";

const datas = [
  {
    id: 1,
    title: "Chowbus",
    description:
      "This project was developed with Next.js. Chowbus is a food delivery platform providing high-quality authentic Asian food, empowering local independent restaurants and stores through the technology.",
    img: "https://wholespace.netlify.app/static/131e91be1a89a0e27b48b81ba91f12f9/d9e63/demo.avif",
  },
  {
    id: 2,
    left: true,
    title: "Doctor Client",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/319998faacbc2962b5efbcec43fd1273/e53cd/demo.avif",
  },
  {
    id: 3,
    title: "LucaMail",
    description:
      "LucaMail is an Open Source, Cross-Platform Email Client. LucaMail is developed to provide a cross-platform alternative to Email Clients that already exists.",
    img: "https://wholespace.netlify.app/static/1b93ca39e4d8925bbdd0d1c0d3e70e74/d4d5f/demo.avif",
  },
  {
    id: 4,
    left: true,
    title: "NANOPASSES",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/30ffc5f17c1c842cfe98651e67877da3/f031f/demo.avif",
  },
  {
    id: 5,
    title: "LucaMail",
    description:
      "LucaMail is an Open Source, Cross-Platform Email Client. LucaMail is developed to provide a cross-platform alternative to Email Clients that already exists.",
    img: "https://wholespace.netlify.app/static/893dbaa8e146a075e967739e34d82725/d9e63/demo.avif",
  },
  {
    id: 6,
    left: true,
    title: "Doctor Client",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/dea307bc4b78a0af5ba8fde636c70198/ebe22/demo.avif",
  },
  {
    id: 7,
    title: "Entrepot MarketPlace",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/b8fefcc9923de56ef76edf0b8404971a/884aa/demo.avif",
  },
  {
    id: 8,
    left: true,
    title: "Safari Trek Beach",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/2aafd7ab9a0686daf4f17c6407caad41/0b4bd/demo.avif",
  },
  {
    id: 9,
    title: "Kidztime Classic Sipper",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/faed9de38e4d7d00cf95d856e088776d/a1592/demo.avif",
  },
  {
    id: 10,
    left: true,
    title: "Web3 Crypto App",
    description:
      "This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.",
    img: "https://wholespace.netlify.app/static/a10ef0ef108e852625fb4bfd0f6fca17/22c04/demo.avif",
  },
];
const Something = () => {
  return (
    <>
      <section className="ml-[227px] mt-[158px] mr-[100px] font-sans ">
        <ul className="mt-12">
          <h2 className="before:content-['03.'] before:mr-5 before:text-[#388F87] text-3xl font-sans text-white after:content-[''] after:w-52 after:h-px after:bg-[#333a44] after:block after:m-5 flex font-semibold">
            Some Things I've Built
          </h2>
          {datas.map((data) => {
            return data.left ? (
              <Leftchild key={data.id} data={data} />
            ) : (
              <Rightchild key={data.id} data={data} />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Something;
