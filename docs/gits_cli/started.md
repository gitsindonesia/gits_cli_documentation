---
sidebar_position: 1
---

# Getting Started

## Requirement

- Dart SDK 2.19 - latest
- Flutter: 3.7.0 - latest

:::note

- Dart SDK Installation **[Dart SDK](https://dart.dev/get-dart)**
- Flutter SDK Installation **[Flutter SDK](https://docs.flutter.dev/development/tools/sdk/releases?tab=macos)**

:::

## IDE Recommendation

- [VSCode](https://code.visualstudio.com/)

## Installations

Install current version `gits cli internal 3.0.0` by this command :

```bash
dart pub global activate --source git https://git.gits.id/RnD/flutter-cli.git
```

   Make sure gits cli was installed, you can check by this command :

```bash
gits -v
```

```console title="Output"
Gits CLI 3.0.0
```

If this directory is missing from your PATH, locate the file for your platform and add it.

| Platform       | Cache location               |
|----------------|------------------------------|
| macOS or Linux | HOME/.pub-cache/bin          |
| Windows*       | %LOCALAPPDATA%\Pub\Cache\bin |

:::caution

If you want install spesific version gits cli you need to follow this step:

1. Clone source this from repository **[Gits Cli](https://git.gits.id/RnD/flutter-cli)**
2. Checkout to selected tag, e.g. `2.19.0`
3. Download dependency with run `dart pub get`
4. Install from localy path wtih run `dart pub global activate --source path .`

:::

## Usage

To use the Gits CLI, you must run the `gits` command from the terminal on your project directory.

:::caution

This CLI can only be used on Gits Flutter Starter Kit, please clone it first and configure it based on the documentation on the following link **[Gits Flutter Starter Kit](https://git.gits.id/RnD/fluttergits)**

:::
