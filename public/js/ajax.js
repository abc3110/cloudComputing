function ajax(url,type){
	return new Promise(function(open){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var res=xhr.responseText;
				open(res);
			}		
		}
		xhr.open(type,url,true);
		//如果是post？
		xhr.send(null);
	});
}