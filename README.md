# Tailwind CSS Interaction Media Variants
Tailwind CSS variants for detecting the interaction media features of a device.

**Note:** This project is under active development and may be subject to breaking changes until it reaches a stable version 1.0.0.

## Installation
Install with your favorite NodeJS package manager:

```bash
$ npm install tailwindcss-interaction-media

$ yarn add tailwindcss-interaction-media
```

Add to your Tailwind CSS config file:

```js
// tailwind.config.js

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-interaction-media')
  ],
}
```

## Usage
This plugin adds variants for the CSS interaction media features `hover`, `pointer`, `any-hover`, and `any-pointer`, as well as some semantically named combinations based on [this article](https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/) by Patrick H. Lauke.

These variants help address problems when creating adaptive designs using Tailwind CSS. A common issue when adapting for touchscreen devices is having the utilities applied by the `hover:` variant "stick" after being tapped.

This can be trivially addressed by using the `any-can-hover:` variant in combination with the `hover:` variant so that hover utilities are applied when the device has **any** pointer with hover capabilities. This way we can support modern hybrid-input devices such as smartphones with a bluetooth mouse.

### Hover
These variants detect the hover capabilities of the device's interaction media.

- `can-hover:` - Applies a utility if the device's **primary** pointer **can** hover.
- `cannot-hover:` - Applies a utility if the device's **primary** pointer **cannot** hover.
- `any-can-hover:` - Applies a utility if **any** of the device's pointers **can** hover.
- `any-cannot-hover:` - Applies a utility if **any** of the device's pointers **cannot** hover.
- `none-can-hover:` - Applies a utility if **none** of the device's pointers **can** hover.

**Note:** Be weary about the logical differences between `any-cannot-hover` and `none-can-hover`.

### Pointer
These variants detect the pointer capabilities of the device's interaction media.

- `pointer-coarse:` - Applies a utility if the device's **primary** pointer has **coarse** accuracy such as touch.
- `pointer-fine:` - Applies a utility if the device's **primary** pointer has **fine** accuracy such as a mouse cursor.
- `pointer-none:` - Applies a utility if the device has **no primary** pointer.
- `any-pointer-coarse:` - Applies a utility if **any** of the device's pointers have **coarse** accuracy such as touch.
- `any-pointer-fine:` - Applies a utility if **any** of the device's pointers have **fine** accuracy such as a mouse cursor.
- `no-pointer-coarse:` - Applies a utility if **none** of the device's pointers have **coarse** accuracy.
- `no-pointer-fine:` - Applies a utility if **none** of the device's pointers have **fine** accuracy.
- `no-pointer:` - Applies a utility if the device has **no pointers at all**.

### Semantic
These variants are logical combinations of the above variants expressed with a semantic name. They are based off the truth table from [this article](https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/).

- `only-touch:` - Applies a utility if the device **only has touch** interaction available, such as a touchscreen or a pen without hover capabilities.
- `only-cursor:` - Applies a utility if the device **only has cursor** interaction available such as a mouse or a pen with hover capabilities.
- `touch+cursor:` - Applies a utility if the device **has both cursor and touch** interaction available.

## License

Tailwind CSS Interaction Media is [MIT](LICENSE) licensed.
