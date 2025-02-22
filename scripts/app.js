console.log("Hello from JS");

function hello(){
    console.log("Hello there!");
}

function init(){
    console.log("im the init function");
    hello();

}



window.onload = init;