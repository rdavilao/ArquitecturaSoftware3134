const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransactionSchema = new Schema({
    sender: {type: String, requiere: true},
    receiver: {type: String, requiere: true},
    date: {type: Date, required: true },
    type: {type: String, required: true },
    description: {type: String, required: true },
    mount: {type: Number, required: true },
    balanceReceiver: {type: Number, required: true },
    typeTransaction: {type: String, required: true }
}, { collection: 'transaction' });

module.exports = mongoose.model('transaction', TransactionSchema);