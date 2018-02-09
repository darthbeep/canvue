//Vue stuff

Vue.component('vbutton', {
    props: ['texts'],
    template: '<button>{{ texts.text }}</button>'
})

var app = new Vue({
    el: "#app",
    data: {
        canvas: '<canvas></canvas>',
        buttons: [
            {text: "animate"},
            {text: "button"}
        ]
    }
})

//Canvas stuff
