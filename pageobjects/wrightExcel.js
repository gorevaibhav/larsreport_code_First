const Excel = require('excel4node');

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

// Write data to the worksheet
worksheet.cell(1, 1).string('Name');
worksheet.cell(1, 2).string('Age');
worksheet.cell(2, 1).string('John');
worksheet.cell(2, 2).number(30);
worksheet.cell(3, 1).string('Alice');
worksheet.cell(3, 2).number(25);

// Save the workbook to an .xls file
workbook.write('data.xls', (err, stats) => {
  if (err) {
    console.error('Error writing .xls file:', err);
  } else {
    console.log('Data written to data.xls');
  }
});