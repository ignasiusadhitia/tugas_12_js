const panggilBuah = () => {
  console.log("FUNGSI POP DAN SHIFT\n=====================================");
  let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log("Nilai awal variabel buah:", buah);
  buah.pop();
  console.log("Nilai variabel buah setelah fungsi pop:", buah);
  buah.shift();
  console.log("Nilai variabel buah setelah fungsi shift:", buah);
};

panggilBuah();
