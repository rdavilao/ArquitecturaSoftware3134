
package ec.edu.espe.examen2Avila.repository;

import java.util.List;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.Action;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.3.2.payara-p2
 * Generated source version: 2.2
 * 
 */
@WebService(name = "ProductoWS", targetNamespace = "http://ws.examen1Avila.espe.edu.ec/")
@XmlSeeAlso({
    ObjectFactory.class
})
public interface ProductoWS {


    /**
     * 
     * @return
     *     returns java.util.List<ec.edu.espe.examen2Avila.repository.Producto>
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "listarTodos", targetNamespace = "http://ws.examen1Avila.espe.edu.ec/", className = "ec.edu.espe.examen2Avila.repository.ListarTodos")
    @ResponseWrapper(localName = "listarTodosResponse", targetNamespace = "http://ws.examen1Avila.espe.edu.ec/", className = "ec.edu.espe.examen2Avila.repository.ListarTodosResponse")
    @Action(input = "http://ws.examen1Avila.espe.edu.ec/ProductoWS/listarTodosRequest", output = "http://ws.examen1Avila.espe.edu.ec/ProductoWS/listarTodosResponse")
    public List<Producto> listarTodos();

    /**
     * 
     * @param cantidadCompra
     * @param codProducto
     */
    @WebMethod
    @Oneway
    @RequestWrapper(localName = "controlCompraProducto", targetNamespace = "http://ws.examen1Avila.espe.edu.ec/", className = "ec.edu.espe.examen2Avila.repository.ControlCompraProducto")
    @Action(input = "http://ws.examen1Avila.espe.edu.ec/ProductoWS/controlCompraProducto")
    public void controlCompraProducto(
        @WebParam(name = "codProducto", targetNamespace = "")
        String codProducto,
        @WebParam(name = "cantidadCompra", targetNamespace = "")
        Integer cantidadCompra);

}
