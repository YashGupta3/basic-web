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

// let item = document.querySelector(".list-group")
// // console.log(item);
// console.log(item.childNodes);
// console.log(item.firstElementChild);
// console.log(item.lastElementChild);
// console.log(item.nextElementSibling);
// console.log(item.previousElementSibling);
// let newElement = document.createElement("yash")
// newElement.className = "yash"
// newElement.id = "yash"
// console.log(newElement);
// let textnode = document.createTextNode("yashtext")
// textnode.className = "newClass"
// console.log(textnode);

let form = document.getElementById("addForm")
let itemList = document.getElementById("items");

form.addEventListener('submit', additem);

itemList.addEventListener('click', removeItem)

function additem(e){
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    let li = document.createElement('li');
    li.className = "list-group-item"
    // console.log(li);
    // console.log(1);
    li.appendChild(document.createTextNode(newItem));

    let deletebtn = document.createElement('button')
    let editbtn = document.createElement('button')
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    editbtn.className = 'btn btn-danger btn-sm float-right delete'

    deletebtn.appendChild(document.createTextNode('x'))

    editbtn.appendChild(document.createTextNode('e'))

    li.appendChild(editbtn)
    li.appendChild(deletebtn)

    itemList.appendChild(li)

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ??')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}