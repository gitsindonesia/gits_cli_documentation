---
sidebar_position: 4
---

# Environment (gits.yaml)

## Summary

`gits.yaml` is the config environment used by the gits flutter starter kit, developers are required to do run `gits init` or copy the existing `gits.yaml` file. keep `gits.yaml` secret and ignore dare repository.

```yaml title="gits.yaml"
project_name: Gits
flavor:
  dev:
    FLAVOR: dev
    APP_NAME: Gits Dev
    ANDROID_APPLICATION_ID: id.gits.example.dev
    IOS_APPLICATION_ID: id.gits.example.dev
    BASE_URL: https://reqres.in/api
  stag:
    FLAVOR: stag
    APP_NAME: Gits Stag
    ANDROID_APPLICATION_ID: id.gits.example.stag
    IOS_APPLICATION_ID: id.gits.example.stag
    BASE_URL: https://reqres.in/api
  prod:
    FLAVOR: prod
    APP_NAME: Gits
    ANDROID_APPLICATION_ID: id.gits.example
    IOS_APPLICATION_ID: id.gits.example
    BASE_URL: https://reqres.in/api

localization:
  arb_dir: assets/assets/l10n
  template_arb_file: id.arb
  output_localization_file: s.dart
  output_class: S
  output_dir: core/lib/src/l10n
  replace: false
  
firebase:
  google_service_dev_dir: firebase/dev
  google_service_stag_dir: firebase/stag
  google_service_prod_dir: firebase/prod
  output_android_dir: android/app
  output_ios_dir: ios

assets:
  pubspec_dir: assets
  assets_dir: assets/assets
  output_dir: assets/lib
  create_library_file: true
  
coverage:
  lcov_dir: coverage/lcov.info
  output_html_dir: coverage/html
  remove:
    - "*/mock/*"
    - "*.freezed.*"
    - "*.g.*"
    - "*/l10n/*"
    - "*_state.dart"
    - "*_event.dart"
    - "**/locator.dart"
    - "**/environtment.dart"
    - "core/lib/src/test/*"
    - "core/lib/src/constants/*"
    - "core/lib/src/themes/*"
    - "lib/routes/routes.dart"
    - "lib/generated_plugin_registrant.dart"
```

## Project Name

`project_name` will be used in some generators for naming files, classes and variables. project_name's default value is `Gits`

### Example Default (Gits)

```yaml title="gits.yaml"
...
project_name: Gits
...
```

example to generate assets if we use default or Gits for project_name then we run command `gits assets`, we see file generated like this:

```console title="Folder Structure"
.
├── assets
│   ├── assets
│   │   ├── images
│   │   │   ├── example.png
│   ├── lib
│   │   ├── src
│   │   │   ├── gits_images.dart        # filename generate will prefix gits
└── ...
```

```dart title="assets/lib/src/gits_images.dart"
abstract class GitsImages {             // Prefix class name with gits
  // ignore: unused_field
  static const String _assets = 'packages/assets/assets/images';

  static const String example = '$_assets/example.png';
}
```

### Example Custom (Example)

```yaml title="gits.yaml"
...
project_name: Example
...
```

example to generate assets if we use default or Gits for project_name then we run command `gits assets`, we see file generated like this:

```console title="Folder Structure"
.
├── assets
│   ├── assets
│   │   ├── images
│   │   │   ├── example.png
│   ├── lib
│   │   ├── src
│   │   │   ├── example_images.dart        # filename generate will prefix example
└── ...
```

```dart title="assets/lib/src/example_images.dart"
abstract class ExampleImages {             // Prefix class name with example
  // ignore: unused_field
  static const String _assets = 'packages/assets/assets/images';

  static const String example = '$_assets/example.png';
}
```

### List Usages

For more information on the use of `project_name`, see the following list:

