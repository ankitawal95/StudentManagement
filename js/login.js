
function rememberlast(){

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
function validateForm() {
   

     var a=document.forms["myform"]["userid"].value;
  
    




var obj = JSON.parse('{ "user":"admin", "password":"cronj123@"}');

console.log("Hello:"+obj.password);
 


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
        
confirm(y);
confirm("a"+opt1);
if(a==opt && y==opt1)
{

  confirm("match");

if(    document.getElementById("rem").checked == true)

   {


    

    localStorage.setItem("id2",opt);
 localStorage.setItem("pass1", y);

  localStorage.setItem("status", "inHOD");
 localStorage.setItem("id1",opt);
  localStorage.setItem("idname",op2);
}
else{

localStorage.setItem("pass1", "");
localStorage.setItem("id1",opt);
 localStorage.setItem("idname",op2);
localStorage.setItem("status", "inHOD");

    localStorage.setItem("id2","Teacher Name:"+op2+" Username:"+opt);

}


 
window.location.href = "hod.html";
   return false;




}else{


  localStorage.setItem("status", "out");

}
      }

















                            var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

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

if(    document.getElementById("rem").checked == true)

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
   return false;




}else{


  localStorage.setItem("status", "out");

}
      }

    



if(a ==  obj.user &&   y== obj.password)
{
     

if(    document.getElementById("rem").checked == true)

   {
 localStorage.setItem("pass1", y);
 localStorage.setItem("idname","admin");
   localStorage.setItem("status", "in");
 localStorage.setItem("id1", document.forms["myform"]["userid"].value);
}
else{

localStorage.setItem("pass1", "");
localStorage.setItem("idname","admin");
  localStorage.setItem("status", "in");

}



window.location.href = "admin_page.html";
   return false;
}
else{

    localStorage.setItem("status", "out");

  confirm("The details are incorrent. Kindly review and try again");
  return false;
}
alert("failed");
}
