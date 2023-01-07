function saveAccount(){
    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: ""
    });
    
    con.connect(function(err) {
      if (err) throw err;
    console.log("connected");
    });
    
    var userName = document.getElementById("username-input").value;
    var psw = document.getElementById("password-input").value;
    var email = document.getElementById("email-input").value;
    
    var sql = "INSERT INTO profile (UserName, UserPassword, Email) VALUES ('"+userName+ "','"+psw+"', '"+email+"')";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result.affectedRows + " record(s) updated");
      });
    }