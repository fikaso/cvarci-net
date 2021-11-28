import "../Circles.css";
function Circles() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 text-gun-powder-500 py-14 mt-16 bg-gray text-center">
      <div>
        <div className="circles-wrapper">
          <span className="font-roboto">1</span>
        </div>
        <h3>klaonica</h3>
      </div>
      <div>
        <div className="circles-wrapper ">
          <span className="font-roboto">6</span>
        </div>
        <h3>vrsta čvaraka</h3>
      </div>
      <div>
        <div className="circles-wrapper ">
          <span className="font-roboto">11</span>
        </div>
        <h3>restorana</h3>
      </div>
      <div>
        <div className="circles-wrapper ">
          <span className="font-roboto">1</span>
        </div>
        <h3>najbolja cijena</h3>
      </div>
    </div>
  );
}

export default Circles;
