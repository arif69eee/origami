$(document).ready(function()
{
    //$("#VRButton").hide();

    setTimeout(function() 
    {
        toggleThreejsVR();
    }, 5000);
});


function toggleThreejsVR()
{
    if ( currentSession === null ) {

        // WebXR's requestReferenceSpace only works if the corresponding feature
        // was requested at session creation time. For simplicity, just ask for
        // the interesting ones as optional features, but be aware that the
        // requestReferenceSpace call will fail if it turns out to be unavailable.
        // ('local' is always available for immersive sessions and doesn't need to
        // be requested separately.)

        const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking' ] };
        navigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );

    } else {

        currentSession.end();

    }

}
