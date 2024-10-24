import React from "react";

const App = () => {
  return (
    <div className="bg-[#FFDD55] h-screen overflow-hidden p-[28px] pt-[112px] sm:pt-16">
      <header className="bg-[#000000] w-full flex justify-between items-center rounded-b-[35.6px] absolute top-0 left-0 py-5 px-8">
        <a href="#">
          <img src="/logo.png" alt="LOGO" />
        </a>
        <ul className="md:flex gap-6 hidden text-white font-semibold text-[36px] lg:gap-8 lg:pr-4">
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-300">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-300">
              Team
            </a>
          </li>
        </ul>
        <a href="#" className="md:hidden inline">
          <img src="/Hamburger_MD.png" alt="MENU" />
        </a>
      </header>

      {/*içerik*/}
      <div className="flex flex-col h-screen gap-[16px] pt-[32px] sm:justify-center lg:w-5/6 lg:mx-auto">
        <h1 className="font-extrabold text-[64px] flex flex-col leading:tight">
          Hello,<span>I'm</span>
        </h1>

        <div className="font-semibold text-[#474A57] text-[25px] xl:flex">
          <h2>UI/UX Designer</h2>
          <span className="hidden xl:inline">,&nbsp;</span>
          <h2>React developer</h2>
        </div>

        {/*iconlar*/}
        <div className="flex justify-start items-end gap-2 max-w-[511px] sm:absolute right-6 sm:max-w-[296px] md:max-w-[396px] lg:md:max-w-[420px] xl:max-w-[480px] lg:right-36 xl:right-48">
          <div>
            <img src="/profil.png" alt="avatar" />
          </div>
          <div>
            <div>
              <a href="#">
                <img src="/instagram.png" alt="instagram" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/facebook.png" alt="facebook" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/twitter.png" alt="twitter" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/youtube.png" alt="youtube" />
              </a>
            </div>
          </div>
        </div>

        {/*butonlar*/}
        <div className=" text-white text-[18px] font-bold flex gap-2 pt-4 z-10">
          <button className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-2 px-5">
            <a href="#">Hire me</a>
          </button>
          <button className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-2 px-5">
            <a href="#">Download CV</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
