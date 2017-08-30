// #1
//console.log("HELLO WORLD");

// #1
//console.log(process.argv);

//var sum = 0;
//for (var i = 2; i < process.argv.length; i++)
//{
    //sum = parseInt(sum) + parseInt(process.argv[i]);
//}

//console.log(sum);

// #3
//var fs = require('fs');

//var buf = fs.readFileSync(process.argv[2]);
//var str = buf.toString();

//var lines = str.split("\n");

//console.log(lines.length - 1);

// #4
//var fs = require('fs');

//function getLineNumbers() {
    //fs.readFile(process.argv[2], function countLines(err, content) {
        //var lines = content.toString().split("\n");
        //console.log(lines.length - 1);
    //});
//};

//getLineNumbers();


// #5
//var fs = require('fs');
//var path = require('path');

//function getFilesByExt() {
    //fs.readdir(process.argv[2], function filterFiles(err, files) {
        //for (var file in files) {
            //if (path.extname(files[file]) == "."+process.argv[3])
            //{
                //console.log(path.basename(files[file]));
            //}
        //}
    //});
//};

//getFilesByExt();

// #6
//var mymodule = require('./module.js');

//var mycallback = function(error, list) {
    //if (error) console.log(error)
    
    //for(var file in list) {
        //console.log(list[file]);
    //}
//}

//mymodule(process.argv[2], process.argv[3], mycallback);

// #7
//var http = require('http');
 
//http.get(process.argv[2], function(res) {
   //res.on('data', function (data) {
    //console.log(data.toString());
   //});
//}); 


// #8
var http = require('http');

http.get(process.argv[2], function(res) {
    var result = "";
   res.on('data', function (data) {
        result += data.toString();
   });
   
   res.on('end', function (data) {
        console.log(result.length);
        console.log(result);        
   });
}); 
   

