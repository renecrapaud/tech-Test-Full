BackEnd del sistema de pedidos de ventas en línea.

Aplicación desplegada en render.com:

https://pedidos-en-linea-back.onrender.com/

Rutas:
    /clientes

    Tiene acceso a los datos de la colección de clientes.

    /pedidos
    Es para el manejo de los datos de la colección pedidos.

Esta parte del código fue desarrollada con Java 17 y el framework springboot 4.2.0

Esa versión está configurada para usar la base de datos de mongoDB desde MongoDB Atlas: https://cloud.mongodb.com

Para usar en local con una base de datos distinta, agregar un archivo .env en la raiz del proyecto, con el contenido siguiente: 
MONGODB_URI=<url de conexion>

reemplazando <url de conexion> por la correspondiente a la otra base de datos.

Para ejecutar el proyecto en local:

Clonar el repositorio desde git
Tener instalado Java 17 o superior y maven

Ejecutar la aplicación, en la terminal desde la raiz del proyecto con el comando:
./mvnw spring-boot:run