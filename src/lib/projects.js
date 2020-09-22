const requireProjects = require.context('../data/projects', false, /\.json$/);
const projects = [];

requireProjects.keys().forEach( (filename) => {
    const fileNoExt = filename.replace(/(\.\/|\.json)/g, '');
    const file = require('../data/projects/' + fileNoExt);
    projects.push(file);
})

export default projects;