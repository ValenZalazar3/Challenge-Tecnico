# Challenge Técnico 42i

_Este proyecto es una aplicación desarrollada con **Next.js** como parte de un desafío técnico. A continuación, se detallan los pasos para ejecutarlo localmente._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y cómo instalarlas._

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

### Instalación 🔧

_Sigue estos pasos para tener un entorno de desarrollo ejecutándose:_

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ValenZalazar3/Challenge-Tecnico.git

   ```

2. Navega al root del proyecto haciendo `cd "Challenge-Tecnico"`
3. Ejecutar `npm install` para instalar las dependencias
4. Ejecutar `npm run dev` para levantar el proyecto en modo desarrollo

## Ejecutando las pruebas ⚙️

_Las pruebas fueron realizadas con Jest y React Testing Library, ambos entornos para realizar testing de aplicaciones._

### Testing unitario 🔩

_Para realizar o ver las pruebas ejecutar el siguente comando:_

```
npm run test
```

## Despliegue (DOCKER LOCAL) 📦

_Para poder crear el contenedor y levantar el proyecto es necesario seguir los siguentes pasos. Abrir la aplicacion de docker y en la terminal ejecutar los siguientes comandos:_

```
git clone https://github.com/ValenZalazar3/Challenge-Tecnico.git
```

```
cd "Challenge-Tecnico"
```

```
docker build -t challenge-tecnico .
```

```
docker run -d -p 3000:3000 challenge-tecnico
```

## Despliegue (DOCKER Virtualización) 📦

_Con docker abierto, en la consola correr los siguentes comandos:_

```
docker pull valenzalazar007/challenge-tecnico:latest
```

```
docker run -p 3000:3000 valenzalazar007/challenge-tecnico:latest
```

## Construido con 🛠️

_Las herramientas utilizadas para crear este proyecto_

- [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](https://nextjs.org/)
- [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
- [![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff)](https://jestjs.io/)
- [![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](https://www.docker.com/)
- [![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](https://vercel.com/home)
