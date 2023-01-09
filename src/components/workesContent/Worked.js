import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./Worker.css";

const Worked = () => {
  return (
    <section className="ml-[227px] mt-[158px]">
      <h2 className="before:content-['02.'] before:mr-5 before:text-[#388F87] text-3xl font-sans text-white after:content-[''] after:w-52 after:h-px after:bg-[#333a44] after:block after:m-5 flex font-semibold">
        Where I've Worked
      </h2>
      <div className="App mt-7">
        <Tabs>
          <TabList>
            <Tab>
              <p>Freelancer</p>
            </Tab>
            <Tab>
              <p>ThimbleGang</p>
            </Tab>
            <Tab>
              <p>Ratio Finance</p>
            </Tab>
            <Tab>
              <p>Wizcorp Inc</p>
            </Tab>
            <Tab>
              <p>Proofs</p>
            </Tab>
            <Tab>
              <p>Codegram</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Full Stack Developer</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    Freelancer
                  </a>
                </span>
              </h3>
              <p className="">July 2021 - Present</p>
              <div className="text-[#8892b0]">
                <p>
                  Working on flexible projects for unlimited clients around the
                  world.
                </p>
                <ul className="">
                  <li className=" mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Smart-Contracts (Solidity, Truffle framework)
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    <b>NFT</b> (Non Fungible Token) Marketplace Development
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Crypto Coins Exchange Development
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Cryptocurrency Wallet Development for Linux, windows, Web.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Ecommerce websites using <b>Woocommerce</b> , <b>Shopify</b>
                    and <b>Magento</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Frontend development using <b>React</b>, <b>Vue</b>,
                    <b>Angular</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Experience in AWS, GCP, Azure to deploy <b>Python/Django</b>
                    and <b>MERN</b>, <b>MEVN</b>, <b>MEAN</b> projects.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    WAMP/LAMP/MAMP server for Laravel, CI projects.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Blockchain Developer</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    ThimbleGang
                  </a>
                </span>
              </h3>
              <p className="">Jun 2020 - April 2021</p>
              <div className="text-[#8892b0]">
                <ul className="">
                  <li className=" mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Token development based on Ethereum and Binance (ERC20,
                    ERC721, ERC 1155, BEP20, BEP721, BEP1155).
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    ICO & IDO Development with Created Token(Coin).
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Smart Contracts Audits
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    DLT Apps & Private Blockchain Development.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Full Stack Developer</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    Freelancer
                  </a>
                </span>
              </h3>
              <p className="">July 2021 - Present</p>
              <div className="text-[#8892b0]">
                <ul className="">
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Created and deployed new features in order to sustain and
                    amend existing applications under
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    unit test framework to write unit tests for JavaScript code
                    and used
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Ecommerce websites using <b>Woocommerce</b> , <b>Shopify</b>
                    and <b>Magento</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Experience in AWS, GCP, Azure to deploy <b>Python/Django</b>
                    and <b>MERN</b>, <b>MEVN</b>, <b>MEAN</b> projects.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    WAMP/LAMP/MAMP server for Laravel, CI projects.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Full Stack Developer</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    Freelancer
                  </a>
                </span>
              </h3>
              <p className="">July 2021 - Present</p>
              <div className="text-[#8892b0]">
                <ul className="">
                  <li className=" mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Smart-Contracts (Solidity, Truffle framework)
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    <b>NFT</b> (Non Fungible Token) Marketplace Development
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Crypto Coins Exchange Development
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Cryptocurrency Wallet Development for Linux, windows, Web.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Ecommerce websites using <b>Woocommerce</b> , <b>Shopify</b>
                    and <b>Magento</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Frontend development using <b>React</b>, <b>Vue</b>,
                    <b>Angular</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Experience in AWS, GCP, Azure to deploy <b>Python/Django</b>
                    and <b>MERN</b>, <b>MEVN</b>, <b>MEAN</b> projects.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    WAMP/LAMP/MAMP server for Laravel, CI projects.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Full Stack Developer</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    Freelancer
                  </a>
                </span>
              </h3>
              <p className="">July 2021 - Present</p>
              <div className="text-[#8892b0]">
                <ul className="">
                  <li className=" mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Smart-Contracts (Solidity, Truffle framework)
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Cryptocurrency Wallet Development for Linux, windows, Web.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Ecommerce websites using <b>Woocommerce</b> , <b>Shopify</b>
                    and <b>Magento</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Frontend development using <b>React</b>, <b>Vue</b>,
                    <b>Angular</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    WAMP/LAMP/MAMP server for Laravel, CI projects.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content w-auto font-sans">
              <h3 className="text-2xl">
                <span>Intern at Software Development</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a href="#toan" className="mb-xl">
                    Codegram
                  </a>
                </span>
              </h3>
              <p className="">July 2021 - Present</p>
              <div className="text-[#8892b0]">
                <ul className="">
                  <li className=" mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Smart-Contracts (Solidity, Truffle framework)
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    <b>NFT</b> (Non Fungible Token) Marketplace Development
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Ecommerce websites using <b>Woocommerce</b> , <b>Shopify</b>
                    and <b>Magento</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Frontend development using <b>React</b>, <b>Vue</b>,
                    <b>Angular</b>.
                  </li>
                  <li className="mt-2 before:content-['▹'] before:text-[#64FFDA] before:mr-3">
                    Experience in AWS, GCP, Azure to deploy <b>Python/Django</b>
                    and <b>MERN</b>, <b>MEVN</b>, <b>MEAN</b> projects.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Worked;
