/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.ws;

import ec.edu.espe.corebancario.model.Account;
import ec.edu.espe.corebancario.services.AccountService;
import javax.ejb.EJB;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author Administrator
 */
@WebService(serviceName = "AccountWS")
public class AccountWS {

    @EJB
    private AccountService service;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

    @WebMethod(operationName = "buscarPorCuenta")
    public Account buscarPorCuenta(@WebParam(name = "numeroCuenta") String numeroCuenta) {
        return service.buscarPorCuenta(numeroCuenta);
    }
    
}
