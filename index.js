const server = require("./server");
const PORT = process.env.PORT||5000;



server.listen(PORT, () => {
  console.log(`server is running on:${PORT}`);

})







// https://student-attendence-management.herokuapp.com/get_student_deatils