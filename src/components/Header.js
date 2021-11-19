function Header() {
  return (
    <div className="container-grid text-gun-powder-500">
      <div className="col-span-12 row-start-2 xl:row-start-1 xl:col-span-5 xl:col-start-2 xl:mt-[16.151rem] text-center xl:text-left">
        <h1 className="px-3 xl:px-0">Najbolji čvarci na kućnom pragu</h1>
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 md:space-x-6 xl:space-x-6 mt-8 md:mt-14 justify-center xl:justify-start items-center ">
          <button className="btn-tertiary">
            <h4>DOSTAVA</h4>
            <p>Naruči</p>
          </button>
          <button className="btn-tertiary">
            <h4>PREUZMI</h4>
            <p>Na čvarkomatu</p>
          </button>
        </div>
      </div>
      <div className="col-span-12 row-start-1 xl:col-span-6 mt-14">
        <img
          className="rounded-3xl md:rounded-full object-contain md:w-7/12 xl:w-11/12 mx-auto"
          src="./images/cvarci 1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
