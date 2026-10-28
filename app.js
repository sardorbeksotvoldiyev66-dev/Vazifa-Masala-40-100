// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin.
//  Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   }
//   return 1 + uzunlik(str.slice(1));
// }
// console.log(uzunlik("apple")); 
// console.log(uzunlik("make"));  
// console.log(uzunlik("a"));     
// console.log(uzunlik(""));      
// console.log(uzunlik("  "));    

//  41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// function boliniladimi(a, b) {
//   return a % b === 0;
// }
// console.log(boliniladimi(10, 5));
// console.log(boliniladimi(9, 2));  
// console.log(boliniladimi(6, 6));  

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersi

// function raqamga(str) {
//   return Number(str);
// }
// console.log(raqamga("25"));    // 25
// console.log(raqamga("3.14"));  // 3.14
// console.log(typeof raqamga("25")); // "number"

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin

// function yuza(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   }
//   return a * b;
// }
// console.log(yuza(5, 4)); 
// console.log(yuza(3, 7));  
// console.log(yuza(-2, 5)); 
// console.log(yuza(0, 5));   

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.

// function toliqIsm(ism, familiya) {
//   return ism + ", " + familiya;
// }
// console.log(toliqIsm("Ali", "Valiyev"));    
// console.log(toliqIsm("Dilnoza", "Karimova"));

// 45.Quyidaga namunani kuzatgan holda funksiya yasang

// function bug(holat) {
//   if (holat === true) {
//     return "sad days";
//   }
//   return "it's a good day";
// }
// console.log(bug(true));
// console.log(bug(false));

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish.
//  Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.

// function tushirMassiv(arr, n) {
//   return arr.slice(n);
// }
// console.log(tushirMassiv([1, 2, 3], 1)); 
// console.log(tushirMassiv([1, 2, 3], 2)); 
// console.log(tushirMassiv([1, 2, 3], 5)); 
// console.log(tushirMassiv([1, 2, 3], 0)); 

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin.

// function ovozlar({ upvotes, downvotes }) {
//   return upvotes - downvotes;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));   
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));   
// console.log(ovozlar({ upvotes: 132, downvotes: 132 }));

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin

// function negativ(n) {
//   return -Math.abs(n);
// }
// console.log(negativ(4));  
// console.log(negativ(15)); 
// console.log(negativ(-4));  
// console.log(negativ(0));  

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.

// function almash(arr) {
//   const natija = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     natija.push(arr[i]);
//   }
//   return natija;
// }
// console.log(almash([1, 2, 3, 4]));  
// console.log(almash([9, 9, 2, 3, 4]));
// console.log(almash([]));            

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talabmavjud.
//  Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false

// function kinogaKirish(yosh, ota_onasiBilan) {
//   if (yosh >= 15 || ota_onasiBilan === true) {
//     return true;
//   }
//   return false;
// }
// console.log(kinogaKirish(14, true));  // true
// console.log(kinogaKirish(14, false)); // false
// console.log(kinogaKirish(16, false)); // true

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang

// function oshir1ga(arr) {
//   const natija = [];
//   for (let i = 0; i < arr.length; i++) {
//     natija.push(arr[i] + 1);
//   }
//   return natija;
// }
// console.log(oshir1ga([0, 1, 2, 3]));     
// console.log(oshir1ga([2, 4, 6, 8]));     
// console.log(oshir1ga([-1, -2, -3, -4]));

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu formatdagi stringni hosil qiling

// var ism = "Donyor";
// var familiya = "Olimov";
// var natija;

// natija = `${ism} ${familiya}`;

// console.log(natija);

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.

// var holatiYaxshimi = true;
// var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// function sozUzunligi(str) {
//   return str.length % 2 === 0;
// }
// console.log(sozUzunligi("apples")); 
// console.log(sozUzunligi("pears"));  
// console.log(sozUzunligi("cherry")); 

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin

// function daraja(a, b) {
//   return a ** b;
// }

// console.log(daraja(5, 5));    
// console.log(daraja(10, 10));  
// console.log(daraja(3, 3));   

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivningso’nggi elementini qaytarib bersin.

// function songiElement(arr) {
//   return arr[arr.length - 1];
// }

