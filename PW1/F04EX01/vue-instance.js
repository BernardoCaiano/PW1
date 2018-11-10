const vm = new Vue ({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        textColor: "black",
        backColor: "white",
        fontSize: 12,
        
    },
    
    methods: {
        
        formatTextColor: function(color) {
            this.textColor = color
        },

        formatTextSize: function(size) {
            this.fontSize = 30
        },

        formatBackColor: function(color) {
            this.backColor = color
        },

    }
})