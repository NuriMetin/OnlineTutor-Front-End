let category = document.getElementById("course_category");
let category_children=category.children;

let activeChild=document.querySelector(".active");



for(let child of category_children){
    child.addEventListener("click",function(){
        let activeChild=document.querySelector(".active");
        activeChild.classList.remove("active");
        this.classList.add("active");
    });
}

if(window.innerWidth<=900){
    
}