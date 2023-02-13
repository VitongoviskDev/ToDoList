import { AddProject, GetProjectByName } from "../control/ProjectController";

const FormAddProject =() =>{
    const disabledBg = document.querySelector('.disabled-bg');
    disabledBg.classList.add('active');

    const form = document.createElement('form');
    form.classList.add('form-add-project');


    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', function(){
        disabledBg.classList.remove('active');
        document.body.removeChild(form);
    });

    const title = document.createElement('p');
    title.textContent = "New project";


    const ValidateField = () =>{
        let valid = true;
        if(nameInput.value == ''){
            valid = false;
            errorMessage.textContent = 'Preencha o campo obrigatório';
        }
        else if(GetProjectByName(nameInput.value)){
            valid = false
            errorMessage.textContent = 'Nome ja registrado';
        }
        if(!valid){
            nameInput.classList.add('wrong');
            errorMessage.classList.add('active');
        }
        return valid;
    }

    const onInputChange = () =>{
        if(nameInput.classList.contains('wrong')){
            console.log('changed');
            nameInput.classList.remove("wrong");
            errorMessage.classList.remove('active');
        }
    }
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = "Project name"
    nameInput.required = true;
    nameInput.addEventListener('input', function(){
        onInputChange();
    }); 

    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Nome inválido!";

    const button = document.createElement('button');
    button.textContent = "Add project"
    button.addEventListener('click', function(){
        event.preventDefault();

        if(ValidateField()){
            disabledBg.classList.remove('active');
            document.body.removeChild(form);
            
            AddProject(nameInput.value);
        }
    })

    form.appendChild(closeButton);
    form.appendChild(title);
    form.appendChild(nameInput);
    form.appendChild(errorMessage);
    form.appendChild(button);

    return form;
}

export default FormAddProject;