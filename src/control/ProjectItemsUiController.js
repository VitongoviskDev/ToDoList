import MainProjectItem from "../ui/components/mainProjectItem";

function ClearProjectItems(){
    const prprojectItemsContaineroject = document.querySelector('.project-items-container');
    
    let nodes = prprojectItemsContaineroject.childNodes.length;

    for(let i = 0; i < nodes; i++){
        prprojectItemsContaineroject.removeChild(prprojectItemsContaineroject.childNodes[0]);
    }

}
function FillProjectItems(projectItems){
    ClearProjectItems();
    const prprojectItemsContaineroject = document.querySelector('.project-items-container');
    projectItems.forEach(item => {
        prprojectItemsContaineroject.appendChild(MainProjectItem(item));
    });
}

export {FillProjectItems}