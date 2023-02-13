import { GetAllProjects, GetProjectById, SetCurrentOpenProject } from "./ProjectController";
import { FillProjectItems } from "./ProjectItemsUiController";
import MenuProject from "../ui/components/menuProject";

function OpenProject(project){
    project = GetProjectById(project.id);
    console.log(project);
    const title = document.querySelector('.main-container .main-content .project-title p');
    title.textContent = project.name;

    if(project.id <= 1){
        DisableAddItemButton();
    }else{
        EnableAddItemButton();
    }
    console.log(project.id);
    FillProjectItems(project.items);
    SetCurrentOpenProject(project);
}
function DisableAddItemButton(){
    const addItemButton = document.querySelector('.main-container .main-content .add-button-container button');
    addItemButton.classList.add("hided");
    console.log(addItemButton);
}
function EnableAddItemButton(){
    const addItemButton = document.querySelector('.main-container .main-content .add-button-container button');
    addItemButton.classList.remove("hided");
}
function SelectMenuProject(projectId){
    let active = document.querySelector('.side-bar .active');
    if(active){
        active.classList.remove('active');
    }
    const menuProject = document.getElementById(projectId);
    menuProject.classList.add('active');
}
function FillMenuProjects(){

    const projectsContainer = document.querySelector('.side-bar .menu-container .projects-container');
    ClearProjectsContainer();
    
    let allProjects = GetAllProjects();
    for(let i = 2; i < allProjects.length; i ++){
        let project = allProjects[i];
        projectsContainer.appendChild(MenuProject(project));
        console.log(project);
    }
}
function ClearProjectsContainer(){
    const projectsContainer = document.querySelector('.side-bar .menu-container .projects-container');
    let nodes = projectsContainer.childNodes.length;
    for(let i = 0; i < nodes; i ++){
        projectsContainer.removeChild(projectsContainer.childNodes[0]);
    }
}

export {OpenProject, SelectMenuProject, FillMenuProjects}