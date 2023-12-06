const fs = require('fs');

const nodejsInfo = " Print Node.js";
const filePath = 'nodejs_architecture.txt';

fs.writeFile(filePath, nodejsInfo, (err)  => {
    if(err){
        console.log('Error', err);
    }else {
        console.log('Out about the node.js architecture ${filePath}');
    }
});