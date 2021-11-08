function Features() {
  return (
    <div className="flex w-[54rem] h-[6.5rem] ml-[5.75rem] text-gun-powder-500">
      <div className="flex items-center">
        <img
          className="features-icon"
          src="./icons/meal-time-icon.svg"
          alt="meal-time-icon"
        />
        <p className="w-[11.375rem] m-4">
          dostavljamo čvarke za manje od 30 minuta
        </p>
      </div>
      <div className="flex items-center">
        <img
          className="features-icon"
          src="./icons/motor-icon.svg"
          alt="motor-icon"
        />
        <p className="w-[7.75rem] m-4">naši šoferi voze tomose</p>
      </div>
      <div className="flex items-center">
        <img
          className="features-icon"
          src="./icons/heart-icon.svg"
          alt="heart-icon"
        />
        <p className="w-[10.75rem] m-4">
          nabavljamo najbolje prasce iz francuske
        </p>
      </div>
    </div>
  );
}

export default Features;