- [Assets](./assets) or CLI [gits assets](../gits_cli/generate/assets)
- [Json2dart](./json2dart) or CLI [gits json2dart](../gits_cli/generate/json2dart)
- CLI [gits config](../gits_cli/generate/config)
- CLI [gits endpoint](../gits_cli/generate/endpoint)
- CLI [gits api](../gits_cli/generate/api)
- CLI [gits unit-test](../gits_cli/generate/unit-test)

## Flavor

Flavor has 3 variants `dev`, `stag` and `prod`, each of the variants has the same key but the value can be different from one another. Keys that are `FLAVOR`, `APP_NAME`, `ANDROID_APPLICATION_ID` and `IOS_APPLICATION_ID` used on Android and iOS natively.

The way it works is that the flavor will be changed to the `--dart-define` in cli argument which is used during run or build.

```yaml
...
flavor:
  dev:
    FLAVOR: dev                                         # Mandatory
    APP_NAME: Gits Dev                                  # Mandatory
    ANDROID_APPLICATION_ID: id.gits.example.dev         # Mandatory
    IOS_APPLICATION_ID: id.gits.example.dev             # Mandatory
    BASE_URL: https://reqres.in/api
  stag:
    FLAVOR: stag                                        # Mandatory
    APP_NAME: Gits Stag                                 # Mandatory
    ANDROID_APPLICATION_ID: id.gits.example.stag        # Mandatory
    IOS_APPLICATION_ID: id.gits.example.stag            # Mandatory
    BASE_URL: https://reqres.in/api
  prod:
    FLAVOR: prod                                        # Mandatory
    APP_NAME: Gits                                      # Mandatory
    ANDROID_APPLICATION_ID: id.gits.example             # Mandatory
    IOS_APPLICATION_ID: id.gits.example                 # Mandatory
    BASE_URL: https://reqres.in/api
...
```

### Usages

#### Flutter

```dart title="core/lib/scr/environment.dart"
class Environment {
  static const bool isDev = String.fromEnvironment('FLAVOR') == 'dev';
  static const bool isNotDev = String.fromEnvironment('FLAVOR') != 'dev';
  static const bool isStag = String.fromEnvironment('FLAVOR') == 'stag';
  static const bool isNotStag = String.fromEnvironment('FLAVOR') != 'stag';
  static const bool isProd = String.fromEnvironment('FLAVOR') == 'prod';
  static const bool isNotProd = String.fromEnvironment('FLAVOR') != 'prod';

  static const String baseUrl = String.fromEnvironment('BASE_URL');
}
```

#### Android

To get dart define from argument on android add in `android/app/build.gradle`

```gradle title="android/app/build.gradle"
...
def dartEnvironmentVariables = []
if (project.hasProperty('dart-defines')) {
    dartEnvironmentVariables = project.property('dart-defines')
        .split(',')
        .collectEntries { entry ->
            def pair = new String(entry.decodeBase64(), 'UTF-8').split('=')
            [(pair.first()): pair.last()]
        }
}

android {
    ...
    defaultConfig {
        applicationId dartEnvironmentVariables.APPLICATION_ID               // Take from dart define
        minSdkVersion minSdk
        targetSdkVersion targetSdk
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName 
        resValue "string", "app_name", dartEnvironmentVariables.APP_NAME    // Take from dart define
        multiDexEnabled = true
    }
}
```

#### iOS

To get the dart define of the arguments on ios add a pre-action to the scheme runner

![flavor-preaction-ios](../../static/img/starter_kit/flavor-preaction-ios.png)

```bash
# Type a script or drag a script file from your workspace to insert its path.

function entry_decode() { echo "${*}" | base64 --decode; }

IFS=',' read -r -a define_items <<< "$DART_DEFINES"


for index in "${!define_items[@]}"
do
    define_items[$index]=$(entry_decode "${define_items[$index]}");
done

printf "%s\n" "${define_items[@]}" > ${SRCROOT}/Flutter/DartDefined.xcconfig
```

Then in `Debug.xcconfig` & `Release.xcconfig` add this

