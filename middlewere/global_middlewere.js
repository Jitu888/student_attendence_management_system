//const {signupModel} = require('signupModel');
const { validationResult } = require('express-validator');

exports.result_validator = (req, res, next) => {
   // console.log(req)
    const result = validationResult(req);
    
    const hasErrors = !result.isEmpty();
    //console.log(hasErrors)

    //res.send(JSON.stringify(result.array()))
    //console.log(hasErrors);

   // hasErrors ? next((JSON.stringify(result.array()))): next();
     if(hasErrors){
        const errorList =result.array()?.map((obj)=>{
    
            return obj.msg;
        })
         
        next(JSON.stringify(errorList))
        }

        else{
            next()
        };
     
    }
    
      