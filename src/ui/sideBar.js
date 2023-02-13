import { GetProjectById } from "../control/ProjectController";
import { OpenProject } from "../control/ProjectUiController";
import FormAddProject from "./formAddProject";

const Sidebar = () =>{
    //.side-bar
    const sideBar  = document.createElement("div");
    sideBar.classList.add('side-bar');

    //.side-bar > .add-button-container
    const addButtonContainer = document.createElement("div");
    addButtonContainer.classList.add('add-button-container');
    //.side-bar > .add-button-container > button
    const addButton = document.createElement('button');
    addButton.addEventListener('click', function(){
        document.body.appendChild(FormAddProject());
    });


    //.side-bar > .add-button-container > button > img
    const addButtonImg = document.createElement('img');
    addButtonImg.src = "../src/assets/plus.png";
    //.side-bar > .add-button-container > button > p
    const addButtonP = document.createElement('p');
    addButtonP.textContent = "New project";
    //.side-bar > .add-button-container > button - Appending
    addButton.appendChild(addButtonImg);
    addButton.appendChild(addButtonP);
    //.side-bar > .add-button-container - Appending
    addButtonContainer.appendChild(addButton);

    const selectMenuButton = (button) =>{
        let active = document.querySelector('.side-bar .active');
        if(active)
            active.classList.remove('active');
        button.classList.add('active');
    }


    //side-bar > menu-container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    //side-bar > menu-container > button{Today}
    const todayButton = document.createElement('button');
    todayButton.textContent = "All today";
    todayButton.classList.add('active');
    todayButton.addEventListener('click', function(){
        selectMenuButton(todayButton);

        let project = GetProjectById(0);
        OpenProject(project);
    })
    //side-bar > menu-container > button{This Week}
    const thisWeekButton = document.createElement('button');
    thisWeekButton.textContent = "All this week";
    thisWeekButton.addEventListener('click', function(){
        selectMenuButton(thisWeekButton);
        let project = GetProjectById(1);
        OpenProject(project);
    })
    //side-bar > menu-container > p{Projects}
    const projectsP = document.createElement('p');
    projectsP.textContent = "Projects";
    //side-bar > menu-container > .projects-container
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');


    //side-bar > menu-container - Appending
    menuContainer.appendChild(todayButton);
    menuContainer.appendChild(thisWeekButton);
    menuContainer.appendChild(projectsP);
    menuContainer.appendChild(projectsContainer);

    //side-bar - Appending
    sideBar.appendChild(addButtonContainer);
    sideBar.appendChild(menuContainer);

    return sideBar;
}

export default Sidebar;