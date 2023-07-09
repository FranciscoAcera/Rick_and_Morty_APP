const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd());
}

function date(print) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print) {
    fs.readdir(".", function(err, files){
        if (err) throw new Error(err);
        print(files.join(" "));
    } );
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', function(error, data){
        if (error) throw new Error(error);
        print(data);
    } );
}

function head(print, args) {
    fs.readFile(args, 'utf-8', function(error, data){
        if (error) throw new Error(error);
        const firstLine = data.split('\n')[0];
        print(firstLine);
    } );
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', function(error, data){
        if (error) throw new Error(error);
        const firstLine = data.split('\n')[0];
        const lastLine = data.split('\n').pop().trim();
        print(lastLine);
    });
}

function curl(print, args) {
    utils.request(args, function(error, response){
        if (error) throw new Error(error);
        print(response);
    } )
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
