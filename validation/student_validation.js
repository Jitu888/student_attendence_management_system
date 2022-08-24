const { check } = require('express-validator')
const StudentModel = require('../models/student_model')


exports.add_student_validation = () => {
  return [
    check('name').isAlpha().withMessage("name must be in char")
      .isLength({ min: 2 })
      .withMessage('name must be at least 2 chars long'),


    check('class').isNumeric({ max: 12 }).withMessage("class must be a number")
      .isLength({ max: 2 })
      .withMessage("Not a valid class"),
    check('rollNo').isNumeric().withMessage("rollNo must be a number").isLength({ max: 2 })
    .custom(async (rollNo, { req, res }) => {
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
      check('month').isLength({max:31}).withMessage('month complete')
  ]
}
