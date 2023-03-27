---
sidebar_position: 1
---

# Config

:::caution

This command is specific to VSCode IDE user.
:::

```bash
gits config
```

This command is used to generate the `.vscode/launch.json` and `.vscode/task.json` files according to the configuration in the `gits.yaml` file.

![File generated](../../../static/img/generate/config/file_generated.png)

## Options

```bash
gits config [arguments]
```

To see all available options and flags, run `gits config --help`.

### Available Options

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |

- Custom Target :
  
| Custom Target | Alternative | Description |
|----------|-------------|-------------|
| `-t [path_file]` | `--target [path_file]` | This command is used to run the application in a specific file, by default it will run the `lib/main.dart` file. |
