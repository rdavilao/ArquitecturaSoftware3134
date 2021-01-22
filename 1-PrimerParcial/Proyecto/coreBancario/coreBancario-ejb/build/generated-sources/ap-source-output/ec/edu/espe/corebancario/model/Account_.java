package ec.edu.espe.corebancario.model;

import ec.edu.espe.corebancario.model.Client;
import java.math.BigDecimal;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2021-01-22T21:57:36")
@StaticMetamodel(Account.class)
public class Account_ { 

    public static volatile SingularAttribute<Account, String> number;
    public static volatile SingularAttribute<Account, Integer> codigo;
    public static volatile SingularAttribute<Account, Client> codigoClient;
    public static volatile SingularAttribute<Account, BigDecimal> currentBalance;
    public static volatile SingularAttribute<Account, String> type;
    public static volatile SingularAttribute<Account, Date> creationDate;
    public static volatile SingularAttribute<Account, String> status;

}