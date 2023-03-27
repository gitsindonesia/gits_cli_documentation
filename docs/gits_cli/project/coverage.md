---
sidebar_position: 6
---

# Coverage

This command is used to calculate our code coverage based on the tests that have been made. Code coverage will not be generated if all the tests we make have not been passed.

```bash
gits coverage
```

## Options

```bash
gits coverage [arguments]
```

To see all available options and flags, run `gits coverage --help`.

### Available Options

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |
