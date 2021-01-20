package ec.edu.espe.arquitectura.generators.client.dto;

import ec.edu.espe.arquitectura.generators.client.ConfigValidationException;
import ec.edu.espe.arquitectura.generators.client.dto.enums.ProvinceEnum;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Hendrix
 */
public class ConfigGenerator {

    private final Integer totalRecords;
    private final Integer male;
    private final Integer female;
    private List<AgeDistribution> ageDistributionList;
    private Map<String, Integer> birthPlaceMap;

    public ConfigGenerator(Integer totalRecords, Integer male, Integer female) {
        this.totalRecords = totalRecords;
        this.male = male;
        this.female = female;
        this.birthPlaceMap = new HashMap<>();
        for (ProvinceEnum province : ProvinceEnum.values()) {
            this.birthPlaceMap.put(province.getCode(), 0);
        }
    }

    public void addAgeRange(Integer min, Integer max, Integer percent) {
        this.ageDistributionList.add(new AgeDistribution(min, max, percent));
    }

    public void setPercentBirthPlace(ProvinceEnum province, Integer value) {
        this.birthPlaceMap.put(province.getCode(), value);
    }

    public void validateConfig() throws ConfigValidationException {
        if ((male + female) != 100) {
            throw new ConfigValidationException("La distribucion por genero es diferente de 100.");
        }
        int totalAgeDistribution = 0;
        for (AgeDistribution ageDistribution : this.ageDistributionList) {
            totalAgeDistribution += ageDistribution.getRecords();
        }
        if (totalAgeDistribution != this.totalRecords) {
            throw new ConfigValidationException("La suma de registros en distribucion edad es diferente al total maximo");
        }
        int totalPercentBirthPlace = 0;
        for (Integer value : this.birthPlaceMap.values()) {
            totalPercentBirthPlace += value;
        }
        if (totalPercentBirthPlace != 100) {
            throw new ConfigValidationException("La suma de registros en distribucion provincia es diferente a 100");
        }
    }

    public Integer getTotalRecords() {
        return totalRecords;
    }

    public Integer getMale() {
        return male*this.totalRecords/100;
    }

    public Integer getFemale() {
        return female*this.totalRecords/100;
    }

    public List<AgeDistribution> getAgeDistributionList() {
        return ageDistributionList;
    }

    public Map<String, Integer> getBirthPlaceMap() {
        return birthPlaceMap;
    }
    
    
}
