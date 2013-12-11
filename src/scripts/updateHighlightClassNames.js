;(function(){
	var elements = document.querySelectorAll('pre>code')
		,i
		,j
		,el
		,cl

	for(i = 0; i<elements.length; i++){
		el = elements[i]
		for (j=0; j<el.classList.length; j++){ 
			cl = el.classList.item(j)
			console.log(cl)
			if(cl.search(/language-/)!=-1){
				el.classList.remove(cl)
				el.classList.add(cl.substr(9))
				console.log("adding class "+cl.substr(9))
			}
		}	
	}
})()