package ec.edu.espe.examen1Avila.ws;

import ec.edu.espe.examen1Avila.model.Producto;
import ec.edu.espe.examen1Avila.services.ProductoServicio;
import java.util.List;
import javax.ejb.EJB;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author fanto
 */
@WebService(serviceName = "ProductoWS")
public class ProductoWS {

    @EJB
    private ProductoServicio servicio;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

    @WebMethod(operationName = "listarTodos")
    public List<Producto> listarTodos() {
        return servicio.listarTodos();
    }

    @WebMethod(operationName = "controlCompraProducto")
    @Oneway
    public void controlCompraProducto(@WebParam(name = "codProducto") String codProducto, @WebParam(name = "cantidadCompra") Integer cantidadCompra) {
        servicio.controlCompraProducto(codProducto, cantidadCompra);
    }    
}
