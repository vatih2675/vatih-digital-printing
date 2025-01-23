const layanan = [
  {
    nama: "Cetak Dokumen",
    gambar: "Cetak Dokumen.png",
  },
  {
    nama: "Cetak Foto / Pasfoto",
    gambar: "Passphoto.png",
  },
  {
    nama: "Cetak Undangan",
    gambar: "Undangan.png",
  },
  {
    nama: "Buku Yasin",
    gambar: "Yasin.png",
  },
  {
    nama: "Scan Dokumen",
    gambar: "Scan Dokumen.png",
  },
  {
    nama: "Laminating",
    gambar: "Laminating.png",
  },
  {
    nama: "Jilid Dokumen",
    gambar: "Jilid.png",
  },
  {
    nama: "Alat Tulis Kantor",
    gambar: "ATK.png",
  },
  {
    nama: "Meterai",
    gambar: "Meterai.png",
  },
  {
    nama: "Web & Grafis Desain",
    gambar: "Desain.png",
  },
  {
    nama: "Pembayaran Online",
    gambar: "Payment.png",
  },
  {
    nama: "Setifikat Halal",
    gambar: "Halal.png",
  },
];
const sectionLayanan = document.querySelector("#sectionLayanan");
let isiLayanan = "";
layanan.forEach((lyn) => {
  isiLayanan += `<div class="flex flex-col w-fit justify-center items-center gap-1 mx-1 sm:mx-6 hover:scale-110 duration-300 cursor-pointer bg-white/0 rounded-lg p-2 divLayanan">
                        <img src="assets/img/${lyn.gambar}" alt="${lyn.nama}" class="w-15 sm:w-30">
                        <span class="text-xs">${lyn.nama}</span>
                    </div>`;
});

sectionLayanan.innerHTML = isiLayanan;

const divLayanan = document.querySelectorAll(".divLayanan");
const closeModal = document.querySelector("#closeModal");
