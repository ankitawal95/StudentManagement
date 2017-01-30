var departments=[];
var combination={};
var OUT='out'

(function($, window, document) {
       

   $(function() {

     rememberlast();

     $("#aallocate").click(function(){
    allocate();
     });

      $("#aallocate1").click(function(){
    allocate1();
     });
     
      $("#subDept").click(function(){
    showDept();
     });

       $("#subSubj").click(function(){
    showBySubject();
     });


      $("#aTeacher").click(function(){
    addteacher();
     });


     $("#aDept").click(function(){
    add();
     });

     $("#aSubject").click(function(){
    subjectadd()
     });

     $("#logout").click(function(){
    checkStatus();
     });


    $("#tab1").click(function(){
    addDeptVisible();
     });

    $("#tab2").click(function(){
    addSubjectVisible();
     });

    $("#tab3").click(function(){
    addTeacherVisible();
     });

    $("#tab4").click(function(){
    allocateTeacher();
     });

    $("#tab5").click(function(){
    assignHOD();
     });

    $("#tab6").click(function(){
    showbyDept();
     });

    $("#tab7").click(function(){
    showbySub();
     });
   });
 
    
     session();

  }(window.jQuery, window, document));

function checkStatus()
{
  localStorage.setItem("status", "out");
}

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

function addDeptVisible()
{
  document.getElementById("addDept").style.display= "block";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}

function addSubjectVisible(){

  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "block";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}

function addTeacherVisible(){
  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "block";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}

function assignHOD(){

  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "block";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}

function showbyDept(){
  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "block";
  document.getElementById("showBySubject").style.display= "none";
}

function showbySub(){
  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "block";
}
function allocateTeacher(){
  document.getElementById("addDept").style.display= "none";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "block";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}

