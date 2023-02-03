//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/31.145.249.45",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

function createComponent(obj) {
  const cardDiv = document.createElement("div");
  const bayrak = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const ipAdres = document.createElement("h3");
  const ulke = document.createElement("p");
  const enlemBoylam = document.createElement("p");
  const sehir = document.createElement("p");
  const saat = document.createElement("p");
  const paraBirimi = document.createElement("p");
  const isp = document.createElement("p");

  cardDiv.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  ipAdres.classList.add("ip");
  ulke.classList.add("ulke");

  cardInfoDiv.appendChild(ipAdres);
  cardInfoDiv.appendChild(ulke);
  cardInfoDiv.appendChild(enlemBoylam);
  cardInfoDiv.appendChild(sehir);
  cardInfoDiv.appendChild(saat);
  cardInfoDiv.appendChild(paraBirimi);
  cardInfoDiv.appendChild(isp);

  cardDiv.appendChild(bayrak);
  cardDiv.appendChild(cardInfoDiv);

  bayrak.src = obj.ülkebayrağı;
  ipAdres.textContent = obj.sorgu;
  ulke.textContent = `${obj.ülke} ${obj.ülkeKodu}`;
  enlemBoylam.textContent = `Enlem: ${obj.enlem} Boylam: ${obj.boylam}`;
  sehir.textContent = obj.şehir;
  saat.textContent = obj.saatdilimi;
  paraBirimi.textContent = obj.parabirimi;
  isp.textContent = obj.isp;

  return cardDiv;
}

const cardDiv = axios
  .get("https://apis.ergineer.com/ipgeoapi/31.145.249.45")
  .then((response) => {
    document
      .querySelector(".cards")
      .appendChild(createComponent(response.data));
  })
  .catch((err) => {
    console.log("error: " + err);
  });
