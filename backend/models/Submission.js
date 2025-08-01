const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: String,
  email: String,
  phone: String,
  affiliation: String,
  department: String,
  location: String,
  paperTitle: String,
  keywords: [String],
  abstractText: String,
  domain: String,
  filePath: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submission", submissionSchema);