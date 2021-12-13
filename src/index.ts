import plugin from 'tailwindcss/plugin'

module.exports = plugin(() => {}, {
	theme: {
		extend: {
			screens: {
				'can-hover': { raw: '(hover:hover)' },
				'cannot-hover': { raw: '(hover:none)' },
				'pointer-fine': { raw: '(pointer:fine)' },
				'pointer-coarse': { raw: '(pointer:coarse)' },
				'pointer-none': { raw: '(pointer:none)' },
				'any-can-hover': { raw: '(any-hover:hover)' },
				'any-cannot-hover': { raw: '(any-hover:none)' },
				'none-can-hover': { raw: 'not all and (any-hover:hover)' },
				'any-pointer-coarse': { raw: '(any-pointer:coarse)' },
				'any-pointer-fine': { raw: '(any-pointer:fine)' },
				'no-pointer-coarse': { raw: 'not all and (any-pointer:coarse)' },
				'no-pointer-fine': { raw: 'not all and (any-pointer:fine)' },
				'no-pointer': { raw: '(any-pointer:none)' },
				'only-touch': { raw: '(any-pointer:coarse) and (any-hover:none) { @media not all and (any-pointer:fine) {}}' },
				'only-cursor': { raw: '(any-pointer:fine) and (any-hover:hover) { @media not all and (any-pointer:coarse) {}}' },
				'touch+cursor': { raw: '(any-pointer:coarse) and (any-pointer:fine) and (any-hover: hover)' },
			}
		}
	}
})
