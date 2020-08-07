/* 
1) From the project root folder in the command line, type npm init and write babel-project and Transpile code in a Babel project for name and description.
2) Install Babel dependencies by running npm install babel-cli -D &&&&&&& npm install babel-preset-env -D
3) Add a .babelrc file to the project folder by typing touch .babelrc in the command line.
4) pico babel.rc to open the file in the text editor. Then paste this in the file:
  {
    "presets": ["env"]
  }
5) In package.json, add a script called "build". When run, the "build" script should use Babel to transpile JavaScript code inside of the src folder and write it to a folder called lib.
   To do this: pico package.json, paste "build": "babel src -d lib", below the test script, then ^X and Y to close and save changes.
6) npm run build to transpile the code in src and write it to lib   
*/

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
let nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

module.exports = HospitalEmployee;












/* 
*/
