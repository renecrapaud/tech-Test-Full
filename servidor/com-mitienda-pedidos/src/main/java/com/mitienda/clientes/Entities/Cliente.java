package com.mitienda.clientes.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="clientes")
public class Cliente {
    @Id
    private String id;

    private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private String correoElectronico;
    
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidoPat() {
        return apellidoPat;
    }
    public void setApellidoPat(String apellidoPat) {
        this.apellidoPat = apellidoPat;
    }
    public String getApellidoMat() {
        return apellidoMat;
    }
    public void setApellidoMat(String apellidoMat) {
        this.apellidoMat = apellidoMat;
    }
    public String getCorreoElectronico() {
        return correoElectronico;
    }
    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    
}
