const MY_VALUES =
        {

        "STUDENT":"student.html",
        "ADMIN":"admin_page.html",
        "HOD":"hod.html",
        "TEACHER":"teacher_page.html",
        "SESSION":"status",
        "STORED_PASSWORD":"pass1",
        "LOGGEDIN":"in",
        "LOGGEDOUT":"out",
        "LOGGEDINHOD":"inHOD",
        "LOGGEDINSTUDENT":"inSTUD"
        }  ; 
  (function($, window, document,MY_VALUES) {
       

   $(function() {
     rememberlast();
     $("form").submit(function(){
    return validate();


   })
   });
    
      SessionState();

  }(window.jQuery, window, document,MY_VALUES));



//function to display pop ups
function pop(a, b){

  var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');

document.getElementById(a).disabled=true;
popup.innerHTML=b;
var millisecondsToWait = 3000;
setTimeout(function() {
    popup.classList.toggle('show');
document.getElementById(a).disabled=false;
}, millisecondsToWait);
}

// Remember the stored username and password
function rememberlast()
{

      
 document.getElementById('rem').checked = true;

 if (typeof(Storage) !== "undefined") 
 {
   document.getElementById("uid").value= localStorage.getItem("id1");
   document.getElementById("pass").value = localStorage.getItem(MY_VALUES.STORED_PASSWORD);   
 } else 

 {
   pop("login","Local Storage not compatible");
 }
}

// Maintains session states for Teacher , Login , Admin , HOD.
function SessionState()
{
 if(localStorage.getItem(MY_VALUES.SESSION)==MY_VALUES.LOGGEDIN) 
 {
    if(localStorage.getItem("idname")=="admin") {
      window.location.href = MY_VALUES.ADMIN;
      return false;
    }
    else {
      window.location.href = MY_VALUES.TEACHER;
      return false;
    }
  }
  else if (localStorage.getItem(MY_VALUES.SESSION)==MY_VALUES.LOGGEDINHOD) {
     window.location.href =MY_VALUES.HOD;
      return false;
  }
  else if (localStorage.getItem(MY_VALUES.SESSION)==MY_VALUES.LOGGEDINSTUDENT) {
     window.location.href = MY_VALUES.STUDENT;
      return false;
  }
}
  
// Searches for Login match within Local Storage
function Login_parseStorage(a1,a2,a3,b1,b2,b3,b4)
{
 var sitePersonel = [];
 var allotment = []
 console.log(sitePersonel);
 var a=document.forms["myform"]["userid"].value;
sitePersonel = JSON.parse(localStorage.getItem(a1));

 if(sitePersonel==null)
 {
   sitePersonel = [];
 }
 var y = document.forms["myform"]["password"].value;

 for(var i = 0; i < sitePersonel.length; i++) {
    var opt = sitePersonel[i][a2];
    var opt1 =  sitePersonel[i][a3];
     if(a==opt && y==opt1)
      {
       
        if(document.getElementById("rem").checked == true)
           {
             var w = sitePersonel[i][b1];

             if(b1==="myteacher")
              w = "Teacher Name:"+sitePersonel[i][b4]+" Username:"+sitePersonel[i][b3];
           

              localStorage.setItem("id2",w);
              localStorage.setItem(MY_VALUES.STORED_PASSWORD, y);
              localStorage.setItem(MY_VALUES.SESSION, b2);
              localStorage.setItem("id1",sitePersonel[i][b3]);
              localStorage.setItem("idname",sitePersonel[i][b4]);
            }
           else
            {
              localStorage.setItem(MY_VALUES.STORED_PASSWORD, "");
              localStorage.setItem("id1",sitePersonel[i][b3]);
              localStorage.setItem("idname",sitePersonel[i][b4]);
              localStorage.setItem(MY_VALUES.SESSION, b2);
              localStorage.setItem("id2",w);
            }
          window.location.href = c1;
          return true;
      }

    else{
      localStorage.setItem(MY_VALUES.SESSION, MY_VALUES.LOGGEDOUT);
    }
}

return false;

}

//STUDENT LOGIN
  function StudentLogin()
  {
   if(Login_parseStorage("Students","student_uname","student_pass","student_department","inSTUD","student_uname","student_name"))
     return true;
   else
     return false;
  }


// HOD LOGIN
function HODLogin(){
  if(Login_parseStorage("HODAllocation","Department","pass","Department","inHOD","Department","Teacher"))
     return true;
  else
     return false;
}

//HOD LOGIN
function teacherLogin(){
  if(Login_parseStorage("teacher","teacher_uname","teacher_pass","myteacher","in","teacher_uname","teacher"))
     return true;
  else
     return false;
}


//ADMIN LOGIN
function adminLogin(){

var a=document.forms["myform"]["userid"].value;
var obj = JSON.parse('{ "user":"admin", "password":"cronj123@"}');
var y = document.forms["myform"]["password"].value;


if(a == obj.user && y== obj.password)
{
  if(document.getElementById("rem").checked == true)
      {
      localStorage.setItem(MY_VALUES.STORED_PASSWORD, y);
      localStorage.setItem("idname","admin");
      localStorage.setItem(MY_VALUES.SESSION, MY_VALUES.LOGGEDIN);
      localStorage.setItem("id1", document.forms["myform"]["userid"].value);
      window.location.href = MY_VALUES.ADMIN;
      return true;
      }
  else{

      localStorage.setItem(MY_VALUES.STORED_PASSWORD, "");
      localStorage.setItem("idname","admin");
      localStorage.setItem(MY_VALUES.SESSION, MY_VALUES.LOGGEDIN);
      window.location.href = MY_VALUES.ADMIN;
      return true;
      }

  }
  else{
      localStorage.setItem(MY_VALUES.SESSION, MY_VALUES.LOGGEDOUT);
         pop("login","Details are incorrect. Try Again.");
      return false;
      }  
pop("login","Failed");
return false;
}

function validate()
 {
    if(StudentLogin())
     {
      window.location.href = MY_VALUES.STUDENT;
      return false;
     }
    if(HODLogin())
     {
       window.location.href = MY_VALUES.HOD;
       return false;
     }
    if(teacherLogin())
    {
       window.location.href = MY_VALUES.TEACHER;
       return false;
    }
    if(adminLogin())
    {
     window.location.href = MY_VALUES.ADMIN;
     return false;
    }else
    {
      return false;
    }
}