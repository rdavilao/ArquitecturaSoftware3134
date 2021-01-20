
package ec.edu.espe.arquitectura.generators.client;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.logging.Logger;

/**
 *
 * @author Hendrix
 */
public class GeneratorInitializer {

    private static final Logger LOG = Logger.getLogger(GeneratorInitializer.class.getName());
    
    public static Integer maleTotal;
    public static Integer femaleTotal;
    public static Integer surnameTotal;
    
    private static final String MALE_FILE = "man.csv";
    private static final String FEMALE_FILE = "woman.csv";
    private static final String SURNAME_FILE = "surname.csv";
    
    private static List<String> maleNames;
    private static List<String> femaleNames;
    private static List<String> surnames;
    
    
    
    private GeneratorInitializer() {
    }
    
    public static void loadData() {
        try {
            Path path = Path.of(MALE_FILE);
            GeneratorInitializer.maleNames = Files.readAllLines(path);
            GeneratorInitializer.maleTotal = GeneratorInitializer.maleNames.size();
            path = Path.of(FEMALE_FILE);
            GeneratorInitializer.femaleNames = Files.readAllLines(path);
            GeneratorInitializer.femaleTotal = GeneratorInitializer.femaleNames.size();
            path = Path.of(SURNAME_FILE);
            GeneratorInitializer.surnames = Files.readAllLines(path);
            GeneratorInitializer.surnameTotal = GeneratorInitializer.surnames.size();
        } catch (IOException ex) {
            LOG.severe("Error al leer data inicial. "+ex.getMessage());
        }
    }


    public static String getMaleName(int index) {
        return maleNames.get(index-1);
    }
    
    public static String getFemaleName(int index) {
        return femaleNames.get(index-1);
    }
    
    public static String getSurname(int index) {
        return surnames.get(index-1);
    }
    
}