function add_toDropdown(a,b){

   var parent = document.getElementById(a); 
   for(var i = 0; i < b.length; i++) {
        var opt = b[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        parent.appendChild(el);
      
    }
}

function addSingleValue_toDropdown(a,b){

   var parent = document.getElementById(a); 

        var opt = b;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        parent.appendChild(el);
      
    
}
function session(){
if(localStorage.getItem("status")=="out") 
        {
          window.location.href = "Login.html";
          return ;
        }

if(localStorage.getItem("status")=="in")
    {
    if(localStorage.getItem("idname")=="admin")
    {

     }
    else
    {
       window.location.href = "teacher_page.html";
       return false;
     }
   }
 if(localStorage.getItem("status")=="inHOD")
   {
     window.location.href = "hod.html";
     return false;
   }
 if(localStorage.getItem("status")=="inSTUD")
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
function Invisible(){

  document.getElementById("addDept").style.display= "block";
  document.getElementById("addSubject").style.display= "none";
  document.getElementById("addTeacher").style.display= "none";
  document.getElementById("allocateTeacher").style.display= "none";
  document.getElementById("assignHOD").style.display= "none";
  document.getElementById("showByDept").style.display= "none";
  document.getElementById("showBySubject").style.display= "none";
}
function restoreData(){
 departments = JSON.parse(localStorage.getItem("departments"));
 teachers = JSON.parse(localStorage.getItem("teacher"));
if(departments == null)
  {
  departments=[];
  }
 add_toDropdown("selectNumber",departments);
 add_toDropdown("dept_drop",departments);
 add_toDropdown("dept_d",departments);
 sub = JSON.parse(localStorage.getItem("all_subject"));
    if(sub == null)
    {
   sub=[];

    }
 add_toDropdown("subj_d",sub);
 add_toDropdown("dept_d_teach",departments);
  
 All_teachers = JSON.parse(localStorage.getItem("All_teachers"));


 if(All_teachers == null)
  {
    All_teachers=[];

  }
 add_toDropdown("teacher_drop",All_teachers);
 add_toDropdown("t_drop",All_teachers);
}

function rememberlast() {

Invisible();
document.getElementById("subj_drop").disabled= true;
document.getElementById("dept_drop").disabled= true;
document.getElementById("uid1").innerHTML="Welcome &nbsp;"+ localStorage.getItem("id1");
restoreData();
}
function already_Exist(a,b,c){
   for(var i=0;i<a.length;i++)
       {
         if(a[i].toLowerCase().trim() == document.getElementById(b).value.toLowerCase().trim())
        {
    pop(c,"Already exists");
          flag=1;
          return false;
        }
       }


}
function add(){
  if(! (document.getElementById("dept").value.trim().length < 3))
       {
  	    departments = JSON.parse(localStorage.getItem("departments"));
        dept_drop = JSON.parse(localStorage.getItem("dept_drop"));
        if(departments == null)
        {
        departments=[];	
        }
         if(dept_drop == null)
        {
        dept_drop=[];
          
        }
        already_Exist(departments,"dept","aDept");
        departments.push(document.getElementById("dept").value);
        localStorage.setItem("departments", JSON.stringify(departments));
        pop("aDept","Successfully Added");
        addSingleValue_toDropdown("dept_d_teach",document.getElementById("dept").value);
        addSingleValue_toDropdown("selectNumber",document.getElementById("dept").value);
        addSingleValue_toDropdown("dept_d",document.getElementById("dept").value);
       }
  else{

  	   pop("aDept","Please enter valid department");
  }

var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}

}


function subjectadd()
{
  if(! (document.getElementById("subject").value.trim().length < 3))
      {

    var sitePersonel = [];
    var allotment = []
    console.log(sitePersonel);
      sitePersonel = JSON.parse(localStorage.getItem("Allocate"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }
 
   var all_subject=[];
      all_subject = JSON.parse(localStorage.getItem("all_subject"));

     if(all_subject==null)
     {

   all_subject= [];

     }


    var subject= document.getElementById("subject").value;
    var e = document.getElementById("selectNumber"); 
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    var teacher = text;
  for(var i=0;i<sitePersonel.length;i++)
        {
         if(sitePersonel[i].subject.toLowerCase().trim() == subject.toLowerCase().trim() &&  sitePersonel[i].deptartment.toLowerCase().trim() == teacher.toLowerCase().trim())
        {
    pop("aSubject","Subject already exists in the Department!");
          flag=1;return false ;
        }
        }
    var combination = {
      "subject": subject,
      "deptartment": teacher
    }
    sitePersonel.push(combination);
    all_subject.push(subject);
    console.log(sitePersonel);
    //localStorage.setItem("allotment", JSON.stringify(allotment));
    localStorage.setItem("all_subject", JSON.stringify(all_subject));
    localStorage.setItem("Allocate", JSON.stringify(sitePersonel));
    console.log(JSON.stringify(sitePersonel));
    pop("aSubject","Successfully Added");
     var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}

addSubjectVisible();
    var sub_d = document.getElementById("subj_d"); 
   addSingleValue_toDropdown("subj_d",subject);
   }else{
    pop("aSubject","Please enter proper subjects");
    addSubjectVisible();
        }
           addSubjectVisible();
           return false;
  }
  function password_Check(y){
          if(y != "" ) {
      if(y.length < 6) {
           pop("aTeacher","Error: Password must contain at least six characters!");
        return false;
      }
      re = /[0-9]/;
      if(!re.test(y)) {
        pop("aTeacher","Error: password must contain at least one number (0-9)!");
        return false;
      }
      re = /[a-z]/;
      if(!re.test(y)) {
           pop("aTeacher","Error: password must contain at least one lowercase letter (a-z)!");
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(y)) {
         pop("aTeacher","Error: password must contain at least one uppercase letter (A-Z)!");
        return false ;
      }
      return true;
    } else {
       pop("aTeacher","Error: Please check that you've entered and confirmed your password!");
      return false;
    }
  }

function addteacher()
{
  if(! (document.getElementById("teacher").value.trim().length < 3) &&  ! (document.getElementById("teacher_uname").value.trim().length < 3) && 

    ! (document.getElementById("teacher_pass").value.trim().length < 3) &&     ! (document.getElementById("teacher_design").value.trim().length < 3))
  {

     var e = document.getElementById("dept_d_teach"); 
    var value3 = e.options[e.selectedIndex].value;
    

    if( value3 == "me")
    {
           pop("aTeacher","Please add department");
        addTeacherVisible();
        return false ;
    } 
        y= document.getElementById("teacher_pass").value;
        x=document.getElementById("teacher_uname").value;
           za=document.getElementById("teacher_design").value;
          if(!password_Check(y))return false;
    var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("teacher"));

     if(sitePersonel==null)
     {

    sitePersonel = [];

     }

        All_teachers = JSON.parse(localStorage.getItem("All_teachers"));

     if(All_teachers==null)
     {

    All_teachers = [];

     }
    var e = document.getElementById("dept_d_teach"); 
    var value3 = e.options[e.selectedIndex].value;
    var text3 = e.options[e.selectedIndex].text;

    var myteacher= document.getElementById("teacher").value;
      for(var i=0;i<sitePersonel.length;i++)
           {

         if(sitePersonel[i].teacher_uname.toLowerCase().trim() == x.toLowerCase().trim() && sitePersonel[i].teacher_department.toLowerCase().trim() == text3.toLowerCase().trim())
        {
  pop("aTeacher","Username already exists");
          addTeacherVisible();

          flag=1;return false;
        }
        }
    x= "t_"+x;
    var combination = {
      "teacher": myteacher,
      "teacher_uname": x,
      "teacher_pass": y,
      "teacher_department": text3,
      "teacher_design":za
    }
    sitePersonel.push(combination);
    console.log(sitePersonel);
    All_teachers.push("Teacher Name:"+myteacher+" Username:"+x);
    localStorage.setItem("teacher", JSON.stringify(sitePersonel));
    localStorage.setItem("All_teachers", JSON.stringify(All_teachers));
    console.log(JSON.stringify(sitePersonel));

    addSingleValue_toDropdown("teacher_drop","Teacher Name:"+myteacher+" Username:"+x);
    addSingleValue_toDropdown("t_drop","Teacher Name:"+myteacher+" Username:"+x);
         var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text" || elements[ii].type == "password") {
        elements[ii].value = "";
      }
    }
      pop("aTeacher","PSuccessfully added");
      addTeacherVisible();
  }
  else{

  pop("aTeacher","Please enter all fields. Atleast 3 characters for username and name and 6 characters for password");
 
    addTeacherVisible();
    return false;
  }
