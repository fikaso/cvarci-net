function Features() {
  return (
    <div className="flex justify-center shadow-gray md:max-w-[864px] my-10 xl-my-0">
      <div className="flex flex-col sm:flex-row md:h-[6.5rem] text-gun-powder-500 space-y-4 md:space-y-0 p-5 sm:p-0">
        <div className="flex items-center">
          <img
            className="features-icon"
            src="./icons/meal-time-icon.svg"
            alt="meal-time-icon"
          />
          <p className="md:w-[11.375rem] m-4">
            dostavljamo čvarke za manje od 30 minuta
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="features-icon"
            src="./icons/motor-icon.svg"
            alt="motor-icon"
          />
          <p className="md:w-[7.75rem] m-4">naši šoferi voze tomose</p>
        </div>
        <div className="flex items-center">
          <img
            className="features-icon"
            src="./icons/heart-icon.svg"
            alt="heart-icon"
          />
          <p className="md:w-[10.75rem] m-4">
            nabavljamo najbolje prasce iz francuske
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
