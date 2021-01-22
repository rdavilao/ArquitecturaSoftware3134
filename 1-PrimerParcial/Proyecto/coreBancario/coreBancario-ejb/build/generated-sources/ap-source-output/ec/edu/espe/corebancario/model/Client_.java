package ec.edu.espe.corebancario.model;

import ec.edu.espe.corebancario.model.Location;
import java.math.BigDecimal;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2021-01-22T21:57:36")
@StaticMetamodel(Client.class)
public class Client_ { 

    public static volatile SingularAttribute<Client, Integer> codigo;
    public static volatile SingularAttribute<Client, String> address;
    public static volatile SingularAttribute<Client, String> phoneAux;
    public static volatile SingularAttribute<Client, Location> codigoLocation;
    public static volatile SingularAttribute<Client, Date> birthDate;
    public static volatile SingularAttribute<Client, BigDecimal> balanceLoan;
    public static volatile SingularAttribute<Client, String> documentIdentify;
    public static volatile SingularAttribute<Client, String> tradeName;
    public static volatile SingularAttribute<Client, String> phone;
    public static volatile SingularAttribute<Client, String> surname;
    public static volatile SingularAttribute<Client, String> name;
    public static volatile SingularAttribute<Client, String> genre;
    public static volatile SingularAttribute<Client, String> email;
    public static volatile SingularAttribute<Client, BigDecimal> balanceAccount;

}