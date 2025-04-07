const User = moongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema); 

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    tittle: String,
    description: String,
    price: 9999
});

