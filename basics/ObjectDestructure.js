const course = {
    courseId : 1,
    courseName: "JavaScript",
    courseInstructor : "Hitesh Choudhary"
}


//This is how Object Destructuring done. Main Reason is nothing but Code Cleaning(to write clean code)..
const {courseInstructor} = course;
console.log(courseInstructor);



//this is the second way where we can name it.

const {courseInstructor: instructor} = course;
console.log(instructor);