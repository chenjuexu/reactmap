export const loadMapApi = () => { 
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyATAS_VtD5kIAjs_kVDaKcrUZst7ERYT9g&libraries=geometry,places&language=en&region=CA&v=quarterly`;
    const scripts = document.getElementsByTagName('script');
    // Go through existing script tags, and return google maps api tag when found.
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i];
        }
    }
// adding it to DOM
    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};
