/*
Imagina que estás armando un sistema y las tareas tienen dependencias así:

Tareas:
- A: Instalar sistema operativo
- B: Instalar Node.js
- C: Instalar base de datos
- D: Configurar servidor
- E: Desplegar aplicación

Y las dependencias entre ellas son:

    A → B → D → E
    A → C → D

Es decir:

    No puedes hacer B sin antes hacer A

    No puedes hacer C sin antes hacer A

    No puedes hacer D sin B y C

    No puedes hacer E sin D
*/

// Representación como grafo:
// Las tareas son los nodos y las dependencias estan dentro los arcos o dentro del array
const tareas = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D'],
  D: ['E'],
  E: []
};

// Función para realizar el orden topológico
// Recibe un grafo representado como un objeto donde las claves son los nodos y los valores son arrays de nodos dependientes
// Devuelve un array con el orden topológico de las tareas
function topologicalSort(graph) {
    const visited = new Set();
    const result = [];
  
    function visit(node) {
      if (visited.has(node)) return;
      visited.add(node);
  
      for (const neighbor of graph[node]) {
        visit(neighbor);
      }
  
      result.push(node); // lo agregas después de visitar sus dependencias
    }
  
    for (const node in graph) {
      visit(node);
    }
  
    return result.reverse(); // invertir para obtener el orden correcto
  }

  console.log(topologicalSort(tareas)); // ["A", "C", "B", "D", "E"]

/*
Esto significa:

Instalas el sistema operativo (A)

Luego la base de datos (C)

Luego Node.js (B)

Luego configuras el servidor (D)

Finalmente despliegas la app (E)
*/