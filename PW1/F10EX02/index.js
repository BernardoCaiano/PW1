// Component registration
Vue.component("my-card", {
    
    props: ["", ""],
    template: `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`,
})


const vm = new Vue({
    el: "#app",
    data: {
        games: [],
        game: {
            nameStadium: "",
            date: "",
            photo: "",
            goals: {
                team: "",
                player: "",
                minute: ""
            }
        }
       
    },

    created(){
        this.games = [{
            nameStadium: "Dragão",
            
        }]

    }

})