function showMessage(msg) {
  var current = $('#message').html();
  $('#message').html(current + '<br>' + msg);
}

showMessage('Initialized');

function registerSw() {
  showMessage('Trying to register SW...');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/dinoloader/sw.js').then(
        function(registration) {
          showMessage('ServiceWorker registration successful with scope: ' +
              registration.scope);
        }).catch(function(err) {
          showMessage('ServiceWorker registration failed: ' + err);
        });
  }
}

registerSw();
