window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
    const callback = (EmbedController) => { };
    IFrameAPI.createController(element, options, callback);
};

const options = {
    width: '50%',
    height: '100',
    uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
};
