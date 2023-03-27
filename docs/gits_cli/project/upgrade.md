---
sidebar_position: 10
---

# Upgrade

This command is used to upgrade the current package's dependencies to latest versions.

```bash
gits upgrade
```

## Options

```bash
gits upgrade [argument]
```

To see all available options and flags, run `gits upgrade --help`.

### Available Options

- Flag :

| Flag | Alternative    | Description                                                                  |
| -------- | -------------- | ---------------------------------------------------------------------------- |
| `-a`     | `--all`        | Upgrade all project package's dependencies to latest versions                |
| `-d`     | `--dependency` | Upgrade all dependency_manager package's dependencies to latest versions     |
| `-g`     | `--gits`   | Upgrade all gits_library package's dependencies to latest versions (Default) |

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |
