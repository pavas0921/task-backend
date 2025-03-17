# 📦 Task Project

Este proyecto implementa una arquitectura de microservicios con los siguientes módulos:

- **auth-service**: Servicio de autenticación.
- **task-service**: Servicio de gestión de tareas.

## 📁 Estructura del proyecto

```
📦 task-project
├── 📂 auth-service
│    ├── 📂 src
│    └── package.json
├── 📂 task-service
│    ├── 📂 src
│    └── package.json
├── package.json
```

## 🚀 Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Git](https://git-scm.com/)

## 📥 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/pavas0921/task-backend.git
cd task-project
```

2. Instalar dependencias en la raíz del proyecto:

```bash
npm install
```

Esto instalará las dependencias de **PM2** y otras necesarias.

3. Instalar dependencias para cada microservicio:

```bash
# Autenticación
cd auth-service
npm install

# Gestión de tareas
cd ../task-service
npm install
```

## ▶️ Ejecutar los microservicios

Desde la raíz del proyecto, utiliza **PM2** para iniciar ambos microservicios:

```bash
pm2 start task-service/src/server.js --name task-service
```



## 📊 Monitorear los microservicios con PM2

Puedes verificar el estado de los microservicios con:

```bash
pm2 list
```

Para detener un servicio:

```bash
pm2 stop auth-service
pm2 stop task-service
```


## 📄 Notas adicionales

No se implementaron variables de entorno en este caso para garantizar que la aplicación corra sin fallos de una forma fácil.

¡Listo! Ahora puedes ejecutar el proyecto en tu entorno local. 🚀

