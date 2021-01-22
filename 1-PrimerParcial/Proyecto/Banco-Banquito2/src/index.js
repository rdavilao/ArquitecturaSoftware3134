const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database/mongo')

const app = express();

app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/transaction', require('./routes/transaction.routes'));

app.use("/rc/person/searchPerson/", require('./routes/RC/searchPerson.routes'));

app.use("/contribuyente/searchContribuyente/", require('./routes/SRI/searchContribuyente.routes'));

app.use("/observado/searchObservado/", require('./routes/Observados/searchObservado.routes'));

app.use("/client/searchId/", require('./routes/searchClient.routes'));
app.use("/client/insert/", require('./routes/createClient.routes'));

app.use("/account/searchTypeAccount/", require('./routes/searchTypeAccount.routes'));
app.use("/account/searchAccount/", require('./routes/searchAccount.routes'));
app.use("/account/activateAccount/", require('./routes/activateAccount.routes'));
app.use("/account/last", require('./routes/searchLastAccount.routes'));
app.use("/account/insert", require('./routes/createAccount.routes'));

app.use("/location/loadData/", require('./routes/Location/loadData.routes'));
app.use("/location/searchLocation/", require('./routes/Location/searchLocation.routes'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log("Iniciando...");
});