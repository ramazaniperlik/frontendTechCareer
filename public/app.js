"use strict";

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

var counterPlus = function counterPlus() {
  counter++;
  plus_minus();
};

var counterMinus = function counterMinus() {
  counter--;

  if (counter < 0) {
    alert("Adet sıfırdan küçük olamaz!");
  } else {
    plus_minus();
  }
};

var root = document.getElementById("plus_minus");

var plus_minus = function plus_minus() {
  var eventTuto = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    value: "-",
    onClick: counterMinus,
    className: "btn btn-danger"
  }, "-")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("p", null, "Adet:", counter)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    value: "+",
    onClick: counterPlus,
    className: "btn btn-primary"
  }, "+")))));
  ReactDOM.render(eventTuto, root);
};

plus_minus();

function timerClock() {
  var timer = /*#__PURE__*/React.createElement("div", {
    className: "mx-5 my-3"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, " ", new Date().toLocaleTimeString(), " ")));
  ReactDOM.render(timer, document.getElementById("timer_id"));
}

setInterval(timerClock, 1000); // todolist

var object = {
  title: "todo list uygulaması",
  itemTitle: "Eleman Sayısı",
  data: ["Html Dersleri", "React Dersleri"]
};

function formOnSubmit(event) {
  event.preventDefault();
  var formInputData = event.target.elements.formInput.value;
  object.data.push(formInputData);
  todoTutorial();
}

function todoTutorial() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-danger text-uppercase mx-5"
  }, object.title), /*#__PURE__*/React.createElement("p", null, object.itemTitle, ":", object.data.length), /*#__PURE__*/React.createElement("ul", null, object.data.map(function (temp) {
    return /*#__PURE__*/React.createElement("li", {
      key: temp.toString()
    }, temp);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "formInput",
    className: "form-control"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary mt-2"
  }, "G\xF6nder")));
  ReactDOM.render(template, document.getElementById("todoList"));
}

todoTutorial();
var dizi = ["js", "jquery", "bootstrap"];

Array.prototype.diziIndexDelete = function (data) {
  var index = this.indexOf(data);

  if (index > -1) {
    this.splice(index, 1);
  }

  return this;
};

console.log(dizi.diziIndexDelete('js'));

var asenkron = function asenkron() {
  setTimeout(function () {
    console.log("asenkron çalıştı");
  }, 4000);
}; //asenkron();


var input = Number(prompt("Lütfen bir sayı giriniz."));
var evenArray = [];

function findCouple(callback) {
  for (var i = 1; i <= input; i++) {
    if (i % 2 == 0) evenArray.push(i);
  }

  callback(evenArray);
}

function yaz(deger) {
  console.log(deger);
}

findCouple(yaz);
