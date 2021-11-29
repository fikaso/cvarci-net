function Footer() {
  return (
    <div className="mt-16 md:mt-[4.5rem] mb-10 space-y-5 lg:space-y-0">
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-[7.8rem] md:pt-[4.25rem]">
        <div>
          <a href="./">
            <img src="./icons/main-logo.svg" alt="main-logo" />
          </a>
        </div>
        <div className="flex space-x-5 lg:space-x-20 xl:space-x-52 text-manatee-500 mt-3 md:mt-0">
          <a href="./">
            <h3>O nama</h3>
          </a>
          <a href="./">
            <h3>Cjenik</h3>
          </a>
          <a href="./">
            <h3>Kontakt</h3>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-[7.8rem] md:pt-[4.25rem] space-y-5 lg:space-y-0">
        <div className="flex space-x-10 md-space-x-5">
          <a href="https://www.instagram.com">
            <img src="./icons/instagram-icon.svg" alt="" />
          </a>
          <a href="https://www.twitter.com">
            <img src="./icons/twitter-icon.svg" alt="" />
          </a>
          <a href="https://www.facebook.com">
            <img src="./icons/fb-icon.svg" alt="" />
          </a>
        </div>
        <div className="flex space-x-5 lg:space-x-10 xl:space-x-24 text-manatee-500 mt-3 md:mt-0">
          <a href="./">
            <p>Politika privatnosti</p>
          </a>
          <a href="./">
            <p>Uvjeti korištenja</p>
          </a>
          <a href="./">
            <p>&copy; 2021 Čvarci net</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
