import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Rencanakan perjalanan Anda sekarang</h3>
              <h2>Sewa mobil cepat & mudah</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Pilih Mobil</h3>
                <p>
                Kami menawarkan berbagai macam kendaraan untuk semua kebutuhan berkendara Anda.
                Kami memiliki mobil yang sempurna untuk memenuhi kebutuhan Anda
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Hubungi Operator</h3>
                <p>
                  Operator kami yang berpengetahuan dan ramah selalu siap
                  membantu dengan pertanyaan atau masalah apa pun
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Siap Berkendara</h3>
                <p>
                  Apakah Anda berada di jalan terbuka, kami siap membantu Anda
                  dengan berbagai macam mobil kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
