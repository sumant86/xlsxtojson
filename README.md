# XLSX TO JSON
A node based approach to transform XLSX file into JSON.

## Usage:
First of all install npm packages. 

```bash
npm install
```

### Default Usage
Below command can be use to convert `test.xlsx` file to `result.json` as output.

```bash
node xlsxtojson
```

### Additional Arguments
Optional arguments can be provided as:

```bash
node xlsxtojson --src=test2.XLSX --dest=test.json --sheet=Sheet2
```

- `--src=xlsxfilename`: Source xlsx file name, if not provided default will be `test.xlsx`.
- `--dest=jsonfilename`: destinatoin json file name, if not provided default will be `result.json`.
- `--sheet=sheetname`: name of sheet in excel file, if not provided entore excel file will be transformed to json.

