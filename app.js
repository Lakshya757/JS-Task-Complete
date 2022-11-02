

var myList = document.getElementsByClassName('align')

for(var i=0;i<myList;i++){
    var span = document.createElement('Span')
    var txt = document.createTextNode("X")
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
}

var close = document.getElementsByClassName("close")
for(var i=0;i<close.length;i++){
    close[i].onClick = function(){
        var div = this.parenElement
        div.style.display="none"
    }
}

var list = document.getElementById('card');

list.addEventListener('click', function(ev) {
  if (ev.target.className === 'text') {
    ev.target.classList.toggle('checked');
  }
})

function newElement(){
    var task = document.createElement("div")
    var inputValue = document.getElementById('task').value;
    var t = document.createTextNode(inputValue)
    task.appendChild(t);
    if(inputValue==''){
        alert("You must write someting")
    }else{
        document.getElementsByName('cards').appendChild(task)
    }
    document.getElementById('task').value = ""

    var span = document.createElement("Span")
    var txt = document.createTextNode("Y")
    span.className = "close";
    span.appendChild(txt)
    task.appendChild(span)

    for(var i = 0;i < close.length;i++){
        close[i].onClick = function(){
            var div = this.parenElement
            div.style.display="none"
        }
    }
    
}









