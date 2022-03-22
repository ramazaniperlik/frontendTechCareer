var ortalama = (vize,final) => {
ortalama = (vize*0.4) + (final*0.6); 

if(ortalama <= 54){
    console.log("FF");
 }
 else if(60 >= ortalama && ortalama >= 55){ //60 >= ortalama >= 55
    console.log("CC");
 }
 else if(80 >= ortalama && ortalama >= 61){
    console.log("BB");
 }
 else if(100 >= ortalama && ortalama >= 81 ){
    console.log("AA");
 }

}

var vize = Number(prompt("Lütfen vize notunuzu giriniz."));
var final = Number(prompt("Lütfen final notunuzu giriniz."));
var ort = ortalama(vize,final);
// console.log(ort);
