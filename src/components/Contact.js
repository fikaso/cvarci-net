function Contact() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around space-y-5 xl-space-y-0 my-10">
      <div>
        <h2>Želite biti naš brand partner ?</h2>
        <p>
          Pošaljite nam vaš broj i kontaktirat ćemo Vas u najkraćem mogućem roku
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
  );
}

export default Contact;
