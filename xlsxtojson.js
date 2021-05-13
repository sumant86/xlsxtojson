const fs = require('fs');
const xlsx = require('xlsx')
var json = [];
let args = process.argv.slice(2);
let src = 'test.xlsx';
let dest = 'result.json';
if(args.length > 0){
    src = args[0];
    dest = args[1];
}
var workbook = xlsx.readFile(src);
if(workbook.SheetNames.length > 1) {
    workbook.SheetNames.forEach((sheet) => {
        let sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
        json.push({name:sheet,data:sheetData});
    });
} else {
    let sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    json = sheetData;
}
var JSONData = JSON.stringify(json);
try{
    fs.writeFileSync(dest, JSONData, 'utf8');
      console.log("Generated " + dest + " successfully");
} catch(err) {
    console.log(err);
}