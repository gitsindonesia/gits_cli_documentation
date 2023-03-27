---
sidebar_position: 10
---

# Unit Test

This command is used to generate a test file for a feature

```bash
gits unit-test [unit_test_name] -f [feature_name]
```

for the example, we create a unit test with the name users in the feature master.

```bash
gits unit-test users -f master
```

The unit test file will automatically be generated in `features/master/test/user_test`

:::caution

The unit test file will not be generated if the feature name we enter does not exist.
:::

## Options

```bash
gits unit-test [arguments]
```

To see all available options and flags, run `gits unit-test --help`.

### Available Options

- Feature (Mandatory) :  
  
| Feature | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--feature-name dev` | Name of the feature to be added unit-test  |

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |
