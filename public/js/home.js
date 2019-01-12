var tabs=document.querySelectorAll("[data-toggle=tab]");

for(var tab of tabs){
    tab.onclick=function(){
        alert();
        var tab=this;
        var id=tab.getAttribute("data-target");
        tab.className="active";
        var div=document.querySelector(id);
        div.style.left="0px";
        div.style.zIndex="10";
    }
}

console.log(window.scrollHeight);

function carousel(){
    var cream=document.getElementById("cream");
    var personAriaUl=cream.querySelector(".box>.personage>ul");
    alert(personAriaUl.style.marginLeft)
    alert(parseInt(personAriaUl.style.marginLeft))
    var left=parseInt(personAriaUl.style.marginLeft);
    if(left)
        personAriaUl.style.marginLeft=left-364+"px";
    else
    personAriaUl.style.marginLeft=-364+"px";
}


