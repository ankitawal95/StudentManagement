
 (function($, window, document) {
       

   $(function() {
     rememberlast();
    $("#equal").click(function(){
    setQualification();
     });

    $("#qual").click(function(){
   saveQual();
     });

    $("#personal").click(function(){
    saveProfile();
     });

    $("#pqual").click(function(){
    setProfile();
     });

    $("#logout").click(function(){
    checkStatus();
     });
   });
    
   Session();

  }(window.jQuery, window, document));







function pop(a, b){

  var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');

   document.getElementById(a).disabled=true;
   popup.innerHTML=b;
   var millisecondsToWait = 3000;
   setTimeout(function() 
   {
      popup.classList.toggle('show');
      document.getElementById(a).disabled=false;
   }, millisecondsToWait);

}

function updateFields(){
  var sitePersonel = [];
  var allotment = []
  var flag=0;
  console.log(sitePersonel);

  sitePersonel = JSON.parse(localStorage.getItem("teacher_profile"));

  if(sitePersonel==null)
    {

   sitePersonel = [];
    }

  for(var i=0;i< sitePersonel.length;i++)
    {

   if(sitePersonel[i].teacher == localStorage.getItem("id2"))
   {

   $("#phoneno").attr("value",sitePersonel[i].teacher_phone);

     if(sitePersonel[i].teacher_gender=="M")
       {

         
         $('#gmail').prop('checked', true);
       }
      else
         {

         $('#gfmail').prop('checked', true);
          

        }
 

       $("#age").attr("value",sitePersonel[i].teacher_age);
      $("#school").attr("value",sitePersonel[i].teacher_school);

       $("#hschool").attr("value",sitePersonel[i].teacher_hschool);
       $("#dcol").attr("value",sitePersonel[i].teacher_dcol);
       $("#hcol").attr("value",sitePersonel[i].teacher_hcol);
    
    }
    }


}

  function InvisibleAll(){

     $("#phoneno").attr("disabled","disabled");
     $("#age").attr("disabled","disabled");
     $("#gmale").attr("disabled","disabled");
     $("#gfmale").attr("disabled","disabled");
     $("#personal").attr("hidden","hidden");
     $("#school").attr("disabled","disabled");
     $("#hschool").attr("disabled","disabled");
     $("#dcol").attr("disabled","disabled");
     $("#hcol").attr("disabled","disabled");
     $("#qual").attr("hidden","hidden");
  }


  function Session(){

if(localStorage.getItem("status")=="out")
{
window.location.href = "Login.html";
  return false;
}
 if(localStorage.getItem("status")=="in")
{

if(localStorage.getItem("idname")=="admin")
  {

    window.location.href = "admin_page.html";
  return false;

  }else{


  }

}else if(localStorage.getItem("status")=="inHOD")
{


window.location.href = "hod.html";
  return false;



}

if (localStorage.getItem("status")=="inSTUD")
{
 window.location.href = "student.html";
  return false;
}

if(localStorage.getItem("idname")==null)
{

window.location.href = "Login.html";
  return false;
}
 
  }

  function rememberlast()
    {
    InvisibleAll();
    updateFields();
   
   $("#uid1").html("Welcome &nbsp;"+ localStorage.getItem("idname"));
    var a = localStorage.getItem("id2");
    var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("MyAllocation"));

     if(sitePersonel==null)
     {

    sitePersonel = [];

     }

 $("#subjects").html( "Subjects<br><br>");

  for(var i = 0; i < sitePersonel.length; i++) 
  {
   var opt = sitePersonel[i].Teacher;
    if(a==opt )
     {
    var sitePersone = [];
    var allotmen = []

    console.log(sitePersone);

      sitePersone = JSON.parse(localStorage.getItem("teacher"));

      console.log("Hello"+sitePersone);

     if(sitePersone==null)
     {
    sitePersone = [];
     }
    for(var h=0;h<sitePersone.length;h++)
    {

      var myteachername = "Teacher Name:"+sitePersone[h].teacher+" Username:"+sitePersone[h].teacher_uname;

      if(myteachername == a)
       {


       $("#designation").html("Designation&nbsp;:&nbsp;"+sitePersone[h].teacher_design);

        }

    }
  $("#department").html("Department&nbsp;:&nbsp;"+sitePersonel[i].Department);
  $("#subjects").html(  $("#subjects").val() + sitePersonel[i].subject+"&nbsp;&nbsp;&nbsp;");
}
      }
     updateFields();
     }


     function checkStatus()
     {
 localStorage.setItem("status", "out");
     }

     function setProfile()

     {     
   $("#phoneno").removeAttr("disabled");
   $("#age").removeAttr("disabled");
   $("#gmale").removeAttr("disabled");
   $("#gfmale").removeAttr("disabled");
   $("#personal").removeAttr("hidden");
   $("#pqual").attr("hidden","hidden");
     }

  function saveProfile()
     {    
    $("#phoneno").attr("disabled","disabled");
    $("#age").attr("disabled","disabled");
    $("#gmale").attr("disabled","disabled");
    $("#gfmale").attr("disabled","disabled");
    $("#personal").attr("hidden","hidden");
    $("#pqual").removeAttr("hidden");
    var sitePersonel = [];
    var allotment = []
var flag=0;
    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("teacher_profile"));

     if(sitePersonel==null)
     {
    sitePersonel = [];
     }

