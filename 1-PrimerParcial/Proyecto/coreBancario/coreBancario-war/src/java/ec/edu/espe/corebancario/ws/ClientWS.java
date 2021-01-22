/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.ws;

import ec.edu.espe.corebancario.model.Client;
import ec.edu.espe.corebancario.services.ClientService;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author Administrator
 */
@WebService(serviceName = "ClientWS")
public class ClientWS {

    private static final Logger LOG = Logger.getLogger(ClientWS.class.getName());
    
    @EJB
    private ClientService service;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

    @WebMethod(operationName = "buscarPorCedula")
    public Client buscarPorCedula(@WebParam(name = "cedula") String cedula) {
        LOG.info("Busqueda del cliente con cedula: " + cedula);
        return service.buscarPorCedula(cedula);
    }

    @WebMethod(operationName = "listarTodos")
    public List<Client> listarTodos() {
        LOG.info("Listado de todos los clientes");
        return service.listarTodos();
    }
    
}
