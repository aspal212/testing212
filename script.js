// Ambil data dari JSON (misalnya biodata.json)
fetch("biodata.json")
  .then(res => res.json())
  .then(data => {
    console.log("Data JSON:", data);
    document.getElementById("judul").innerText = `Halo, ${data.nama}!`;
  });

document.getElementById("tombol").addEventListener("click", () => {
  alert("Tombol sudah diklik!");
});
