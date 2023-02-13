const ProjectItem = (id, projectId, description, start, end, done) => {
    let day = start.getDate();
    let month = start.getMonth();
    let startString = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${start.getFullYear()}`;
    day = end.getDate();
    month = end.getMonth();
    let endString = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${start.getFullYear()}`;
    return {id, projectId, description, start, end, done, startString, endString}
}

export default ProjectItem;