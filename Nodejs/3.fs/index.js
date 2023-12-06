const fs = require('fs');

const filePath = 'nodejs_architecture.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.log('Error reading the file:', err);
    }else{
        console.log('Print of node_architecture.txt file');
        console.log(data);
    }
});