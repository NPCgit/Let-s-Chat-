function addUser()
{
    //Get username

    username = document.getElementById("user_name").value;
    //saves username in localStorage
    
                        //key      ,  value
    localStorage.setItem("username", username);

    window.location = "kwitter_room.html";

}
