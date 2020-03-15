let category = document.getElementById("course_category");

let category_children = category.children;

let all_li = document.getElementById("course_category").children;
let liCount = 0;
for (let f of all_li) {
    liCount += 1;
}



for (let child of category_children) {
    child.addEventListener("click", function () {
        let activeChild = document.querySelector(".active");
        activeChild.classList.remove("active");
        child.classList.add("active");
    });
}



if(window.innerWidth>=485 && liCount>6){
    
}



/*if (window.innerWidth >= 485 && liCount > 6) {
    let lidatas = [];
    let count = 0;
    for (let li of all_li) {
        count += 1;
        if (count > 5) {
            li.classList.add("display-none");
            let data_id = li.getAttribute("data-id");
            let liName=li.innerText;
            lidatas.push({
                ID: data_id,
                Name: liName
            });
            count += 1;
        }
    }

    let li_more = document.createElement("li");
    let i_more = document.createElement("i");
    let liText = document.createTextNode("More");
    i_more.classList.add("fas");
    i_more.classList.add("fa-caret-down");
    li_more.appendChild(liText);
    li_more.appendChild(i_more);
    document.getElementById("course_category").appendChild(li_more);
    console.log(lidatas);

}*/