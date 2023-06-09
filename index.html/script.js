// var getClass = document.getElementsByClassName(".list");
// console.log(getClass);

// var a = document.createElement("li");
// console.log(a);
// var textNode = document.createTextNode("this is four");
// console.log(textNode);
const a = document.querySelector(".parent");
const b = document.createElement("div");
b.innerHTML = "My Name is Kaustav ";
b.classList.add("child-three");

a.appendChild(b);

const c = document.quarySelector(".child-two");
const d = document.createElement("h1");
d.innerText = "here is the h1 tag !";
// c.appendChild(d);

c.replaceChild(d);
