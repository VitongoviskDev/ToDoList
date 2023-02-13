import { OpenProject, SelectMenuProject } from "../../control/ProjectUiController";

const MenuProject = (project) => {
    //menu-project
    const menuProject = document.createElement('div');
    menuProject.classList.add('menu-project');
    menuProject.id = `menu-project-${project.id}`;
    menuProject.addEventListener('click', function(){
        SelectMenuProject(menuProject.id);

        OpenProject(project);
    })
    //menu-porject > p{titulo};
    const titleP = document.createElement('p');
    titleP.textContent = project.name; 

    menuProject.appendChild(titleP);

    return menuProject;
}

export default MenuProject;