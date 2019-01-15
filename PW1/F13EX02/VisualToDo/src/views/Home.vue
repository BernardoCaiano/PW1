<template>
  <div class="container">
    <div class="jumbotron">
      <h1>ToDoList </h1>
      <form action="">
        <div class="row">
          <div class="col-4">
            <label for="inputTask">Tarefa</label>
            <input type="text" name="" class="form-control" id="inputTask" v-model="form.taskName">
          </div>
          <div class="col-4">
            <label for="inputPriority">Prioridade</label>
            <input type="number" name="" min="1" max="5" class="form-control" id="inputPriority" v-model="form.priority">
          </div>
          <div class="col-2">
            <label for="">Categoria</label><br>
            <div class="form-check form-check-inline mt-1">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="home" v-model="form.picked">
              <label class="form-check-label" for="inlineRadio1"><i class="fas fa-home"></i></label>
            </div>
            <div class="form-check form-check-inline mt-1">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="work" v-model="form.picked">
              <label class="form-check-label" for="inlineRadio2"><i class="fas fa-briefcase"></i></label>
            </div>
          </div>
        </div>
        <button type="button" @click="addTask" class="btn btn-dark mt-2">Submeter tarefa</button>
      </form><br>
      <div class="row">
        <div class="col-4">
          <label for="filterPriority">Filtro Categoria</label>
          <select class="form-control">
            <option>Default select</option>
          </select>
        </div>
        <div class="col-4">
          <br>
          <button type="button" class="btn btn-dark mt-2">Ordenar por prioridade</button>
        </div>
       </div>
       <br>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Categoria</th>
      <th scope="col">Nome tarefa</th>
      <th scope="col">Prioridade</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="task in tasks" :key="task" >
      <th>{{task.taskName}}</th>
      <td>{{task.priority}}</td>
      <td>{{task.picked}}</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
    
    
  </div>
</template>

<script>
export default {
    
  data: function() {
    return {
      tasks: [],
      form: {
        taskName: "",
        priority: "",
        picked: "",
      }
    };
  },

  methods: {

    addTask() {
      let category = ""
      if (this.form.picked == "work") {
        category = `<i class="fas fa-briefcase"></i>` 
      }
      else if (this.form.picked == "home") {
         category = `<i class="fas fa-home"></i>` 
      }

      this.tasks.push({taskName: this.form.taskName, priority: this.form.priority, category: category})
      console.log(this.tasks)
    }
  },

  created() {
   
  }
};
</script>

