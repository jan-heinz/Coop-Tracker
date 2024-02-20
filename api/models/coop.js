import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CoopSchema = new Schema({
    id: {type: String, unique: true, required: true},
    company: {type: String, required: true},
    job_title: {type: String, required: true},
    location: {type: String, required: true},
    date_applied: {type: String, required: true},
    app_status: {type: String, required: true} 
},
{
    collection: 'coops'
});

const db = mongoose.connection.useDb("coops_db");
const Coop = db.model("Coop", CoopSchema);

export default Coop;