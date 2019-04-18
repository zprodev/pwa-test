function output(text) {
  document.body.appendChild(new Text(text));
  document.body.appendChild(document.createElement('br'));
}

const cookie = document.cookie;
if (!cookie) document.cookie = Date.now();

const strage = localStorage.getItem('time');
if (!strage) localStorage.setItem('time', Date.now());

output(`cookie = ${cookie}`);
output(`localStorage = ${strage}`);
