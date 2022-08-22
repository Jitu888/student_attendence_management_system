const StudentModel = require("../models/student_model");

exports.student_add_controller = (req, res) => {
  console.log(req.file.filename)
  const profile = `http://localhost:5000/uploads/${req.file.filename}`
  req.body.profile = profile
  const data = req.body
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

  if (Attendence == "P" || Attendence == "A") {
    switch (req.body.month) {
      case "jan":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          const d = new Date();
          const date = d.getDate()
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { jan:Attendence}  })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }


      case "feb":
        const d = new Date();
        let year = d.getFullYear()
        var data = await StudentModel.findOne({ class: Class, section, rollNo })


        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
          if (data.feb.length <= 29) {
            var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { feb: Attendence } })
            res.send(result)
            break;
          }
          else {
            res.send("month complete");
            break;
          }
        }
        else {
          if (data.feb.length <= 28) {
            var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { feb:date && Attendence } })
            res.send(result)
            break;
          }
          else {
            res.send("month complete");
            break;
          }
        }

      case "march":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { march: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "april":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { april: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }


      case "may":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { may: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "june":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { june: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "july":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { july: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "august":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { aug: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "sept":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { sept: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "oct":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { oct: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "nov":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { nov: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "dec":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { dec: Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      default:
        res.send({ msg: `please provide valid month ` })
    }
  }
  else {
    res.send({ msg: "attendence must be either P or A" })
  }
}













