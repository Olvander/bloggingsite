package fi.tuni.bloggingsite;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class used for allowing CORS requests.
 *
 * @author  Olli Pertovaara
 * @version 2019.05.02
 * @since   1.8
 */
public class MyConfiguration implements WebMvcConfigurer {

    /**
     * Allows cors mappings for GET, POST, PUT and DELETE from all origins.
     *
     * @param registry  The CorsRegistry object used with adding mappings.
     */
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE");

    }
}