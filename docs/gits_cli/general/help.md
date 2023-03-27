---
sidebar_position: 2
---

# Help

This command is used to view the list contained in the CLI.

```bash
gits -h
```

Alternative:

```bash
gits --help
```

```bash title="Output"
Get it simple command flutter with Gits CLI

Usage: gits <command> [arguments]

Global options:
-h, --help       Print this usage information.
-v, --version    Reports the version of this tool.

Available commands:

Build
  build        Build an app to android or ios

Generate
  api          Create a new api in page.
  assets       Generate assets from setup assets pubspec.yaml.
  config       Generate launch.json & tasks.json related with config.
  core         Create a new core packages module.
  endpoint     Generate endpoint from json2dart.yaml.
  feature      Create a new feature module.
  firebase     Generate google service both android & ios.
  json2dart    Generate dart data class from json.
  l10n         Generate localizations for the current project.
  page         Create a new page in feature module.
  unit-test    Create a new unit test for page in feature module.

Project
  analyze      Analyze code in all packages.
  clean        Delete the l10n, build/ and .dart_tool/ in main, core & features directories.
  coverage     Run Flutter test coverage for the current project & all modules.
  create       Create flutter application with Gits Flutter Starter Kit
  cucumber     Generate integration test from gherkin in .feature
  drive        Run integration tests for the project on an attached device or emulator.
  format       Format all files .dart.
  get          Get packages in a Flutter project, Core & Features.
  refactor     Refactor naming old to new naming
  run          Run your Flutter app on an attached device with flavor.
  test         Run Flutter unit tests for the current project & all modules.
  test-drive   Run all integration tests for the project on an attached device or emulator.
  upgrade      Upgrade the current package's dependencies to latest versions..

Tools
  changelog    get latest changelog
  doctor       Show information about the installed tooling.
  init         Init a new project from starter kit
```
