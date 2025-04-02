function output(text) {
  document.body.appendChild(new Text(text));
  document.body.appendChild(document.createElement('br'));
}

let cookie = document.cookie.split('; ').filter(value => value.startsWith('time='))[0];
if (!cookie) {
  cookie = `time=${Date.now()}`;
  document.cookie = `${cookie}; max-age=864000`;
}

let strage = localStorage.getItem('time');
if (!strage) localStorage.setItem('time', strage = Date.now());

output(`cookie = ${cookie.split('=')[1]}`);
output(`localStorage = ${strage}`);

// Link to GitHub
{
  const link = document.createElement('a');
  link.href = 'https://github.com/zprodev/pwa-test';
  link.text = 'A Tag Link';
  document.body.appendChild(link);
  document.body.appendChild(document.createElement('br'));
}

{
  const link = document.createElement('a');
  link.href = 'javascript:void(0)';
  link.onclick = () => {
    location.href = 'https://github.com/zprodev/pwa-test';
  }
  link.text = 'JavaScript Link';
  document.body.appendChild(link);
  document.body.appendChild(document.createElement('br'));
}

{
  const link = document.createElement('a');
  link.href = 'https://github.com/zprodev/pwa-test';
  link.target = '_blank';
  link.text = 'New Window Link';
  document.body.appendChild(link);
  document.body.appendChild(document.createElement('br'));
}

{
  let button = document.createElement('button');
  button.innerText = 'get permissionState';
  document.body.appendChild(button);
  document.body.appendChild(document.createElement('br'));
  button.onclick = async() => {
    const registration = await navigator.serviceWorker.ready;
    const permissionState = await registration.pushManager.permissionState({userVisibleOnly:true});
    alert(permissionState);
  }
}

{
  let button = document.createElement('button');
  button.innerText = 'on subscribe';
  document.body.appendChild(button);
  document.body.appendChild(document.createElement('br'));
  button.onclick = async() => {
    const keyPair = await crypto.subtle.generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256'
      },
      true,
      ['sign', 'verify']
    );
    const publicKey = await crypto.subtle.exportKey('raw', keyPair.publicKey);

    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly:true,
      applicationServerKey: publicKey
    }).catch(e => {
      alert(e);
    });
    if(subscription){
      alert('true');
      alert('endpoint: ' + subscription.endpoint);
    }else{
      alert('false');
    }
  }
}

{
  let button = document.createElement('button');
  button.innerText = 'can getSubscription';
  document.body.appendChild(button);
  document.body.appendChild(document.createElement('br'));
  button.onclick = async() => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if(subscription){
      alert('true');
      alert('endpoint: ' + subscription.endpoint);
    }else{
      alert('false');
    }
  }
}
