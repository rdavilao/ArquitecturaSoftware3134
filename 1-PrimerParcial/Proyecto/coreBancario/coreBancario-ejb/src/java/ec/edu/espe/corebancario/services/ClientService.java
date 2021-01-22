/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.services;

import ec.edu.espe.corebancario.dao.ClientFacade;
import ec.edu.espe.corebancario.model.Client;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.LocalBean;

/**
 *
 * @author Administrator
 */
@Stateless
@LocalBean
public class ClientService {
    
    @EJB
    private ClientFacade clientDao;
    
    public Client buscarPorCedula(String document_identify){
        return this.clientDao.find(document_identify);
    }
    
    public List<Client> listarTodos() {
        return this.clientDao.findAll();
    }
}
