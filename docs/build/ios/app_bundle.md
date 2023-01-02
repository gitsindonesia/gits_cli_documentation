---
sidebar_position: 2
---

# App Bundle
This command is used to build ios application bundle.

:::caution

This command only work on Max OS X.

:::

## Default
By default this command will build the project with the release version staging flavor.
```bash
gits build ios
```
After the building process is complete, we can check the `.ipa` file in the `build/ios/ipa/` or we can use the archive file in `build/ios/archive/` folders.

## Options :

```bash
gits build ios [flavor/environment] [app_version] [custom_target] [build_number] [build_name] [[no-]obfuscate] [split-debug-info]
```
- Flavor/Environment :  
  
| Flavor/Environment | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--flavor dev` | Build project on dev environment (Default) |
| `-f stag` | `--flavor stag` | Build project on staging environment|
| `-f prod` | `--flavor prod` | Build project on production environment |

- App Version :

| App Version | Description |
|----------|-------------|
| `--debug` | Build project on debug mode (Default) |
| `--profile` | Build project on profile mode|
| `--release` | Build project on release mode (Default) |

- Custom Target :
  
| Custom Target | Alternative | Description |
|----------|-------------|-------------|
| `-t [url_file]` | `--target [url_file]` | This command is used to build the application in a specific file, by default it will run the `lib/main.dart` file. |

- Custom Build Name :
  
| Build Name | Description |
|----------|-------------|
| `--build-name [build_number]` | This command is used to build application with a specific name.|

- Custom Build Number :
  
| Build Number | Description |
|----------|-------------|
| `--build-number [build_number]` | This command is used to build application with a specific version number.|

- No Obfuscate :

| Build Number | Description |
|----------|-------------|
| `--[no-]obfuscate` | In a release build, this flag removes identifiers and replaces them with randomized values for the purposes of source code obfuscation. This flag must always be combined with "--split-debug-info" option, the mapping between the values and the original identifiers is stored in the symbol map created in the specified directory. For an app built with this flag, the "flutter symbolize" command with the right program symbol file is required to obtain a human readable stack trace. (defaults to on)|

- Split Debug Info :
  
| Build Number | Description |
|----------|-------------|
| `--split-debug-info` | In a release build, this flag reduces application size by storing Dart program symbols in a separate file on the host rather than in the application. The value of the flag should be a directory where program symbol files can be stored for later use. These symbol files contain the information needed to symbolize Dart stack traces. For an app built with this flag, the "flutter symbolize" command with the right program symbol file is required to obtain a human readable stack trace. This flag cannot be combined with "--analyze-size". (defaults to "./.symbols/") |

## Example - Custom Version
1. Debug Version
    ```bash
    gits build ios --debug
    ```

2. Profile Version
    ```bash
    gits build ios --profile
    ```

3. Release Version
    ```bash
    gits build ios --release
    ```

## Example - Custom Environment/Flavor

1. Dev Environment
    ```bash
    gits build ios -f dev
    ```
    Alternative:
    ```bash
    gits build ios --flavor dev
    ```
2. Staging Environment
    ```bash
    gits build ios -f dev
    ```
    Alternative:
    ```bash
    gits build ios --flavor dev
    ```
3. Production Environment
    ```bash
    gits build ios -f dev
    ```
    Alternative:
    ```bash
    gits build ios --flavor dev
    ```

## Example - Custom Version and Environment Combination
```bash
gits build ios --release -f prod
```

## Example - Custom Target
```bash
gits build ios --target [url_file *optional]
```
Alternative:
```bash
gits build ios --t [url_file *optional]
```

## Example - Custom gits.yaml
```bash
gits build ios --gits-yaml [custom_path]
```

## Example - Custom Build Number
```bash
gits build ios --build-number [build_number]
```
For example, we create an appbundle file with the custom build number `1.0.0`
```bash
gits build ios --build-number 1.0.0
```

## Example - Custom Build Name
```bash
gits build ios --build-name [build_name]
```
For example, we create an appbundle file with the name `application_release`
```bash
gits build ios --build-name application_release
```

## Example - No Obfuscate
```bash
gits build ios --[no-]obfuscate
```

## Example - Split Debug Info
```bash
gits build ios --split-debug-info
```