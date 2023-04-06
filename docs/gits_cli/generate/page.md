---
sidebar_position: 3
---

# Page

The gits page command has several options and arguments that can be used to create a new page in a feature module. To create a new page in a feature module, you must provide the feature name using the -f or --feature-name option. You can also specify other options depending on how you want to create the page. For example, to create a new page with just UI pages and Cubit, you can use the following command:

```bash
gits page [page-name] -f <feature-name>
```

## Example

Here's an example of how you can use the gits page command to create a new page in the users feature module, with the feature name set to master:

```bash
gits page users -f master
```

As you can see, the command has generated the following files and folders in the users feature module:

- lib/users/presentation/cubit/users_cubit.dart: The Cubit file for the new page.
- lib/users/presentation/pages/users_page.dart: The UI page file for the new page.
- lib/users/presentation/widgets/.gitkeep: An empty file to preserve the widgets folder.
- lib/users/locator.dart: The locator file for the users feature module.
- lib/locator.dart: The main locator file for the entire project.

With these files and folders generated, you can now start adding your own code to create the new page in the users feature module.

![File generated](../../../static/img/generate/page/user_page.png)

:::caution

Page will not be generated if:

- The feature that we enter does not exist
- The page name we entered already exists

:::

## Options

```bash
gits page [page-name] [arguments]
```

To see all available options and flags, run `gits page --help`.

### Available Options

- Custom Gits Yaml :

| Custom Gits Yaml | Description |
|----------|-------------|
| `--gits-yaml [path_file]` | This command is used to select yaml config the application in a specific file, by default it will run the `gits.yaml` file. |

- Specific Feature :  
  
| Specific Feature | Alternative | Description |
|----------|-------------|-------------|
| `-f [feature-name]` | `--feature-name [feature-name]` | Specifies the name of the feature for which the page is being created. This option is mandatory. |

- Flags :
  
| Flags | Description |
|----------|-------------|
| `--ui` | Specifies that the page should be created with just UI pages and Cubit for state management. This option is on by default. |
| `--api` | Specifies that the page should be created with implementation of the API with the same name. |
| `--skeleton` | Specifies that the page should be created with just the directory structure. |
| `--unit-test` | Specifies that the page should be created with a unit test. |

This will create a new page in the specified feature module with the necessary files and folders for UI pages and Cubit for state management.
Note that the --api, --skeleton, and --unit-test options are mutually exclusive. You can only use one of these options at a time.
Also, the --ui option is on by default, so if you don't specify any options, a new page will be created with just UI pages and Cubit.
