
package ec.edu.espe.examen2Avila.repository;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the ec.edu.espe.examen2Avila.repository package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ControlCompraProducto_QNAME = new QName("http://ws.examen1Avila.espe.edu.ec/", "controlCompraProducto");
    private final static QName _ListarTodos_QNAME = new QName("http://ws.examen1Avila.espe.edu.ec/", "listarTodos");
    private final static QName _ListarTodosResponse_QNAME = new QName("http://ws.examen1Avila.espe.edu.ec/", "listarTodosResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: ec.edu.espe.examen2Avila.repository
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ControlCompraProducto }
     * 
     */
    public ControlCompraProducto createControlCompraProducto() {
        return new ControlCompraProducto();
    }

    /**
     * Create an instance of {@link ListarTodos }
     * 
     */
    public ListarTodos createListarTodos() {
        return new ListarTodos();
    }

    /**
     * Create an instance of {@link ListarTodosResponse }
     * 
     */
    public ListarTodosResponse createListarTodosResponse() {
        return new ListarTodosResponse();
    }

    /**
     * Create an instance of {@link Producto }
     * 
     */
    public Producto createProducto() {
        return new Producto();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ControlCompraProducto }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ControlCompraProducto }{@code >}
     */
    @XmlElementDecl(namespace = "http://ws.examen1Avila.espe.edu.ec/", name = "controlCompraProducto")
    public JAXBElement<ControlCompraProducto> createControlCompraProducto(ControlCompraProducto value) {
        return new JAXBElement<ControlCompraProducto>(_ControlCompraProducto_QNAME, ControlCompraProducto.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListarTodos }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ListarTodos }{@code >}
     */
    @XmlElementDecl(namespace = "http://ws.examen1Avila.espe.edu.ec/", name = "listarTodos")
    public JAXBElement<ListarTodos> createListarTodos(ListarTodos value) {
        return new JAXBElement<ListarTodos>(_ListarTodos_QNAME, ListarTodos.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ListarTodosResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link ListarTodosResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://ws.examen1Avila.espe.edu.ec/", name = "listarTodosResponse")
    public JAXBElement<ListarTodosResponse> createListarTodosResponse(ListarTodosResponse value) {
        return new JAXBElement<ListarTodosResponse>(_ListarTodosResponse_QNAME, ListarTodosResponse.class, null, value);
    }

}
