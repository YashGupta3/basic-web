// // console.dir(document);
// document.title = "Yash"
// console.log(document.title); 
// // console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
let header = document.getElementById('header-title')
console.log(header);
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
let l = document.getElementsByTagName('li')
l[0].style.color = "blue"

// Query Selector
// let header = document.querySelector("#main-header");
