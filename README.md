# Sprint 3 Testing

## Introducción

Este proyecto está orientado a realizar pruebas automatizadas utilizando Jest, un framework de testing popular para JavaScript. En el proyecto se implementan métodos de arrays nativos como:

- **forEach**
-**map**
-**reduce**
**sort**
El propósito de este proyecto es validar que estos métodos se comportan correctamente en diversos escenarios a través de un conjunto de pruebas. Al ejecutar las pruebas, se asegura que cada uno de estos métodos funcione como se espera y responda adecuadamente a entradas y condiciones específicas.
<br>

## Tecnologias utilizadas

Este proyecto utiliza las siguientes tecnologías:

-**Jest:** Un framework de testing de JavaScript, utilizado para ejecutar las pruebas de los métodos de arrays.
-**Node.js:** Entorno de ejecución para JavaScript en el servidor, necesario para correr Jest.
-**npm:** Gestor de paquetes utilizado para instalar dependencias y ejecutar scripts de testing.

## Requerimientos


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

Y por último, abre el archivo generado test-results.html con la extensión "Live Server" de VSCode para ver los resultados de las pruebas.
<br>



## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.


