function Location() {
  return (
    <div className="flex flex-col xl:flex-row space-y-5 xl-space-y-0 items-center justify-between text-center sm:text-left">
      <h2 className="px-14">
        Gdje se nalaze naši{" "}
        <span className="whitespace-nowrap">čvarkomati ?</span>{" "}
      </h2>

      <img src="./images/location.svg" alt="" />
    </div>
  );
}

export default Location;