return false;
}

function myFunction()
{
     var subj_select = document.getElementById("subj_drop");
      document.getElementById("subj_drop").disabled= false;
     sitePersonel = JSON.parse(localStorage.getItem("Allocate"));
     if(sitePersonel==null)
      {
      sitePersonel = [];
      }
     console.log(sitePersonel);
     var e = document.getElementById("dept_drop"); 
     var value = e.options[e.selectedIndex].value;
     var text = e.options[e.selectedIndex].text;

      var length = subj_select.options.length;
      for (z = length; z >=1; z--) {
      subj_select.remove(z) ;
      }

     for(var i = 0; i < sitePersonel.length; i++) {

      var opt = sitePersonel[i].deptartment;

      if(opt == text){
      var el = document.createElement("option");
      el.textContent = sitePersonel[i].subject;
      el.value = sitePersonel[i].subject;
      subj_select.appendChild(el);
 }
  }
}

function allocate(){      
    var sitePersonel = [];
    var allotment = []
    console.log(sitePersonel);
      sitePersonel = JSON.parse(localStorage.getItem("MyAllocation"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }
    var e = document.getElementById("teacher_drop"); 
    var value1 = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    var teacherdrop = text;
    var e = document.getElementById("subj_drop"); 
    var value2 = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    var subj_drop = text;
    var e = document.getElementById("dept_drop"); 
    var value3 = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    var dept_drop = text;

    if(value1 == "me" || value2 == "me" || value3 == "me")
    {
  pop("aallocate","Please enter all fields");
        return false;
    } 
      for(var i=0;i<sitePersonel.length;i++)
           {

         if(sitePersonel[i].Teacher.toLowerCase().trim() == teacherdrop.toLowerCase().trim() && sitePersonel[i].Separtment.toLowerCase().trim() == dept_drop.toLowerCase().trim()
        &&  sitePersonel[i].subject.toLowerCase().trim() == subj_drop.toLowerCase().trim())
        {
  pop("aallocate","Teacher from this department already allocated to the subject!");
        
allocateTeacher();
          flag=1;return false;
        }
        }
    var combination = {
      "Teacher": teacherdrop,
      "Department": dept_drop,
         "subject": subj_drop
    }
    sitePersonel.push(combination);
    
    console.log(sitePersonel);
    localStorage.setItem("MyAllocation", JSON.stringify(sitePersonel));
    console.log(JSON.stringify(sitePersonel));
      pop("aallocate","Successfully Added");
    allocateTeacher();
     var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}

allocateTeacher();
return false;
}


