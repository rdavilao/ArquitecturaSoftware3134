/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.services;

import ec.edu.espe.corebancario.dao.AccountFacade;
import ec.edu.espe.corebancario.dao.ClientFacade;
import ec.edu.espe.corebancario.model.Account;
import ec.edu.espe.corebancario.model.Client;
import java.util.Date;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.LocalBean;

/**
 *
 * @author Administrator
 */
@Stateless
@LocalBean
public class AccountService {
    
    @EJB
    private AccountFacade accountDao;
    
    public Account buscarPorCuenta(String numeroCuenta){
        return this.accountDao.find(numeroCuenta);
    }
}
