const ContentChild = ({ data }) => {
  return (
    <li className="bg-[#112240] rounded hover:text-[#64ffda] h-[390px]">
      <div className="px-5 py-5 flex flex-col justify-between h-[390px]">
        <header className="">
          <div className="flex justify-between items-center mb-5">
            <div className="">
              <svg
                width="40"
                height="40"
                color="#64ffda"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="">
              <a
                href="https://github.com/wholespace/laravel-large"
                aria-label="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className=""
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <h3 className="text-xl py-2 font-serif font-semibold">
            <a href="/toan" target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </h3>
          <div className="text-[#6C7795] font-normal">
            <p>{data.description}</p>
          </div>
        </header>
        <footer className="text-[#6C7795]">
          <ul className="flex mt-12">
            <li>Laravel</li>
            <li className="ml-5">PHP</li>
          </ul>
        </footer>
      </div>
    </li>
  );
};

export default ContentChild;
