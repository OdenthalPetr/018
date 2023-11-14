
function age2() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);  
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    if (age >= 18 || userinput >= 18 && userinput < 100) {
        result = "prošel jsi"
    } else {   
        result = "neprošel jsi"
    }


    return document.getElementById("result").innerHTML = result;
    }
}


 
