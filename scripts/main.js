let image = document.querySelector('img');
let max = 4;
let min = 0;
let current = 0;
let image_name = image.getAttribute('src');

image.onclick = function () {
    console.log(current)
    if (current === max){
        image_name = `images/project${current}.jpg`;
        image.setAttribute('src', image_name);
        current = 0;
    }else{
        image_name = `images/project${current}.jpg`;
        image.setAttribute('src', image_name);
        current++;
    };
};

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setName(){
    let name = prompt("Please enter your name");
    if (!name){
        localStorage.setItem('name', "Jhin");
        heading.textContent = `Project ${"Jhin"}`;
    }else{
        localStorage.setItem('name', name);
        heading.textContent = `Project ${name}`;
    };
    
};

if (!localStorage.getItem('name')){
    setName();
}else{
    heading.textContent = "Project " + localStorage.getItem('name');
};


button.onclick = function(){
    setName();
};
