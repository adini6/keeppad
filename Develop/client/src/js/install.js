const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt event:'+ event)
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.remove('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
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

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app installed:', event);
    butInstall.classList.add('hidden');
});
