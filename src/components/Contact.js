function Contact() {
  return (
    <div className="bg-gray  my-10 py-24">
      <div className="md:max-w-[1440px] mx-auto flex flex-col xl:flex-row text-center items-center justify-between space-y-5 xl-space-y-0 px-5 xl:px-20">
        <div>
          <h2>
            Želite biti naš brand{" "}
            <span className="whitespace-nowrap">partner ?</span>{" "}
          </h2>
          <p>
            Pošaljite nam vaš broj i kontaktirat ćemo Vas u najkraćem mogućem
            roku
          </p>
        </div>

        <div className="flex space-x-2">
          <input
            className="input-box"
            type="text"
            placeholder="Pošaljite Vašu email adresu"
          />
          <button className="btn-primary">pošalji</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
