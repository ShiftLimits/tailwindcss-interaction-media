# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
Initial release!

### Added
- Add `can-hover:` variant that applies a utility if the device's primary pointer can hover
- Add `cannot-hover:` variant that applies a utility if the device's primary pointer cannot hover
- Add `pointer-coarse:` variant that applies a utility if the device's primary pointer has coarse accuracy such as touch
- Add `pointer-fine:` variant that applies a utility if the device's primary pointer has fine accuracy such as a mouse cursor
- Add `pointer-none:` variant that applies a utility if the device has no primary pointer
- Add `any-can-hover:` variant that applies a utility if any of the device's pointers can hover
- Add `any-cannot-hover:` variant that applies a utility if any of the device's pointers cannot hover
- Add `none-can-hover:` variant that applies a utility if none of the device's pointers can hover
- Add `any-pointer-coarse:` variant that applies a utility if any of the device's pointers have coarse accuracy such as touch
- Add `any-pointer-fine:` variant that applies a utility if any of the device's pointers have fine accuracy such as a mouse cursor
- Add `no-pointer-coarse:` variant that applies a utility if none of the device's pointers have coarse accuracy
- Add `no-pointer-fine:` variant that applies a utility if none of the device's pointers have fine accuracy
- Add `no-pointer:` variant that applies a utility if the device has no pointers at all
- Add `only-cursor:` variant that applies a utility if the device only has cursor interaction available such as a mouse or a pen with hover capabilities
- Add `only-touch:` variant that applies a utility if the device only has touch interaction available such as a touchscreen or a pen without hover capabilities like some android stylus
- Add `touch+cursor:` variant that applies a utility if the device has both cursor and touch interaction available
