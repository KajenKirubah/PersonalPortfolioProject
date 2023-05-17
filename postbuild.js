const fse = require('fs-extra');
const path = require('path');

const htmlFilePaths = [
    path.resolve(__dirname, 'docs', 'index.html'),
    path.resolve(__dirname, 'docs', 'about.html'),
    path.resolve(__dirname, 'docs', 'contact.html'),
    path.resolve(__dirname, 'docs', 'projects.html')
];

htmlFilePaths.forEach(filePath => {
    try {
        let data = fse.readFileSync(filePath, 'utf8');
        let result = data.replace('<link rel="stylesheet" type="text/css" href="styles.css" />', '');
        fse.writeFileSync(filePath, result, 'utf8');
    } catch (err) {
        console.log(err);
    }
})