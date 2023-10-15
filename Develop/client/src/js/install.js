const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log('no deferred prompt available');
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
    console.log('app installed:', event);
    butInstall.classList.add('hidden');
});
