/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.examen2Avila.api;

import ec.edu.espe.examen2Avila.model.Producto;
import ec.edu.espe.examen2Avila.repository.ProductoWS;
import ec.edu.espe.examen2Avila.repository.ProductoWS_Service;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.swing.text.Document;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;

/**
 * REST Web Service
 *
 * @author fanto
 */
@Path("producto")
public class ProductoResource {

    private static final Logger LOG = Logger.getLogger(ProductoResource.class.getName());

    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ProductoResource
     */
    public ProductoResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.examen2Avila.api.ProductoResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
    public List<Producto> getJson() {
        ProductoWS_Service service = new ProductoWS_Service();
        ProductoWS port = service.getProductoWSPort();
        List<ec.edu.espe.examen2Avila.repository.Producto> productos = port.listarTodos();
        List<Producto> productosModel = new ArrayList<>();
        for (ec.edu.espe.examen2Avila.repository.Producto producto : productos) {
            productosModel.add(this.buildProdcuto(producto));
        }
        return productosModel;        
    }    
    
    
    /**
     * PUT method for updating or creating an instance of ProductoResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
    public void putJson(String content) {
        ProductoWS_Service service = new ProductoWS_Service();
        ProductoWS port = service.getProductoWSPort();        
        content = content.replaceAll("\\\\{0}\"", "");
        content = content.replace("{", "");
        content = content.replace("[", "");
        content = content.replace("", "");
        String[] compra = content.split("}");
        String[] compra1 = compra[0].split(",");
        String[] compra2 = compra1[0].split(":");
        String nuevo = Integer.toString(compra2[0].length());
        LOG.info(compra2[0]);
    }
    
    private Producto buildProdcuto(ec.edu.espe.examen2Avila.repository.Producto producto){
        Producto pro = new Producto();
        pro.setExistencia(producto.getExistencia());
        pro.setNombre(producto.getNombre());
        pro.setPrecio(producto.getPrecio());
        pro.setCodigo(producto.getCodigo());       
        return pro;
    }
    
}
