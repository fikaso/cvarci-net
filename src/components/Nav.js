function Nav() {
  return (
    <div className="flex mx-10 justify-between">
      <button className="btn-menu">
        <img src="./icons/menu-button.svg" alt="menu-button" />
      </button>
      <button className="sm:w-auto">
        <img src="./icons/main-logo.svg" alt="main-logo" />
      </button>
      <div className="hidden md:flex space-x-5">
        <button className="flex space-x-3 px-4 items-center text-manatee-500 font-roboto font-bold hover:shadow-gray rounded-2xl">
          <img
            className="w-4 h-4"
            src="./icons/contact-icon.svg"
            alt="contact-icon"
          />
          <p className="text-sm">PRIJAVI SE</p>
        </button>
        <button className="flex space-x-3 px-4 items-center text-manatee-500 font-roboto font-bold hover:shadow-gray rounded-2xl">
          <img
            className="w-5 h-5"
            src="./icons/cart-icon.svg"
            alt="cart-icon"
          />
          <p>0</p>
        </button>
      </div>
    </div>
  );
}

export default Nav;
