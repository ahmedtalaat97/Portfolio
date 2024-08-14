let project=document.getElementsByClassName("project");
let slideIndex=1;

showProject(slideIndex)

function showProject(num){

    if (num>project.length){
        slideIndex=1;
    }
if(num<1){
    slideIndex=project.length;
}

for (let index = 0; index < project.length; index++) {
    project[index].style.display="none";
    project[slideIndex-1].style.display="flex";
    
}

}



function navigateProject(num){

    showProject(slideIndex+=num);
}