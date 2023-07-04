import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Mengapa Memilih Kami</h4>
                <h2>Penawaran bernilai terbaik yang pernah anda temukan</h2>
                <p>
                  Temukan penawaran terbaik yang pernah Anda temukan dengan penawaran kami yang tidak ada duanya. Kami berdedikasi untuk memberi Anda nilai terbaik untuk uang Anda, sehingga Anda dapat menikmati layanan dan produk berkualitas terbaik tanpa merusak bank. Kesepakatan kami dirancang untuk memberi Anda pengalaman menyewa terbaik, jadi jangan lewatkan kesempatan Anda untuk berhemat besar.
                </p>
                {/* <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a> */}
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Perjalanan Lintas Kota</h4>
                    <p>
                    Tingkatkan pengalaman berkendara Anda ke level berikutnya dengan kendaraan terbaik kami.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Harga All Inklusif</h4>
                    <p>
                    Dapatkan semua yang Anda butuhkan dalam satu harga yang nyaman dan transparan dengan kebijakan harga all-inclusive kami.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tanpa Biaya Tersembunyi</h4>
                    <p>
                    Nikmati ketenangan pikiran dengan kebijakan tanpa biaya tersembunyi kami. Kami percaya pada penetapan harga yang transparan dan jujur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
