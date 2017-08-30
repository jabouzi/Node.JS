var fs = require('fs');
var path = require('path');

module.exports = function(directory, filter, callback) {
    fs.readdir(directory, function (err, files) {
        
        if(err) return callback(err);
        
        var list = [];
        for (var file in files) {
            if (path.extname(files[file]) == "."+filter)
            {
                list.push(files[file]);
            }
        }
        
        return callback(null, list);
    });
}

