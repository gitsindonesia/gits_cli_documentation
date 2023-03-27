---
sidebar_position: 4
---

# Run

This command has a function to run our project. With this command we can adjust which project environment and which application version we want to run according to the project configuration in the `gits.yaml` file.

## Default Command

```bash
gits run
```

By default this command will run the project on **the dev environment release version**.

## Options

```bash
gits run [arguments]
```

To see all available options and flags, run `gits run --help`.

### Available Options

- Flavor/Environment :  
  
| Flavor/Environment | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--flavor dev` | Run project on dev environment (Default) |
| `-f stag` | `--flavor stag` | Run project on staging environment|
| `-f prod` | `--flavor prod` | Run project on production environment |

- App Version :
  
| App Version | Description |
|----------|-------------|
| `--debug` |Run project on debug mode (Default) |
| `--profile` | Run project on profile mode|
| `--release` | Run project on release mode (Default) |

- Custom Target :
  
| Custom Target | Alternative | Description |
|----------|-------------|-------------|
| `-t [path_file]` | `--target [path_file]` | This command is used to run the application in a specific file, by default it will run the `lib/main.dart` file. |

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |

## Example - Custom Version

1. Debug Version

    ```bash
    gits run --debug
    ```

2. Profile Version

    ```bash
    gits run --profile
    ```

3. Release Version

    ```bash
    gits run --release
    ```

## Example - Custom Environment/Flavor

1. Dev Environment

    ```bash
    gits run -f dev
    ```

    Alternative:

    ```bash
    gits run --flavor dev
    ```

2. Staging Environment

    ```bash
    gits run -f stag
    ```

    Alternative:

    ```bash
    gits run --flavor stag
    ```

3. Production Environment

    ```bash
    gits run -f prod
    ```

    Alternative:

    ```bash
    gits run --flavor prod
    ```

## Example - Version and Environment Combination

```bash
gits run --release -f stag
```

This following command will run your app on staging environment with release mode.

## Example - Custom Target File

```bash
gits run -t [url_file *optional]
```

Alternative:

```bash
gits run --target [url_file *optional]
```
