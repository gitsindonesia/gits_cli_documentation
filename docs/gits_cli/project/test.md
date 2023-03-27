---
sidebar_position: 5
---

# Test

This command is used to run all unit tests in our project.

```bash
gits test
```

## Options

```bash
gits test [arguments]
```

To see all available options and flags, run `gits test --help`.

### Available Options

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |

- Run Spesific Feature  :  
  
| Run Spesific Feature | Alternative | Description |
|----------|-------------|-------------|
| `-f [feature-name]` | `--feature [feature-name]` | Test with spesific feature |
