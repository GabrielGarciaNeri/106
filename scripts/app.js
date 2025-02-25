function savetask(){
    console.log("Task saved")

    


}


function init(){
    console.log("im the init function");

    //load data

    //hook events
    $("#btnSave").click(savetask);
}



window.onload = init;