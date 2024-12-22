// PERULANGAN FOR

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++) {
//     console.log('saya berada dalam loop');
//     console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 20; i <= 1; i -= 2) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// PERULANGAN DATA ARRAY

// const animals =  ['cat','dog','hog','koala'];

// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

// MENDAPATKAN NESTED ARRAY DENGAN DATA NESTED LOOP

// const studentRow = [
//     ['Olivia','Liam','Emma','Noah'],
//     ['Amelia','Olivier','Ava','Elijah'],
//     ['Sophia','Mateo','Isabella','Lucas'],
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`seat row #${i + 1}`);
//     for (let j = 0; j < row.length; j++){
//         console.log(`   ${row[j]}`);
//     }
// }

// for (let row of studentRow){
//     for (let student of row) {
//         console.log(student)
//     }
// }

// NESTED LOOP

// const pilihan = 'abcd';

// for (let i = 1; i<= 10; i++){
//     console.log(`${i}. Soal nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++){
//         console.log(`${pilihan[j]}.Pilihan Jawaban`);
//     }
// }

//PERULANGAN WHILE

// let num = 0;
// while (num < 10){
//     console.log(num);
//     num++;
// }

// for (let num = 0; num < 10; num++){
//     console.log(num);
// }

// const PASSWORD = 'admin123';

// let guess = prompt ('Enter the PASSWORD!');
// while (guess !== PASSWORD){
//     guess = prompt ('Enter the PASSWORD');
// }
// alert('congrats! the PASSWORD is correct');

// KATA KUNCI BREAK DALAM PERULANGAN

// let input = prompt ('halo, say something');
// while (true){
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop')break;
// }
// alert('ok');

// for (let i=0; i < 1000; i++){
//     console.log(i);
//     if(i === 100) break;
// }

// GAME TEBAK ANGKA MENGGUNAKAN PERULANGAN WHILE

// let maximum = parseInt(prompt('Masukan nilai maksimal!'));
// while(!maximum) {
//     maximum = parseInt(prompt('Masukan nilai maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt ('Terlalu tinggi, tebak lagi:'));
//     } else {
//         guess = parseInt(prompt ('Terlalu rendah, tebak lagi:'));
//     }
// }

// alert (`Selamat, Tebakan anda benar! dengan percobaan ${attempts} kali`);

//  const fruits = ['Banana','Orange','Apple','Mango'];

// PERULANGAN ARRAY FOR OFF

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Buah ${fruits[i]}`);
// }

// for (let fruit of fruits ) {
//     console.log(`Buah ${fruit}`);
// }

// PERULANGAN FOR IN

// const studentScore = {
//     Olivia: 20,
//     Liam: 13,
//     Emma: 40,
//     Noah: 18,
//     Amelia: 32,
//     Olivier: 10,
//     Ava: 11,
//     Elijah: 22,
//     Sophia: 14,
//     Mateo: 22,
// };

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore}`);
// }   

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);

// FUNCTION Di JS

// let lemparDadu = console.log(lemparDadu);

// function lemparDadu {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi () {
//     console.log('Cek....');
//     console.log('Do Re Mi')
// }

// nyanyi();

// PARAMETER DAN ARGUMENT

// function selamatPagi(name) {
//     console.log(`Halo, ${name}. Selamat Pagi!`);
// }

// selamatPagi('Asep');

// MULTIPLE PARAMETER DAN ARGUMENT

// function jumlahkan(a, b) {
//     const total = a + b;
//     console.log(total);
// }

// STATEMENT RETURN PADA FUNCTION

// function jumlahkan(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return false;
//     }
//     return a + b;
// }

// SCOPE VISIBILITAS VARIABLE

// let programming = 'JavaScript';
// function typesafe() {
//     let programming = 'TypeScript';
//     // console.log(programming);
// }

// // typesafe();
// console.log(programming);

// let tinggi = 8;
// if(tinggi > 5) {
//     let lebar = 10;
//     // console.log(lebar);
// }

// console.log('lebar', lebar);

// for (let index = 0; index < 10; index++) {
//     const indexNumber = index;
//     // console.log(indexNumber);
// }

// console.log('lebar', lebar);

// LEXICAL SCOPE

// function lamarKerja() {
//     const jabatan = 'Programmer';
//     function lebihDalam(){
//         function orangDalam() {
//             let kenalam = `Orang dalam bisa memasukan ${jabatan}`;
//             console.log(kenalan);
//         }

//         orangDalam();
//     }

//     lebihDalam();
// }

// FUNCTION EXPRESIONS

