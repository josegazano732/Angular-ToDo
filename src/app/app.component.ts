import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular Grupo 76';

  inputText = document.getElementById("#inputTarea");
  tareas: any[] = []; // Creamos un array de tareas para trerlod aqui.


// Creamos el metodo dentro de la clasee AppComponent.
  crearTarea(tarea: string/*parametro que se le pasa es el inputTarea.value*/, $event: any) {
    $event.preventDefault(); // Para prevenir 
    //console.log(tarea);

    //agregamos una tarea en nuestro array tareas.
    this.tareas.push({
      id: Date.now(),
      texto: tarea,
    });

    


    console.log(this.inputText);


  }

  eliminarTarea(id:number){
   // console.log(id);
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    
  }
}

//metodo para crear tareas

