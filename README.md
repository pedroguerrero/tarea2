# Tarea 1

## Descripción

Tarea 2 del modulo 2 del curso, es un sitio web para un hospital que posee las siguientes páginas, se adiciona CSS para aplicar estilos al sitio:

1. index.html - página principal del sitio en donde se encuentra la bienvenida, servicios y testimonios de pacientes
2. equipo-medico.html - página del equipo medico, posee la informacion de los médicos del hospital
3. contacto.html - página de contacto junto con la ubicación del hospital en un mapa

## Visualizar tarea

Se puede abrir el archivo **index.html** para visualizar el sitio pero lo mas recomendable es ejecutar el siguiente comando, se debe tener docker instalado

```
docker-compose up -d
```

Luego ir a la siguiente url [http://localhost:8080](http://localhost:8080) para visualizar el sitio

## Listado de archivos

```
.
├── Dockerfile
├── README.md
├── app
│   ├── contacto.html
│   ├── css
│   │   └── main.css
│   ├── equipo-medico.html
│   ├── img
│   │   ├── bg-2.jpg
│   │   ├── bg-3.jpg
│   │   ├── bg.jpg
│   │   ├── doc-1.png
│   │   ├── hospital-icon.svg
│   │   ├── patient-1.png
│   │   ├── patient-2.png
│   │   ├── patient-3.png
│   │   ├── service-1.png
│   │   ├── service-2.png
│   │   └── service-3.png
│   ├── index.html
│   └── scss
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _home.scss
│       └── main.scss
├── docker-compose.yml
├── gulpfile.js
├── package-lock.json
└── package.json
```
