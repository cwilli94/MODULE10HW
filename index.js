const readline = require('readline');
const fs = require('fs');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const teamMembers = []; // Array to store team members

// Prompt for manager information
function promptManagerInfo(callback) {
  rl.question('Enter manager name: ', (name) => {
    rl.question('Enter manager ID: ', (id) => {
      rl.question('Enter manager email: ', (email) => {
        rl.question('Enter office number: ', (officeNumber) => {
          const manager = new Manager(name, id, email, officeNumber);
          callback(manager);
        });
      });
    });
  });
}

// Prompt for engineer information
function promptEngineerInfo(callback) {
  rl.question('Enter engineer name: ', (name) => {
    rl.question('Enter engineer ID: ', (id) => {
      rl.question('Enter engineer email: ', (email) => {
        rl.question('Enter GitHub username: ', (github) => {
          const engineer = new Engineer(name, id, email, github);
          callback(engineer);
        });
      });
    });
  });
}

// Prompt for intern information
function promptInternInfo(callback) {
  rl.question('Enter intern name: ', (name) => {
    rl.question('Enter intern ID: ', (id) => {
      rl.question('Enter intern email: ', (email) => {
        rl.question('Enter intern school: ', (school) => {
          const intern = new Intern(name, id, email, school);
          callback(intern);
        });
      });
    });
  });
}

// Prompt for adding a manager, engineer, intern, or finishing
function promptNextAction() {
  rl.question('Add a Manager, Engineer, Intern, or Finish building the team? (manager/engineer/intern/finish): ', (action) => {
    if (action === 'manager') {
      promptManagerInfo((manager) => {
        teamMembers.push(manager);
        promptNextAction();
      });
    } else if (action === 'engineer') {
      promptEngineerInfo((engineer) => {
        teamMembers.push(engineer);
        promptNextAction();
      });
    } else if (action === 'intern') {
      promptInternInfo((intern) => {
        teamMembers.push(intern);
        promptNextAction();
      });
    } else if (action === 'finish') {
      generateTeamHtml();
      rl.close();
    } else {
      console.log('Invalid action. Please choose "manager", "engineer", "intern", or "finish".');
      promptNextAction();
    }
  });
}

// Generate the HTML content for the team
function generateTeamHtml() {
    let htmlContent = '';
  
    teamMembers.forEach((member) => {
      htmlContent += `
        <h2>${member.getRole()}: ${member.getName()}</h2>
        <p>ID: ${member.getId()}</p>
        <p>Email: ${member.getEmail()}</p>
      `;
  
      if (member instanceof Manager) {
        htmlContent += `<p>Office Number: ${member.getOfficeNumber()}</p>`;
      } else if (member instanceof Engineer) {
        htmlContent += `<p>GitHub: ${member.getGithub()}</p>`;
      } else if (member instanceof Intern) {
        htmlContent += `<p>School: ${member.getSchool()}</p>`;
      }
  
      htmlContent += '<hr>';
    });
  
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        const updatedHtmlContent = data.replace('</body>', `${htmlContent}\n</body>`);
  
        fs.writeFile('index.html', updatedHtmlContent, (writeErr) => {
          if (writeErr) {
            console.error('Error writing to file:', writeErr);
          } else {
            console.log('Team information appended to index.html');
          }
        });
      }
    });
  }
  
  // Prompt for adding a manager, engineer, intern, or finishing
  function promptNextAction() {
    rl.question('Add a Manager, Engineer, Intern, or Finish building the team? (manager/engineer/intern/finish): ', (action) => {
      if (action === 'manager') {
        promptManagerInfo((manager) => {
          teamMembers.push(manager);
          promptNextAction();
        });
      } else if (action === 'engineer') {
        promptEngineerInfo((engineer) => {
          teamMembers.push(engineer);
          promptNextAction();
        });
      } else if (action === 'intern') {
        promptInternInfo((intern) => {
          teamMembers.push(intern);
          promptNextAction();
        });
      } else if (action === 'finish') {
        generateTeamHtml();
        rl.close();
      } else {
        console.log('Invalid action. Please choose "manager", "engineer", "intern", or "finish".');
        promptNextAction();
      }
    });
  }
  
  // Start the prompt for adding team members
  promptManagerInfo((manager) => {
    teamMembers.push(manager);
    promptNextAction();
  });
  