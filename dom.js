// // console.dir(document);
// document.title = "Yash"
// console.log(document.title); 
// // console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// let header = document.getElementById('header-title')
// console.log(header);
// header.textContent = "Text Content Changed"
// header.innerText = "Yash"
// // header.innerHTML = "<h6>Yash</h6>"
// header.style.border = "solid 2px red"

// Get Element by Class Names
// let item = document.getElementsByClassName("list-group-item")
// console.log(item);
// // item[0].style.color = "red"
// for (i=0; i<item.length; i++){
//     item[i].style.color = "red"
//     item[i].style.backgroundColor = "blue"
// }

// Get element by tag name
// let l = document.getElementsByTagName('li')
// // l[0].style.color = "blue"
// console.log(l);
// for(let i=0; i<l.length; i++){
//     l[i].style.color = "red"
// }

// Query Selector
// let header = document.querySelector("#main-header");
// let item2 = document.querySelector(".list-group-item:nth-child(2)")
// item2.style.backgroundColor = "green"

// let item3 = document.querySelector(".list-group-item:nth-child(3)")
// // item3.style.display = "none"

// let odd = document.querySelectorAll("li:nth-child(odd)")

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "green"
// }

let item = document.querySelector(".list-group")
// console.log(item);
console.log(item.childNodes);
console.log(item.firstElementChild);
console.log(item.lastElementChild);
console.log(item.nextElementSibling);
console.log(item.previousElementSibling);
let newElement = document.createElement("yash")
newElement.className = "yash"
newElement.id = "yash"
console.log(newElement);
let textnode = document.createTextNode("yashtext")
textnode.className = "newClass"
console.log(textnode);

