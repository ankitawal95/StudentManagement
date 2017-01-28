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

    document.getElementById("phoneno").value=sitePersonel[i].teacher_phone;

     if(sitePersonel[i].teacher_gender=="M")
       {

         document.getElementById("gmale").checked=true;
       }
      else
         {
           document.getElementById("gfmale").checked=true;

        }
 

       document.getElementById("age").value=sitePersonel[i].teacher_age;
       document.getElementById("school").value=sitePersonel[i].teacher_school;

       document.getElementById("hschool").value=sitePersonel[i].teacher_hschool;
       document.getElementById("dcol").value=sitePersonel[i].teacher_dcol;
       document.getElementById("hcol").value=sitePersonel[i].teacher_hcol;
    
    }
    }


}

  function InvisibleAll(){

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
    Session();
    document.getElementById("uid1").innerHTML="Welcome &nbsp;"+ localStorage.getItem("idname");
    var a = localStorage.getItem("id2");
    var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("MyAllocation"));

     if(sitePersonel==null)
     {

    sitePersonel = [];

     }

  document.getElementById("subjects").innerHTML="Subjects<br><br>";

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


       document.getElementById("designation").innerHTML="Designation&nbsp;:&nbsp;"+sitePersone[h].teacher_design;

        }

    }
  document.getElementById("department").innerHTML="Department&nbsp;:&nbsp;"+sitePersonel[i].Department;
  document.getElementById("subjects").innerHTML=  document.getElementById("subjects").innerHTML+sitePersonel[i].subject+"&nbsp;&nbsp;&nbsp;";
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

var phno = document.getElementById("phoneno").value;

 var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(!phoneno.test(phno) || phoneno.length<10) {
  
   
pop("personal","You Have entered incorrect phone no.");
    document.getElementById("phoneno").disabled=false;
    document.getElementById("age").disabled=false;
    document.getElementById("gmale").disabled=false;
    document.getElementById("gfmale").disabled=false;
    document.getElementById("personal").hidden=false;
    document.getElementById("pqual").hidden=true;
    return ;
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
sitePersonel[i].teacher_phone= phno; 
sitePersonel[i].teacher_age= document.getElementById("age").value; 

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
  document.getElementById("phoneno").disabled=false;
  document.getElementById("age").disabled=false;
  document.getElementById("gmale").disabled=false;
  document.getElementById("gfmale").disabled=false; 
  document.getElementById("personal").hidden=false;
  document.getElementById("pqual").hidden=true;
  return false;
  }


 if(document.getElementById("age").value.trim().length>4  )
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
    document.getElementById("school").disabled=false;
    document.getElementById("hschool").disabled=false;
    document.getElementById("dcol").disabled=false;
    document.getElementById("hcol").disabled=false;
    document.getElementById("qual").hidden=false;
    document.getElementById("equal").hidden=true;
     }



     function saveQual()
     {
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
         var phno = document.getElementById("school").value;
         if(document.getElementById("school").value.length<3 )
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

sitePersonel[i].teacher_school= document.getElementById("school").value; 
sitePersonel[i].teacher_hschool= document.getElementById("hschool").value; 
sitePersonel[i].teacher_dcol= document.getElementById("dcol").value;
sitePersonel[i].teacher_hcol= document.getElementById("hcol").value; 
localStorage.setItem("teacher_profile", JSON.stringify(sitePersonel));

    pop("qual","Successfully added");
updateFields();
break;
}
}

if(flag==0){

console.log("Hello I am Ankit");

var phno = document.getElementById("school").value;

 if(document.getElementById("school").value.trim().length<3 )
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
