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
