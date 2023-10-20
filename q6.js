const fs = require('fs');
const path = require('path');

function listFilesRecursively(directoryPath) {
    const entries = fs.readdirSync(directoryPath);
    entries.forEach(entry => {
        const entryPath = path.join(directoryPath, entry);

       
        if (fs.statSync(entryPath).isDirectory()) {
          
            listFilesRecursively(entryPath);
        } else {
          
            console.log(entryPath);
        }
    });
}

const startDirectory = 'C:/Users/STUDENT.CSE-LAB3-PC2';

try {
    listFilesRecursively(startDirectory);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
