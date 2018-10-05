const myVue = new Vue({
    el: '#intro',
    data: {
        firstName: 'Bernardo',
        lastName: 'Ferreira',
        age: '19'
    },
    methods: { fullName: function() {
        return `${this.firstName} ${this.lastName}`

        }
    }
})