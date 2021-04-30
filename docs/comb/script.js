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
        window.threejsxr_vrbtn.onclick();
    }

    window.threejsxr_onSessionEnded = function()
    {
        window.xrManager.toggleVR();
    }

    trySwitchingThreejsUnityScene();

});
