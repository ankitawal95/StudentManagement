
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
     document.getElementById("phoneno").value=sitePersonel[i].student_phone;
     if(sitePersonel[i].student_gender=="M")
       {
         document.getElementById("gmale").checked=true;
       }
     else
     {
       document.getElementById("gfmale").checked=true;
     }
  document.getElementById("age").value=sitePersonel[i].student_age;
  document.getElementById("school").value=sitePersonel[i].student_school;
  document.getElementById("hschool").value=sitePersonel[i].student_hschool;
  document.getElementById("dcol").value=sitePersonel[i].student_dcol;
  document.getElementById("hcol").value=sitePersonel[i].student_hcol;
    }

   }
 }
 
function rememberlast()
 {
    updateFields();
    document.getElementById("phoneno").disabled=true;
    document.getElementById("age").disabled=true;
    document.getElementById("gmale").disabled=true;
    document.getElementById("gfmale").disabled=true;
    document.getElementById("personal").hidden=true;
    document.getElementById("school").disabled=true;
    document.getElementById("hschool").disabled=true;
    document.getElementById("dcol").disabled=true;
    document.getElementById("hcol").disabled=true;
    document.getElementById("qual").hidden=true;
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
    document.getElementById("uid1").innerHTML="Welcome &nbsp;"+ localStorage.getItem("idname");
    document.getElementById("department").innerHTML="Department&nbsp;:&nbsp;"+  localStorage.getItem("id2");

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
     document.getElementById("phoneno").disabled=false;
     document.getElementById("age").disabled=false;
     document.getElementById("gmale").disabled=false;
     document.getElementById("gfmale").disabled=false;
     document.getElementById("personal").hidden=false;
     document.getElementById("pqual").hidden=true;
     }
function saveProfile()
  {       
   document.getElementById("phoneno").disabled=true;
   document.getElementById("age").disabled=true;
   document.getElementById("gmale").disabled=true;
   document.getElementById("gfmale").disabled=true;
   document.getElementById("personal").hidden=true;
   document.getElementById("pqual").hidden=false;
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
         var phno = document.getElementById("phoneno").value;
         var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
         if(!phoneno.test(phno) || phoneno.length<10) {
              pop("personal","Please enter valid number");
              document.getElementById("phoneno").disabled=false;
      document.getElementById("age").disabled=false;
      document.getElementById("gmale").disabled=false;
      document.getElementById("gfmale").disabled=false;
      document.getElementById("personal").hidden=false;
      document.getElementById("pqual").hidden=true;
      return false;
  }

 if(document.getElementById("age").value.length>3  )
    {
     pop("personal","Please enter valid age");
     document.getElementById("phoneno").disabled=false;
     document.getElementById("age").disabled=false;
     document.getElementById("gmale").disabled=false;
     document.getElementById("gfmale").disabled=false;
     document.getElementById("personal").hidden=false;
     document.getElementById("pqual").hidden=true;
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
    sitePersonel[i].student_age= document.getElementById("age").value; 
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
  document.getElementById("phoneno").disabled=false;
  document.getElementById("age").disabled=false;
  document.getElementById("gmale").disabled=false;
  document.getElementById("gfmale").disabled=false;
  document.getElementById("personal").hidden=false;
  document.getElementById("pqual").hidden=true;
  return false;
  }


 if(document.getElementById("age").value.length>4  )
    {
     pop("personal","Please enter valid age");
     document.getElementById("phoneno").disabled=false;
     document.getElementById("age").disabled=false;
     document.getElementById("gmale").disabled=false;
     document.getElementById("gfmale").disabled=false;
     document.getElementById("personal").hidden=false;
     document.getElementById("pqual").hidden=true;
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
      "student_age": document.getElementById("age").value,
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
   document.getElementById("school").disabled=false;
   document.getElementById("hschool").disabled=false;
   document.getElementById("dcol").disabled=false;
   document.getElementById("hcol").disabled=false;
   document.getElementById("qual").hidden=false;
   document.getElementById("equal").hidden=true;
     }

 function saveQual(){
    document.getElementById("school").disabled=true;  
    document.getElementById("hschool").disabled=true;
    document.getElementById("dcol").disabled=true;
    document.getElementById("hcol").disabled=true;
    document.getElementById("qual").hidden=true;
    document.getElementById("equal").hidden=false; 
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
         var phno = document.getElementById("school").value;
         if(document.getElementById("school").value.length<3  )
            {
               pop("qual","Please enter valid school");
               document.getElementById("school").disabled=false;
               document.getElementById("hschool").disabled=false;
               document.getElementById("dcol").disabled=false;
               document.getElementById("hcol").disabled=false;
               document.getElementById("qual").hidden=false;
               document.getElementById("equal").hidden=true;
               return false;
    }

 if(document.getElementById("hschool").value.length<3 )
     {
       pop("qual","Please enter valid high school");  
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
       pop("qual","Please enter valid degree college");
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
         pop("personal","Please enter valid higher college");
        document.getElementById("school").disabled=false;
        document.getElementById("hschool").disabled=false;
        document.getElementById("dcol").disabled=false;
        document.getElementById("hcol").disabled=false;
        document.getElementById("qual").hidden=false;
        document.getElementById("equal").hidden=true;
        return false;
    }

   sitePersonel[i].student_school= document.getElementById("school").value; 
   sitePersonel[i].student_hschool= document.getElementById("hschool").value; 
   sitePersonel[i].student_dcol= document.getElementById("dcol").value;
   sitePersonel[i].student_hcol= document.getElementById("hcol").value; 
   localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
   pop("qual","Successfully added");
   updateFields();
   break;
  }

}

  if(flag==0){
  console.log("Hello I am Ankit");
  var phno = document.getElementById("school").value;
  if(document.getElementById("school").value.length<3  )
    {
    pop("qual","Please enter valid  school");  
    document.getElementById("school").disabled=false;
    document.getElementById("hschool").disabled=false;
    document.getElementById("dcol").disabled=false;
    document.getElementById("hcol").disabled=false;
    document.getElementById("qual").hidden=false;
    document.getElementById("equal").hidden=true;
    return false;
    }
  if(document.getElementById("hschool").value.length<3 )
    {
     pop("qual","Please enter valid high school");   
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
     pop("qual","Please enter valid degree school"); 
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
     pop("qual","Please enter valid high degree college");     
     document.getElementById("school").disabled=false;
     document.getElementById("hschool").disabled=false;
     document.getElementById("dcol").disabled=false;
     document.getElementById("hcol").disabled=false;
     document.getElementById("qual").hidden=false;
     document.getElementById("equal").hidden=true;
     return false;
    }
      var combination = {
      "student": "Student Name:"+localStorage.getItem("idname") +" Username:"+localStorage.getItem("id1"),
      "student_phone": "N/A",
      "student_age": "N/A",
      "student_gender": "N/A",
      "student_school":document.getElementById("school").value,
      "student_hschool":document.getElementById("hschool").value   ,
      "student_dcol":document.getElementById("dcol").value ,
      "student_hcol": document.getElementById("hcol").value 
    }
    sitePersonel.push(combination);


    localStorage.setItem("student_profile", JSON.stringify(sitePersonel));
    pop("qual","Successfully Added");
   updateFields();
}
     }