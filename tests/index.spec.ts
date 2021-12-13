import tailwindcss from 'tailwindcss'
import postcss from 'postcss'
import cssMatcher from 'jest-matcher-css'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import InteractionMedia from '../src'

expect.extend({
	toMatchCss: cssMatcher
})

function generateUtilityCSS(config:Partial<TailwindConfig&{safelist:string[]}> = {}) {
	config = Object.assign({}, { theme: { colors: { red: 'red' }}, corePlugins: ['backgroundColor'] }, config)
	return postcss(
		tailwindcss({
			...config as TailwindConfig,
			plugins: [InteractionMedia]
		})
	).process('@tailwind utilities;', {
		from: undefined,
	}).then(result => {
		return result.css;
	})
}

describe('Tailwind CSS Interaction Media Features', () => {
	describe('Hover variants', () => {
		// Can Hover
		describe('can-hover', () => {
			it('should create a media query to detect when the primary pointer can hover', () => {
				const output = `
					@media (hover:hover) {
						.can-hover\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['can-hover:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Cannot Hover
		describe('cannot-hover', () => {
			it('should create a media query to detect when the primary pointer cannot hover', () => {
				const output = `
					@media (hover:none) {
						.cannot-hover\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['cannot-hover:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Any Can Hover
		describe('any-can-hover', () => {
			it('should create a media query to detect when any pointer can hover', () => {
				const output = `
					@media (any-hover:hover) {
						.any-can-hover\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['any-can-hover:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Any Cannot Hover
		describe('any-cannot-hover', () => {
			it('should create a media query to detect when any pointer cannot hover', () => {
				const output = `
					@media (any-hover:none) {
						.any-cannot-hover\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['any-cannot-hover:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// None Can Hover
		describe('none-can-hover', () => {
			it('should create a media query to detect when no pointers can hover', () => {
				const output = `
					@media not all and (any-hover:hover) {
						.none-can-hover\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['none-can-hover:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
	})
	describe('Pointer variants', () => {
		// Pointer Coarse
		describe('pointer-coarse', () => {
			it("should create a media query to detect when the primary pointer's accuracy is coarse", () => {
				const output = `
					@media (pointer:coarse) {
						.pointer-coarse\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['pointer-coarse:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Pointer Fine
		describe('pointer-fine', () => {
			it("should create a media query to detect when the primary pointer's accuracy is fine", () => {
				const output = `
					@media (pointer:fine) {
						.pointer-fine\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['pointer-fine:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Pointer None
		describe('pointer-none', () => {
			it("should create a media query to detect when there is no primary pointer", () => {
				const output = `
					@media (pointer:none) {
						.pointer-none\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['pointer-none:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Any Pointer Coarse
		describe('any-pointer-coarse', () => {
			it("should create a media query to detect when any pointer's accuracy is coarse", () => {
				const output = `
					@media (any-pointer:coarse) {
						.any-pointer-coarse\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['any-pointer-coarse:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Any Pointer Fine
		describe('any-pointer-fine', () => {
			it("should create a media query to detect when any pointer's accuracy is fine", () => {
				const output = `
					@media (any-pointer:fine) {
						.any-pointer-fine\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['any-pointer-fine:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// No Pointer Coarse
		describe('no-pointer-coarse', () => {
			it("should create a media query to detect when none of the pointers have coarse accuracy", () => {
				const output = `
					@media not all and (any-pointer:coarse) {
						.no-pointer-coarse\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['no-pointer-coarse:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// No Pointer Fine
		describe('no-pointer-fine', () => {
			it("should create a media query to detect when none of the pointers have fine accuracy", () => {
				const output = `
					@media not all and (any-pointer:fine) {
						.no-pointer-fine\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['no-pointer-fine:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// No Pointer
		describe('no-pointer', () => {
			it("should create a media query to detect when there are no pointers at all", () => {
				const output = `
					@media (any-pointer:none) {
						.no-pointer\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['no-pointer:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
	})
	describe('Semantic variants', () => {
		// Only Touch
		describe('only-touch', () => {
			it("should create a media query to detect when only touch interaction is available", () => {
				const output = `
					@media (any-pointer:coarse) and (any-hover:none) {
						@media not all and (any-pointer:fine) {
							.only-touch\\:bg-red {
								background-color: red;
							}
						}
					}
				`

				return generateUtilityCSS({ safelist: ['only-touch:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Only Cursor
		describe('only-cursor', () => {
			it("should create a media query to detect when only cursor interaction is available", () => {
				const output = `
					@media (any-pointer:fine) and (any-hover:hover) {
						@media not all and (any-pointer:coarse) {
							.only-cursor\\:bg-red {
								background-color: red;
							}
						}
					}
				`

				return generateUtilityCSS({ safelist: ['only-cursor:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
		// Touch and Cursor
		describe('touch+cursor', () => {
			it("should create a media query to detect when both touch and cursor interactions are available", () => {
				const output = `
					@media (any-pointer:coarse) and (any-pointer:fine) and (any-hover: hover) {
						.touch\\+cursor\\:bg-red {
							background-color: red;
						}
					}
				`

				return generateUtilityCSS({ safelist: ['touch+cursor:bg-red'] }).then(result => {
					expect(result).toMatchCss(output)
				})
			})
		})
	})
})