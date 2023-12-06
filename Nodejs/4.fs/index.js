const fs = require('fs');

const filePath = 'nodejs_architecture.txt';

const additionaData = '';

fs.readFile(filePath, 'utf8', (err, data)  => {
    if(err){
        console.log('Error');
    }else{
        const updateContent = data + additionaData;
        fs.writeFile(filePath, updateContent, (err) => {
            if(err){
                console.log('error of the content');
            }else{
                console.log('Appended to nodejs_architecture.txt');
            }
        });
    }
});