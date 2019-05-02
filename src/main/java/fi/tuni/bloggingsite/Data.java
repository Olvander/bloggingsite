package fi.tuni.bloggingsite;

import javax.persistence.*;

/**
 * Data class holding data about blog posts.
 *
 * @author  Olli Pertovaara
 * @version 2019.05.02
 * @since   1.8
 */
@Entity
public class Data {

    /**
     * Auto-incremented integer type id key of the DATA-table
     */
    @Id
    @GeneratedValue
    private int id;

    /**
     * The String type title attribute for a blog post
     */
    private String title;

    /**
     * The String type date attribute for a blog post
     */
    private String date;

    /**
     * The String type author attribute for a blog post
     */
    private String author;

    /**
     * The String type body attribute for a blog post (max length of 5000 chars)
     */
    @Lob
    @Column(length = 5000)
    private String body;

    /**
     * The String type category attribute for a blog post
     */
    private String category;

    /**
     * The String type url attribute for a blog post
     */
    private String url;

    /**
     * Default constructor.
     */
    public Data() {

    }

    /**
     * Parameterized constructor for Data class. Initializes attributes.
     *
     * @param title     The title of a blog post.
     * @param date      The date of a blog post.
     * @param author    The author of a blog post.
     * @param body      The message body of a blog post.
     * @param category  The category of a blog post.
     * @param url       The url address of a blog post.
     */
    public Data(String title, String date, String author, String body,
                String category, String url) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.body = body;
        this.category = category;
        this.url = url;
    }

    /**
     * Getter for title attribute.
     *
     * @return  The attribute title.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets the parameter title as the title attribute.
     *
     * @param title The title of the blog post.
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Getter for date attribute.
     *
     * @return  The attribute date.
     */
    public String getDate() {
        return date;
    }

    /**
     * Sets the parameter date as the date attribute.
     *
     * @param date  The date of the blog post.
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * Getter for the author attribute.
     *
     * @return  The attribute author.
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Sets the parameter author as the author attribute.
     *
     * @param author  The author of the blog post.
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Getter for the body attribute.
     *
     * @return  The attribute body.
     */
    public String getBody() {
        return body;
    }

    /**
     * Sets the parameter body as the body attribute.
     *
     * @param body  The body of the blog post.
     */
    public void setBody(String body) {
        this.body = body;
    }

    /**
     * Getter for the category attribute.
     *
     * @return  The attribute category.
     */
    public String getCategory() {
        return category;
    }

    /**
     * Sets the parameter category as the category attribute.
     *
     * @param category  The cateogry of the blog post.
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * Getter for the url attribute.
     *
     * @return  The attribute url.
     */
    public String getUrl() {
        return url;
    }

    /**
     * Sets the parameter url as the url attribute.
     *
     * @param url   The url address of the blog post.
     */
    public void setUrl(String url) {
        this.url = url;
    }
}