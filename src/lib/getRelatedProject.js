import allProjects from '../data/projects.json'

export default function getRelatedProject(relatedProject) {
  var relatedProjectFinal = []
  var optionalProject


  relatedProject.forEach(elem => {
    optionalProject = allProjects.filter(project => project.name === elem)[0]

    if(optionalProject) {
      relatedProjectFinal.push(optionalProject)
    }
  })

  return relatedProjectFinal
}