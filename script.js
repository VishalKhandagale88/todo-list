const inputBox = document.querySelector("#row__inputbox");
const listContainer = document.querySelector("#todoapp__listContainer");

function addTask(){
    if(inputBox.value===''){
        alert("Please set some task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value="";
        let spanTag = document.createElement("span");
        spanTag.innerHTML="\u00d7"
        li.appendChild(spanTag);
    }
}