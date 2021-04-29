$(document).ready(function()
{
    //$("#VRButton").hide();

    setTimeout(function() 
    {
        alert($("#VRButton"));
        alert($("#VRButton")[0]);

        $("#VRButton")[0].click();
    }, 5000);
});
