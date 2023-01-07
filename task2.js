


function addbuttn(){ 
    var list=document.getElementById("list")
 // create li using js with insertion of data in li
    var but=document.getElementById("todo")
    var li=document.createElement("li")
    var li_text=document.createTextNode(but.value)
    li.appendChild(li_text)
//create button in li and text in button using js
    var delbtn=document.createElement("button")
   var deltext=document.createTextNode("deleete")
   delbtn.setAttribute("class","btn")
   delbtn.setAttribute("onclick","dekete(this)")
   delbtn.appendChild(deltext)
//crwate edit button 
   var editbtn=document.createElement("button")
  var  edittxt=document.createTextNode("edit")
  editbtn.appendChild(edittxt)
  editbtn.setAttribute("onclick","edit(this)")
 

   li.appendChild(delbtn)
   li.appendChild(editbtn)
    list.appendChild(li)
    but.value=""

} 
function dekete(e){
   e.parentNode.remove()
}
 function deleteall()
{
    var list=document.getElementById("list")

  list.innerHTML=""
}
function edit(e){
   var newValue=prompt("enter editted value",e.parentNode.firstChild.nodeValue)
   e.parentNode.firstChild.nodeValue=newValue;
} 