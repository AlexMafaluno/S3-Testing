# Sprint 3 Testing

## Introducción

Este proyecto está orientado a realizar pruebas automatizadas utilizando Jest, un framework de testing popular para JavaScript. En el proyecto se implementan métodos de arrays nativos como:

- **forEach**
- **map**
- **reduce**
- **sort**

El propósito de este proyecto es validar que estos métodos se comportan correctamente en diversos escenarios a través de un conjunto de pruebas. Al ejecutar las pruebas, se asegura que cada uno de estos métodos funcione como se espera y responda adecuadamente a entradas y condiciones específicas.
<br>

## Tecnologias utilizadas

Este proyecto utiliza las siguientes tecnologías:

-**Jest:** Un framework de testing de JavaScript, utilizado para ejecutar las pruebas de los métodos de arrays.
-**Node.js:** Entorno de ejecución para JavaScript en el servidor, necesario para correr Jest.
-**npm:** Gestor de paquetes utilizado para instalar dependencias y ejecutar scripts de testing.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:
```bash

/SPRINT 3
  ├── /src
  │    ├── data.js       # Base de datos del array Movies que se precisa
  │    ├── films.js      # Implementaciones de los métodos de array (map, reduce, filter, etc.)
  │    ├── html.js       # Archivo inutilizado
  ├── /tests
  │    ├── films.spec.js    # Archivo de pruebas para los métodos de array
  ├── package.json          # Configuración de dependencias y scripts
  ├── test-results.html     # Archivo para mostrar los resultados del test
  └── README.md             # Este archivo
```

## Requerimientos


1. Clone this repo
```bash
$ git clone https://github.com/AlexMafaluno/S3-Testing.git
```

## Tests!


```shell
$ npm install
$ npm run test:watch
```

Y por último, abre el archivo generado test-results.html con la extensión "Live Server" de VSCode para ver los resultados de las pruebas.
<br>


