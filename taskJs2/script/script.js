
let imgondblclick=()=>{
    let img = document.getElementById('imgop')

    if( img.src.includes("slide1-demo1.jpg"))
{
    img.src="img/shopping.webp"
  
}
  else{
    img.src="img/slide1-demo1.jpg"
  }
}


let imgondblclick=(el)=>{
    let ul=document.getElementsByName("li")
   if(el===this){
        ul[i].style.backgroundColor="red"
   }
    for(let i=0;i<ul.length;i++){
        ul[i].style.backgroundColor="black"
    }




    
}