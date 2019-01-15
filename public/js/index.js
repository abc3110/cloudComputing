(function(){
	ajax(
		"http://localhost:5050/site/news",
		"get"
	).then(function(data){							
		console.log(data);
		data=JSON.parse(data);
		var html="";
		for(var d of data){
			html+=`<li>
				<div>
					<h2>${d.title}</h2>
					<p>${d.details}</p>
					<span>${d.date}</span>
				</div>
			</li>`;
		}
		var li=document.querySelector("#news>.box>.list>ul");
		li.innerHTML=html;
	});
	var btn=document.querySelectorAll(".page>ul>li")[3];
	btn.onclick=function(){
		var ul=document.querySelector("#news>.box>.list>ul");
		ul.removeChild();
	}
	//窗口滚动到500时，为layer层的内容添加动画
	window.onscroll=function(){
		var scrollTop=document.body.scrollTop 
					||document.documentElement.scrollTop;
		console.log(scrollTop);
		//layer层添加动画
		var a1=document.getElementById("layer")		//#layer
					.firstElementChild 				//box
					.children[0] 					//d-top
					.firstElementChild; 			//a1	
		var h=a1.children;
		var img=a1.nextElementSibling;
		if(scrollTop>=300){
			//左半部分
			for(var b of h){
				addAnimation(b,"fadeInLeft 2s 1");
				b.style.visibility="visible";
			}
			//右半部分
			addAnimation(img,"fadeInRight 2s 1");
			img.style.visibility="visible";
		}	
		//layer层f2
		var f2a1=document.querySelector(".f2>.a1");
		var h=f2a1.children;
		var img=f2a1.previousElementSibling;
		console.log(img);
		if(scrollTop>=700){
			//右半部分
			for(var b of h){
				addAnimation(b,"fadeInRight 2s 1");
				b.style.visibility="visible";
			}
			//左半部分
			addAnimation(img,"fadeInLeft 2s 1");
			img.style.visibility="visible";
		}
		//layer层f3
		var f3a1=f2a1.parentNode.nextElementSibling.firstElementChild;
		console.log(f3a1);
		var h=f3a1.children;
		var img=f3a1.nextElementSibling;
		if(scrollTop>=1300){
			//右半部分
			for(var b of h){
				if(b.nodeName!="UL"){
					addAnimation(b,"fadeInLeft 2s 1");
					b.style.visibility="visible";
				}else{
					b.children[0].className="animate1s";
					b.children[1].className="animate2s";
					b.children[2].className="animate3s";
				}
			}
			//左半部分
			addAnimation(img,"fadeInRight 2s 1");
			img.style.visibility="visible";
		}

	}
	//为元素添加动画
	function addAnimation(obj,animate){
		if(!obj.style.animation){
			obj.style.animation=animate;
		}
	}
})()