// console.log(songiElement([1, 2, 3]));          
// console.log(songiElement(["cat", "dog", "duck"]));
// console.log(songiElement([true, false, true])); 

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.

// function kabisa(yil) {
//   return (yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0;
// }

// console.log(kabisa(2020)); 
// console.log(kabisa(2021)); 
// console.log(kabisa(1968)); 

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin.

// function soz(s) {
//   return s.slice(1);
// }

// console.log(soz("apple"));   
// console.log(soz("cherry")); 
// console.log(soz("plum"));    

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang.

// function flipBool(b) {
//   return !b;
// }

// console.log(flipBool(true));   
// console.log(flipBool(false));

// // 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft” qaytaradi, agar toq bo’lsa “toq” qaytarsin.

// function juftMiToqmi(son) {
//   return son % 2 === 0 ? "juft" : "toq";
// }

// console.log(juftMiToqmi(3));    // "toq"
// console.log(juftMiToqmi(146));  // "juft"
// console.log(juftMiToqmi(19));   // "toq"

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning qavatiga qarab ularning soni oshib boradi.

// function qutilar(n) {
//   return n * (n + 1) * (n + 2) / 6;
// }

// console.log(qutilar(1)); 
// console.log(qutilar(2)); 
// console.log(qutilar(3)); 
// console.log(qutilar(4)); 
// console.log(qutilar(0)); 

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki stringlar yoki numberlar joyshlashgan bo’ladi.
//  funksiya massiv elementlarini bitta string qilib qaytarsin.

// function arrayToString(arr) {
//   let natija = "";
//   for (let i = 0; i < arr.length; i++) {
//     natija += arr[i];
//   }
//   return natija;
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));             
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); 
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));    

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// function birlash(arr1, arr2) {
//   const natija = [];
//   for (let i = 0; i < arr1.length; i++) {
//     natija.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     natija.push(arr2[i]);
//   }
//   return natija;
// }

// console.log(birlash([1, 3, 5], [2, 6, 8]));
// console.log(birlash([7, 8], [10, 9, 1, 1, 2]));
// console.log(birlash([4, 5, 1], [3, 3, 3, 3, 3]));

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv, 2-argument ushbu massivning biron elementi.
//  Funksiya ushbu elementning massiv ichida nechinchi indexda turishini qaytarib bersin.

// function topIndex(arr, element) {
//   return arr.indexOf(element);
// }

// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                 // 2
// console.log(topIndex(["Red", "blue", "Blue", "Green"], "blue"));              // 1
// console.log(topIndex(["a", "g", "y", "d"], "d"));                             // 3
// console.log(topIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi massiv elementini qaytarsin.
//  Indexni eng kichik qiymatga qarab yaxlitlang.

// function arrElement(arr, index) {
//   return arr[Math.floor(index)];
// }

// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));          // 6
// console.log(arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2));         // 5
// console.log(arrElement([1, 2, 3, 4], 6.535355314 / 2));       // 4

// 66.Quyidagi namunani kuzatgan holda funksiya yasang

// function namuna(arr) {
//   return arr.reduce((jami, son) => jami + son, 0);
// }

// console.log(namuna([1, 2, 3, 4, 5]));  
// console.log(namuna([-1, 0, 1]));       
// console.log(namuna([0, 4, 8, 12]));   

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida qaytarilsin “bir” -> 1

// function sozSon(soz) {
//   const sonlar = {
//     "nol": 0, "bir": 1, "ikki": 2, "uch": 3,
//     "to'rt": 4, "besh": 5, "olti": 6, "yetti": 7,
//     "sakkiz": 8, "to'qqiz": 9
//   };
//   return sonlar[soz.replace(/[’ʻʼ`]/g, "'")];
// }

// console.log(sozSon("bir"));     // 1
// console.log(sozSon("ikki"));    // 2
// console.log(sozSon("uch"));     // 3
// console.log(sozSon("to'rt"));   // 4
// console.log(sozSon("nol"));     // 0

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false

// function bormi(arr, son) {
//   return arr.includes(son);
// }

