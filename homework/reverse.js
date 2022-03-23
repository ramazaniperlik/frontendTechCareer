let yeniKelime = [];

let reverse = (kelime) => {

    for(let i=0 ; i<kelime.length; i++){

        yeniKelime[i] = kelime.charAt(i);
        // console.log(yeniKelime);
    }
    
    yeniKelime.reverse();
    
    for (let i = 0; i<yeniKelime.length; i++){
            console.log(yeniKelime[i]);
    }

}
let kelime = prompt("Lütfen kelimeyi yazınız.");
reverse(kelime);



