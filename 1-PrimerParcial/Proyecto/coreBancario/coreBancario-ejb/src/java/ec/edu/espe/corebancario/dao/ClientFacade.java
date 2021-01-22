/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.dao;

import ec.edu.espe.corebancario.model.Client;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author Administrator
 */
@Stateless
public class ClientFacade extends AbstractFacade<Client> {

    public ClientFacade() {
        super(Client.class);
    }
    
}
