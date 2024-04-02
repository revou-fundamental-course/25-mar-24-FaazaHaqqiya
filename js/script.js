// Tunggu hingga dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Ambil tombol-tombol submit dan reset dari formulir
    const submitButton = document.querySelector('button[type="submit"]');
    const resetButton = document.querySelector('button[type="reset"]');

    // Tambahkan event listener pada tombol submit
    submitButton.addEventListener("click", function() {
        // Ambil nilai berat, tinggi, jenis kelamin, dan usia dari input pengguna
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Tinggi dalam meter
        const gender = document.querySelector('input[name="gender"]:checked');
        const age = parseFloat(document.getElementById("age").value);

        // Periksa apakah semua input telah diisi
        if (!weight || !height || !gender || !age) {
            alert("Harap isi semua kolom dengan benar.");
            return;
        }

        // Hitung BMI (Body Mass Index)
        let bmi = weight / (height * height);

        // Inisialisasi teks hasil BMI
        let resultText = "";

        // Tentukan kategori BMI berdasarkan kriteria yang ditentukan
        if (gender.id === "man" || gender.id === "woman") {   
                if (bmi < 18.5) {
                    resultText = "Anda kekurangan berat badan";
                    document.querySelector(".result-item").classList.add("show");
                    document.querySelector(".underweight-information").classList.add("show");
                    document.querySelector(".underweight-disease").classList.add("show");
                } else if (bmi >= 18.5 && bmi <=24.9) {
                    resultText = "Anda termasuk kategori Normal (ideal)";
                    document.querySelector(".result-item").classList.add("show");
                    document.querySelector(".ideal-information").classList.add("show");
                    document.querySelector(".ideal").classList.add("show");
                } else if (bmi >= 25.0 && bmi <=29.9) {
                    resultText = "Anda memiliki berat badan berlebih.";
                    document.querySelector(".result-item").classList.add("show");
                    document.querySelector(".overweight-information").classList.add("show");
                    document.querySelector(".overweight-disease").classList.add("show");
                } else if (bmi >= 30.0) {
                    resultText = "Anda termasuk kategori kegemukan (Obesitas)";
                    document.querySelector(".result-item").classList.add("show");
                    document.querySelector(".obesity-information").classList.add("show");
                    document.querySelector(".obesity-disease").classList.add("show");
                }
        }

        // Tampilkan tombol hasil ketika ada hasil BMI yang valid
        document.querySelector(".result-button").style.display = "block";
        // Tampilkan hasil BMI dan kategori berat badan pada halaman
        document.getElementById("result").innerHTML = "<h1>" + "<b>" + bmi.toFixed(2) + "</b>" + "</h1>";
        document.querySelector(".result-item p").textContent = resultText;

        // Jika hasil BMI tidak menunjukkan kekurangan berat badan, sembunyikan 
        if (bmi > 18.5) {
            document.querySelector(".result-item").classList.remove("show");
            document.querySelector(".underweight-information").classList.remove("show");
            document.querySelector(".underweight-disease").classList.remove("show");
        }
        // Jika hasil BMI tidak menunjukkan berat badan normal, sembunyikan 
        else if (bmi < 18.5 || bmi > 24.9) {
            document.querySelector(".result-item").classList.remove("show");
            document.querySelector(".ideal-information").classList.remove("show");
            document.querySelector(".ideal").classList.remove("show");
        }
        // Jika hasil BMI tidak menunjukkan kelebihan berat badan, sembunyikan 
        else if (bmi < 25.0 || bmi >= 30.0) {
            document.querySelector(".result-item").classList.remove("show");
            document.querySelector(".overweight-information").classList.remove("show");
            document.querySelector(".overweight-disease").classList.remove("show");
         }
        // Jika hasil BMI tidak menunjukkan obesitas, sembunyikan 
        else if (bmi < 30.0 ) {
            document.querySelector(".result-item").classList.remove("show");
            document.querySelector(".obesity-information").classList.remove("show");
            document.querySelector(".obesity-disease").classList.remove("show");
         }

    });

    // Tambahkan event listener pada tombol reset
resetButton.addEventListener("click", function() {
    // Reset nilai input menjadi kosong
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;

    // Reset hasil BMI dan kategori berat badan pada halaman
    document.getElementById("result").innerHTML = "<b></b>";
    document.querySelector(".result-item p").textContent = "";
    // Sembunyikan tombol hasil ketika tombol reset ditekan
    document.querySelector(".result-button").style.display = "none";

    //menyembunyikan setiap elemen pada tampilan awal
    // Sembunyikan elemen bagian underweihgt
    document.querySelector(".result-item").classList.remove("show");
    document.querySelector(".underweight-information").classList.remove("show");
    document.querySelector(".underweight-disease").classList.remove("show");
    // Sembunyikan elemen bagian ideal 
    document.querySelector(".result-item").classList.remove("show");
    document.querySelector(".ideal-information").classList.remove("show");
    document.querySelector(".ideal").classList.remove("show");
    // Sembunyikan elemen bagian overweight
    document.querySelector(".result-item").classList.remove("show");
    document.querySelector(".overweight-information").classList.remove("show");
    document.querySelector(".overweight-disease").classList.remove("show");
    // Sembunyikan elemen bagian obesitas
    document.querySelector(".result-item").classList.remove("show");
    document.querySelector(".obesity-information").classList.remove("show");
    document.querySelector(".obesity-disease").classList.remove("show");
    
});

});

// validasi input form
var weightError = document.getElementById('weight-error');
var ageError = document.getElementById('age-error');
var heightError = document.getElementById('height-error');

// validasi berat badan
function validateWeight(){
    var weight = document.getElementById('weight').value;

    if(weight.length == 0){
        weightError.innerHTML = 'Data tidak boleh kosong';
        return false;
    }
    if (!weight.match(/^[0-9]+$/)) {
        weightError.innerHTML = 'Hanya diperbolehkan menginput angka';
        return false;
    }
    if(weight.length < 2 || weight.charAt(0) === '0'){
        weightError.innerHTML = 'Silahkan isi angka minimal 2 digit dan angka pertama tidak boleh 0';
        return false;
    }
    if(weight.length >= 2 ){
        weightError.innerHTML = '';
        return true;
    }
}
// validasi umur
function validateAge(){
    var age = document.getElementById('age').value;

    if(age.length == 0){
        ageError.innerHTML = 'Data tidak boleh kosong';
        return false;
    }
    if (!age.match(/^[0-9]+$/)) {
        ageError.innerHTML = 'Hanya diperbolehkan menginput angka';
        return false;
    }
    if(age.length < 2 || age.charAt(0) === '0'){
        ageError.innerHTML = 'Silahkan isi angka minimal 2 digit dan Usia tidak diperbolehkan 0';
        return false;
    }
    if(age.length >= 2 ){
        ageError.innerHTML = '';
        return true;
    }
}
// validasi tinggi badan
function validateHeight(){
    var height = document.getElementById('height').value;

    if(height.length == 0){
        heightError.innerHTML = 'Data tidak boleh kosong';
        return false;
    }
    if (!height.match(/^[0-9]+$/)) {
        heightError.innerHTML = 'Hanya diperbolehkan menginput angka';
        return false;
    }
    if(height.length < 3 || height.charAt(0) === '0'){
        heightError.innerHTML = 'Silahkan isi angka minimal 3 digit dan angka pertama tidak boleh 0';
        return false;
    }
    if(height.length >= 3 ){
        heightError.innerHTML = '';
        return true;
    }
}
