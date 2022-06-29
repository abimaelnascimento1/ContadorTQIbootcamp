
var counterwrapper = document.getElementById('counter');
var  counter = 0;

function increment(){   
    counter = counter +1;
    counterwrapper.innerHTML = counter;
}

function decrement(){   
    counter = counter -1;
    counterwrapper.innerHTML = counter;
}


