//Ham tao nut x va them vao tat ca the li
function addX() {
    let lis = document.getElementsByTagName("li");
    for (i = 0; i < lis.length; i++) {
        let xBtn = document.createElement("span");
        let x = document.createTextNode("x");
        xBtn.appendChild(x);
        xBtn.className = "close";
        lis[i].appendChild(xBtn);
    }
}


//Ham tao su kien click vao the xoa li
function closeX() {
    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let li = this.parentNode;
            li.remove();
        }
}
}

//Them class check vao li dang active va nguoc lai
let ul = document.querySelector("ul");
ul.onclick = function(n) {
  if (n.target.tagName === "LI") {
    n.target.classList.toggle("checked");
  }
}

addX();
closeX();

//Them todo
function newElement() {
    //Tao the li chua noi dung nhap vao
    const value = document.getElementById("myInput").value;

    let li = document.createElement("li");
    let liText = document.createTextNode(value);
    li.appendChild(liText);
    ul.appendChild(li);

    //Gan nut close va add chuc nang xoa cho the li vua tao
    addX();
    closeX();
}