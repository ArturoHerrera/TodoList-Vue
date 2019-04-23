const app = new Vue({
  el: "#app",
  data: {
    titulo: "Tareas con Vue.js",
    tareas: [],
    nuevaTarea: ""
  },
  methods: {
    agregarTarea: function() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      this.nuevaTarea = "";
      localStorage.setItem("tarea-vue", JSON.stringify(this.tareas));
    },
    editarTarea: function(index) {
      this.tareas[index].estado = !this.tareas[index].estado;
      localStorage.setItem("tarea-vue", JSON.stringify(this.tareas));
    },
    eliminarTarea: function(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("tarea-vue", JSON.stringify(this.tareas));
    }
  },
  created() {
    let datosDB = JSON.parse(localStorage.getItem("tarea-vue"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
});
