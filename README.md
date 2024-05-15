# Add Googlesheets rows


This is a Node.js script that uses the google-spreadsheet library to add a new row to a Google Sheets spreadsheet.

First, the script imports the GoogleSpreadsheet class and the credential.json file that contains the credentials for accessing the Google Sheets API. The idSheet constant specifies the ID of the spreadsheet that the script will work with.

The addRow function is an asynchronous function that creates a new instance of the GoogleSpreadsheet class and uses the useServiceAccountAuth method to authenticate with the Google Sheets API using the credential.json file. Then, the loadInfo method is called to load the information about the spreadsheet.

After that, the sheet constant is set to the "Billing" sheet of the spreadsheet. Finally, the addRow method of the sheet object is called with an object containing the values for the new row. In this case, the values are "Edwin Lopez" for the "name" column and "edwin.lopez@zenvia.com" for the "email" column.

Note that the addRow method is also an asynchronous method, so the await keyword is used to wait for the method to complete before the script exits.

https://docs.google.com/spreadsheets/d/1B28l_JdGb-ea6F13O3v-ckV0Bam3QqVWD35EHlM8AH8/edit#gid=0


### Requirements

[Git](https://git-scm.com/)

[Node](https://node.org/en/) version: v19.3.0


### Features

[Google Spreadsheet](https://developers.google.com/sheets/api/) 

## Getting Started

> !! **To start develepment**: Consider to use [vscode](https://code.visualstudio.com/download) as editor to development.

Clone project:

```git
git clone <>
```

Istall dependencies

js
yarn;
```

Run job

```js
node index.js
```

## Points to Attention

- Create credentials in google account(https://console.cloud.google.com/apis).
    -Video of how to do the process from the beginning(https://www.youtube.com/watch?v=0bntGJ0bx9M&t=546s).
    
- Give editor access to the user linked to the google sheets api, on the file that wants to add the lines.
