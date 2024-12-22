// console.log('sebelum pembanding');
// if (1 + 1 === 2) {
//     console.log('Perhitungannya masih betul');
// }
// console.log('setelah pembanding');

// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5){
//     console.log('Angka lebih besar dari 0.5');
// }
// if(angka <= 0.5){
//     console.log('Angka lebih keecil dari 0.5');
// }

// const iniHari = prompt('isikan hari!').toLowerCase();

// if(iniHari === 'Senin'){
//     console.log("Selamat bekerja kawan");
// }else if (iniHari === 'Sabtu'){
//     console.log("Semoga jangan cepat berlalu");
// }else{
//     console.log('yah biasa aja');
// }

// const nilai = '70';

// if (nilai < 50 ){
//     console.log('E');
// }else if (nilai < 60){
//     console.log('D');
// }else if (nilai < 70){
//     console.log('C');
// }else if (nilai < 80){
//     console.log('B');
// }else if (nilai < 100){
//     console.log('A');
// }

//AND
// const password = prompt("buat password");

// //password harus sepanjang 6 karakter
// if (password.length >= 6) {
//     if (password.indexOf('') ===  -1) {
//         console.log('Password valid');
//     } else {
//         console.log('Password tidak boleh ada spasi');
//     }
// } else {
//     console.log('Password minimal 6 karakter');
// } 

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password Valid');
// } else {
//     console.log('Password tidak memenuhi syarat');
// }

//OR
// const role = prompt('masukan role akun');

// if(role === 'admin' || role === 'spv'){
//     console.log('boleh mengaksesnya');
// } else {
//     console.log('akses ditolak');
// }

//NOT
// if(role !== 'admin'){
//     console.log('akses ditolak');
// } else {
//     console.log('boleh mengaksesnya');
// }

// const balonku = prompt ('input warna balon');
// switch (balonku) {
//     case 'merah':
//         console.log('warna merah');
//         break;
//     case 'hijau':
//         console.log('doorrr');
//         break;
//     default:
//         console.log('bukan balon saya');
// }