```xcconfig
#include "DartDefined.xcconfig"
```

Example usage on ios in `Info.plist`:

```plist
<key>CFBundleDisplayName</key>
<string>${APP_NAME}</string>
```

## Localization / Internationalization

```yaml title="gits.yaml"
...
localization:
  arb_dir: assets/assets/l10n
  template_arb_file: id.arb
  output_localization_file: s.dart
  output_class: S
  output_dir: core/lib/src/l10n
  replace: false
...
```

### Configuring localization in gits.yaml file

| Option | Description |
|--------|-------------|
| arb-dir | The directory where the template and translated arb files are located. |
| template-arb-file | The template arb file that is used as the basis for generating the Dart localization and messages files. |
| output-localization-file | The filename for the output localization and localizations delegate classes. |
| output-dir | The directory where the generated localization classes are written. This option is only relevant if you want to generate the localizations code somewhere else in the Flutter project. You also need to set the synthetic-package flag to false. <br/><br/> The app must import the file specified in the output-localization-file option from this directory. If unspecified, this defaults to the same directory as the input directory specified in arb-dir. |
| replace | Allow you to replace and merge with default each root .arb if you use separate folder e.g en.arb will be maintained from generate. by default is false |

Learn more about Internationalization [here](./internationalization)

## Firebase

```yaml title="gits.yaml"
...
firebase:
  google_service_dev_dir: firebase/dev
  google_service_stag_dir: firebase/stag
  google_service_prod_dir: firebase/prod
  output_android_dir: android/app
  output_ios_dir: ios
...
```

### Configuring firebase in gits.yaml file

| Option | Description |
|--------|-------------|
| google_service_dev_dir | The directory where the google service environment `dev` are located. |
| google_service_stag_dir | The directory where the google service environment `stag` are located. |
| google_service_prod_dir | The directory where the google service environment `prod` are located. |
| output_android_dir | The directory where output the google service to copy for android. |
| output_ios_dir | The directory where output the google service to copy for ios. |

Learn more about Firebase [here](./firebase)

## Assets

```yaml title="gits.yaml"
...
assets:
  pubspec_dir: assets
  assets_dir: assets/assets
  output_dir: assets/lib
  create_library_file: true
...
```

### Configuring assets in gits.yaml file

| Option | Description |
|--------|-------------|
| pubspec_dir | The directory where the module assets are located. |
| assets_dir | The directory where the assets are located. |
| assets_dir | The directory where the assets are located. |
| output-dir | The directory where the generated localization classes are written. |
| create_library_file | Allow to generated file dart library with export file-filed generated. |

Learn more about Assets [here](./assets)

## Coverage

```yaml title="gits.yaml"
...
coverage:
  lcov_dir: coverage/lcov.info
  output_html_dir: coverage/html
  remove:
    - "*/mock/*"
    - "*.freezed.*"
    - "*.g.*"
    - "*/l10n/*"
    - "*_state.dart"
    - "*_event.dart"
    - "**/locator.dart"
    - "**/environtment.dart"
    - "core/lib/src/test/*"
    - "core/lib/src/constants/*"
    - "core/lib/src/themes/*"
    - "lib/routes/routes.dart"
    - "lib/generated_plugin_registrant.dart"
...
```

### Configuring coverage in gits.yaml file

| Option | Description |
|--------|-------------|
| lcov_dir | The directory where the lcov.info are located. |
| output_html_dir | The directory where output the generated report html are written. |
| remove | Ignore or remove pattern dir / file support glob from calculate coverage. |

Learn more about Coverage [here](./coverage)

## References

- <https://medium.com/@tatsu.ukraine/flutter-2-2-dart-defines-and-breaking-changes-here-we-go-again-ce40cfea74fd>
- <https://medium.com/flutter-community/how-to-setup-dart-define-for-keys-and-secrets-on-android-and-ios-in-flutter-apps-4f28a10c4b6c>
