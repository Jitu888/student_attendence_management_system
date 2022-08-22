const Router = require('express').Router();
const { student_add_controller, student_get_controller, update_student_attendence } = require('../Controller/student_controller');
const { result_validator } = require('../middlewere/global_middlewere');
const { add_student_validation ,student_attendence_validation } = require('../validation/student_validation');
const upload = require('../multer/multer');

(() => {
    post_requests();
    patch_request();
    get_requests();

})();

function post_requests() {
    Router.post('/add_student_detail',upload.single("profile"),add_student_validation(),result_validator, student_add_controller);
}

function patch_request() {
    Router.patch('/fill_attendence',student_attendence_validation(),result_validator,update_student_attendence)
}


function get_requests() {
    Router.get('/get_student_deatils', student_get_controller)
}


module.exports = Router;