
package ec.edu.espe.examen2Avila.repository;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para controlCompraProducto complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="controlCompraProducto"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="codProducto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="cantidadCompra" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "controlCompraProducto", propOrder = {
    "codProducto",
    "cantidadCompra"
})
public class ControlCompraProducto {

    protected String codProducto;
    protected Integer cantidadCompra;

    /**
     * Obtiene el valor de la propiedad codProducto.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodProducto() {
        return codProducto;
    }

    /**
     * Define el valor de la propiedad codProducto.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodProducto(String value) {
        this.codProducto = value;
    }

    /**
     * Obtiene el valor de la propiedad cantidadCompra.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getCantidadCompra() {
        return cantidadCompra;
    }

    /**
     * Define el valor de la propiedad cantidadCompra.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setCantidadCompra(Integer value) {
        this.cantidadCompra = value;
    }

}
