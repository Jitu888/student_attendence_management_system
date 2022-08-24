const StudentModel = require("../models/student_model");

exports.student_add_controller = (req, res) => {
  const profile = req.file.path
  console.log(profile)
  req.body.profile = profile
  const data = req.body
  console.log(data)
  StudentModel(data).save((err, result) => {
    if (err) {
      res.status(400).send(err)
    }
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
    const d = new Date();
    const date = d.getDate()
    switch (req.body.month) {
      case "jan":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.jan.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { jan:date+":"+Attendence}  })
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
            var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { feb:date+":"+ Attendence } })
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
            var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { feb:date+":"+Attendence } })
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
        if (data.march.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { march:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "april":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.april.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { april:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }


      case "may":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.may.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { may:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "june":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.june.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { june:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "july":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.july.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { july:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "august":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.aug.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { aug:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "sept":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.sept.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { sept:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "oct":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.oct.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { oct:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "nov":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.nov.length <= 30) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { nov:date+":"+ Attendence } })
          res.send(result)
          break;
        }
        else {
          res.send("month complete");
          break;
        }

      case "dec":
        var data = await StudentModel.findOne({ class: Class, section, rollNo })
        if (data.dec.length <= 31) {
          var result = await StudentModel.updateOne({ class: Class, section, rollNo }, { $push: { dec:date+":"+ Attendence } })
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













