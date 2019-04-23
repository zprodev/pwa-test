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
