const test = require('ava')
const isBrowserHack = require('.')

test('It recognizes browser hacks successfully', t => {
	// Firefox
	t.true(isBrowserHack('\\0 all'))
	t.true(isBrowserHack('screen and (-moz-images-in-menus:0)'))
	t.true(isBrowserHack('screen and (min--moz-device-pixel-ratio:0)'))
	t.true(
		isBrowserHack(
			'all and (min--moz-device-pixel-ratio:0) and (min-resolution: .001dpcm)'
		)
	)
	t.true(
		isBrowserHack(
			'all and (-moz-images-in-menus:0) and (min-resolution: .001dpcm)'
		)
	)
	t.true(isBrowserHack('screen and (min-width:0\\0)'))
	t.true(
		isBrowserHack(
			'screen and (-ms-high-contrast: active), (-ms-high-contrast: none)'
		)
	)
	t.true(
		isBrowserHack(
			'all and (min--moz-device-pixel-ratio:0) and (min-resolution: 3e1dpcm)'
		)
	)

	// IE / Edge
	t.true(isBrowserHack('screen\\9'))
	t.true(isBrowserHack('\\0screen\\,screen\\9'))
	t.true(isBrowserHack('\\0screen'))
	t.true(isBrowserHack('screen and (min-width:0\\0)'))
	t.true(
		isBrowserHack(
			'screen and (-ms-high-contrast: active), (-ms-high-contrast: none)'
		)
	)

	// Opera
	t.true(
		isBrowserHack(
			'all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0)'
		)
	)
	t.true(
		isBrowserHack(
			'all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm)'
		)
	)
})

test('It correctly marks regular media queries as non-hacks', t => {
	t.false(isBrowserHack('all'))
	t.false(isBrowserHack('(min-width: 1px)'))
})
