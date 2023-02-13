import Project from "../model/project";
import { FillMenuProjects, OpenProject, SelectMenuProject } from "./ProjectUiController";

function SetCurrentOpenProject(project){
    localStorage.currentProject = JSON.stringify(project);
}
function GetCurrentProject(){
    return JSON.parse(localStorage.currentProject);
}
function ConfigLocalStorage(){
    let todayProject = Project(0, 'All today');
    todayProject.items = [];
    let thisWeekProject = Project(1, 'All this Week');
    thisWeekProject.items = [];

    let allProjects = [todayProject, thisWeekProject];

    localStorage.allProjects = JSON.stringify(allProjects);
    OpenProject(todayProject);
}
function GetProjectById(id){
    let allProjects = JSON.parse(localStorage.allProjects);
    let project = null;

    for(let i = 0; i< allProjects.length; i++){
        let proj = allProjects[i];
        if(proj.id == id){
            project = proj;
            break;
        }
    }
    return project;
}
function GetLastProjectId(){
    let allProjects = JSON.parse(localStorage.allProjects);
    let lastId = -1;
    for(let i = 0; i < allProjects.length; i++){

        if(allProjects[i].id > lastId){
            lastId = allProjects[i].id;
        }
    }

    return lastId;
}
function GetProjectByName(name){
    let allProjects = JSON.parse(localStorage.allProjects);
    for(let i = 0; i < allProjects.length; i++){

        if(allProjects[i].name == name){
            return allProjects[i];
        }
    }
    return null;
}
function GetAllProjects(){
    let allProjects = JSON.parse(localStorage.allProjects);
    return allProjects;
}
function AddProject(name){
    let id = GetLastProjectId();
    let project = Project(id + 1, name);

    let allProjects = JSON.parse(localStorage.allProjects);
    allProjects.push(project);
    localStorage.allProjects = JSON.stringify(allProjects);

    FillMenuProjects();
    OpenProject(project);
    SelectMenuProject('menu-project-'+project.id);
}

function GetLastItemId(project){
    let allProjects = JSON.parse(localStorage.allProjects);

    let length = 0;
    for(let i = 0; i < allProjects.length; i++){

        if(allProjects[i].id == project.id){
            length = allProjects[i].items.length;
            break;
        }
    }

    return length;
}
function AddItem(project, item){
    let allProjects = JSON.parse(localStorage.allProjects);

    for(let i = 0; i < allProjects.length; i++){

        if(allProjects[i].id == project.id){
            allProjects[i].items.push(item);
            break;
        }
    }

    localStorage.allProjects = JSON.stringify(allProjects);
}

function SetProjectItemDone(projectItem){
    let project = GetProjectById(projectItem.projectId);

    let allProjects = JSON.parse(localStorage.allProjects);

    for(let i = 0; i < allProjects.length; i++){

        let currentProj = allProjects[i];
        if(currentProj.id == project.id){
            for(let j = 0; j < currentProj.items.length; j++){
                let currentItem = currentProj.items[j];
                if(currentItem.id == projectItem.id){
                    allProjects[i].items[j].done = projectItem.done;
                    break;
                }
            }
            break;
        }
    }

    localStorage.allProjects = JSON.stringify(allProjects);
}

function DeleteItem(projectItem){
    let currentProject = JSON.parse(localStorage.currentProject);
    let allProjects = JSON.parse(localStorage.allProjects);
    
    let project = null;
    for(let i = 0; i < allProjects.length; i++){
        project = allProjects[i];
        if(project.id = currentProject.id){
            for(let j = 0; j < project.items.length; j++){
                let item = project.items[j];
                if(item.id == projectItem.id){
                    let index = project.items.indexOf(item);
                    console.log(index);
                    allProjects[i].items.splice(index, 1);
                    console.log(project.items);
                    break;
                }
            }
        }
    }

    localStorage.allProjects = JSON.stringify(allProjects);
    OpenProject(project);
}

export {SetCurrentOpenProject, DeleteItem as DelelteItem, SetProjectItemDone, GetCurrentProject, ConfigLocalStorage, GetProjectById, GetProjectByName, GetAllProjects, AddProject, GetLastItemId, AddItem}