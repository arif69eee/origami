$(document).ready(function()
{
    //alert('$(document).ready(function()');
    //$("#VRButton").hide();

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
        $("#VRButton").focus();
        setTimeout(window.threejsxr_vrbtn.onclick, 7000);
    }

    window.threejsxr_onSessionEnded = function()
    {
        //alert('window.threejsxr_onSessionEnded = function()');
        $("#VRButton").focus();
        setTimeout(window.xrManager.toggleVR, 7000);
    }

    trySwitchingThreejsUnityScene();

});
