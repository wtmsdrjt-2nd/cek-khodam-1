function cekKhodam() {
  var nama = document.getElementById("nama").value;
  var loading = document.getElementById("loading");
  var hasil = document.getElementById("hasil");
  var namaHasil = document.getElementById("nama-hasil");
  var khodamElem = document.getElementById("khodam");
  var periksa = document.getElementById("periksa");
  var ulang = document.getElementById("ulang");
  var inputContainer = document.getElementById("input-container");

  if (nama === "") {
    alert("Silakan masukkan nama");
    return;
  }

  loading.classList.remove("hidden");
  hasil.classList.add("hidden");
  periksa.classList.add("hidden");
  inputContainer.classList.add("hidden");

  setTimeout(function () {
    loading.classList.add("hidden");
    var khodam = getKhodam(nama);
    namaHasil.innerText = nama.toUpperCase();
    khodamElem.innerText = khodam;
    hasil.classList.remove("hidden");
    ulang.classList.remove("hidden");
  }, 2000);
}

function getKhodam(nama) {
  var khodamList = [
    "Harimau",
    "Naga Mahjong",
    "Burung",
    "Ayam Berkutut", 
    "Lumba-Lumba Demak",
    "Bohlam Lampu",
    "Bagas Driblle", 
    "Alok Jamsut", 
    "Kak Gem", 
    "Uni Bakwan", 
    "Buaya Nigeria", 
    "Naga Bearbend", 
    "Pohon Palem", 
    "Penyu Isriwil", 
    "Perkakas Kopling", 
    "Landak Trenggalek", 
    "Ultraman Orb",
    "Serigala",
    "Kucing",
    "Gagang Pintu",
    "Ular Kontol",
    "Kecoa",
    "Babi",
    "kipas cosmos",
    "PELO",
    "Gapunya Khodam, Mati Aja Sana",
  ];
  var index = nama.length % khodamList.length;
  return khodamList[index];
}

function ulangCek() {
  var nama = document.getElementById("nama");
  var hasil = document.getElementById("hasil");
  var periksa = document.getElementById("periksa");
  var ulang = document.getElementById("ulang");
  var inputContainer = document.getElementById("input-container");

  nama.value = "";
  hasil.classList.add("hidden");
  periksa.classList.remove("hidden");
  ulang.classList.add("hidden");
  inputContainer.classList.remove("hidden");
}
