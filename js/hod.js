 function checkStatus()
     {
        localStorage.setItem("status", "out");
     }

  (function($, window, document) {
       

   $(function() {
  remember();

     $("#hod_id").click(function(){
    addStudents();
     });

     $("#logout").click(function(){
    checkStatus();
     });



   });
    
      remember();

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
 function remember(){
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
       }else
       {
       window.location.href = "teacher_page.html";
       return false;
       }
    }

   if(localStorage.getItem("status")=="inSTUD")
    {
     window.location.href = "student.html";
     return false;
    }
 $("#name").html("Welcome &nbsp;"+localStorage.getItem("id1")+"&nbsp;HOD <br><br><center><font size='3' >"+localStorage.getItem("idname")+"</font></center>" );

  if(localStorage.getItem("id1")==null)
    {
    window.location.href = "Login.html";
    return false;
    }
 }

 function check_pass(y){

             if(y != "" ) {
      if(y.length < 6) {
         pop("hod_id","Password must contain at least six characters!");
        return false;
      }
      if(y == x) {
          pop("hod_id"," Password must be different from Username!");  
          return false;
      }
      re = /[0-9]/;
      if(!re.test(y)) {
        pop("hod_id"," password must contain at least one number (0-9)!");     
        return false;
      }
      re = /[a-z]/;
      if(!re.test(y)) {
         pop("hod_id","Error: password must contain at least one lowercase letter (a-z)!");
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(y)) {
       pop("hod_id","password must contain at least one lowercase letter (a-z)!");
        return false;
      }   
    } else {
           pop("hod_id","Please check that you've entered and confirmed your password!");
    
      return false;
    }
 }

 function addStudents(){      
    var sitePersonel = [];
    var allotment = []
    console.log(sitePersonel);
    sitePersonel = JSON.parse(localStorage.getItem("Students"));
     if(sitePersonel==null)
     {
    sitePersonel = [];
     }
     y= $("#pass").val();
     x=$("#uname").val();
    za=$("#username").val();
    if(!(y.toLowerCase().trim().length< 3) || !(x.toLowerCase().trim().length< 3) || !(y.toLowerCase().trim().length< 3))
      {
        flag=0;
        for(var i=0;i<sitePersonel.length;i++)
           {
				   if(sitePersonel[i].student_uname.toLowerCase().trim() == "s_"+x.toLowerCase().trim())
				    {
			       pop("hod_id","Username already exists");
             flag=1;return false;
				}
           }


           if(!check_pass(y))return false;


x="s_"+x;
 var combination = {


      "student_uname": x,
      "student_pass": y,
      "student_name": $("#username").val(),
      "student_department": localStorage.getItem("id1")
      
    }
    sitePersonel.push(combination);
    console.log(sitePersonel);
    localStorage.setItem("Students", JSON.stringify(sitePersonel));
         pop("hod_id","Successfully Added");
var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}

}else{
         pop("hod_id","Please enter all fields correctly");
}
     }
