package fi.tuni.bloggingsite;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * This inteface manages Data type objects and inherits the CrudRepository
 *
 * Holds one custom extra method in addition to the existing methods.
 *
 * @author  Olli Pertovaara
 * @version 2019.05.02
 * @since   1.8
 */
public interface DataRepository extends CrudRepository<Data, Integer> {

    /**
     * Finds a Data object comparing its url ending with a title parameter.
     *
     * @param title The title of a blog post.
     * @return      An optional Data object.
     */
    Optional<Data> findDataByUrlEndingWith(String title);
}