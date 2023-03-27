---
sidebar_position: 2
---

# Getting Started

## Requirement

- Dart SDK 2.19 - latest
- Flutter: 3.7.0 - latest

:::note

- Dart SDK Installation **[Dart SDK](https://dart.dev/get-dart)**
- Flutter SDK Installation **[Flutter SDK](https://docs.flutter.dev/development/tools/sdk/releases?tab=macos)**

:::

## Installation

1. Install [Gits CLI](../gits_cli/started)
2. Create new project with run command:

    ```bash
    gits create my-app
    ```

    To see all available options and flags, run `gits create --help` or check in [here](../gits_cli/project/create).
3. Run your emulator or connect your device
4. Now you can run apps in VS Code with press `F5` or you can run via terminal with command:

     ```bash
    gits run
    ```

    To see all available options and flags, run `gits run --help` or check in [here](../gits_cli/project/run).

:::info

If you want install manually you need to follow this step:

1. Clone source this from repository **[Gits Flutter Starter Kit](https://git.gits.id/RnD/fluttergits)**

    ```bash
    # via SSH

    git clone git@git.gits.id:RnD/fluttergits.git

    # via HTTPS

    git clone https://git.gits.id/RnD/fluttergits.git my-app
    ```

2. Remove the `.git` folder and initialize the new one.

    ```bash
    cd my-app
    rm -rf .git 
    git init
    git commit -am "initial commit"
    ```

3. Init configuration

    ```bash
    gits init
    gits config
    ```

4. Install the dependencies

    ```bash
    gits get
    ```

5. Run your emulator or connect your device
6. Now you can run apps in VS Code with press `F5` or you can run via terminal with command:

     ```bash
    gits run
    ```

    To see all available options and flags, run `gits run --help` or check in [here](../gits_cli/project/run).

:::
