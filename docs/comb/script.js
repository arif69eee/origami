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
        setTimeout(window.threejsxr_vrbtn.onclick, 5000);
    }

    window.threejsxr_onSessionEnded = function()
    {
        setTimeout(window.xrManager.toggleVR, 5000);
    }

    trySwitchingThreejsUnityScene();

});
