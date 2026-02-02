import mongoose from "mongoose";
import bcrypt from "bcrypt";

const instructorSchema = new mongoose.Schema ({
    name : {type: String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type: String, required : true},
    typeOfSport : {type : String}   ,
    location : {type : String, },
    resort : {type : String, },
    experience : {type : String, },
    pricePerHour : {type : Number, },
    isAvailable : {type : Boolean, },
    role : {type : String, default : 'instructor'}
}, {timestamps : true});

instructorSchema.pre("save", async function () {
    if(!this.isModified('password')) return ;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

instructorSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Instructor = mongoose.model('Instructor', instructorSchema);

export default Instructor;