package businesslayer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import datalayer.DatabaseConnection;
import datalayer.DatabaseConnection;

/**
 * 
 * This class is the AppData class that interacts with the GUI and the database
 * as to present the data stored in the database to the user.
 *
 */
// This is an example of using the Singleton pattern to make the application's
// data available throughout the
// application while guaranteeing that there is only one copy of it.
public class AppData {
	private static int i = 0;

	private List<Person> people = new ArrayList<Person>();

	static int id;

	// this is the reference to the single instance of the AppData class
	private static AppData appData = null;

	// A private constructor that is only called one time
	private AppData() {

	}

	// A public method to make the app Data available throughout the
	// application.
	// The first time the method is called, the Single instance of AppData is
	// created,
	// each subsequent time, the one data object created is returned.

	public static AppData getAppData() {
		if (appData == null) {
			appData = new AppData();
		}

		return appData;

	}

	// example of a method to change the appData from throughout the project
	// there might be lots of there to add / remove data.

	/**
	 * The insertPerson method inserts a Person object into the database table.
	 * 
	 * @param person
	 *            object to be inserted
	 * @return connection to the database
	 */
	public void insertPerson(Person person) {
		Statement stmt = null;

		people.add(person); // this adds the object to the datastructures in RAM

		try {
			// Create database connection
			Connection con = DatabaseConnection.getConnection();

			// Create Statement object
			stmt = con.createStatement();

			// Create DB insert command
			String insertStatement = "INSERT INTO PERSON (FIRSTNAME,LASTNAME,AGE,SSN,CREDITCARD) " + "VALUES (" + "'"
					+ people.get(i).getFirstName() + "'," + "'" + people.get(i).getLastName() + "',"
					+ people.get(i).getAge() + "," + people.get(i).getSsn() + "," + people.get(i).getCreditCard()
					+ " );";

			// Insert the 'insertStatement' into DB
			stmt.executeUpdate(insertStatement);

			i++;
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * The selectPerson method retrieves the information of a Person object from
	 * the database table.
	 * 
	 * @param id
	 *            of the Person
	 * @return Person whose information is wanted.
	 */
	public static Person getPerson(String firstNameOfPerson, String lastNameOfPerson) {
		// Creating the variables to store the information retrieved from the
		// database.
		Statement stmt = null;
		String firstName = null;
		String lastName = null;
		int age = 0;
		long ssn = 0;
		long creditCard = 0;
		id = 0;

		try {
			// Create database connection
			Connection c = DatabaseConnection.getConnection();

			// Create Statement object
			stmt = c.createStatement();

			// SQL statements
			ResultSet rs = stmt.executeQuery("SELECT ID FROM PERSON WHERE FIRSTNAME = '" + firstNameOfPerson
					+ "' AND LASTNAME = '" + lastNameOfPerson + "';");
			while (rs.next()) {
				id = rs.getInt("id");
			}
			if (id > 0) {
				rs = stmt
						.executeQuery("SELECT FIRSTNAME, LASTNAME, AGE, SSN, CREDITCARD FROM PERSON where FIRSTNAME = '"
								+ firstNameOfPerson + "' AND LASTNAME = '" + lastNameOfPerson + "'");
				while (rs.next()) {
					firstName = rs.getString("FIRSTNAME");
					lastName = rs.getString("LASTNAME");
					age = rs.getInt("AGE");
					ssn = rs.getLong("SSN");
					creditCard = rs.getLong("CREDITCARD");
				}
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		// Return the person to the GUI
		return new Person(firstName, lastName, age, ssn, creditCard);

	}

	/**
	 * The findAllPeople method retrieves the information of all the Person
	 * objects and inserts in into an ArrayList of type Person.
	 * 
	 * @return ArrayList of type Person.
	 */
	public static ArrayList<Object> findAllPeople() {
		// Creating the variables to store the information obtained from the
		// database.
		Statement stmt = null;
		ArrayList<Object> personList = new ArrayList<>();

		try {
			// Create Database connection
			Connection c = DatabaseConnection.getConnection();

			// Create Statement object
			stmt = c.createStatement();

			// SQL statements
			ResultSet rs = stmt.executeQuery("SELECT FIRSTNAME, LASTNAME, AGE, SSN, CREDITCARD FROM PERSON;");
			while (rs.next()) {
				personList.add(new Person(rs.getString("FIRSTNAME"), rs.getString("LASTNAME"), rs.getInt("AGE"),
						rs.getLong("SSN"), rs.getLong("CREDITCARD")));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		// Return ArrayList
		return personList;

	}

	/**
	 * The deletePerson method deletes a Person's information from the database
	 * from the database.
	 * 
	 * @param firstName
	 *            of the Person to be deleted.
	 * @param lastName
	 *            of the Person to be deleted.
	 * @return Connection
	 */
	public static void deletePerson(String firstName, String lastName) {
		Statement stmt = null;

		try {
			// Create database connection
			Connection c = DatabaseConnection.getConnection();

			id = 0;

			// Create Statement Object
			stmt = c.createStatement();

			// SQL statements
			ResultSet rs = stmt.executeQuery(
					"SELECT ID FROM PERSON WHERE FIRSTNAME = '" + firstName + "' AND LASTNAME = '" + lastName + "';");
			while (rs.next()) {
				id = rs.getInt("id");
			}
			if (id > 0) {
				String sql = "Delete from PERSON where ID=" + id + ";";
				stmt.executeUpdate(sql);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	/**
	 * Getter method for id static variable
	 * 
	 * @return id of the Person in the database
	 */
	public static int getId() {
		return id;
	}
}
