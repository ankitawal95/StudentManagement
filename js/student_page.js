
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
    
    

  }(window.jQuery, window, document));





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

function updateFields(){
  var sitePersonel = [];
  var allotment = []
  var flag=0;
  console.log(sitePersonel);
  sitePersonel = JSON.parse(localStorage.getItem("student_profile"));
  if(sitePersonel==null)
    {
     sitePersonel = [];
    }

   for(var i=0;i< sitePersonel.length;i++)
    {
    var w = "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1") ;
    if(sitePersonel[i].student ==w)
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
 
function rememberlast()
 {
    updateFields();
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
       window.location.href = "teacher_page.html";
       return false;
     }
     }else if(localStorage.getItem("status")=="inHOD")
       {
        window.location.href = "hod.html";
        return false;
      }
    
   $("#uid1").html("Welcome &nbsp;"+ localStorage.getItem("idname"));
    $("#department").html("Department&nbsp;:&nbsp;"+  localStorage.getItem("id2"));

   if(localStorage.getItem("idname")==null)
     {
      window.location.href = "Login.html";
      return false;
      }
    var a = localStorage.getItem("id2");
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
   sitePersonel = JSON.parse(localStorage.getItem("student_profile"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }

    for(var i=0;i<sitePersonel.length;i++)
     {
    var w = "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1") ;
       if(sitePersonel[i].student ==w )
        {
         flag=1;
         var phno = $("#phoneno").val();
         var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
         if(!phoneno.test(phno) || phoneno.length<10) {
              pop("personal","Please enter valid number");
              $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");
      return false;
  }

 if(document.getElementById("age").value.length>3  )
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
    sitePersonel[i].student_phone= phno; 
    sitePersonel[i].student_age= $("#age").val(); 
    sitePersonel[i].student_gender= gender; 
    localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
            
      pop("personal","Successfully Added");

            updateFields();
    break;
    }



}


if(flag==0){
console.log("Hello I am Ankit");
var phno = document.getElementById("phoneno").value;
 var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(!phoneno.test(phno) || phoneno.length<10) {
  pop("personal","Please enter valid number");
   $("#phoneno").removeAttr("disabled");
    $("#age").removeAttr("disabled");
    $("#gmale").removeAttr("disabled");
    $("#gfmale").removeAttr("disabled");
    $("#personal").removeAttr("hidden");
    $("#pqual").attr("hidden","hidden");
  return false;
  }


 if(document.getElementById("age").value.length>4  )
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

      var combination = {
      "student": "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1"),
      "student_phone": phno,
      "student_age": $("#age").val(),
      "student_gender": gender,
      "student_school":"N/A",
      "student_hschool":"N/A"   ,
      "student_dcol":"N/A" ,
      "student_hcol": "N/A" 
    }
    sitePersonel.push(combination);
    localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
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

 function saveQual(){
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
    sitePersonel = JSON.parse(localStorage.getItem("student_profile"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }
   for(var i=0;i<sitePersonel.length;i++)
     {
    var w = "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1") ;
      if(sitePersonel[i].student ==w )
        {
         flag=1;
         var phno = $("#school").val();
         if($("school").val().length<3  )
            {
               pop("qual","Please enter valid school");
                $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
               return false;
    }

 if($("#hschool").val().length<3 )
     {
       pop("qual","Please enter valid high school");  
        $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
       return false;
    }

     if($("#dcol").val().length<3  )
      {
       pop("qual","Please enter valid degree college");
        $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
       return false;
    }
    if($("#hcol").value.length<3  )
       {
         pop("personal","Please enter valid higher college");
         $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
        return false;
    }

   sitePersonel[i].student_school= $("#school").val(); 
   sitePersonel[i].student_hschool= $("#hschool").val(); 
   sitePersonel[i].student_dcol= $("#dcol").val();
   sitePersonel[i].student_hcol= $("#hcol").val(); 
   localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
   pop("qual","Successfully added");
   updateFields();
   break;
  }

}

  if(flag==0){
  console.log("Hello I am Ankit");
  var phno = $("#school").val();
  if($("#school").value.length<3  )
    {
    pop("qual","Please enter valid  school");  
     $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
    return false;
    }
  if($("#hschool").val().length<3 )
    {
     pop("qual","Please enter valid high school");   
     $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
     return false;


    }

     if($("#dcol").val().length<3  )
    {
     pop("qual","Please enter valid degree school"); 
     $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
     return false;
    }

    if($("#hcol").val().length<3  )
    {
     pop("qual","Please enter valid high degree college");     
     $("#school").removeAttr("disabled");
    $("#hschool").removeAttr("disabled");
    $("#dcol").removeAttr("disabled");
    $("#hcol").removeAttr("disabled");
    $("#qual").removeAttr("hidden");
    $("#equal").attr("hidden","hidden");
     return false;
    }
      var combination = {
      "student": "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1"),
      "student_phone": "N/A",
      "student_age": "N/A",
      "student_gender": "N/A",
      "student_school":$("#school").val(),
      "student_hschool":$("#hschool").val()   ,
      "student_dcol":$("#dcol").val() ,
      "student_hcol": $("#hcol").val() 
    }
    sitePersonel.push(combination);


    localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
    pop("qual","Successfully Added");
   updateFields();
}
     }