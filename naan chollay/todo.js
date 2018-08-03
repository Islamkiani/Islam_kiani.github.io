document.getElementById("submit").addEventListener("click",addToList);

function addToList(){
    
    var newTask = document.getElementById("task").value;
    if(newTask !== ""){
    var item = document.createElement("li");
    item.id = "listItem";
    newTask = `${newTask}`;
    var span = document.createElement("span");
    span.className = "remove";
    span.appendChild(document.createTextNode("X"));
    

     item.appendChild(document.createTextNode(newTask));
     item.appendChild(span);
     document.getElementById("todos").appendChild(item);
    }
     else {
          alert("Add new task first");
     }

     if(document.getElementById("task").value !== ""){
        document.getElementById("task").value = "";
     }
}

document.getElementsByTagName("li").addEventListener("click",function(event){
     var targ = event.target;
     targ.parentElement.style.display = "none";
    console.log(targ);


});