// console.log(bormi([1, 2, 3, 4, 5], 3));  
// console.log(bormi([1, 1, 2, 1, 1], 3));  
// console.log(bormi([5, 5, 5, 6], 5));    
// console.log(bormi([], 5));               

// 69.Funskiya sonlar va stringlar massivi berilsa, massivning ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin.

// function sonString(arr) {
//   return arr.map(el => String(el));
// }

// console.log(sonString([1, 2, "a", "b"]));
// console.log(sonString(["abc", 123, "def", 456]));
// console.log(sonString([1, 2, 3, 17, 24, 3, "a", "123b"]));
// console.log(sonString([]));

//70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.

// function kubikchalar(n) {
//   return 6 * n * n;
// }

// console.log(kubikchalar(1));  
// console.log(kubikchalar(2));  
// console.log(kubikchalar(3));  

// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga olishi mumkin. 
// Bundan kelib chiqib safarga chiqish uchun odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.

// function sayohat(odamlar) {
//   return Math.ceil(odamlar / 5);
// }

// console.log(sayohat(5));   
// console.log(sayohat(11));  
// console.log(sayohat(0));   

// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy mavjud bo’lsa true qaytarsin, aks holda false.

// function boshJoy(str) {
//   return str.includes(" ");
// }

// console.log(boshJoy("hello"));         
// console.log(boshJoy("hello, world"));  
// console.log(boshJoy(" "));             
// console.log(boshJoy(""));              
// console.log(boshJoy(",./!@#"));        

// 73.Funksiya biron qutining olchamlari ma’lumotlarini object sifatida qabul qiladi.
//  funksiya ushbu qutining hajmini qaytarib bersin. Hajm = Balandlik * Eni * Uzunlik

// function hajm(quti) {
//   return quti.width * quti.length * quti.height;
// }

// console.log(hajm({ width: 2, length: 5, height: 1 }));  
// console.log(hajm({ width: 4, length: 2, height: 2 }));  
// console.log(hajm({ width: 2, length: 3, height: 5 }));  

// 74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan kichik

// function sonlar(son1, son2, arr) {
//   return arr.filter(el => el > son1 && el < son2);
// }

// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));    
// console.log(sonlar(1, 10, [1, 10, 25, 8, 11, 6])); 
// console.log(sonlar(7, 32, [1, 2, 3, 78]));    

// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.

// function turlar(arr) {
//   return arr.map(el => typeof el);
// }

// console.log(turlar([1, 2, "null", []]));
// console.log(turlar(["214", true, false, 2, 2.15, [], null]));
// console.log(turlar([21.1, "float", "array", ["I am array"], null, true, 214]));

// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// // string ko’rinishida qaytarsin.

// function qaytarString(str, miqdor) {
//   if (typeof str !== "string") {
//     return "Not A String !!";
//   }
//   return str.repeat(miqdor);
// }

// console.log(qaytarString("Mubashir", 2));
// console.log(qaytarString("Matt", 3));
// console.log(qaytarString(1990, 7));

// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa funksiya true qaytarsin, aks holda false.

// function koplik(soz) {
//   return soz.endsWith("lar");
// }

// console.log(koplik("daraxtlar"));
// console.log(koplik("meva"));
// console.log(koplik("odamlar"));
// console.log(koplik("o'quvchi"));

// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni function boshOxiri(str) {

// return str[0] + str[str.length - 1]{;
// }
// console.log(boshOxiri("ganesh"));
// console.log(boshOxiri("kali"));
// console.log(boshOxiri("shiva"));
// console.log(boshOxiri("vishnu"));
// console.log(boshOxiri("durga"));bosh va oxirgi harflarini birlashtirgan stringni qaytarsin

// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini. Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin.

// function sozAytish(word) {
//   const bosh = word.slice(0, 2);
//   return `${bosh}... ${bosh}... ${word}`;
// }

// console.log(sozAytish("incredible"));
// console.log(sozAytish("enthusiastic"));
// console.log(sozAytish("outstanding"));

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.

// function ahvol(holat = "neutral") {
//   return `Today, I am feeling ${holat}`;
// }

// console.log(ahvol("happy"));
// console.log(ahvol("sad"));
// console.log(ahvol());