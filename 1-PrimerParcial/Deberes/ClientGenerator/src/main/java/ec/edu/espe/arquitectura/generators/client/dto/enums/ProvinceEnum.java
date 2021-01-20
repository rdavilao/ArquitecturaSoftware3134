/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.arquitectura.generators.client.dto.enums;

/**
 *
 * @author Hendrix
 */
public enum ProvinceEnum {

    P01("01", "AZUAY"),
    P02("02", "BOLIVAR"),
    P03("03", "CAÑAR"),
    P04("04", "CARCHI"),
    P05("05", "CHIMBIRAZO"),
    P06("06", "COTOPAXI"),
    P07("07", "EL ORO"),
    P08("08", "P8"),
    P09("09", "GUAYAS"),
    P10("10", "P10"),
    P11("11", "P11"),
    P12("12", "P12"),
    P13("13", "MANABI"),
    P14("14", "MORONA"),
    P15("15", "P15"),
    P16("16", "P16"),
    P17("17", "PICHINCHA"),
    P18("18", "TUNGURAHUA"),
    P19("19", "P19"),
    P20("20", "P20"),
    P21("21", "P21"),
    P22("22", "P22"),
    P23("23", "P23"),
    P24("24", "SANTA ELENA");
    
    private final String code;
    private final String name;
    
    private ProvinceEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }
    
    

}
