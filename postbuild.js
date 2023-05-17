const fse = require('fs-extra');
const path = require('path');

const htmlFilePaths = [];

fse.readdirSync('./docs').filter(file => {
    return file.endsWith(".html")
}).forEach(page => {
    htmlFilePaths.push(path.resolve(__dirname, 'docs', page));
})

htmlFilePaths.forEach(filePath => {
    try {
        let data = fse.readFileSync(filePath, 'utf8');
        let result = data.replace('<link rel="stylesheet" type="text/css" href="styles.css" />\r\n', '');
        fse.writeFileSync(filePath, result, 'utf8');
    } catch (err) {
        console.log(`Error processing file ${filePath}:`, err);
    }    
});

