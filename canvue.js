//Setup
var mode = "anim", size = 10, sizedir = true, x=150, y=150, xdir = true, ydir = true;
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
    var x = 150;
    var y = 150;
    mode="anim";
}
var stop = function() {
    mode="stop"
}
var dvd = function() {
    size=10;
    mode="dvd";
}
var doStuff = function() {
    if (mode=="anim") {
        ctx.clearRect(0, 0, c.width, c.height);
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
        ctx.clearRect(0, 0, c.width, c.height);
        //I feel like I got really fancy here, but essentially I'm just controlling the directions
        //With ternary statments though
        //That's pretty awesome
        xdir ? x+=2 : x-=2;
        ydir ? y++ : y--;
        if (x > 300 || x < 1) {
            xdir = !xdir;
        }
        if (y > 300 || y < 1) {
            ydir = !ydir;
        }
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    if (mode == "stop") {
    }
}

var recurse = function() {
    doStuff();
    window.requestAnimationFrame(recurse);
}
