const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Fullname is required"],
    minLength: [4, "Sorry this field must contain more than 4 characters"],
    trim: true,
  },
  twitterUrl: String,
  linkedinUrl: String,
  phoneNumber: {
    type: String,
    default: "070543235544",
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
