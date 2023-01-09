import ContentChild from "./ContentChild";
import React, { useMemo, useState } from "react";

const datas = [
  {
    title:
      "Large Laravel - how to build large and maintainable projects with Laravel framework",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
  },
  {
    title: "Build a Portfolio Using Bootstrap",
    description:
      "Welcome to the Bootstrap Portfolio Project! For this project, you'll be creating a personal web page to show off your work. We will test your HTML knowledge and then it will be up to you to use CSS to style your own page and make it unique.",
  },
  {
    title: "Smolrunners",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
  },
  {
    title: "Solve problem with dlops",
    description:
      "We are a network of designers, software engineers, data scientists and marketers whose passion for digital technologies binds us together to form this network of talents with abundant and diverse capabilities to tackle the most complex applications.",
  },
  {
    title: "Web3 Crypto App",
    description:
      "This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.",
  },
  {
    title: "Chat application with React and socket.io",
    description:
      "This app was basic chat application dose not incluse database, it was fucus on React and socket.io.",
  },
  {
    title: "Laravel From Scratch Blog Demo Project",
    description:
      "Of course we only had time in the Laravel From Scratch series to review the essentials of a blogging platform. You can certainly take this many steps further. Here are some quick ideas that you might play with.",
  },
];

const Othernoteworthy = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleBtn = () => {
    setShowMore(!showMore);
  };

  const objs = useMemo(() => {
    return showMore ? datas : datas.slice(0, 6);
  }, [showMore]);

  return (
    <section className="text-white font-sans flex flex-col px-36 py-36">
      <div className="flex items-center flex-col mb-10">
        <h2 className="text-3xl">Other Noteworthy Projects</h2>
        <a className="text-[#64ffda]" href="/archive">
          view the archive
        </a>
      </div>
      <ul className="grid grid-cols-3 gap-4 content-center">
        {objs.map((data) => {
          return <ContentChild data={data} />;
        })}
      </ul>
      <div className="flex justify-center mt-20">
        <button
          className="bg-transparent hover:bg-[rgba(100,255,218,0.1)] text-[#58E0C4] text-base py-4 px-6 rounded border border-[#58E0C4] border-solid"
          onClick={toggleBtn}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
};

export default Othernoteworthy;
