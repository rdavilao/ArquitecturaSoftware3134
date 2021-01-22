/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

/**
 *
 * @author Administrator
 */
@Entity
@Table(name = "client", catalog = "corebancario", schema = "", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"DOCUMENT_IDENTIFY"})})
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;
    //@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_CLIENT", nullable = false)
    private Integer codigo;
    
    @Id
    @Column(name = "DOCUMENT_IDENTIFY", nullable = false, length = 13)
    private String documentIdentify;
    
    @Column(name = "NAME", nullable = false, length = 64)
    private String name;
    
    @Column(name = "SURNAME", nullable = false, length = 64)
    private String surname;
    
    @Column(name = "TRADE_NAME", nullable = false, length = 128)
    private String tradeName;
    
    @Column(name = "GENRE", nullable = false, length = 3)
    private String genre;
    
    @Column(name = "ADDRESS", nullable = false, length = 128)
    private String address;
    
    @Column(name = "EMAIL", nullable = false, length = 320)
    private String email;
    
    @Column(name = "PHONE", nullable = false, length = 10)
    private String phone;
    
    @Column(name = "PHONE_AUX", length = 10)
    private String phoneAux;
    
    @Column(name = "BIRTH_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthDate;
    
    @Column(name = "BALANCE_ACCOUNT", precision = 12, scale = 2)
    private BigDecimal balanceAccount;
    
    @Column(name = "BALANCE_LOAN", precision = 12, scale = 2)
    private BigDecimal balanceLoan;
    
    @JoinColumn(name = "LOCATION", referencedColumnName = "COD_LOCATION", nullable = false)
    @ManyToOne(optional = false)
    private Location codigoLocation;
    
    public Client() {
    }

    public Client(Integer codClient) {
        this.codigo = codClient;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getDocumentIdentify() {
        return documentIdentify;
    }

    public void setDocumentIdentify(String documentIdentify) {
        this.documentIdentify = documentIdentify;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
    
    

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhoneAux() {
        return phoneAux;
    }

    public void setPhoneAux(String phoneAux) {
        this.phoneAux = phoneAux;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public BigDecimal getBalanceAccount() {
        return balanceAccount;
    }

    public void setBalanceAccount(BigDecimal balanceAccount) {
        this.balanceAccount = balanceAccount;
    }

    public BigDecimal getBalanceLoan() {
        return balanceLoan;
    }

    public void setBalanceLoan(BigDecimal balanceLoan) {
        this.balanceLoan = balanceLoan;
    }

    public Location getCodigoLocation() {
        return codigoLocation;
    }

    public void setCodigoLocation(Location codigoLocation) {
        this.codigoLocation = codigoLocation;
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
        if (!(object instanceof Client)) {
            return false;
        }
        Client other = (Client) object;
        if ((this.codigo == null && other.codigo != null) || (this.codigo != null && !this.codigo.equals(other.codigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ec.edu.espe.corebancario.model.Client[ codClient=" + codigo + " ]";
    }
    
}
