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


if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(persistent => {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });
  