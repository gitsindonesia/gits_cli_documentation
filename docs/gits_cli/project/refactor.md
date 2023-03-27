---
sidebar_position: 11
---

# Refactor

This command aim to refactor renaming filename, classname and variable with parameter oldname replace to newname.

```bash
gits refactor --old-name [old-name] --new-name [new-name]
```

## Options

```bash
gits refactor --old-name [old-name] --new-name [new-name] [arguments]
```

To see all available options and flags, run `gits refactor --help`.

### Available Options

- Options :
  
| Options | Description |
|----------|-------------|
| `--exclude-changes [code-exclude-changes]` | Code will exclude to refactor separate with , (coma) |
| `--exclude-files [path-files]` | Spesific path file will exclude to refactor both code and filename separate with , (coma) |
| `--exclude-directories [path-directories]` | Spesific path directory will exclude to refactor including files and codes in it separate with , (coma) |

- Flags :
  
| Flags | Description |
|----------|-------------|
| `--[no-]include-library` | Refactor rename `gits` name to `app name` include Gits Library, by default false |
