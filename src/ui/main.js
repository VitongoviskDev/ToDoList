import Project from "../model/project";
import FormAddItem from "./formAddItem";

const Main = () =>{
    //.main-container
    const main = document.createElement('div');
    main.classList.add('main-container');

    //.main-container > .main-content
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    //.main-container > .main-container > .project-title
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    //.main-container > .main-content > .project-title > p
    const titleP = document.createElement('p');
    titleP.textContent = 'Nome do projeto';
    ////.main-container > .main-content > .project-title - Appending
    projectTitle.appendChild(titleP);


    const selectFilterButton = (button) =>{
        let selected = document.querySelector('.main-container .project-items-filter .active');
        if(selected){
            selected.classList.remove('active');
        }
        button.classList.add('active');
    }

    //.main-container > .main-content > .project-items-filter
    const projectItemsFilter = document.createElement('div');
    projectItemsFilter.classList.add('project-items-filter');
    //.main-container > .main-content > .project-items-filter > button{All}
    const allFilterButton = document.createElement('button');
    allFilterButton.textContent = "All";
    allFilterButton.classList.add('active');
    allFilterButton.addEventListener('click', function(){
        selectFilterButton(allFilterButton);
    });
    //.main-container > .main-content > .project-items-filter > button{Today}
    const todayFilterButtonn = document.createElement('button');
    todayFilterButtonn.textContent = "Today";
    todayFilterButtonn.addEventListener('click', function(){
        selectFilterButton(todayFilterButtonn);
    });
    //.main-container > .main-content > .project-items-filter > button{This Week}
    const thisWeekFilterButton = document.createElement('button');
    thisWeekFilterButton.textContent = "This week";
    thisWeekFilterButton.addEventListener('click', function(){
        selectFilterButton(thisWeekFilterButton);
    });
    //.main-container > .main-content > .project-items-filter - Appending
    projectItemsFilter.appendChild(allFilterButton);
    projectItemsFilter.appendChild(todayFilterButtonn);
    projectItemsFilter.appendChild(thisWeekFilterButton);

    //.main-container > .main-content > .project-items-container
    const projectItemsContainer = document.createElement('div');
    projectItemsContainer.classList.add('project-items-container');

    const empty = document.createElement('p');
    empty.classList.add('empty');
    empty.textContent = "No items found";



    //.main-container > .main-content > .add-button-container
    const addButtonContainer = document.createElement('div');
    addButtonContainer.classList.add('add-button-container');
    //.main-container > .main-content > .add-button-container > button
    const addButton = document.createElement('button');
    addButton.addEventListener('click', function(){
        document.body.appendChild(FormAddItem(Project(0, 'Teste')));
    });
    //.main-container > .main-content > .add-button-container > button > img
    const addButtonImg = document.createElement('img');
    addButtonImg.src = "../src/assets/plus.png";
    //.main-container > .main-content > .add-button-container > button > p
    const addButtonP = document.createElement('p');
    addButtonP.textContent = "New item";
    //.main-container > .main-content > .add-button-container > button - Appending
    addButton.appendChild(addButtonImg);
    addButton.appendChild(addButtonP);
    //.main-container > .main-content > .add-button-container - Appending
    addButtonContainer.appendChild(addButton);

    //.main-container > .main-content - Appending
    mainContent.appendChild(projectTitle);
    mainContent.appendChild(projectItemsFilter);
    mainContent.appendChild(projectItemsContainer);
    mainContent.appendChild(empty);
    mainContent.appendChild(addButtonContainer);
    //.main-container - Appending
    main.appendChild(mainContent);
    
    return main
}

export default Main;