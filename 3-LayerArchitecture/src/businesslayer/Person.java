package businesslayer;

/**
 * 
 * This Person class is used to assign, access and store the information of each
 * person in the database.
 *
 */
public class Person implements Comparable<Person> {
	private String firstName;
	private String lastName;
	private int age;
	private long ssn;
	private long creditCard;

	/**
	 * In the constructor we assign the information passed to each Person
	 * object.
	 * 
	 * @param firstName
	 *            of the Person.
	 * @param lastName
	 *            of the Person.
	 * @param age
	 *            of the Person.
	 * @param ssn
	 *            of the Person.
	 * @param creditCard
	 *            of the Person.
	 */
	public Person(String firstName, String lastName, int age, long ssn, long creditCard) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.ssn = ssn;
		this.creditCard = creditCard;
	}

	/**
	 * Getter of the first name of the Person.
	 * 
	 * @return the first name of the Person.
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Setter of the first name of the Person.
	 * 
	 * @param firstName
	 *            of the Person.
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * Getter of the last name of the Person.
	 * 
	 * @return the last name of the Person.
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Setter of the last name of the Person.
	 * 
	 * @param lastName
	 *            of the Person.
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * Getter of the age of the Person.
	 * 
	 * @return the age of the Person.
	 */
	public int getAge() {
		return age;
	}

	/**
	 * Setter of the age of the Person.
	 * 
	 * @param age
	 *            of the Person.
	 */
	public void setAge(int age) {
		this.age = age;
	}

	/**
	 * Getter of the SSN of the Person.
	 * 
	 * @return the SSN of the Person.
	 */
	public long getSsn() {
		return ssn;
	}

	/**
	 * Setter of the SSN of the Person.
	 * 
	 * @param ssn
	 *            of the Person.
	 */
	public void setSsn(long ssn) {
		this.ssn = ssn;
	}

	/**
	 * Getter of the Credit Card of the Person.
	 * 
	 * @return Credit Card of the Person.
	 */
	public long getCreditCard() {
		return creditCard;
	}

	/**
	 * Setter of the Credit Card of the Person.
	 * 
	 * @param creditCard
	 *            of the Person.
	 */
	public void setCreditCard(long creditCard) {
		this.creditCard = creditCard;
	}

	@Override
	/**
	 * The toString() method will return the Persons information in an organized
	 * way.
	 */
	public String toString() {
		return "Person: " + "First Name = '" + firstName + '\'' + ", Last Name = '" + lastName + '\'' + ", Age = " + age
				+ ", SSN = " + ssn + ", Credit Card = " + creditCard + "\n";
	}

	@Override
	/**
	 * Override of equals() method in order to determine if two persons are the
	 * same based on their name.
	 * 
	 * @return true of false boolean depending on equality
	 */
	public boolean equals(Object obj) {
		boolean result = false;

		if (!(obj instanceof Person)) {
			return result;
		}

		if (firstName.concat(lastName).equals(((Person) obj).getFirstName().concat(((Person) obj).getLastName()))) {
			result = true;
		}

		return result;
	}

	@Override
	/**
	 * Override of the compareTo() method to determine the order that each of
	 * output of the users information based by alphabetical order.
	 * 
	 * @return negative or positive number in order to arrange the order of the
	 *         information in the output or returns 0 if they have the same
	 *         name.
	 */
	public int compareTo(Person person) {

		int result = firstName.concat(lastName)
				.compareTo(person.getFirstName().concat(((Person) person).getLastName()));
		return result;
	}

}