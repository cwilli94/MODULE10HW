class Engineer {
    constructor(name, id, email, gitHub) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.gitHub = gitHub;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getGithub() {
      return this.gitHub;
    }
  
    getRole() {
      return "Engineer";
    }
  }
  
  module.exports = Engineer;
  