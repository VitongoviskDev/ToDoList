import { DelelteItem, SetProjectItemDone } from "../../control/ProjectController";

const MainProjectItem = (projectItem) => {

    //project-item
    const projectItemContainer = document.createElement('div');
    projectItemContainer.classList.add("project-item");
    projectItemContainer.id = projectItem.id;


    //project-item > .left
    const left = document.createElement('div');
    left.classList.add('left');
    //project-item > .left > button
    const itemConcludedButton = document.createElement('button');
    itemConcludedButton.classList.add('custom');

    itemConcludedButton.addEventListener('click', function(){
        projectItem.done = !projectItem.done;
        if(projectItem.done){
            projectItemContainer.classList.add("concluded");
        }
        else{
            projectItemContainer.classList.remove("concluded");
        }

        SetProjectItemDone(projectItem);
    });
    //Item concluded appending
    left.appendChild(itemConcludedButton);

    //project-item > .center
    const center = document.createElement('div');
    center.classList.add("center");
    //project-item > .center > description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    //project-item > .center > description > p
    const descriptionP = document.createElement('p');
    descriptionP.textContent = projectItem.description;
    //project-item > .center > description appending;
    descriptionDiv.appendChild(descriptionP);
    //project-item > .center > dates
    const datesDiv = document.createElement('div');
    datesDiv.classList.add('dates');
    //project-item > .center > dates > .date{start}
    const dateStartP = document.createElement('p');
    dateStartP.classList.add('date');
    dateStartP.textContent = 'start: ' + projectItem.startString;
    //project-item > .center > dates > .date{end}
    const dateEndP = document.createElement('p');
    dateEndP.classList.add('date');
    dateEndP.textContent = 'end: ' + projectItem.endString;
    //project-item > .center > dates appending
    datesDiv.appendChild(dateStartP);
    datesDiv.appendChild(dateEndP);
    //project-item > .center appending
    center.appendChild(descriptionDiv);
    center.appendChild(datesDiv);
    //project-item > .rigth
    const right = document.createElement('div');
    right.classList.add('rigth');
    //project-item > .right > button
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', function(){
        DelelteItem(projectItem);
    })
    //project-item > .right > button > img
    const deleteButtonImg = document.createElement('img');
    deleteButtonImg.src = "../src/assets/delete.png";
    //project-item > .right > button appending
    deleteButton.appendChild(deleteButtonImg);
    //project-item > .rigth appending
    right.appendChild(deleteButton);


    projectItemContainer.appendChild(left);
    projectItemContainer.appendChild(center);
    projectItemContainer.appendChild(right);

    return projectItemContainer;
}

export default MainProjectItem;