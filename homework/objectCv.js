let objectCv = () => {

  let myCv = {
    name: prompt("Lütfen isim yazınız.").toUpperCase(),
    surname: prompt("Lütfen soyisim yazınız.").toUpperCase(),
    foreignLanguages:[],
    job:{
        job: prompt("Lütfen profesyonel mesleğinizi yazınız. "),
    }
  };

  let languages = (foreignLanguageNumber)=>{
        for(let i = 0; i<foreignLanguageNumber; i++){
            myCv.foreignLanguages.push = prompt("Lütfen bildiğiniz yabancı dilleri yazınız.");
        }
  }

  let ageValidation = (age) => {
    if (age < 0 || age > 100) {
      alert("Yaş Geçersiz"); // console.log("Yaş geçersiz.");
    } else {
      myCv.age = age;
    }
  };

  let age = Number(prompt("Lütfen yaşınızı giriniz."));
  let foreignLanguageNumber = Number(prompt("Lütfen bildiğiniz yabancı dillerin sayısını yazınız."));

  languages(foreignLanguageNumber);
  ageValidation(age);
  console.log(myCv);
};
objectCv();

// var languageArray = [];

// let object2 = ()=>{
//     let objectCv = {

//         name: prompt("Lütfen isim yazınız.").toUpperCase,
//         surname: prompt("Lütfen soyisim yazınız.").toUpperCase,
//         age: Number(prompt("Lütfen yaşınızı giriniz.")),

//         ageValidation: (function age(age){
//             if(age<0 & age>100){
//                 alert("Girdiğiniz yaş geçerli değil.");
//             }else{

//             }
//         })(),

//         foreignLanguageNumber: Number(prompt("Lütfen bildiğiniz yabancı dil sayısını giriniz.")),

//         language: () => {
//           for (let i = 0; i < objectCv.foreignLanguageNumber; i++) {
//             languageArray[i] = prompt("Lütfen bildiğiniz " + (i + 1) + ". dili yazınız.");
//           }
//           return languageArray.join(",");
//         },

//         jobs : {
//             job : prompt("Lütfen profesyonel mesleğinizi yazınız."),
//         },

//         retirementAge : function(age){
//             if(age<18 && age>65){
//                 alert("Emeklilik yaş hesaplaması için uygun yaşta değilsiniz.");
//             }else{
//                 var retirementAge = 65-age;
//             }
//             return retirementAge;
//         },

//       };
//       console.log(objectCv);
//       console.log(objectCv.language());
//       console.log(objectCv.retirementAge());

// }
// object2();
