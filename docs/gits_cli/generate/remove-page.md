---
sidebar_position: 14
---

# Remove Page

This command aims to remove pages from the project.

```bash
gits remove-page -f [feature_name] [page_name]
```

## Example

For the example we will remove page form_address in feature master.

```bash
gits remove-page -f master form_address
```

## Options

```bash
gits remove-page [page-name] [arguments]
```

To see all available options and flags, run `gits remove-page --help`.

### Available Options

- Specific Feature :  
  
| Specific Feature | Alternative | Description |
|----------|-------------|-------------|
| `-f [feature-name]` | `--feature-name [feature-name]` | Name of the feature to be remove page. This option is mandatory. |
