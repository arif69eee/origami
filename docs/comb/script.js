$(document).ready(function()
{
    //alert('$(document).ready(function()');
    //$("#VRButton").hide();

    function trySwitchingThreejsUnityScene()
    {
        if(window.xrManager.isInVRSession)
        {
            window.xrManager.toggleVR();
            window.threejsxr_vrbtn.onclick();
        }
        else if(window.threejsxr_vrbtn.textContent == 'EXIT VR')
        {
            window.threejsxr_vrbtn.onclick();
            window.xrManager.toggleVR();
        }

        setTimeout(trySwitchingThreejsUnityScene, 5000);        
    }

    trySwitchingThreejsUnityScene();
});
