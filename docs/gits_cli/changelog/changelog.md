# Changelog

## 3.1.0

- feat(unused-l10n): add new command check unused key on .arb
- feat(local2dart): add new command generate local2dart yaml to sqflite
- fix: remove call format before build and run
- fix(api_command): separator in locator in windows
- feat(remove-page): add new command for remove page
- feat(remove-feature): add new command for remove feature
- fix: replace path gits.yaml with separator each platform

## 3.0.1

- fix(feature_commnad): add default uses-material-design: true in create pubspec.yaml
- fix(test_command): add test for main feature
- fix(doctor_command): flutter doctor now check gherkin and lcov
- fix: add stdout and argument --no-pub in gits modular helper

## 3.0.0

- feat!: break change remove dependency melos
- feat: add gits modular helper for change dependency to melos

## 2.19.0

- feat: add new command cucumber for support integration test with gherkin language
- fix: delete ndjson_gherkin.json in integration_test in developmen & release

## 2.18.0

- feat: add path for config in pubspec.yaml for gits_cli
- feat(test): add spesific test for feature

## 2.17.0

- fix(page): issue create page in skeleton or ui create directory bloc with name of page
- feat(build): add argument for qa build application integration test purpose
- fix(changelog): remove show version and trim string changelog

## 2.16.0

- add parameter exclude in command refactor
- add parameter exclude and refactoring method
- remove unused directory after create core modul
- remove unused directory after create feature modul
- add refactor include library with additonal flag command --include-library
- add create with refactor include library with additonal flag command --include-library

## 2.15.0

- generate naming from project name in asset, endpoint, config, json2dart, api, init, unit-test and page
- add refactor command for rename file and content in file
- add flag option refactor on create command. default set false

## 2.14.0

- add create command for create flutter apps with Gits Flutter Starter Kit

## 2.13.1

- fix json2dart initializeDateFormatting setUp in body, response & datasource unit test

## 2.13.0

- add json2dart generate with cache strategy

## 2.12.2

- refactor package name from gits_cli to gits

## 2.12.1

- remove dependency arb_utils
- add arb helper to change dependency arb_utils

## 2.12.0

- support l10n to separate file with dir name for localization e.g en, id, es
- fix datetime tryparse with non nullable value
- add generate builder function in abstract class bloc
- fix when generate page directory bloc with page name is remove

## 2.11.1

- fix(json2dart): separate method to formatDateTime for Body and Response

## 2.11.0

- add generate when function in abstact class bloc
- add generate json2dart with replace mode

## 2.10.1

- fix json2dart generate model body with datetime import core

## 2.10.0

- add get lastest changelog command with gits changelog

## 2.9.1

- fix generate json2dart legacy without config

## 2.9.0

- fix generate l10n before build
- fix format date time for body & response can set default per api
- add generate config vscode for profile mode & release mode
- add driver command for run integration test
- add test driver command for run all integration test via test_driver.yaml

## 2.8.0

- add json2dart configuration default format date time
- add customization directory for assets

## 2.7.1

- fix issue generate endpoint duplicate with same path

## 2.7.0

- support body & response list json to generate with json2dart

## 2.6.1

- add // ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables in generate unit test json2dart

## 2.6.0

- add generate http header with json2dart

## 2.5.5

- fix generate json2dart for method multipart

## 2.5.4

- fix coverage if directory test is empty

## 2.5.3

- fix on error command just exit with status 1

## 2.5.2

- fix generate body model constructor & toMap()
- fix unit test generate model for variable DateTime
- fix handle int & double for set tryParse in generate fromMap()

## 2.5.1

- fix generate endpoint for spesific url

## 2.5.0

- add path to regex package
- handle endpoint for param path to regex e.g /user/:id

## 2.4.3

- fix run command default run in mode debug

## 2.4.2

- fix generate assets name variable to camelCase

## 2.4.1

- fix generate locator page command

## 2.4.0

- add argument obfuscate & split-debug-info for build command

## 2.3.1

- fix generate json2dart unit test data model duplicate class

## 2.3.0

- fix generate json2dart complex json duplicate key
- feat add generate unit test from json2dart

## 2.2.0

- add status generated in category generated
- add asset command

## 2.1.1

- fix generate mapper json2dart
- fix duplicate class name json2dart

## 2.1.0

- add endpoint command
- add arguments json2dart command

## 2.0.0

- add json2dart command
- generate model from json from json2dart
- generate data layer from json2dart
- generate domain layer from json2dart
- generate bloc from json2dart
- generate locator & mapper from json2dart
- generate constants GitsEndpoints from json2dart
- add new argument in api command
- fix issue api command
- add collection dependency

## 1.7.3

- add remove file coverage \*_state.dart, \*_event.dart, \*\*/locator.dart, core/lib/src/test/\*, lib/routes/routes.dart

## 1.7.2

- fix gits clean command add remove ios Podfile.lock

## 1.7.1

- fix conflict build ipa argument export-method & export-options-plists

## 1.7.0

- add build ios command
- add argument version for build command

## 1.6.1

- fix issue path with whitespace

## 1.6.0

- add analyze command

## 1.5.0

- add support ci/cd argument gits.yaml
- fix run melos coverage

## 1.4.1

- fix issue run or build with firebase flavor

## 1.4.0

- add firebase command
- separated android & ios application id in gits.yaml
- execute firebase flavor before run & build

## 1.3.1

- add config coverage to gits.yaml

## 1.3.0

- add coverage command
- add status command in every end of command
- add directory & file in .gitignore
- refactor init melos
- add generate unhandle exception in data repository unit test

## 1.2.0

- add generate page just ui with cubit
- validate all replace file is exists, if not exists create file

## 1.1.1

- fix upgrade command flag

## 1.1.0

- add upgrade command

## 1.0.5

- fix call flutter.bat for support windows

## 1.0.4

- fix validate command

## 1.0.3

- fix generate api
- fix config command

## 1.0.2

- validate exists file gits.yaml & melos.yaml

## 1.0.1

- fix initial version

## 1.0.0

- Initial version.
