module.exports = value => {
	const regexes = [
		/screen\\9/i,
		/\\0screen/i,
		/screen\s+and\s*\(min-width\s*:\s*0\\0\)$/i,
		/screen\s+and\s*\(-ms-high-contrast\s*:\s*active\),\s*\(-ms-high-contrast\s*:\s*none\)$/i,
		/\\0\s+all/,
		/\(min-resolution\s*:\s*\.001dpcm\)/,
		/min--moz-device-pixel-ratio\s*:\s*0/,
		/screen\s+and\s*\(-moz-images-in-menus\s*:\s*0\)/,
		/all\s+and\s*\(-webkit-min-device-pixel-ratio:\s*10000\)\s*,\s*not\s+all\s+and\s*\(-webkit-min-device-pixel-ratio\s*:\s*0\)/
	]

	return regexes.some(regex => regex.test(value))
}