function showDept()
{   var sitePersonel = [];
    var allotment = []
    console.log(sitePersonel);
      sitePersonel = JSON.parse(localStorage.getItem("MyAllocation"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }
   console.log(sitePersonel);
    var e = document.getElementById("dept_d"); 
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
          var wx = document.getElementById("showDept");
           wx.innerHTML="";
           var prev="";
    for(var i = 0; i < sitePersonel.length; i++) {
        var opt = sitePersonel[i].Department;

        if(opt == text ){
          var wx = document.getElementById("showDept");
        wx.innerHTML = wx.innerHTML + sitePersonel[i].Teacher +"&nbsp; &nbsp; &nbsp; &nbsp;  "+ sitePersonel[i].subject+ "<br>";
   }
    }
return false;
}
function showBySubject(){
          var sitePersonel = [];
          var allotment = []
          console.log(sitePersonel);
            sitePersonel = JSON.parse(localStorage.getItem("MyAllocation"));
           if(sitePersonel==null)
           {
          sitePersonel = [];
           }
          console.log(sitePersonel);
          var e = document.getElementById("subj_d"); 
          var value = e.options[e.selectedIndex].value;
          var text = e.options[e.selectedIndex].text;
          var wx = document.getElementById("showsub");
          wx.innerHTML="";
          var prev="";
          for(var i = 0; i < sitePersonel.length; i++) {
              var opt = sitePersonel[i].subject;
              if(opt == text ){
                var wx = document.getElementById("showsub");
              wx.innerHTML = wx.innerHTML + sitePersonel[i].Teacher +"&nbsp; &nbsp; &nbsp; &nbsp;  "+ sitePersonel[i].Department+ "<br>";
         }
          }
return false;
}

function tc(a,b)
{

    document.getElementById(a).disabled= false;
          var sitePersonel = [];
          var allotment = [];
          console.log(sitePersonel);
            sitePersonel = JSON.parse(localStorage.getItem("teacher"));
           if(sitePersonel==null)
           {

          sitePersonel = [];

           }
      console.log(sitePersonel);
      var e = document.getElementById(b); 
          var value = e.options[e.selectedIndex].value;
          var text = e.options[e.selectedIndex].text;
      var tt = document.getElementById(a); 

      var length = tt.options.length;
      for (z = length; z >=1; z--) {
      tt.remove(z) ;
      }
      for(var i = 0; i < sitePersonel.length; i++) {

              var opt =   "Teacher Name:"+sitePersonel[i].teacher  +" Username:"+sitePersonel[i].teacher_uname  ;

              if(opt == text){
                   addSingleValue_toDropdown(a,sitePersonel[i].teacher_department);
                }
      }
             myFunction();
return false;
}

function teacherChange(){
  tc("dept_drop","teacher_drop");
    }


function teaChange(){
  tc("d_drop","t_drop");
 }
function allocate1(){
        var sitePersonel = [];
        var allotment = []
        y= document.getElementById("hod_pass").value;
             if(!password_Check(y))return false;
        console.log(sitePersonel);

          sitePersonel = JSON.parse(localStorage.getItem("HODAllocation"));

         if(sitePersonel==null)
         {

        sitePersonel = [];
         }
        var e = document.getElementById("t_drop"); 
        var value1 = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;
        var teacherdrop = text;
        var e = document.getElementById("d_drop"); 
        var value3 = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;
        var dept_drop = text;

        if(value1 == "me" || value3 == "me")
        {
           pop("aallocate1","Please select all fields");
           return false;
        } 
        var flag=0;
    for(var i=0;i<sitePersonel.length;i++)
    {
         if(sitePersonel[i].Department ==  dept_drop)
         {
            flag=1;
            sitePersonel[i].Teacher = teacherdrop;
             localStorage.setItem("HODAllocation", JSON.stringify(sitePersonel));
        pop("aallocate1","Successfully Added");
                 var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text" || elements[ii].type == "password") {
    elements[ii].value = "";
    }
    }
         }
    }
    if(flag==0){
        var combination = {
          "Teacher": teacherdrop,
          "Department": dept_drop,
          "pass": y
           
        }
        sitePersonel.push(combination);
        console.log(sitePersonel);
        localStorage.setItem("HODAllocation", JSON.stringify(sitePersonel));
        console.log(JSON.stringify(sitePersonel));
        pop("aallocate1","Successfully Added");
return false;
    }
}

