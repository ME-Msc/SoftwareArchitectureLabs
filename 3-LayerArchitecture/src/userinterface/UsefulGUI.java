package userinterface;

import java.awt.Component;
import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import businesslayer.Person;
import businesslayer.AppData;

import javax.swing.Box;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.awt.event.ActionEvent;
import javax.swing.JTable;
import javax.swing.JScrollPane;
import javax.swing.table.DefaultTableModel;

/**
 * 
 * This application was created using swing and it is the front-end for the
 * interaction of a database which saves a Persons object information into a
 * database
 *
 */
public class UsefulGUI {

	private JFrame frame;
	private JTable table;
	private JLabel lblNewLabel;

	// ArrayList to save Persons information

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					UsefulGUI window = new UsefulGUI();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public UsefulGUI() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setBounds(100, 100, 879, 437);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(null);

		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(67, 129, 705, 229);
		frame.getContentPane().add(scrollPane);

		lblNewLabel = new JLabel("");
		lblNewLabel.setBounds(67, 91, 705, 14);
		frame.getContentPane().add(lblNewLabel);

		String[] columns = { "First Name", "Last Name", "Age", "SSN", "Credit Card" };
		DefaultTableModel tableModel = new DefaultTableModel(columns, 0);
		JTable table = new JTable(tableModel);
		scrollPane.setViewportView(table);

