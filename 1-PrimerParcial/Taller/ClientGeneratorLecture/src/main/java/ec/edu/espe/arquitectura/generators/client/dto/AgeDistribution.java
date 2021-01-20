/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.arquitectura.generators.client.dto;

/**
 *
 * @author Hendrix
 */
public class AgeDistribution {
    
    private final Integer min;
    private final Integer max;
    private final Integer records;

    public AgeDistribution(Integer min, Integer max, Integer records) {
        this.min = min;
        this.max = max;
        this.records = records;
    }

    public Integer getMin() {
        return min;
    }

    public Integer getMax() {
        return max;
    }

    public Integer getRecords() {
        return records;
    }
    
    
    
}
