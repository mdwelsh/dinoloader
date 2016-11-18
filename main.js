function showMessage(msg) {
  $('#message').text = msg;
}


function registerSw() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/dinoloader/sw.js').then(
        function(registration) {
          showMessage('ServiceWorker registration successful with scope: ',
              registration.scope);
        }).catch(function(err) {
          showMessage('ServiceWorker registration failed: ', err);
        });
}

showMessage('Initialized');
registerSw();
