package datalayer;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * 
 * This class handles the connection to the database and creation.
 *
 */
public class DatabaseConnection {

	private static Connection conn;

	/**
	 * This method creates the database with the specifications for the Person
	 * class
	 */
	public static void createDatabase() {
		try {
			conn = DriverManager.getConnection("jdbc:sqlite:PERSONLIST.db");
			Statement stmt = conn.createStatement();
			String sql = "CREATE TABLE PERSON " + "(ID INTEGER PRIMARY KEY AUTOINCREMENT,"
					+ " FIRSTNAME STRING NOT NULL, " + " LASTNAME STRING NOT NULL, " + " AGE INTEGER NOT NULL, "
					+ " SSN LONG NOT NULL, " + " CREDITCARD LONG NOT NULL)";

			stmt.executeUpdate(sql);
			stmt.close();
			conn.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}

	}

	/**
	 * This class gets the connection to the database so that we may interact
	 * with it and orders the creation of the database if there was not a
	 * database in the first place
	 */
	public static Connection getConnection() throws SQLException {
		try {
			Class.forName("org.sqlite.JDBC");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		File file = new File("PERSONLIST.db");

		if (!file.exists()) {
			createDatabase();
		}

		if (conn == null || conn.isClosed()) {
			conn = magicallyCreateNewConnection();
		}
		return conn;
	}

	/**
	 * This class creates the connection to the database
	 * 
	 * @return connection to the database
	 */
	private static Connection magicallyCreateNewConnection() {
		Connection connection = null;

		try {
			connection = DriverManager.getConnection("jdbc:sqlite:PERSONLIST.db");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}

}
