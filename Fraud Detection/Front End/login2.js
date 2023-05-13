function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="Test@123")
{
    alert("login succesfully");
    window.open("decrypt-file.html");
    return false;

}
else
{
    alert("login failed");
}


}