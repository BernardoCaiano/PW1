const vm = new Vue ({
    el: "#intro",
    data: {
        task: "",
        type: "pessoal",
        filterType: "todos",
        tasks:[]
    },
    created() {
        if (localStorage.tasks) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"))    
        }
    },
    methods: {
        addTask() {
            if (this.task === "") {
                alert("Não escreveu nenhuma tarefa")
            }
            else {
                this.tasks.push({name: this.task, type: this.type})
                localStorage.setItem("tasks",JSON.stringify(this.tasks))
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
            localStorage.setItem("tasks",JSON.stringify(this.tasks))
        }
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(
                (task) => task.type === this.filterType || this.filterType === "todos")
        }
    }
})

