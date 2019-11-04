const zipFolder = require("zip-a-folder");

const months = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC"
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  months[current_datetime.getMonth()] +
  "-" +
  current_datetime.getFullYear();
class ZipAFolder {
  static main() {
    console.log("Empaquetando . . .");
    console.log(formatted_date);
    zipFolder.zipFolder("./Curso", "Scorm" + formatted_date + ".zip", function(
      err
    ) {
      if (err) {
        console.log("Sorry! ", err);
      }
    });
  }
}

ZipAFolder.main();
