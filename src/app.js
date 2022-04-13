// var root = document.getElementById("root");
// let number=4444;
// let template = (<p>deneme</p>)

// let student = function Student(adi,soyadi,yas){
// this.adi= adi;
// this.soyadi = soyadi;
// this.yas=yas;
// console.log(this);
// }

// var instance = new student("Ramazan",27);

// console.log(instance.hasOwnProperty("yas"));

// var object={
//     variable1:"HTML",
//     variable2:"Bootstrap",
//     variable3:"Css",
//     variable4:"Js",
// }

// let template = 
//     (
// <div>
//     <h1>Başlık</h1>
//     <p className="text-danger">Lorem ipsum dolor sit amet.</p>
//     <ul className="list-group">
//         <li className="list-group-item active">{object.variable1}</li>
//         <li className="list-group-item">{object.variable2} </li>
//         <li className="list-group-item disabled">{object.variable3} </li>
//         <li className="list-group-item disabled">{object.variable4} </li>
//     </ul>
// </div>
//     )
    
// ReactDOM.render(template,root);

// var css = {
// // "background-color":"orange",
// "color":"black",
// "border":"none",
// "font-size":"25px"
// }

// var root = document.getElementById("root");
// var template = (
//     <div>
//         <h2>React DOM</h2>
//         <button className="btn btn-primary" style={css}>Gönder DOM</button>
//     </div>
    
// );

// ReactDOM.render(template, root);

var counter = 0;

let counterPlus = function(){
    counter++;
    plus_minus();
}

let counterMinus = function(){
    counter--;
    if(counter<0){
    alert("Adet sıfırdan küçük olamaz!");
    }else{
    plus_minus();
    }
    
    
}

var root = document.getElementById("plus_minus");
let plus_minus = function(){
    var eventTuto = (
    <div>
        <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <button type="button" value="-" onClick={counterMinus} className="btn btn-danger">-</button>
                  </div>
                  <div className="col-md-6">
                    <p>Adet:{counter}</p>                   
                  </div>
                  <div className="col-md-3">
                    <button type="button" value="+" onClick={counterPlus} className="btn btn-primary">+</button>
                  </div>
                </div>
              </div>
    </div>
);
ReactDOM.render(eventTuto,root);
} 
plus_minus();

function timerClock(){
    let timer = (
        <div className="mx-5 my-3">
            <p><b> {new Date().toLocaleTimeString()} </b></p>
        </div>
    )
    ReactDOM.render(timer,document.getElementById("timer_id"));
}
setInterval(timerClock,1000);

// todolist

var object={
    title:"todo list uygulaması",
    itemTitle: "Eleman Sayısı",
    data:["Html Dersleri","React Dersleri"]
};


function formOnSubmit(event){
event.preventDefault();
var formInputData = event.target.elements.formInput.value
object.data.push(formInputData);
todoTutorial();
}

function todoTutorial(){
    var template = (
        <div>
            <h5 className="text-danger text-uppercase mx-5" >{object.title}</h5>
            <p>{object.itemTitle}:{object.data.length}</p>
          {
            <ul>
            {
                object.data.map((temp)=>{
                    return <li key={temp.toString()}>{temp}</li>
                })
            }    
            </ul>
            }
            <form onSubmit={formOnSubmit}>
            <input type="text" name="formInput" className="form-control" />
            <button type="submit" className="btn btn-primary mt-2">Gönder</button>
            </form>
        </div>
    )
    ReactDOM.render(template,document.getElementById("todoList"));
}
todoTutorial();

let dizi = ["js","jquery","bootstrap"];

Array.prototype.diziIndexDelete=function(data){
let index = this.indexOf(data);
if(index > -1){
    this.splice(index, 1)
}
return this
}
console.log(dizi.diziIndexDelete('js'));

const asenkron =()=>{
    setTimeout(() => {
        console.log("asenkron çalıştı");
    }, 4000);
}
//asenkron();

var input = Number(prompt("Lütfen bir sayı giriniz."));
var evenArray = [];

function findCouple(callback){
  
    for(let i = 1; i <= input; i++){
        if(i%2==0)
        evenArray.push(i);
    }
    callback(evenArray);
}
function yaz(deger){
    console.log(deger);
}

findCouple(yaz);
