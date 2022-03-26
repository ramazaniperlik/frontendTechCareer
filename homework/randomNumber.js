
//Random
var rndArray=()=>{
    //değişkenleri(variable)
    var rndNumber,firstEndSum=0,number,array=[];
    number=Number(prompt("Lütfen bir sayı giriniz"));
    //döngüde rastgele sayı oluşturmak
    for (let i=0; i<number; i++){
        rndNumber=Number(Math.round(Math.random()*9+1));
        array[i]=rndNumber;
    }
    console.log(array)
    firstEndSum=array[0]+array[array.length-1];
    return firstEndSum,array;
}
//toplamları
let sumArrayNumber= ()=>{

    // let newArray = [];
    // for(let i = 0; i<array.length; i++){
    //     newArray[i] = array[i];
    // }
}
console.log(sumArrayNumber());
console.log(rndArray());