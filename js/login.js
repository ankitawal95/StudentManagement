
function rememberlast(){

   SessionState();
       
    document.getElementById('rem').checked = true;

    if (typeof(Storage) !== "undefined") {
        // Store
        
        // Retrieve
        document.getElementById("uid").value= localStorage.getItem("id1");
         document.getElementById("pass").value = localStorage.getItem("pass1");

      
    } else {
      confirm( "Sorry, your browser does not support Web Storage...");
    }

  }


function SessionState(){

 if(localStorage.getItem("status")=="in")
    {
    if(localStorage.getItem("idname")=="admin")
    {
    window.location.href = "admin_page.html";
    return false;
    }else{
      window.location.href = "teacher_page.html";
      return false;
    }
    }else if (localStorage.getItem("status")=="inHOD")
    {
     window.location.href = "hod.html";
      return false;
    }
    else if (localStorage.getItem("status")=="inSTUD")
    {
     window.location.href = "student.html";
      return false;
    }
}
  


  function StudentLogin(){



 
   var a=document.forms["myform"]["userid"].value;
   var obj = JSON.parse('{ "user":"admin", "password":"cronj123@"}');
   console.log("Hello:"+obj.password);


   var a=document.forms["myform"]["userid"].value;
   var obj = JSON.parse('{ "user":"admin", "password":"cronj123@"}');

   console.log("Hello:"+obj.password);
   var sitePersonel = [];
   var allotment = []
   console.log(sitePersonel);
   sitePersonel = JSON.parse(localStorage.getItem("Students"));
   if(sitePersonel==null)
    {
    sitePersonel = [];
    }
   var y = document.forms["myform"]["password"].value;

   for(var i = 0; i < sitePersonel.length; i++) {
    var opt = sitePersonel[i].student_uname;
    var op2=sitePersonel[i].student_name;
    var opt1 =  sitePersonel[i].student_pass;
            
    if(a===opt && y===opt1)
    {
        if(document.getElementById("rem").checked == true)
            {
          localStorage.setItem("id2",sitePersonel[i].student_department);
          localStorage.setItem("pass1", y);
          localStorage.setItem("status", "inSTUD");
          localStorage.setItem("id1",opt);
          localStorage.setItem("idname",op2);
          }
        else{

        localStorage.setItem("pass1", "");
        localStorage.setItem("id2",sitePersonel[i].student_department);
        localStorage.setItem("id1",opt);
        localStorage.setItem("idname",op2);
        localStorage.setItem("status", "inSTUD");
        }
    window.location.href = "student.html";
       return true ;
        }

       else{
      localStorage.setItem("status", "out");
       }

      }

      return false;
  }



function HODLogin(){
 var a=document.forms["myform"]["userid"].value;


var sitePersonel = [];
var allotment = []

console.log(sitePersonel);

sitePersonel = JSON.parse(localStorage.getItem("HODAllocation"));

if(sitePersonel==null)
{
sitePersonel = [];
}
 var y = document.forms["myform"]["password"].value;

for(var i = 0; i < sitePersonel.length; i++) {
    var opt = sitePersonel[i].Department;
    var opt1 =  sitePersonel[i].pass;
    if(a==opt && y==opt1)
    {
       
        if(document.getElementById("rem").checked == true)
           {
          localStorage.setItem("id2",opt);
          localStorage.setItem("pass1", y);
          localStorage.setItem("status", "inHOD");
          localStorage.setItem("id1",opt);
          localStorage.setItem("idname",sitePersonel[i].Teacher);
        }
        else{
        localStorage.setItem("pass1", "");
        localStorage.setItem("id1",opt);
        localStorage.setItem("idname",sitePersonel[i].Teacher);
        localStorage.setItem("status", "inHOD");
        localStorage.setItem("id2","Teacher Name:"+op2+" Username:"+opt);
        }
        window.location.href = "hod.html";
           return true;
    }

    else{
      localStorage.setItem("status", "out");
    }
}

return false;
}

function teacherLogin(){
 
  var sitePersonel = [];
  var allotment = []
  console.log(sitePersonel);
  var a=document.forms["myform"]["userid"].value;
  sitePersonel = JSON.parse(localStorage.getItem("teacher"));

  if(sitePersonel==null)
  {
   sitePersonel = [];
  }
  var y = document.forms["myform"]["password"].value;

  for(var i = 0; i < sitePersonel.length; i++) {
       var opt = sitePersonel[i].teacher_uname;
       var opt1 =  sitePersonel[i].teacher_pass;
       var op2 = sitePersonel[i].teacher;

      if(a==opt && y==opt1)
      {

          if(document.getElementById("rem").checked == true)
           {

           var w = "Teacher Name:"+op2+" Username:"+opt;
           localStorage.setItem("id2",w);
           localStorage.setItem("pass1", y);
           localStorage.setItem("status", "in");
           localStorage.setItem("id1",opt);
           localStorage.setItem("idname",op2);
          }
          else{
          localStorage.setItem("pass1", "");
          localStorage.setItem("id1",opt);
          localStorage.setItem("idname",op2);
          localStorage.setItem("status", "in");
          localStorage.setItem("id2","Teacher Name:"+op2+" Username:"+opt);
          } 
          window.location.href = "teacher_page.html";
             return true;
      }

      else{
           localStorage.setItem("status", "out");
           }
           
        }

        return false;

}


function adminLogin(){

var a=document.forms["myform"]["userid"].value;
var obj = JSON.parse('{ "user":"admin", "password":"cronj123@"}');
var y = document.forms["myform"]["password"].value;


if(a ==  obj.user &&   y== obj.password)
{
  if(document.getElementById("rem").checked == true)
      {
      localStorage.setItem("pass1", y);
      localStorage.setItem("idname","admin");
      localStorage.setItem("status", "in");
      localStorage.setItem("id1", document.forms["myform"]["userid"].value);
      window.location.href = "admin_page.html";
      return true;
      }
  else{

      localStorage.setItem("pass1", "");
      localStorage.setItem("idname","admin");
      localStorage.setItem("status", "in");
      window.location.href = "admin_page.html";
      return true;
      }

  }
  else{
      localStorage.setItem("status", "out");
      confirm("The details are incorrent. Kindly review and try again");
      return false;
      }  
alert("failed");
return false;
}

function validate()
 {




    if(StudentLogin())
    {
      window.location.href = "student.html";
      return false;
    } 
    else{

          console.log("Hello");
        }

    if(HODLogin())
     {
      window.location.href = "hod.html";
      return false;
     }
     else
     {
     console.log("Hello1");
     }

    if(teacherLogin())
    {
       window.location.href = "teacher_page.html";
      return false;

    }else{

      
    }

    if(adminLogin())
    {
     window.location.href = "admin_page.html";
     return false;


    }else{


      return false;
    }








}