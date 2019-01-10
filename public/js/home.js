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

