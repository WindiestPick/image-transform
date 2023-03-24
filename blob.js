var nome

function convert(){
    var img = document.getElementById("myimage").files[0];
    nome = img.name;
    console.log(img);
    const reader = new FileReader();
    reader.readAsArrayBuffer(img);
    reader.onloadend = function() {
        const blob = new Blob([reader.result], {type: 'image/jpeg'});
        const imageUrl = URL.createObjectURL(blob);
        document.querySelector('img').src = imageUrl;
    }
}


function ajust(){
    var imgCont = document.getElementById("img");
    var canvas = document.createElement('canvas');

    if(imgCont.width < imgCont.height){
        var width = (500 * imgCont.width)/imgCont.height; 
        var height = 500;
    }else{
        var width = 500;
        var height = (500 * imgCont.height)/imgCont.width; 
    }
    
    canvas.width  = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    ctx.drawImage(imgCont,0,0,width,height);

    var jpegFile = canvas.toDataURL("image/jpeg");
    imgCont.src = jpegFile;
    var dow = document.getElementById("download");
    var name = document.getElementById("nameFile");
    dow.href = jpegFile;
    console.log(name.value)
    name.value == ""? dow.download = nome : dow.download = name.value + ".jpg";
    
}

function crop(){
    var imgCont = document.getElementById("img");
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");

    canvas.width  = 500;
    canvas.height = 500;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
    if(imgCont.width < imgCont.height){
        var x = (imgCont.width - 500)/2
        ctx.drawImage(imgCont,x,0,500,500,0,0,500,500);
    }else{
        var x = (imgCont.height - 500)/2
        ctx.drawImage(imgCont,0,x,500,500,0,0,500,500);
    }
    

    var jpegFile = canvas.toDataURL("image/jpeg");
    imgCont.src = jpegFile;
    var dow = document.getElementById("download");
    var name = document.getElementById("nameFile");
    dow.href = jpegFile;
  
    name.value == ""? dow.download = nome : dow.download = name.value + ".jpg";

}

function down(){

    var dow = document.getElementById("download");
    var name = document.getElementById("nameFile");
  
    name.value == ""? dow.download = nome : dow.download = name.value + ".jpg";

    console.log(name.value);
}
