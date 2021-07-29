# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Upgrade deps
  - mocha        8.2.1  →  9.0.3
  - set-value    3.0.2  →  4.0.0
  - unset-value  1.0.0  →  2.0.0

## [4.1.1] - 2021-05-07
### Changed
- Upgrade deps
  - lodash       4.17.20  →  4.17.21

## [3.0.0] - 2018-01-27
### Changed
- adds `.prime()` and `.default()` methods

## [2.0.0] - 2017-12-17
### Changed
- convert to class
- refactor to allow namespace to be set on constructor, thus `.namespace` was removed from the main export. Please see the readme for details.

## [1.0.1] - 2017-07-22
### Changed
- run update, lint, update deps

## [0.8.5] - 2017-02-25
### Changed
- Bump `isobject`.
- Bump `set-value`.
- Merge pull request [#7] from wtgtybhertgeghgtwtg/bump-dependencies
- run udpate

## [0.8.4] - 2016-05-30
### Changed
- run update
- adds `.union` method. resolves https://github.com/jonschlinkert/cache-base/issues/3
- generate docs
- run update, update deps
- make `.union` key behavior consistent with other methods
- generate docs

## [0.8.2] - 2016-03-02
### Changed
- handle single arg key as an array
- generate docs

## [0.8.1] - 2016-02-29
### Changed
- ensure value is a non-array object, only clear if `prop` is defined

## [0.8.0] - 2016-02-09
### Changed
- run update
- run update, lint
- minor refactor
- generate docs with verb

## [0.7.1] - 2015-11-23
### Changed
- update deps
- lint
- adds lazy-cache, event emitting
- events tests

## [0.7.0] - 2015-11-23
### Changed
- use eslint, lint
- refactor, simplify

## [0.6.0] - 2015-03-11
### Changed
- fix pick docs
- lint
- get rid of deps

## [0.4.0] - 2015-02-14
### Changed
- adds `.pick()` and `.omit()` methods
- adds tests
- build docs/readme

## [0.3.0] - 2015-02-13
### Changed
- adds npmignore
- adds travis
- rename
- copyright year, lint
- update deps
- build readme

## [0.2.0] - 2014-11-15
### Changed
- remove namespace stuff
- update fixtures
- update verbfile
- clean up, refactor a number of methods:
- update docs, run verb

## 0.1.0 - 2014-11-15
### Changed
- first commit

[Unreleased]: https://github.com/technicapital/cache-base/compare/v4.1.1...HEAD
[4.1.1]: https://github.com/technicapital/cache-base/compare/v3.0.0...v4.1.1
[3.0.0]: https://github.com/technicapital/cache-base/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/technicapital/cache-base/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/technicapital/cache-base/compare/v0.8.5...v1.0.1
[0.8.5]: https://github.com/technicapital/cache-base/compare/v0.8.4...v0.8.5
[0.8.4]: https://github.com/technicapital/cache-base/compare/v0.8.2...v0.8.4
[0.8.2]: https://github.com/technicapital/cache-base/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/technicapital/cache-base/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/technicapital/cache-base/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/technicapital/cache-base/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/technicapital/cache-base/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/technicapital/cache-base/compare/v0.4.0...v0.6.0
[0.4.0]: https://github.com/technicapital/cache-base/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/technicapital/cache-base/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/technicapital/cache-base/compare/v0.1.0...v0.2.0
