$(document).ready(function()
{
    //alert('$(document).ready(function()');
    $("#VRButton").hide();

    var lastSceneClosed = null;

    function trySwitchingThreejsUnityScene()
    {
        if(window.xrManager.isInVRSession)
        {
            window.xrManager.toggleVR();
        }
        else if(window.threejsxr_vrbtn.textContent == 'EXIT VR')
        {
            window.threejsxr_vrbtn.onclick();
        }

        setTimeout(trySwitchingThreejsUnityScene, 15000);
    }

    window.unityxr_onEndSession = function()
    {
        //alert('window.unityxr_onEndSession = function()');
        //setTimeout(function(){window.focus();}, 6000);
        //setTimeout(function(){window.threejsxr_vrbtn.onclick();}, 7000);
        lastSceneClosed = "unityxr";
        $('#switch-scenes-btn').show();
        $("#VRButton").hide();
    }

    window.threejsxr_onSessionEnded = function()
    {
        //alert('window.threejsxr_onSessionEnded = function()');
        //setTimeout(function(){window.focus();}, 6000);
        //setTimeout(function(){window.xrManager.toggleVR();}, 7000);
        lastSceneClosed = "threejsxr";
        $('#switch-scenes-btn').show();
        $("#VRButton").hide();
    }

    $('#switch-scenes-btn').click(function()
    {
        if(lastSceneClosed == "unityxr")
        {
            window.threejsxr_vrbtn.onclick();
        }
        else if(lastSceneClosed == "threejsxr")
        {
            window.xrManager.toggleVR();
        }
    });

    trySwitchingThreejsUnityScene();

});
