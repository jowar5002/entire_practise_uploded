// code working
// using npm i xlsx

var XLSX = require('xlsx')
var workbook = XLSX.readFile("testfile.xlsx");
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
console.log(xlData[0]);


// trying next set
// using npm i exceljs

// var Excel = require('exceljs');
//
// var wb = new Excel.Workbook();
// var path = require('path');
// var filePath = path.resolve(__dirname,'testfile.xlsx');
//
// wb.xlsx.readFile(filePath).then(function(){
//
//     var sh = wb.getWorksheet("firstsheet");
//
//     sh.getRow(1).getCell(2).value = 32;
//     wb.xlsx.writeFile("sample2.xlsx");
//     console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);
//
//     console.log("rowcount = " + sh.rowCount);
//     //Get all the rows data [1st and 2nd column]
//     for (i = 1; i <= sh.rowCount; i++) {
//         console.log(sh.getRow(i).getCell(1).value);
//         console.log(sh.getRow(i).getCell(2).value);
//     }
// });
