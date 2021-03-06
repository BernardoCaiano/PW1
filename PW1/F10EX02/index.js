// Component registration
Vue.component("game-soccer-card", {
    props: ["game"],
    template:
    `   <div class="col-sm-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="game.stadiumLink" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{game.stadiumName}}</h5>
                <p class="card-text">
                    {{getGameResult(game)}}
                </p>                
                <p class="card-text" v-for="goal in game.goals">
                    <i class="fas fa-futbol" style = "color: green"></i> {{goal.goalMinute}}' {{goal.playerName}}
                </p>                
            </div>
        </div>
        </div>
    `,
    methods: {
        getGameResult(game) {
            let teamGoals1 = 0, teamGoals2 = 0
            
            teamGoals1 = game.goals.filter(
                goal => game.teamName1 === goal.playerTeam).length

            teamGoals2 = game.goals.filter(
                goal => game.teamName2 === goal.playerTeam).length

            return `${game.teamName1} ${teamGoals1} - ${teamGoals2} ${game.teamName2}` 
        }
    }        
})

const vm = new Vue({
    el: "#app",
    data: {
        games: [],
    },

    computed: {
        listStadiums() {
            return this.games.map(
                game => game.stadiumName
            )
        },

        listTeams() {
            let homeTeams = []
            let awayTeams = []
            homeTeams.push(this.games.map(
                game => game.teamName1
            ))

            awayTeams.push(this.games.map(
                game => game.teamName2
            ))

            

        },
        
    },

    created: function() {
        this.games = 
        [
            {
                id: 1,
                stadiumName:"Estádio da Luz",
                stadiumLink: "https://cdn.record.pt/images/2018-06/img_920x519$2018_06_26_20_17_25_1415170.jpg",
                teamName1: "SLBenfica",
                teamName2: "FCPorto",
                goals: [
                    {playerName: "Jonas", playerTeam:"SLBenfica", goalMinute: 22},
                    {playerName: "Pizzi", playerTeam:"SLBenfica", goalMinute: 90},
                   
                ]                
            },
            {
                id: 2,
                stadiumName:"Estádio de Alvalade",
                stadiumLink: "https://thumbs.web.sapo.io/?epic=ZDFj45ME0wYwbQQ4VF/uvjyAZPcVzJcmElWJkQ/iVeyXgrbAkpMr9tH32N4qwN8P9e+dTYhj460RLl/PVk6eTgB05PP7JI3VgyFB2ROABv/KfRA=&W=800&H=0&delay_optim=1",
                teamName1: "SCSporting",
                teamName2: "SCEstoril",
                goals: [
                    {playerName: "Bas Dost", playerTeam:"SCSporting", goalMinute: 93}                    
                ]                
            }

        ]
    }
})