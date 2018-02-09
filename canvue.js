//Setup
var mode = "anim", size = 10, sizedir = true;
var bnames = ['', 'I\'m an Animaniac', 'STOP', 'I’m waiting for the movie to start'];
var buttonlist = ['', 'anim', 'stop', 'dvd'];
//Vue stuff

Vue.component('vbutton', {
    props: ['texts'],
    template: '<button>{{ texts }}</button>'
})

var app = new Vue({
    el: "#app",
    data: {
        //This would be way smoother if I just gave up and used objects but it's the principle
        //Also this way was the right way when I started
        canvas: '<canvas></canvas>',
        buttons: buttonlist,
        names: bnames,
        onclicks: buttonlist.map(i=>i+"()")
    }
})

//Canvas stuff
var c=document.getElementById('canvas');
var ctx=c.getContext("2d");
var anim = function() {
    mode="anim"
}
var stop = function() {
    mode="stop"
}
var dvd = function() {
    mode="dvd"
}
var doStuff = function() {
    if (mode=="anim") {
        ctx.clearRect(0, 0, c.width, c.height);
        console.log(sizedir);
        sizedir ? size++ : size--;
        if (size > 20 || size < 1) {
            sizedir = !sizedir;
        }
        ctx.beginPath();
        ctx.arc(150, 150, size, 0, 2* Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    if (mode == "dvd") {

    }
    if (mode == "stop") {
    }
}

var recurse = function() {
    doStuff();
    window.requestAnimationFrame(recurse);
}
