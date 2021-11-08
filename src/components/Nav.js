function Nav() {
  return (
    <div className="flex justify-between">
      <button className="btn-menu">
        <img src="./icons/menu-button.svg" alt="menu-button" />
      </button>
      <button className="">
        <img className="" src="./icons/main-logo.svg" alt="main-logo" />
      </button>
      <div className="flex space-x-5">
        <button className="flex space-x-2 px-4 items-center text-manatee-500 font-roboto font-bold hover:shadow-gray rounded-2xl">
          <img src="./icons/contact-icon.svg" alt="contact-icon" />
          <p>PRIJAVI SE</p>
        </button>
        <button className="flex space-x-2 px-4 items-center text-manatee-500 font-roboto font-bold hover:shadow-gray rounded-2xl">
          <img src="./icons/cart-icon.svg" alt="cart-icon" />
          <p>0</p>
        </button>
      </div>
    </div>
  );
}

export default Nav;
