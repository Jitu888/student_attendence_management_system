const { check } = require('express-validator')
const StudentModel = require('../models/student_model')


exports.add_student_validation = () => {
  return [
    check('name').matches(/^[A-Za-z]/).withMessage("name must be in char").isLength({ min: 2 }).withMessage('name must not be empty and at least 2 chars long'),
    check('section').isAlphanumeric().withMessage('symbols are not allowed').isUppercase().withMessage("section must be in uppercase"),
    check('gender').isAlpha().withMessage("gender must be char"),
    check('dateOfBirth').isDate().withMessage("give dateOFBirth in yy/mm/dd format"),
    check('class').isAlphanumeric().matches(/^[A-Z0-9]/).isLength({ max: 3 }).withMessage("give appropriate class"),
    check('year').isNumeric().withMessage("year must be a number"),
    check('rollNo').isNumeric().withMessage("rollNo must be a number").isLength({ max: 2 }).custom(async (rollNo, { req, res }) => {
      if (req.body.class > 12) {
        throw ("provide valid class")
      }
     // console.log(req.body);
      const d = new Date();
      let year = d.getFullYear();
      if (req.body.year > year) {
        throw ("give valid year");
      };
      if (req.body.rollNo <= 0) {
        throw ("rollNO can not be Zero")
      }
      const lastyear = 1980;
      const Dob = req.body.dateOfBirth.split('/')
      //console.log(Dob[0])
      if (Dob[0] > year || Dob[0] < lastyear) {
        throw ("please provide valid birthyear")

      }

      const Class = req.body.class
      const section = req.body.section
      const result = await StudentModel.findOne({ class: Class, rollNo, section })

      if (!result) {
        req.body.userInfo = result;
      }
      else {
        throw new Error("Rollno is already occupied")
      }
      return true
    })
  ]
}










exports.student_attendence_validation = () => {

  return [
    check('Attendence')
      .isAlpha()
      .withMessage('must be alphabet either P or A'),
    check('month').isLength({ max: 31 }).withMessage('month complete')
  ]
}
