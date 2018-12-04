var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'workbench',
  password: 'root',
  database: 'vwcs',
});

con.connect(function(err) {
  if (err) throw err;
});

var express = require('express');
var router = express.Router();

/* GET date listing. */
router.get('/', function(req, res, next) {
  const query = `
    SELECT
    DATE_FORMAT(Course_Start_Date,'%d-%m-%y') as course_start_date,
    DATE_FORMAT(Course_End_Date,'%d-%m-%y') as course_end_date,Location
FROM course_seven where Course_Start_Date > sysdate() and Course_Start_Date < DATE_ADD(sysdate(), INTERVAL 60 DAY);
    `;
  con.query(query, function(err, result, fields) {
    res.json({
      result,
      err,
    });
  });
});

module.exports = router;
