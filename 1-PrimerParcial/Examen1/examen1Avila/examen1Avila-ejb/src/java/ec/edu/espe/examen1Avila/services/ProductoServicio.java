/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.examen1Avila.services;

import ec.edu.espe.examen1Avila.dao.ProductoFacade;
import ec.edu.espe.examen1Avila.dao.ProductoKardexFacade;
import ec.edu.espe.examen1Avila.model.Producto;
import ec.edu.espe.examen1Avila.model.ProductoKardex;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.LocalBean;

/**
 *
 * @author fanto
 */
@Stateless
@LocalBean
public class ProductoServicio {
       
    @EJB
    private ProductoFacade productoDao;
    @EJB
    private ProductoKardexFacade productoKardexFacade;
    
    public List<Producto> listarTodos() {
        return this.productoDao.findAll();
    }
    
    public void controlCompraProducto(String codProducto, Integer cantidadCompra) {
        Producto producto = this.productoDao.find(codProducto);
        if (producto != null){            
            if (producto.getExistencia() >= cantidadCompra){
                ProductoKardex productoKardex = new ProductoKardex();
                productoKardex.setExistencia(producto.getExistencia());
                productoKardex.setCantidad(cantidadCompra);
                productoKardex.setCodProducto(producto.getCodigo());
                productoKardex.setFecha(new Date());                
                producto.setExistencia(producto.getExistencia() - cantidadCompra);
                this.productoDao.edit(producto);
                this.productoKardexFacade.create(productoKardex);                
            }else{
                throw new RuntimeException("Insuficiente existencia del producto"+producto.getNombre());
            }
        }else{
            throw new RuntimeException("El producto ingresado no existe");
        }
    }
    
}
