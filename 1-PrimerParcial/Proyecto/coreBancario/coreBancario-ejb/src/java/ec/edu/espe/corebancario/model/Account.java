/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

/**
 *
 * @author Administrator
 */
@Entity
@Table(name = "account", catalog = "corebancario", schema = "", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"NUMBER"})})
public class Account implements Serializable {

    private static final long serialVersionUID = 1L;
    //@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_ACCOUNT", nullable = false)
    private Integer codigo;
    
    @Column(name = "TYPE", nullable = false, length = 32)
    private String type;
    
    @Column(name = "STATUS", nullable = false, length = 1)
    private String status;
    
    @Id
    @Column(name = "NUMBER", nullable = false, length = 12)
    private String number;
    
    @Column(name = "CREATION_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;
    
    @Column(name = "CURRENT_BALANCE", nullable = false, precision = 14, scale = 2)
    private BigDecimal currentBalance;
    
    @JoinColumn(name = "CLIENT", referencedColumnName = "COD_CLIENT", nullable = false)
    @ManyToOne(optional = false)
    private Client codigoClient;

    public Account() {
    }

    public Account(Integer iDAccount) {
        this.codigo = iDAccount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public BigDecimal getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(BigDecimal currentBalance) {
        this.currentBalance = currentBalance;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Client getCodigoClient() {
        return codigoClient;
    }

    public void setCodigoClient(Client codigoClient) {
        this.codigoClient = codigoClient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codigo != null ? codigo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Account)) {
            return false;
        }
        Account other = (Account) object;
        if ((this.codigo == null && other.codigo != null) || (this.codigo != null && !this.codigo.equals(other.codigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ec.edu.espe.corebancario.model.Account[ iDAccount=" + codigo + " ]";
    }
    
}
