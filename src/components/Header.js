function Header() {
  return (
    <div className="grid grid-cols-12 gap-6 text-gun-powder-500">
      <div className="col-span-5 col-start-2 mt-[16.151rem]">
        <h1>Najbolji čvarci na kućnom pragu</h1>
        <button className="m-0 p-0">
          <div className="inline-block border-[1px] border-turbo-500 mt-[3.563rem] pt-[16px] pr-[18px] pb-[15px] pl-[19px] mr-[24px] text-center hover:bg-yellow-300 hover:text-white">
            <h4>DOSTAVA</h4>
            <p>Naruči</p>
          </div>
        </button>
        <button>
          <div className="inline-block border-[1px] border-turbo-500 mt-[3.563rem] pt-[16px] pr-[18px] pb-[15px] pl-[19px] text-center hover:bg-yellow-300 hover:text-white">
            <h4>PREUZMI</h4>
            <p>Na čvarkomatu</p>
          </div>
        </button>
      </div>
      <div className="col-span-6 mt-14">
        <img className="rounded-full" src="./images/cvarci 1.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
