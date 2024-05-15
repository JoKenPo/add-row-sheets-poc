const { GoogleSpreadsheet } = require('google-spreadsheet');
const credential = require('./src/json/credentials.json')

const dotenv = require('dotenv');

dotenv.config();

const idSheet = process.env.GOOGLE_SHEET_ID;

addRow();

async function addRow() {
    try {
        const doc = new GoogleSpreadsheet(idSheet);
        // await doc.useServiceAccountAuth(credential);
        await doc.useServiceAccountAuth({
            private_key: process.env.GOOGLE_PRIVATE_KEY,
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        });
        await doc.loadInfo();

        // const sheet = doc.sheetsByTitle['Billing'];
        const sheet = doc.sheetsByIndex[0];

        const addEmail = await sheet.addRow({ 
            'Data da Solicitação': new Date().toLocaleString('pt-BR'),
            'Empresa/País': 'TESTE', 
            'Nome (Account)': 'Eduardo Almeida index teste', 
            AccountID: '123',
            BusinessID: '321',
            OpportunityID: '456',
            "Alteração de": "BOLETO",
            "Alteração para": "CARTÃO",
            environment: 'stage'
        });
        console.log(addEmail)
    } catch (error) {
        console.log(error)
    }
}