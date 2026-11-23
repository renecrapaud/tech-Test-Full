FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/com-mitienda-api-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-XX:+UseSerialGC", "-Xmx350m", "-jar", "app.jar"]