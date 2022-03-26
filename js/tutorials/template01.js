// alert("Merhabalar");
// window.alert("popup2");

// console.log("loglama");
// document.write("Yazı yazdım");

/////////////////Variables//////////////////////////////
// var personName ="Ramazan";
// console.log(personName);

// var x1, x2, x3;
// x1 = 10;
// x2 = 5;
// x3 = 5.5;
// console.log(x1 + x2 +x3);

// var isLogin = true;
// console.log(isLogin);

// var x1 = 10;
// console.log(++x1);
// console.log(x1++);
// console.log(x1); 

// var x1 = Number(prompt("Lütfen ilk sayıyı giriniz."));
// var x2 = Number(prompt("Lütfen ikinci sayıyı giriniz."));
// var x3 = x1 + x2;
// console.log(x3);

// var v1 = true;
// console.log(typeof v1);

// var x1 = prompt("Lütfen bir sayı girin.");
// let x2 = x1*x1;
// console.log(x2);

// var x1 = 5/0;
// console.log(x1);

// var sayi = 525142;
// console.log(sayi.toString(16));

// var x= 16;
// console.log(!isNaN(x));

// var string = "Hello world";
// console.log(string.split(" "));

// let kelime = ()=>{
//     let dizi = ['Html','Css','Js','a','b','c','d'];
//     let dizi2 =['Bootstrap'];
//     console.log(dizi.join('-'));
//     // console.log(dizi.concat('dizi2'));
//     // console.log(dizi.unshift('1'));
//     console.log(dizi);
//     dizi.splice(0,2);
//     console.log(dizi);
//     dizi.unshift('yeni');
//     console.log(dizi);
// }
// kelime();

//monad yapısı
// function diziBaslangic(){
//     let dizi = [1,2,3];
//     return dizi;
// }
// function diziVeriAl(temp){
//     console.log(temp);
// } 

// diziVeriAl(diziBaslangic());

let objectFunction= ()=>{
    let object = {
    name:"Ramazan",
    surname:"İperlik",
    bornYear: Number(1995),
    age: function(age){
        return new Date().getFullYear() - age; 
    },
};
console.log(object.age(object.bornYear));
object.job ="Computer Engineer";
console.log(object);
}
objectFunction();
