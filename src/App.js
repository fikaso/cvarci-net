import "./App.css";

function App() {
  return (
    <div>
      <h1>Lorem ipsum 12345</h1>

      <h2>Lorem ipsum 12345</h2>

      <h3>Lorem ipsum 12345</h3>

      <h4>Lorem ipsum 12345</h4>

      <div className="flex my-10 mx-5 space-x-2">
        <div className="bg-turbo-500 h-32 w-32"></div>
        <div className="bg-sahara-500 h-32 w-32"></div>
        <div className="bg-lemon-chiffon-500 h-32 w-32"></div>
        <div className="bg-gun-powder-500 h-32 w-32"></div>
        <div className="bg-manatee-500 h-32 w-32"></div>
        <div className="bg-pampas-500 h-32 w-32"></div>
      </div>

      <div className="flex my-10 mx-5 space-x-5 items-center">
        <button className="btn-primary">PRIMARY</button>
        <button className="btn-secondary">SECONDARY</button>
        <button className="btn-tertiary">TERTIARY</button>
        <button className="btn-back">
          <img src="./icons/back-arrow.svg" alt="btn-back" />
        </button>

        <input
          type="text"
          className="input-box"
          placeholder="Your input here"
        />
      </div>

      <div className="flex my-10 mx-5 space-x-5 items-center">
        <img
          src="./icons/motor-icon.svg"
          alt="motor-bike-icon"
          className="features-icon"
        />
        <img
          src="./icons/heart-icon.svg"
          alt="motor-bike-icon"
          className="features-icon"
        />
        <img
          src="./icons/meal-time-icon.svg"
          alt="motor-bike-icon"
          className="features-icon"
        />
      </div>

      <p>
        Ratione vel pariatur voluptas facilis quidem similique, natus molestias
        aperiam odio dolorum, doloremque necessitatibus nulla ullam porro et
        alias ipsam suscipit, eaque dolor doloribus temporibus dolorem? Placeat
        nihil officiis velit!
      </p>

      <p>
        Veritatis enim non modi nihil id facere tenetur itaque. Numquam nesciunt
        ducimus minima beatae eaque, reiciendis fugit? Eius rerum, voluptatibus
        corrupti ipsa, voluptatum sapiente aut quam, at alias soluta distinctio?
      </p>

      <p>
        Facere itaque nostrum ad libero dolorem culpa saepe quas ipsam quidem
        adipisci consequatur, vel voluptatum dolorum dignissimos obcaecati
        quisquam aliquid natus ratione quis tempore dolore nihil, eius quae.
        Illum, repellat!
      </p>
    </div>
  );
}

export default App;