for(var i=0;i<sitePersonel.length;i++)
{
  if(sitePersonel[i].teacher ==localStorage.getItem("id2") )
  {

  flag=1;

var phno = $("#phoneno").val();

 var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(!phoneno.test(phno) || phoneno.length<10) {
  
   
pop("personal","You Have entered incorrect phone no.");
     $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");
    return ;
  }


 if($("#age").val().length>3  )
    {
    pop("personal","Please enter valid age");
       $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");
      return false;
    }
var gender="";

    if(document.getElementById('gmale').checked) {
  //Male radio button is checked
  gender="M";
}else if(document.getElementById('gfmale').checked) {
  //Female radio button is checked
  gender="F";
}
sitePersonel[i].teacher_phone= phno; 
sitePersonel[i].teacher_age= $("age").val(); 

sitePersonel[i].teacher_gender= gender; 
    localStorage.setItem("teacher_profile", JSON.stringify(sitePersonel));
        pop("personal","Successfully Added");
break;
}



}


if(flag==0){
console.log("Hello I am Ankit");

var phno = document.getElementById("phoneno").value;

 var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(!phoneno.test(phno) || phoneno.length<10) {
  
 pop("personal","You Have entered incorrect phone no.");

  $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");

  return false;
  }


 if(document.getElementById("age").value.trim().length>4  )
    {
pop("personal","Please enter valid age");
   $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");
        return false;


    }
    var gender="";

    if(document.getElementById('gmale').checked) {
  //Male radio button is checked
     gender="M";
    }else if(document.getElementById('gfmale').checked) 
    {
  //Female radio button is checked
     gender="F";
     }

      var combination = {
      "teacher": localStorage.getItem("id2"),
      "teacher_phone": phno,
      "teacher_age": document.getElementById("age").value,
      "teacher_gender": gender,
      "teacher_school":"N/A",
      "teacher_hschool":"N/A"   ,
      "teacher_dcol":"N/A" ,
      "teacher_hcol": "N/A" 
    }
    sitePersonel.push(combination);
    localStorage.setItem("teacher_profile", JSON.stringify(sitePersonel));
    pop("personal","Successfully Added");
    updateFields();
}

     }

     function setQualification()
     {
    $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
     }



     function saveQual()
     {
  $("#school").attr("disabled","disabled");
   $("#hschool").attr("disabled","disabled");
   $("#dcol").attr("disabled","disabled");
   $("#hcol").attr("disabled","disabled");
   $("#qual").attr("hidden","hidden");
   $("#equal").removeAttr("hidden");

   var sitePersonel = [];
   var allotment = []
   var flag=0;
   console.log(sitePersonel);

   sitePersonel = JSON.parse(localStorage.getItem("teacher_profile"));

     if(sitePersonel==null)
     {
    sitePersonel = [];
     }

   for(var i=0;i<sitePersonel.length;i++)
      {
       if(sitePersonel[i].teacher ==localStorage.getItem("id2") )
        {
         flag=1;
         var phno = $("#school").val();
         if($("#school").val().length<3 )
          {
    pop("qual","Please enter valid school name");
           $("#school").disabled=false;
           $("#hschool").disabled=false;
           $("#dcol").disabled=false;
           $("#hcol").disabled=false;
          $("#qual").hidden=false;
           $("#equal").hidden=true;
           return false;
          }

  
          if(document.getElementById("hschool").value.length<3 )
          {
     
    pop("qual","Please enter valid high school name");
          document.getElementById("school").disabled=false;
          document.getElementById("hschool").disabled=false;
          document.getElementById("dcol").disabled=false;
          document.getElementById("hcol").disabled=false;
          document.getElementById("qual").hidden=false;
          document.getElementById("equal").hidden=true;
          return false;
    }

          if(document.getElementById("dcol").value.length<3  )
          {
      
    pop("qual","Please enter valid degree college name");
          document.getElementById("school").disabled=false;
          document.getElementById("hschool").disabled=false;
          document.getElementById("dcol").disabled=false;
          document.getElementById("hcol").disabled=false;
          document.getElementById("qual").hidden=false;
          document.getElementById("equal").hidden=true;
          return false;
           }

      if(document.getElementById("hcol").value.length<3  )
        {
       
    pop("qual","Please enter valid higher degree name");
        document.getElementById("school").disabled=false; 
        document.getElementById("hschool").disabled=false;
        document.getElementById("dcol").disabled=false;
        document.getElementById("hcol").disabled=false;
        document.getElementById("qual").hidden=false;
        document.getElementById("equal").hidden=true;
        return false;
    }

sitePersonel[i].teacher_school= $("#school").val(); 
sitePersonel[i].teacher_hschool= $("#hschool").val(); 
sitePersonel[i].teacher_dcol= $("#dcol").val();
sitePersonel[i].teacher_hcol= $("#hcol").val(); 
localStorage.setItem("teacher_profile", JSON.stringify(sitePersonel));

    pop("qual","Successfully added");
updateFields();
break;
}
}

if(flag==0){

console.log("Hello I am Ankit");

var phno = $("#school").val();

 if($("#school").value.trim().length<3 )
    {
   
    pop("qual","Please enter valid school name");
   document.getElementById("school").disabled=false;
   document.getElementById("hschool").disabled=false;
   document.getElementById("dcol").disabled=false;
   document.getElementById("hcol").disabled=false;
   document.getElementById("qual").hidden=false;
   document.getElementById("equal").hidden=true;
        return false;
    }


 if(document.getElementById("hschool").value.trim().length<3  )
    {

    pop("qual","Please enter valid high school name");        
   document.getElementById("school").disabled=false;
   document.getElementById("hschool").disabled=false;
   document.getElementById("dcol").disabled=false;
   document.getElementById("hcol").disabled=false;
   document.getElementById("qual").hidden=false;
   document.getElementById("equal").hidden=true;
        return false;
    }

     if(document.getElementById("dcol").value.trim().length<3  )
    {
    pop("qual","Please enter valid degree college name");
     document.getElementById("school").disabled=false;
     document.getElementById("hschool").disabled=false;
     document.getElementById("dcol").disabled=false;
     document.getElementById("hcol").disabled=false;
     document.getElementById("qual").hidden=false;
     document.getElementById("equal").hidden=true;
        return false;
    }

      if(document.getElementById("hcol").value.trim().length<3  )
    { 
     pop("qual","Please enter valid higher degree college name");       
     document.getElementById("school").disabled=false;
     document.getElementById("hschool").disabled=false;
     document.getElementById("dcol").disabled=false;
     document.getElementById("hcol").disabled=false;
     document.getElementById("qual").hidden=false;
     document.getElementById("equal").hidden=true;
     return false;
    }
      var combination = {
      "teacher": localStorage.getItem("id2"),
      "teacher_phone": "N/A",
      "teacher_age": "N/A",
      "teacher_gender": "N/A",
      "teacher_school":document.getElementById("school").value,
      "teacher_hschool":document.getElementById("hschool").value   ,
      "teacher_dcol":document.getElementById("dcol").value ,
      "teacher_hcol": document.getElementById("hcol").value 
    }
    sitePersonel.push(combination);
    localStorage.setItem("teacher_profile", JSON.stringify(sitePersonel));
    updateFields();
    pop("personal","Successfully added");
}

     }
