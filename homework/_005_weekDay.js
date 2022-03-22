var sayi = function (sayi) {
switch (sayi){
    case 1:
       return "Pazartesi"; // console.log("Pazartesi");
    case 2:
        return "Salı"; // console.log("Pazartesi");
    case 3:
        return "Çarşamba"; //console.log("Çarşamba");
    case 4:
        return "Perşembe"; //console.log("Perşembe");
    case 5:
        return "Cuma"; //console.log("Cuma");
    case 6:
        return "Cumartesi"; //console.log("Cumartesi");
    case 7:
       return "Pazar"; //console.log("Pazar");
}
}

var day = Number(prompt("Lütfen 1-7 arası sayı giriniz."));
console.log(sayi(day));