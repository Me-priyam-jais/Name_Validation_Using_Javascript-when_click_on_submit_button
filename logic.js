//selecting input and submit button
let Nameinput=document.querySelector("#Namein");
let Namebtn=document.querySelector("#Namebtn");
// applying event listner to get the name from the input and validating that it might include only english alphabets
// neither any kind of special charcter nor any number
Namebtn.addEventListener("click",()=>{
  // taking data entered by the user to validating it ,into a variable named as Name
  Name=Nameinput.value;
  // applying a for loop on the string the user had entered into the input 
  for(let i=0;i<Name.length;i++)
  {
   // condition to check the Name only contain english alphabets 
   if((Name.charCodeAt(i)>=65 && Name.charCodeAt(i)<=90) || (Name.charCodeAt(i)>=97 && Name.charCodeAt(i)<=122))
   { 
    // here we are setting the input to empty , when we work in real we can send this data to the database and again make this empty
    Nameinput.value="";
   }
   else
   {
    // here we are defining what to do when any invalid character or number is entered by the user simply giving a alert to the user 
    Nameinput.style.borderColor="red";
    setTimeout(() => {
      alert("Only alphabets are valid in name");
    Nameinput.value="";
    },2);
    Nameinput.style.borderColor="black";
    break;
   }
  }
})

