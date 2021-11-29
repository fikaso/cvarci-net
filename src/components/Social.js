function Social({
  image1,
  image2,
  image3,
  image4,
  logo1,
  logo2,
  logo3,
  logo4,
}) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center px-3 space-y-2 sm:space-y-0">
        <h2 className="">Naše čvarke možete pronaći</h2>
        <button className="btn-secondary">prikaži sve</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-12 gap-6 mt-14">
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex shadow-gray-light max-w-[296px] relative">
            <div className="flex flex-col">
              <img className="" src={image1} alt="" />
              <div className="flex w-full h-full items-center justify-center py-8">
                <img src={logo1} alt="" />
              </div>
            </div>
            <button className="btn-back absolute top-1/2 -left-5">
              <img src="./icons/back-arrow.svg" alt="" />
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center shadow-gray-light max-w-[296px]">
            <div className="flex flex-col">
              <img src={image2} alt="" />
              <div className="flex w-full h-full items-center justify-center py-8">
                <img src={logo2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center shadow-gray-light max-w-[296px]">
            <div className="flex flex-col">
              <img src={image3} alt="" />
              <div className="flex w-full h-full items-center justify-center py-8">
                <img src={logo3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center shadow-gray-light max-w-[296px] relative">
            <div className="flex flex-col">
              <img src={image4} alt="" />
              <div className="flex w-full h-full items-center justify-center py-8">
                <img src={logo4} alt="" />
              </div>
            </div>
            <button className="btn-back absolute top-1/2 -right-5 rotate-180">
              <img src="./icons/back-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
