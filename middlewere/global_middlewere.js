//const {signupModel} = require('signupModel');
const { validationResult } = require('express-validator');
const fs = require('fs')

exports.result_validator = (req, res, next) => {
   // console.log(req)
    const result = validationResult(req);
    
    const hasErrors = !result.isEmpty();
    //console.log(hasErrors)

    //res.send(JSON.stringify(result.array()))
    //console.log(hasErrors);

   // hasErrors ? next((JSON.stringify(result.array()))): next();
     if(hasErrors){
        fs.unlink(req.file.path, (err) => {
            if (err) {multipart/form-data
              /* HANLDE ERROR */
            }
          });
          const errorList =result.array()?.map((obj)=>{
    
            return obj.msg;
        })
         
        next(JSON.stringify(errorList))
        }

        else{
            next()
        };
     
    }
    
    // fs.unlink(req.file.path, (err) => {
    //     if (err) {multipart/form-data
    //       /* HANLDE ERROR */
    //     }
    //     console.log(`successfully deleted ${req.file.path}`);
    //   });
  
    //   // return bad request
    //   res.status(400).send(errors);
    