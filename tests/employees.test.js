const Employee = require('../classes/Employee');
const Manager = require('../classes/Manager');
const Intern = require('../classes/Intern');
const Engineer = require('../classes/Engineer');


// Test case for Employee class
test('Employee getName() should return the correct name', () => {
  const employee = new Employee("John Doe", 123, "john.doe@example.com");
  expect(employee.getName()).toBe("John Doe");
});

test('Employee getId() should return the correct ID', () => {
  const employee = new Employee("John Doe", 123, "john.doe@example.com");
  expect(employee.getId()).toBe(123);
});

// Test case for Manager class
test('Manager getOfficeNumber() should return the correct office number', () => {
  const manager = new Manager("Jane Smith", 456, "jane.smith@example.com", "A123");
  expect(manager.getOfficeNumber()).toBe("A123");
});

// Test case for Intern class
test('Intern getSchool() should return the correct school', () => {
  const intern = new Intern("Alex Johnson", 789, "alex.johnson@example.com", "University X");
  expect(intern.getSchool()).toBe("University X");
});

// Test case for Engineer class
test('Engineer getGithub() should return the correct GitHub username', () => {
  const engineer = new Engineer("Michael Lee", 987, "michael.lee@example.com", "michaelgithub");
  expect(engineer.getGithub()).toBe("michaelgithub");
});
