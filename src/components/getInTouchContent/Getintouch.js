const Getintouch = () => {
  return (
    <section className="text-white font-sans flex text-center justify-center ">
      <div className="max-w-xl">
        <h2 className="text-[#58E0C4]">What's Next?</h2>
        <h2 className="text-6xl">Get In Touch</h2>
        <p className="my-9">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a
          className="bg-transparent hover:bg-[rgba(100,255,218,0.1)] text-[#58E0C4] text-base py-4 px-9 rounded border border-[#58E0C4] border-solid"
          href="mailto:wholespace.214@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
        <div className="pt-72">
          <a
            href="https://github.com/wholespace/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>Designed &amp; Built by Whole Space</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Getintouch;
