var tekCift = function (sayi){
    var tek = 0;
    var cift = 0;
    for(var i=1;i<=sayi;i++){
        if(i%2==0){
            cift+=1;
        }
        else if(i%2==1){
            tek+=1;
        }
    } 
    console.log("Tek sayı:"+tek +" "+ "Çift Sayı:"+cift);
} 
var sayi = Number(prompt("Lütfen bir sayı giriniz"));
console.log(tekCift(sayi));