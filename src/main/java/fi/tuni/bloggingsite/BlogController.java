package fi.tuni.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;
import java.util.regex.Pattern;

/**
 * Rest Controller that holds mappings related to blog post addresses.
 *
 * @author  Olli Pertovaara
 * @version 2019.05.02
 * @since   1.8
 */
@RestController
public class BlogController {

    @Autowired
    DataRepository dataRepository;

    /**
     * Returns all the blog data saved to the H2 database.
     *
     * @return An iterable list of the data as a response entity.
     */
    @GetMapping("/blogs")
    public ResponseEntity<Iterable<Data>> getAllBlogPosts() {

        Iterable<Data> blogList;

        HttpHeaders headers = new HttpHeaders();

        blogList = dataRepository.findAll();

        headers.setAccessControlAllowOrigin("*");

        return new ResponseEntity<>(blogList, headers,
                HttpStatus.OK);
    }

    /**
     * Gets the data of one blog post if finds one. Returns a response entity
     * containing the data or returns an exception telling the page was not
     * found.
     *
     * @param blogTitle The title of the blog post in the url ending.
     * @return          A response entity containing a Data object.
     */
    @GetMapping("/blogs/{blogTitle}")
    public ResponseEntity<Data> getBlogPostData(@PathVariable("blogTitle")
                                                        String blogTitle) {

        HttpHeaders headers = new HttpHeaders();

        Optional<Data> data = dataRepository.findDataByUrlEndingWith(blogTitle);

        headers.setAccessControlAllowOrigin("*");

        if (data.isPresent()) {
            return new ResponseEntity<>(data.get(), headers, HttpStatus.OK);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "page not found");
        }
    }

    /**
     * Returns a simple success template page after a blog post has been
     * submitted. From there the user can check its content as it appears in
     * the frontend by clicking on a link.
     *
     * @param title Path title variable, not used.
     * @return      The success.html template.
     */
    @GetMapping("/blog/get/{newTitle}")
    public ModelAndView success(@PathVariable("newTitle") String
                                        title) {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("success");

        return mav;
    }

    /**
     * Redirects user to blog post after a blog post has been saved to database.
     *
     * @param title     The title of the blog post.
     * @param author    The author's name.
     * @param body      The message body of the blog post.
     * @param category  The category of the blog post.
     * @return          A redirection address to frontend.
     */
    @PostMapping("/blog/ready")
    public ModelAndView examineTheBlogPost(@RequestParam("title") String title,
                                           @RequestParam("name") String author, @RequestParam("blog-post")
                                                   String body, @RequestParam("category") String category) {

        Date date = new Date();

        SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        String currentDate = fmt.format(date);

        String originalTitle = title;

        String newTitle = "";

        String url;

        String pattern = "[a-zA-Z0-9!-]";

        String redirectAddress;

        title = title.toLowerCase();

        title = title.replaceAll("ä", "a");
        title = title.replaceAll("ö", "o");
        title = title.replaceAll("å", "a");
        title = title.replaceAll("\\s+", "-");

        for (int i = 0; i < title.length(); i++) {
            if (Pattern.matches(pattern, Character.toString(title.charAt(i)))) {
                newTitle += title.charAt(i);
            }
        }

        url = "http://localhost:8080/blogs/" + newTitle;

        Data blogData = new Data(originalTitle, currentDate, author, body,
                category, url);

        dataRepository.save(blogData);

        redirectAddress = "redirect:/blog/get/" + newTitle;

        return new ModelAndView(redirectAddress);

    }
}