function output(text) {
  document.body.appendChild(new Text(text));
  document.body.appendChild(document.createElement('br'));
}

let cookie = document.cookie.split('; ').filter(value => value.startsWith('time='))[0];
if (!cookie) document.cookie = cookie = `time=${Date.now()}`;

let strage = localStorage.getItem('time');
if (!strage) localStorage.setItem('time', strage = Date.now());

output(`cookie = ${cookie.split('=')[1]}`);
output(`localStorage = ${strage}`);
