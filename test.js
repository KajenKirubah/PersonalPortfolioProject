const fse = require('fs-extra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Read the JSON data containing information about your projects
const projects = fse.readJSONSync('path/to/projects.json');

// Read the project template
const projectTemplate = fse.readFileSync('path/to/project-template.html', 'utf-8');

// Create HtmlWebpackPlugin instances for each project
const projectPages = projects.map(project => {
  // Replace placeholders with actual project data
  const projectPageContent = projectTemplate
    .replace('{{title}}', project.title)
    .replace('{{description}}', project.description)
    .replace('{{technologies}}', createTechnologiesList(project.technologies))
    .replace('{{image}}', project.image);

  return new HtmlWebpackPlugin({
    filename: project.page,
    templateContent: projectPageContent,
  });
});

function createTechnologiesList(technologies) {
  return technologies.map(tech => `<li>${tech}</li>`).join('');
}

// Add the projectPages array to the plugins array in your Webpack configuration
module.exports = {
  // ...
  plugins: [
    // ...other plugins
    ...projectPages,
  ],
  // ...
};

// this method if we want to 
fetch('path/to/projects.json')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      // Fetch the project template
      fetch('path/to/project-template.html')
        .then(response => response.text())
        .then(template => {
          // Replace placeholders with actual project data
          let projectPage = template
            .replace('{{title}}', project.title)
            .replace('{{description}}', project.description)
            .replace('{{technologies}}', project.technologies.join(', '))
            .replace('{{image}}', project.image);
          
          // Save the generated project page as an HTML file
          saveProjectPage(project.page, projectPage);
        });
    });
  });

function saveProjectPage(fileName, content) {
  // Implement a function to save the generated HTML content to a file
}