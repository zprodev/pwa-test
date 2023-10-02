if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');

  const language = navigator.language.startsWith('ja') ? 'ja' : 'en';
  const manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  manifestLink.href = `./manifest_${language}.webmanifest`;
  document.getElementsByTagName('head')[0].appendChild(manifestLink);  
} else {
  alert('ServiceWorker unavailable');
}
