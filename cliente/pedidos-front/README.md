Front end del sistema de pedidos de ventas en línea.

Aplicación desplegada en render.com:

https://pedidos-en-linea-frontend.onrender.com/

FrontEnd desarrolado con: 
# React + Vite

Para desplegar en ambiente local:

Se necesita tener instalado pnpm
En la carpeta raíz ejecutar los comandos:
pnpm install
pnpm run dev

La página está configurada para consultar las datos mediante la API de pedidos que está desplegada en render:
https://pedidos-en-linea-back.onrender.com/pedidos

Esa versión está configurada para usar la base de datos de mongoDB desde MongoDB Atlas: https://cloud.mongodb.com

Se puede cambiar la base de datos modificando el archivo en /public/config.json
Modificando el valor en pedidosApiUrl.
