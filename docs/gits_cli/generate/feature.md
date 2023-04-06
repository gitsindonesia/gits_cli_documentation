---
sidebar_position: 2
---

# Feature

This command is used to generate new feature

```bash
git feature [feature_name]
```

## Example

For the example we will generate a new feature named master

```bash
gits feature master
```

The feature master folder will be created automatically, we can check in `features/master/`

![File generated](../../../static/img/generate/feature/master_feature.png)

:::caution

The feature will not be generated if the feature name we enter already exists.

:::

## Options

```bash
gits feature [feature_name] [arguments]
```

To see all available options and flags, run `gits feature --help`.

### Available Options

- Flags :  
  
| Flags | Alternative | Description |
|----------|-------------|-------------|
| `-p` | `--page` | Create a new feature module with page as same name. |
| `-a` | `--all` | Create a new feature module with page as same name and unittest as same name. |
