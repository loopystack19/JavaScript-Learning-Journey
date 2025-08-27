/*Write a javascript programme to get the extension of a file name */

let getExtension=function(fileName){

    let extension=fileName.slice(fileName.lastIndexOf(".")+1);

    if(extension === -1){

        console.log("")
    }else{
        console.log(extension);
    }
}

getExtension("my-document.exe");