// function perpangkatan() {
//     return nilai * nilai;
// };

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai) {
//     return nilai * nilai;
// };

// hasilPerpangkatan(10);

// FUNCTION SEBAGAI ARGUMENT FUNCTION LAIN

// function duaKali(func) {
//     func()
//     func()

// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// FUNCTION BERNILAI BALIK FUNCTION

// function hasilnyaAdalahFunction() {
//     const rand = Math.random()
//     if(rand > 0.10) {
//         return function() {
//             console.log('selamat, angkanya lebih besar');
//         };
//     } else {
//         return function() {
//             console.log('maaf, mungkin bisa coba lagi');
//         };
//     }
// }

// DEFINISI SEBUAH METHOD

// function myFun { //function biasa 
//     console.log('Hi');
//     return 'Hello';
// }

// const myMath = { //object
//     perkalian: function (x, y) { //method
//         return x * y;
//     }
// };

// TRY AND CACTH

// try {
//     saya.kenalan();
// } catch {
//     console.log('error!');
// }

// // saya.kenalan();
// console.log('Setelah proses try and catch');


// function teriak(msg) {
//     try{
//         console.log(msg.toUppercase());
//     } catch (error) {
//         console.log(error);
//         console.log('Silahkan masukan tipe data string pada argument teriak()');
//     }
// }

// CALLBACK FUNCTION

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) { //yang habis dibagi dua
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// function print(element) {
//     console.log(element);
// }

// angka.forEach(print);

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: '84',
//     },
// ];

// animes.forEach(function(anime) {
//     console.log(`${anime.title} - ${anime.rating}/100`)
// });

//MAP METHOD

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: '84',
//     },
// ];

// const animeList = animes.map(function (anime) {
//     return anime.title.toUpperCase();
// });

// ARROW FUNCTION

// const perpangkatan = (x) => {
//     return x * x;
// };

// IMPLISIT RETURN ARROW FUNCTION

// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a, b) => a + b //pertambahan

// SETTIMEOUT DAN SETINTERVAL

// console.log('Halo...');
// setTimeout(() => {
//     console.log('masih disana ga?');
// }, 5000);
// console.log('saya pergi ya..');

// const interval = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// FILTER METHOD

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaGanjil = angka.filter((n) => {
//     // return n % 2 === 1;
//     return n < 5;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: '84',
//         year: 2002,
//     },
// ];

// const animeBagus = animes.filter(anime => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// const animeCukupBagus = animes.filter(anime => anime.rating < 85);
// const animeBaru = animes.filter ((anime) => anime.year > 2010);

// TRUE AND FALSE MENGGUNAKAN EVERY DAN SOME 

// const examScore = [80, 85, 79, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: '84',
//         year: 2002,
//     },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);

// REDUCE ARRAY

// const examScore = [80, 85, 70, 90, 93, 77];

// let total = 0;
// for ( let score of examScore){
//     total += score;
// }

// const total = examScore.reduce ((total, score) => {
//     return total + score;
// });


// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: '95',
//         year: 2002,
//     },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     if(currAnime.rating > bestAnime.rating) {
//         return currAnime;
//     }
//     return bestAnime
// });

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//     if(currAnime.rating < lowAnime.rating) {
//         return currAnime;
//     }
//     return lowAnime
// });

// THIS DALAM ARRAY

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     // panggilNanti: function() {
//     //     setTimeout(function () {
//     //         console.log(this.firstName);
//     //     }, 3000);
//     // },
// };


// DEFAULT VALUE PADA FUNCTION

// function lemparDadu(sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name = 'User', msg = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`);
// }

// MENGGABUNGKA NILAI ARRAY DENGAN ARRAY

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ['Alex','Bimo','Cici','Delila','Felix'];


// const campuran = [...angka, ...nama];

// MENGGABUNGKAN PROPERTY OBEJECT DENGAN OBJECT

// const user = {
//     name: 'John',
//     email: 'John@doe.com',
// };

// const credential = {
//     password: 'password',
//     token: 'addhbhksj',
// };

// const userBaru = {...user,...credential};

// REST PARAM

// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };

// const nama = ['Alex','Bimo','Cici','Delila','Felix'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali emas diraih: ${gold}`);
//     console.log(`Medali silver diraih: ${silver}`);
//     console.log(`Medali bronze diraih: ${bronze}`);
//     console.log(`Peserta lainnya: ${sisa}`);
// };

// DESTRUCTING ARRAY

// const nama = ['Alex','Bimo','Cici','Delila','Felix'];

// const [gold, silver, bronze, ...peserta] = nama;

// DESTRUCTING OBJECT

// const user = {
//     name: 'John',
//     email; 'John@doe.com',
// };

// const {name: nama, email} = user;

// DESTRUCTING ARGUMENT

// const user = {
//     name: 'John',
//     email: 'John@doe.com',
//     role: 'Admin',
// };

// const userAndRole = ({ name, role}) => {
//     return `${name} ${role}`;
// };

const animes = [
    {
        title: 'Attack on Titan',
        rating: 90,
        year: 2013,
    },
    {
        title: 'One Piece',
        rating: 89,
        year: 1999,
    },
    {
        title: 'Bleach',
        rating: 82,
        year: 2004,
    },
    {
        title: 'Hunter x Hunter',
        rating: 90,
        year: 2011,
    },
    {
        title: 'Naruto',
        rating: '95',
        year: 2002,
    },
];

const anime = animes.map(({ title, year, rating}) => {
    return `${title} (${year}) rating ${rating}`;
});