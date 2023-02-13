import Header from "./ui/header";
import Sidebar from "./ui/sideBar";
import Main from "./ui/main";
import { ConfigLocalStorage, GetAllProjects } from "./control/ProjectController";

const container = document.querySelector('.container');

container.appendChild(Header());
container.appendChild(Sidebar());
container.appendChild(Main());

ConfigLocalStorage();
GetAllProjects();