                                                                                           const StudentModel = require("../models/student_model");


exports.student_add_controller = (req, res) => {
  let data = new StudentModel({
     name:req.body.name,
     class:req.body.class,
     rollNo:req.body.rollNo,
     section:req.body.section,
  })
  //const data = req.body
  console.log(req.body)
  //console.log(req.file.path)
  StudentModel(data).save((err, result) => {
    if (err) {
      res.status(400).send(err)
    }
    //console.log(result)
    else {
      res.status(200).send(result)
    }
  })
};


exports.student_get_controller = async (req, res) => {
  let { rollNo, section } = req.query

  let Class = req.query.class

  let page = parseInt(req.query.page)
  page = page ? page : 1

  let limit = parseInt(req.query.record)
  limit = limit ? limit : 5

  let startIndex = (page - 1) * limit
  let endIndex = limit
  //console.log(!Class)
  if (!Class || !rollNo || !section) {
    let result = await StudentModel.find({}).skip(startIndex).limit(endIndex)
    res.status(200).send({ result })
  }

  else {
    StudentModel.findOne({ class: Class, rollNo, section }, (err, result) => {
      if (err) { throw new Error("error") }

      else {
        if (!result) {
          res.status(200).send({ msg: "Detail not found" });
        }
        else {
          res.status(200).send({ result })
        }
      }
    })
  }
};







exports.update_student_attendence = async (req, res) => {
  let Class = parseInt(req.query.class)
  var { rollNo, section } = req.query
  var Attendence = req.body.Attendence
  // var data = await StudentModel.findOne({class:Class,section,rollNo})
  //console.log(data)
  if(Attendence =="P"||Attendence=="A"){
  switch (req.body.month) {
    case "jan":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { jan: Attendence } })
      res.send(result)
      break;
    case "feb":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { feb: Attendence } })
      res.send(result)
      break;
    case "march":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { march: Attendence } })
      res.send(result)
      break;
    case "april":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { april: Attendence } })
      res.send(result)
      break;
    case "may":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { may: Attendence } })
      res.send(result)
      break;
    case "june":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { june: Attendence } })
      res.send(result)
      break;
    case "july":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { july: Attendence } })
      res.send(result)
      break;
    case "august":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { aug: Attendence } })
      res.send(result)
      break;
    case "sept":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { sept: Attendence } })
      res.send(result)
      break;
    case "oct":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { oct: Attendence } })
      res.send(result)
      break;
    case "nov":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { nov: Attendence } })
      res.send(result)
      break;
    case "dec":
      var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { dec: Attendence } })
      res.send(result)
      break;
    default:
      res.send({ msg: `please provide valid month ` })
  }}
  else{
         res.send({msg:"attendence must be either P or A"})
  }
}













