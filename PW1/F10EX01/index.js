// Component registration
Vue.component("show-page", {
    
    props: ["text", "link"],
    template: `<a class="btn btn-danger btn-lg" :href="link" target = "_blank" role="button">{{text}}</a>`
})


const vm = new Vue({
    el: "#app"
})