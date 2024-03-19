import mongoose from "mongoose";

// Define the schema for the sponsor
const sponsorSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    industry: { type: String, required: true },
    budgetRange: { type: String },
    location: { type: String },
    targetAudience: { type: String },
    marketingGoals: { type: String },
    commitmentLevelYears: { type: Number },
    preferredSport: { type: String }
});

// Create a model based on the schema
const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;
