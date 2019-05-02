package fi.tuni.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Class Application used for command line runs and initialization of backend.
 *
 * @author 	Olli Pertovaara
 * @version	2019.05.02
 * @since	1.8
 */
@SpringBootApplication
public class Application implements CommandLineRunner {

	/**
	 * The injected DataRepository interface
	 */
	@Autowired
	DataRepository dataRepository;

	/**
	 * Prints cURL instructions to console and initializes the H2 database.
	 *
	 * Prints cURL instructions to console and initializes the H2 database by
	 * saving 5 blog posts there at every start-up of the backend
	 * .
	 * @param args	Command-line arguments. Not used.
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		String curlInstructions = "cURL commands for REST testing:\n\n" +
				"To get all blogs and their contents and metadata, type:\n" +
				"curl -v http://localhost:8080/blogs\n\n" +
				"To get data from a certain blog type in or copy and paste " +
				"the url of that post like for example this:\n" +
				"curl -v http://localhost:8080/blogs/what-is-metadata\n";

		System.out.println(curlInstructions);

		String body1 = "The proper management of documents is something that " +
				"helps practically everyone who has a significant number of " +
				"documents on their computers, on cloud services or other " +
				"similar places. This applies to company environments as " +
				"wellas other environments.";

		String body2 = "Metadata is something that helps categorize data " +
				"better. Some examples of metadata could be an id, a title, " +
				"a category, a publishing date, an author. But the data " +
				"itself, such as this text, is not metadata.";

		String body3 = "With the help of metadata, documents can be easily " +
				"classified and described. Good descriptions make finding " +
				"documents easier – now as well as in the future. " +
				"(Source: Anttila Juha. Dokumenttien hallinta. " +
				"http://www.iitc.fi/fi/page/221 ) " +
				"However, unnecessarily large amounts of metadata should " +
				"probably be avoided as they can make managing documents " +
				"actually more difficult.";

		String body4 = "What version control is about, is managing changes " +
				"made to documents and making it possible to restore " +
				"previous document versions. (Source: Kaario, Kimmo. & " +
				"Peltola, Tuomo. 2008. Tiedonhallinta. Avain tietotyön " +
				"tuottavuuteen. 1. edition. Jyväskylä: Docendo.) " +
				"This possibility to restore previous versions is " +
				"essential especially in companies, just in case " +
				"something goes wrong or something gets accidentally " +
				"deleted.";

		String body5 = "Version control includes two levels: main " +
				"versions and subversions. At its simplest form, version " +
				"control functionality makes sure that the latest document " +
				"versions of documents are always at hand. (Source: " +
				"Kaario, Kimmo. & Peltola, Tuomo. 2008. Tiedonhallinta. " +
				"Avain tietotyön tuottavuuteen. 1. painos. Jyväskylä: " +
				"Docendo.)";

		String url1 = "http://localhost:8080/blogs/the-benefits-of-document-" +
				"management";

		String url2 = "http://localhost:8080/blogs/what-is-metadata";

		String url3 = "http://localhost:8080/blogs/metadata-help-with-" +
				"finding-documents";

		String url4 = "http://localhost:8080/blogs/what-version-control-in-" +
				"document-management-is-about";

		String url5 = "http://localhost:8080/blogs/basic-characteristics-of-" +
				"version-control";

		dataRepository.save(new Data("The Benefits of Document Management",
				"2019-04-28 13:34","Person 1", body1,
				"Document Management", url1));

		dataRepository.save(new Data("What Is Metadata?",
				"2019-04-28 14:15", "Person 2",
				body2, "Metadata", url2));

		dataRepository.save(new Data("Metadata Help With Finding Documents",
				"2019-04-28 14:20",	 "Person 3", body3, "Metadata", url3));

		dataRepository.save(new Data("What Version Control in Document " +
				"Management Is About",
				"2019-04-28 17:30","Person 4", body4,
				"Version Control", url4));

		dataRepository.save(new Data("Basic Characteristics of Version Control",
				"2019-04-28 17:40","Person 5", body5,
				"Version Control", url5));
	}
}