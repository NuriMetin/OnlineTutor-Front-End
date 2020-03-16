let tabContentChildren = document.getElementById("tab-content").children;

for(let child of tabContentChildren){
    child.addEventListener("click",function(){
        document.getElementById("tab-content").querySelector(".line").classList.remove("line");
        this.lastChild.classList.add("line");
    });
}