const fs = require('fs');
function readTextFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            
            callback(err, null);
        } else {
            
            callback(null, data);
        }
    });
}
const filePath = 'C:\Users\STUDENT.CSE-LAB3-PC2\Desktop\textfile.txt';
readTextFile(filePath, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});
