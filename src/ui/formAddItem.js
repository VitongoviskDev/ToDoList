import { AddItem, GetLastItemId, GetCurrentProject} from "../control/ProjectController";
import { OpenProject } from "../control/ProjectUiController";
import ProjectItem from "../model/projectItem";

const FormAddItem = () =>{
    let project = GetCurrentProject();
    console.log(project);
    const disabledBg = document.querySelector('.disabled-bg');
    disabledBg.classList.add('active');

    const form = document.createElement('form');
    form.classList.add('form-add-item');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', function(){
        disabledBg.classList.remove('active');
        document.body.removeChild(form);
    });

    const title = document.createElement('p');
    title.innerHTML = `<strong>${project.name}</strong> new item`;

    const onDescriptionChanged = () =>{
        wrongDescriptionP.classList.remove('active');
        descriptionTextarea.classList.remove('wrong');
    }

    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.cols = 30;
    descriptionTextarea.rows = 10;
    descriptionTextarea.placeholder = "item description"
    descriptionTextarea.required = true;
    descriptionTextarea.addEventListener('input', function(){
        onDescriptionChanged();
    });

    const wrongDescriptionP = document.createElement('p');
    wrongDescriptionP.textContent = "wrong";
    wrongDescriptionP.classList.add("wrong");

    const datesContainer = document.createElement('div');
    datesContainer.classList.add('dates-container');

    const onStartInputChanged = () =>{
        endInput.min = startInput.value;
        if(endInput.value < startInput.value){
            endInput.value = startInput.value;
        }
    }


    const startInput = document.createElement('input');
    startInput.type = 'date';
    startInput.min = new Date();
    startInput.valueAsDate = new Date();
    startInput.onkeydown = () => {return false};
    startInput.addEventListener('input', function(){
        onStartInputChanged();
    });

    const endInput = document.createElement('input');
    endInput.type = 'date';
    endInput.min = new Date();
    endInput.valueAsDate = new Date();
    endInput.onkeydown = () => {return false};
    startInput.addEventListener('input', function(){
        onEndInputChanged();
    });


    datesContainer.appendChild(startInput);
    datesContainer.appendChild(endInput);
    
    const ValidateFields = () => {
        let valid = true;

        console.log(startInput.value);
        if(descriptionTextarea.value == ''){
            valid = false;
            descriptionTextarea.classList.add('wrong');
            wrongDescriptionP.classList.add('active');
            wrongDescriptionP.textContent = "campo obrigatório";
        }

        return valid;
    }

    const addButton = document.createElement('button');
    addButton.textContent = "adicionar";
    addButton.addEventListener('click', function(){
        event.preventDefault();

        if(ValidateFields()){
            disabledBg.classList.remove('active');
            document.body.removeChild(form);
            

            let id = GetLastItemId(project) + 1;
            let description = descriptionTextarea.value;
            let start = startInput.valueAsDate;
            let end = endInput.valueAsDate;
            let item = ProjectItem(id, project.id, description, start, end, false);
            AddItem(project, item);
            OpenProject(project);
        }
    })


    form.appendChild(closeButton);
    form.appendChild(title);
    form.appendChild(descriptionTextarea);
    form.appendChild(wrongDescriptionP);
    form.appendChild(datesContainer);
    form.appendChild(addButton);

    return form;
}

export default FormAddItem;