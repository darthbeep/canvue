buttonlist = ['', 'size', 'mine', 'dvd', 'test']
//Vue stuff

Vue.component('vbutton', {
    props: ['texts'],
    template: '<button>{{ texts }}</button>'
})

var app = new Vue({
    el: "#app",
    data: {
        canvas: '<canvas></canvas>',
        buttons: buttonlist,
        onclicks: buttonlist.map(i=>i+"()")
    }
})

//Canvas stuff
