const fs = require('fs');
const xlsx = require('xlsx')
var json = [];
const args = require('minimist')(process.argv.slice(2))
let src = args['src'] || 'test.xlsx';
let dest = args['dest'] || 'result.json';
let customSheet = args['sheet'];
var workbook = xlsx.readFile(src);
if(customSheet){
    if(workbook.Sheets[customSheet]){
        let sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[customSheet]);
        json = sheetData;
    } else{
        console.log("Sheet " + customSheet + " doesn't exist.");
        return;
    }
} else {
    if(workbook.SheetNames.length > 1) {
        workbook.SheetNames.forEach((sheet) => {
            let sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
            json.push({name:sheet,data:sheetData});
        });
    } else {
        let sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        json = sheetData;
    }
}
var JSONData = JSON.stringify(json);
try{
    fs.writeFileSync(dest, JSONData, 'utf8');
      console.log("Generated " + dest + " successfully");
} catch(err) {
    console.log(err);
}