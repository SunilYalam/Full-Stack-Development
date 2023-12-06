const fs = require('fs');

const filePath = 'nodejs_architecture.txt';

fs.unlink(filePath, (err) => {
    if(err){
        console.log('Error Deleting the file', err);
    }else{
        console.log('File Deleted Successfully');
    }
});