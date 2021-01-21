/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.examen1Avila.dao;

import ec.edu.espe.examen1Avila.model.ProductoKardex;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author fanto
 */
@Stateless
public class ProductoKardexFacade extends AbstractFacade<ProductoKardex> {

    public ProductoKardexFacade() {
        super(ProductoKardex.class);
    }
    
}