		JButton btnNewButton = new JButton("Enter Person Into Database");
		btnNewButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				// Creates the Dialog
				JTextField firstName = new JTextField(15);
				JTextField lastName = new JTextField(15);
				JTextField age = new JTextField(15);
				JTextField ssn = new JTextField(15);
				JTextField creditCard = new JTextField(15);
				JPanel myPanel = new JPanel();
				myPanel.add(new JLabel("First Name:"));
				myPanel.add(firstName);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("Last Name:"));
				myPanel.add(lastName);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("Age:"));
				myPanel.add(age);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("SSN:"));
				myPanel.add(ssn);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("Credit Card:"));
				myPanel.add(creditCard);
				int result = JOptionPane.showConfirmDialog(null, myPanel, "Please enter your info",
						JOptionPane.OK_CANCEL_OPTION);

				// Inserts Person into Database
				if (result == JOptionPane.OK_OPTION) {
					if (firstName.getText().trim().isEmpty() || lastName.getText().trim().isEmpty()
							|| age.getText().trim().isEmpty() || !(age.getText().matches("[0-9]+"))
							|| Integer.parseInt(age.getText()) < 0 || ssn.getText().trim().isEmpty()
							|| !(ssn.getText().matches("[0-9]+")) || ssn.getText().length() != 9
							|| creditCard.getText().trim().isEmpty() || !(creditCard.getText().matches("[0-9]+"))
							|| creditCard.getText().length() != 16) {
						lblNewLabel.setText("Your person was not entered into database due to an invalid input");
						System.out.println("Your person was not entered into database due to an invalid input");
						while (tableModel.getRowCount() > 0) {
							for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
								tableModel.removeRow(rowDeletion);
							}
						}
						scrollPane.setViewportView(table);
					} else {
						String FirstName = firstName.getText();
						String LastName = lastName.getText();
						int Age = Integer.parseInt(age.getText());
						long SSN = Long.parseLong(ssn.getText());
						long CreditCard = Long.parseLong(creditCard.getText());
						while (tableModel.getRowCount() > 0) {
							for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
								tableModel.removeRow(rowDeletion);
							}
						}

						AppData.getAppData().insertPerson(new Person(FirstName, LastName, Age, SSN, CreditCard));

						// Outputs list of users
						lblNewLabel.setText(FirstName + " " + LastName + " was entered into database");
						System.out.println(FirstName + " " + LastName + " was entered into database");
						System.out.println(AppData.findAllPeople());
						for (Object person : AppData.findAllPeople()) {

							Object[] data = { ((Person) person).getFirstName(), ((Person) person).getLastName(),
									((Person) person).getAge(), ((Person) person).getSsn(),
									((Person) person).getCreditCard() };

							tableModel.addRow(data);

						}
					}

				}
			}
		});

		btnNewButton.setBounds(33, 11, 212, 23);
		frame.getContentPane().add(btnNewButton);

		// Return a Sorted List from the Database
		JButton btnNewButton_1 = new JButton("Sort List of Persons");
		btnNewButton_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				AppData.getAppData();
				ArrayList<Person> listOfPersons = new ArrayList<Person>();
				for (int i = 0; i < AppData.findAllPeople().size(); i++) {
					listOfPersons.add((Person) AppData.findAllPeople().get(i));
				}
				AppData.findAllPeople();

				// Sorting the ArrayList by names
				Collections.sort(listOfPersons);

				while (tableModel.getRowCount() > 0) {
					for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
						tableModel.removeRow(rowDeletion);
					}
				}

				// Outputs the sorted list of users
				lblNewLabel.setText("Displaying Sorted List of Persons");
				System.out.println("Displaying Sorted List of Persons");
				System.out.println(listOfPersons);
				for (Person person : listOfPersons) {

					Object[] data = { person.getFirstName(), person.getLastName(), person.getAge(), person.getSsn(),
							person.getCreditCard() };

					tableModel.addRow(data);
				}

			}
		});
		btnNewButton_1.setBounds(394, 45, 196, 23);
		frame.getContentPane().add(btnNewButton_1);

		// Search for person inside the Database
		JButton btnNewButton_2 = new JButton("Get Person From Database");
		btnNewButton_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				JTextField firstName = new JTextField(15);
				JTextField lastName = new JTextField(15);
				JPanel myPanel = new JPanel();
				myPanel.add(new JLabel("First Name:"));
				myPanel.add(firstName);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("Last Name:"));
				myPanel.add(lastName);
				int result = JOptionPane.showConfirmDialog(null, myPanel, "Please Enter the Persons Info:",
						JOptionPane.OK_CANCEL_OPTION);

				if (result == JOptionPane.OK_OPTION) {
					String FirstName = firstName.getText();
					String LastName = lastName.getText();
					AppData.getAppData();
					Person personFound = AppData.getPerson(FirstName, LastName);
					while (tableModel.getRowCount() > 0) {
						for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
							tableModel.removeRow(rowDeletion);
						}
					}
					if (AppData.getId() == 0) {
						lblNewLabel.setText("Person was not found in the database from the Database");
						System.out.println("Person was not found in the database from the Database");
					} else {
						Object[] data = { ((Person) personFound).getFirstName(), ((Person) personFound).getLastName(),
								((Person) personFound).getAge(), ((Person) personFound).getSsn(),
								((Person) personFound).getCreditCard() };
						tableModel.addRow(data);
						lblNewLabel.setText("Retrieved " + FirstName + " " + LastName + " from Database");
						System.out.println("Retrieved " + FirstName + " " + LastName + " from Database");
						System.out.println(personFound);

					}
				}
			}
		});
		btnNewButton_2.setBounds(269, 11, 212, 23);
		frame.getContentPane().add(btnNewButton_2);

		// Retrieval Of Database Button
		JButton btnNewButton_3 = new JButton("Retrieve Database");
		btnNewButton_3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				AppData.getAppData();
				while (tableModel.getRowCount() > 0) {
					for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
						tableModel.removeRow(rowDeletion);
					}
				}
				for (Object person : AppData.findAllPeople()) {

					Object[] data = { ((Person) person).getFirstName(), ((Person) person).getLastName(),
							((Person) person).getAge(), ((Person) person).getSsn(), ((Person) person).getCreditCard() };

					tableModel.addRow(data);

				}
				lblNewLabel.setText("Retrieved All People from Database");
				System.out.println("Retrieved All People from Database");
				System.out.println(AppData.findAllPeople());
			}
		});
		btnNewButton_3.setBounds(517, 11, 212, 23);
		frame.getContentPane().add(btnNewButton_3);

		// Delete User Button
		JButton btnNewButton_4 = new JButton("Delete Person from the Database");
		btnNewButton_4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				JTextField firstName = new JTextField(15);
				JTextField lastName = new JTextField(15);
				JPanel myPanel = new JPanel();
				myPanel.add(new JLabel("First Name:"));
				myPanel.add(firstName);
				myPanel.add(Box.createHorizontalStrut(15));
				myPanel.add(new JLabel("Last Name:"));
				myPanel.add(lastName);
				int result = JOptionPane.showConfirmDialog(null, myPanel, "Please Enter the Persons Info:",
						JOptionPane.OK_CANCEL_OPTION);

				// Extracts the user information
				if (result == JOptionPane.OK_OPTION) {
					String FirstName = firstName.getText();
					String LastName = lastName.getText();
					AppData.getAppData();
					AppData.deletePerson(FirstName, LastName);
					while (tableModel.getRowCount() > 0) {
						for (int rowDeletion = 0; rowDeletion < tableModel.getRowCount(); rowDeletion++) {
							tableModel.removeRow(rowDeletion);
						}
					}
					if (AppData.getId() == 0) {
						lblNewLabel.setText("Person was not found in the database from the Database");
						System.out.println("Person was not found in the database from the Database");
					} else {
						for (Object person : AppData.findAllPeople()) {

							Object[] data = { ((Person) person).getFirstName(), ((Person) person).getLastName(),
									((Person) person).getAge(), ((Person) person).getSsn(),
									((Person) person).getCreditCard() };

							tableModel.addRow(data);
							lblNewLabel.setText(FirstName + " " + LastName + " was Deleted from the Database");
						}
						System.out.println(FirstName + " " + LastName + " was Deleted from the Database");
						System.out.println(AppData.findAllPeople());
					}
				}
			}
		});
		btnNewButton_4.setBounds(90, 45, 293, 23);
		frame.getContentPane().add(btnNewButton_4);

	}
}
