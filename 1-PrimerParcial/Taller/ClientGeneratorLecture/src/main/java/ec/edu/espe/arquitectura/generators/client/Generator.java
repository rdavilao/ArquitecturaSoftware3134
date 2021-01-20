package ec.edu.espe.arquitectura.generators.client;

import ec.edu.espe.arquitectura.generators.client.dto.ConfigGenerator;
import ec.edu.espe.arquitectura.generators.client.model.Client;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.logging.Logger;

/**
 *
 * @author Hendrix
 */
public class Generator {

    private static final Logger LOG = Logger.getLogger(Generator.class.getName());

    private final ConfigGenerator config;

    public Generator(ConfigGenerator config) {
        this.config = config;
        
    }
    
    public void generate() {
        try {
            this.config.validateConfig();
            GeneratorInitializer.loadData();
            Random cedulaRand = new Random();
            List<Client> clients = new ArrayList<>(this.config.getTotalRecords());
            
            for (int i=0; i<this.config.getFemale(); i++) {
                Client client = new Client();
                client.setGenero("F");
                String name[] = this.nameGenerator(Boolean.FALSE);
                client.setNombres(name[0]);
                client.setApellidos(name[1]);
                clients.add(client);
            }
            for (int i=0; i<this.config.getMale(); i++) {
                Client client = new Client();
                client.setGenero("M");
                String name[] = this.nameGenerator(Boolean.TRUE);
                client.setNombres(name[0]);
                client.setApellidos(name[1]);
                clients.add(client);
            }
            
            for (int i=1; i<this.config.getTotalRecords(); i++) {
                
                //client.setCedula(this.generateCedula(province, cedulaRand));
            }
        } catch (ConfigValidationException cve) {
            LOG.severe("Error en la validacion de la configuracion: " + cve.getMessage());
        }
    }
    
    private String generateCedula(String province, Random random) {
        StringBuilder sb = new StringBuilder(province);
        sb.append(random.nextInt(6));
        sb.append(random.nextInt(899999)+100000);
        sb.append(this.calcVerificationCode(sb.toString()));
        return sb.toString();
    }
    
    private int calcVerificationCode(String value) {
        //Implementar calculo
        return 0;
    }

    private String[] nameGenerator(boolean male) {
        Random random = new Random(System.currentTimeMillis());
        StringBuilder sb =new StringBuilder();
        if (male) {
            sb.append(GeneratorInitializer.getMaleName(random.nextInt(GeneratorInitializer.maleTotal)));
            sb.append(" ");
            sb.append(GeneratorInitializer.getMaleName(random.nextInt(GeneratorInitializer.maleTotal)));
        } else {
            sb.append(GeneratorInitializer.getFemaleName(random.nextInt(GeneratorInitializer.femaleTotal)));
            sb.append(" ");
            sb.append(GeneratorInitializer.getFemaleName(random.nextInt(GeneratorInitializer.femaleTotal)));
        }
        sb.append(";");
        sb.append(GeneratorInitializer.getSurname(random.nextInt(GeneratorInitializer.surnameTotal)));
        sb.append(" ");
        sb.append(GeneratorInitializer.getSurname(random.nextInt(GeneratorInitializer.surnameTotal)));
        return sb.toString().split(";");
    }

}
