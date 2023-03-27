---
sidebar_position: 1
---

# Create

You can create Flutter applcation with Gits FLutter Starter Kit with run command:

```bash
gits create [project-name]
```

Example create project with name `Gits Example`

```bash
gits create "Gits Example"
```

## Options

```bash
gits create [arguments]
```

To see all available options and flags, run `gits create --help`.

### Available Options

- Version Starter Kit :

| Version Starter Kit | Alternative | Description |
|----------|-------------|-------------|
| `-t [tag-version]` | `--tag [tag-version]` | Clone with Tag version gits flutter starter kit, default clone master |

- Refactor Rename Gits Code :
  
| Refactor Rename Gits Code | Description |
|----------|-------------|
| `--[no-]refactor` | Refactor rename `gits` name to `app name` |
| `--[no-]include-library` | Refactor rename `gits` name to `app name` include Gits Library use this along with argument --refactor |
