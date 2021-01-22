/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.corebancario.model;

import java.io.Serializable;
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
import javax.persistence.UniqueConstraint;

/**
 *
 * @author Administrator
 */
@Entity
@Table(name = "location", catalog = "corebancario", schema = "", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"COD_LOCATION"})})
public class Location implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_LOCATION", nullable = false)
    private Integer codigo;
    
    @Column(name = "NAME", nullable = false, length = 128)
    private String name;
    
    @JoinColumn(name = "LOC_COD_LOCATION", referencedColumnName = "COD_LOCATION")
    @ManyToOne
    private Location locCodLocation;

    public Location() {
    }

    public Location(Integer codLocation) {
        this.codigo = codLocation;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location getLocCodLocation() {
        return locCodLocation;
    }

    public void setLocCodLocation(Location locCodLocation) {
        this.locCodLocation = locCodLocation;
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
        if (!(object instanceof Location)) {
            return false;
        }
        Location other = (Location) object;
        if ((this.codigo == null && other.codigo != null) || (this.codigo != null && !this.codigo.equals(other.codigo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ec.edu.espe.corebancario.model.Location[ codLocation=" + codigo + " ]";
    }
    
}
