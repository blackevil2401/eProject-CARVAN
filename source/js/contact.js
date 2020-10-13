function send()
{
    var arr = document.getElementsByTagName('input'); 
    var name = arr[0].value;  
    var sub = arr[2].value;
    var email = arr[1].value;

    var textarea = document.getElementById("textarea").value;

    var reemail = /^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

    if(name == "" || email == "" || sub == "" || email == "")
    {
        alert("Please input the information");
        return;
    }
    
    if(reemail.test(email))
    {

    }else{
        alert("Format of mail is wrong,please try again!");
        return;
    }

    if(textarea == "")
    {
        alert("Please input the information!");
        return;
    }

    
    alert("Your request have been sent!");

}