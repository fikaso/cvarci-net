function InstagramBlock() {
  return (
    <div className="mt-10 md:mt-16">
      <div className="flex items-center space-x-5 h-20 px-5">
        <h2>#čvarcinet</h2>
        <h3>na instagramu</h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="container-grid xl:gap-x-16 mt-5">
          <img
            className="col-span-12 md:col-span-6 xl:col-span-3 max-h-[18.68rem] max-w-[18.5rem]"
            src="./images/instagram_2.png"
            alt=""
          />
          <img
            className="col-span-12 md:col-span-6 xl:col-span-3 max-h-[18.68rem] max-w-[18.5rem]"
            src="./images/instagram_1.png"
            alt=""
          />
          <img
            className="col-span-12 md:col-span-6 xl:col-span-3 max-h-[18.68rem] max-w-[18.5rem]"
            src="./images/instagram_3.png"
            alt=""
          />
          <img
            className="col-span-12 md:col-span-6 xl:col-span-3 max-h-[18.68rem] max-w-[18.5rem]"
            src="./images/instagram_4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default InstagramBlock;
