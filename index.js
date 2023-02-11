// const form=document.getElementById('myForm');
// const firstname=document.getElementById('first_name');

// form.addEventListener('submit',e=>{
//     e.preventDefault;

//     validateInputs();
// })

// const validateInputs=()=>{
//     if(firstname==''){
//         alert('please re-enter');
//     }
// }

function clearErrorrs(){
    errors=document.getElementsByClassName('error');
    for(let item of errors) {
        item.innerHTML='';
    }  
}

function setError(id,error){

    element=document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML='Error: '+error;

}

function validate(){
var submition=true;
clearErrorrs();

let fname=document.forms['myForm']["fname"].value;
let mname=document.forms['myForm']["mname"].value;
let lname=document.forms['myForm']["lname"].value;
let fphone=document.forms['myForm']["fphone"].value;
let fpassword=document.forms['myForm']["fpassword"].value;
let fcpassword=document.forms['myForm']["fcpassword"].value;

if(fname.length<5 && fname.length>0){
    setError('fname','Length is too short');
    submition=false;
} 
if(mname.length<5  && mname.length>0){
    setError('mname','Length is too short');
    submition=false;
}
if(lname.length<5 && lname.length>0){
    setError('lname','Length is too short');
    submition=false;
}

if(fphone.length !== 10){
    setError('phone','Contact Number should be 10 digit');
    submition=false;
}
if(fphone == 123456789){
    setError('phone','Contact Number cannot be 123456789');
    submition=false;
}
if(fpassword == 'password'){
    setError('password','Password field must not be filled as password');
    submition=false;
}
if(fpassword == fname || fpassword==mname || fpassword==lname){
    setError('password','Password must not be users name');
    submition=false;
}
if(fcpassword!==fpassword){
    setError('cpassword','Password does not match');
    submition=false;
}
if(submition==true){
    var opened=window.open();
    opened.document.write(`
    <html>
     <body>
       
    <center>
        <h1>Successful</h1>
        <img src="tick.png" alt="success">
    </center>
     </body>
    </html>
`);
}

return submition;

}



