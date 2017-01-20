    var departments=[];
    var combination={};

    function rememberlast()
    {

      if(localStorage.getItem("status")=="out")
{


window.location.href = "Login.html";
  return false;
}

  if(localStorage.getItem("status")=="in")
{

if(localStorage.getItem("idname")=="admin")
  {}else{

window.location.href = "teacher_page.html";
  return false;

  }

}

 if(localStorage.getItem("status")=="inHOD")
{


window.location.href = "hod.html";
  return false;



}
 

       document.getElementById("subj_drop").disabled= true;
        document.getElementById("dept_drop").disabled= true;


     document.getElementById("uid1").innerHTML="Welcome &nbsp;"+ localStorage.getItem("id1");

     if(localStorage.getItem("idname")==null)
{


window.location.href = "Login.html";
  return false;
  
}

      departments = JSON.parse(localStorage.getItem("departments"));

       teachers = JSON.parse(localStorage.getItem("teacher"));
    if(departments == null)
    {
    departments=[];

    }


    var select = document.getElementById("selectNumber"); 


    for(var i = 0; i < departments.length; i++) {
        var opt = departments[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
 var dept_drop = document.getElementById("dept_drop"); 

  var dept_d = document.getElementById("dept_d"); 


    for(var i = 0; i < departments.length; i++) {
        var opt = departments[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
          
        dept_d.appendChild(el);

    }


  sub = JSON.parse(localStorage.getItem("all_subject"));
    if(sub == null)
    {
   sub=[];

    }


 var sub_d = document.getElementById("subj_d"); 
 var dept_teach = document.getElementById("dept_d_teach"); 
  for(var i = 0; i < sub.length; i++) {
        var opt = sub[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        sub_d.appendChild(el);
      
    }



     for(var i = 0; i < departments.length; i++) {
        var opt = departments[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
      
        dept_teach.appendChild(el);
      
    }
  All_teachers = JSON.parse(localStorage.getItem("All_teachers"));
  if(All_teachers == null)
    {
    All_teachers=[];

    }
 var teacher_drop = document.getElementById("teacher_drop"); 


    for(var i = 0; i < All_teachers.length; i++) {
        var opt = All_teachers[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        teacher_drop.appendChild(el);
    }


var teacher_drop = document.getElementById("t_drop"); 


    for(var i = 0; i < All_teachers.length; i++) {
        var opt = All_teachers[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        teacher_drop.appendChild(el);
    }

    }

    function add(){



    if(! (document.getElementById("dept").value.length < 3))
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
    departments.push(document.getElementById("dept").value);

    localStorage.setItem("departments", JSON.stringify(departments));

    confirm("Successfully Added");






  var dept_d = document.getElementById("dept_d_teach"); 

        var opt = document.getElementById("dept").value;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
       dept_d.appendChild(el);


    var select = document.getElementById("selectNumber"); 

        var opt = document.getElementById("dept").value;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);



       var dept_drop = document.getElementById("dept_d"); 

        var opt = document.getElementById("dept").value;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dept_drop.appendChild(el);



    }
    else{


    	confirm("Please enter valid department");
    }



    }


    function subjectadd()
    {



  if(! (document.getElementById("subject").value.length < 3))
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

    confirm("Successfully Added");

    var sub_d = document.getElementById("subj_d"); 
 
 
        var opt = subject;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        sub_d.appendChild(el);
      
    





   }else{





    confirm("Enter proper subject name");

   }}

  function addteacher()
  {

  
  if(! (document.getElementById("teacher").value.length < 3) &&  ! (document.getElementById("teacher_uname").value.length < 3) && ! (document.getElementById("teacher_pass").value.length < 3))
  {

        y= document.getElementById("teacher_pass").value;
        x=document.getElementById("teacher_uname").value;
           za=document.getElementById("teacher_design").value;

             if(y != "" ) {
      if(y.length < 6) {
        alert("Error: Password must contain at least six characters!");
        
        return false;
      }
      if(y == x) {
        alert("Error: Password must be different from Username!");
        
        return false;
      }
      re = /[0-9]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one number (0-9)!");
       
        return false;
      }
      re = /[a-z]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
       
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        
        return false;
      }



          
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
   
      return false;
    }










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

    //localStorage.setItem("allotment", JSON.stringify(allotment));


    localStorage.setItem("teacher", JSON.stringify(sitePersonel));


    localStorage.setItem("All_teachers", JSON.stringify(All_teachers));

    console.log(JSON.stringify(sitePersonel));




    var td = document.getElementById("teacher_drop"); 



        var opt = "Teacher Name:"+myteacher+" Username:"+x;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        td.appendChild(el);

    confirm("Successfully Added");




  }
  else{


    confirm("Please enter all fields. Atleast 3 characters for username and name and 6 characters for password");
  }
 	
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


confirm("Please select all fields");
return false;

    } 


    var combination = {
      "Teacher": teacherdrop,
      "Department": dept_drop,
         "subject": subj_drop
    }
    sitePersonel.push(combination);
    
    console.log(sitePersonel);


    //localStorage.setItem("allotment", JSON.stringify(allotment));


    localStorage.setItem("MyAllocation", JSON.stringify(sitePersonel));

    console.log(JSON.stringify(sitePersonel));

    confirm("Successfully Added");

     }


     function showDept()
     {




             var sitePersonel = [];
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






     }

     function teacherChange(){
document.getElementById("dept_drop").disabled= false;

              var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("teacher"));

     if(sitePersonel==null)
     {

    sitePersonel = [];

     }
console.log(sitePersonel);
var e = document.getElementById("teacher_drop"); 
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;


var tt = document.getElementById("dept_drop"); 



var length = tt.options.length;
for (z = length; z >=1; z--) {
tt.remove(z) ;
}
for(var i = 0; i < sitePersonel.length; i++) {



        var opt =   "Teacher Name:"+sitePersonel[i].teacher  +" Username:"+sitePersonel[i].teacher_uname  ;

        if(opt == text){

        
        var el = document.createElement("option");
        el.textContent = sitePersonel[i].teacher_department;
        el.value = sitePersonel[i].teacher_department;
        tt.appendChild(el);
   }





}

   

       myFunction();


     }


 function teaChange(){
document.getElementById("d_drop").disabled= false;

              var sitePersonel = [];
    var allotment = []

    console.log(sitePersonel);

      sitePersonel = JSON.parse(localStorage.getItem("teacher"));

     if(sitePersonel==null)
     {

    sitePersonel = [];

     }
console.log(sitePersonel);
var e = document.getElementById("t_drop"); 
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;


var tt = document.getElementById("d_drop"); 



var length = tt.options.length;
for (z = length; z >=1; z--) {
tt.remove(z) ;
}
for(var i = 0; i < sitePersonel.length; i++) {



        var opt =   "Teacher Name:"+sitePersonel[i].teacher  +" Username:"+sitePersonel[i].teacher_uname  ;

        if(opt == text){

        
        var el = document.createElement("option");
        el.textContent = sitePersonel[i].teacher_department;
        el.value = sitePersonel[i].teacher_department;
        tt.appendChild(el);
   }





}

   

  


     }
function allocate1(){

  



        
                            var sitePersonel = [];
    var allotment = []



    y= document.getElementById("hod_pass").value;
        

             if(y != "" ) {
      if(y.length < 6) {
        alert("Error: Password must contain at least six characters!");
        
        return false;
      }
     
      re = /[0-9]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one number (0-9)!");
       
        return false;
      }
      re = /[a-z]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
       
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(y)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        
        return false;
      }



          
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
   
      return false;
    }













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


confirm("Please select all fields");
return false;

    } 


    var flag=0;

for(var i=0;i<sitePersonel.length;i++)
{


     if(sitePersonel[i].Department ==  dept_drop)
     {


        flag=1;

        confirm("The previous HOD was "+ sitePersonel[i].Teacher);
        sitePersonel[i].Teacher = teacherdrop;

         localStorage.setItem("HODAllocation", JSON.stringify(sitePersonel));

            confirm("Successfully Added");

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


    //localStorage.setItem("allotment", JSON.stringify(allotment));


    localStorage.setItem("HODAllocation", JSON.stringify(sitePersonel));

    console.log(JSON.stringify(sitePersonel));

    confirm("Successfully Added");




}










}


       function checkStatus()
     {



        localStorage.setItem("status", "out");



      
     }