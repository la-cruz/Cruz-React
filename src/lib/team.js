const requireTeam = require.context('../data/perso', false, /\.json$/);
const team = [];

requireTeam.keys().forEach(filename => {
    const fileNoExt = filename.replace(/(\.\/|\.json)/g, '');
    const file = require('../data/perso/' + fileNoExt);
    team.push(file);
})

export default team;