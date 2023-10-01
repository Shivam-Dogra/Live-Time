var timeBox = document.querySelector('.box');



setInterval(function(){
    let date = new Date();
    timeBox.innerHTML = date.toLocaleTimeString();
}, 1000);
