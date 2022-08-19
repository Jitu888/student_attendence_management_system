const mongoose = require('mongoose')

const model = mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      class: {
            type: Number,
            //required: true
      },
      section: {
            type: String,
            max: 2,
            uppercase: true,
            //required: true
      },
      rollNo: {
            type: Number,
            max: 100,
            required: true
      },
      profile: {
            type: String
      },
      year: {
            type: Number,
            required: true
      },
      jan: {
            type: Array
      },
      feb: {
            type: Array
      },
      march: { type: Array },
      april: { type: Array },
      may: { type: Array },
      june: { type: Array },
      july: { type: Array },
      aug: { type: Array },
      sept: { type: Array },
      oct: { type: Array },
      nov: { type: Array },
      dec: { type: Array },
});


const StudentModel = mongoose.model("student", model)
module.exports = StudentModel;