// This is the demo secret key. In production, we recommend
// you store your secret key(s) safely.
const SECRET_KEY = '0x4AAAAAAARPdw56Cocrz8mnVZswYvF6BLs';

async function handlePost(request) {
	const body = await request.formData();
	// Turnstile injects a token in "cf-turnstile-response".
	const token = body.get('cf-turnstile-response');
	const ip = request.headers.get('CF-Connecting-IP');

	// Validate the token by calling the
	// "/siteverify" API endpoint.
	let formData = new FormData();
	formData.append('secret', SECRET_KEY);
	formData.append('response', token);
	formData.append('remoteip', ip);

	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST',
	});

	const outcome = await result.json();
	if (outcome.success) {
		return await changeText();
	} else {
		var customTurnstile = document.getElementById('customTurnstile');
		customTurnstile.classList.remove('invisible');
		customTurnstile.classList.add('visible');
		return customTurnstile;
	}

async function changeText() {
	document.getElementById('firstTextToChange').innerText = '';
	document.getElementById('secondeTextToChange').innerHTML = '<span style="color: rgb(71, 71, 71);"><img style="text-align: left; padding-top: 25px; padding-bottom: 25px;" width="50px" src="assets/img/load-validv2.png">      الاتصال بالموقع آمن</span>';
	document.getElementById('lastTextToChange').innerHTML = '<span style="color: rgb(71, 71, 71);">...يعالج</span>';

	await new Promise(r => setTimeout(r, 1000));
	window.location.href = "https://ummetvakfi.org/ar//proje/%D8%AD%D9%85%D9%84%D8%A9%20%D8%A5%D8%BA%D8%A7%D8%AB%D9%8A%D8%A9%20%D8%B9%D8%A7%D8%AC%D9%84%D8%A9-%D8%BA%D8%B2%D8%A9/304";
}

}