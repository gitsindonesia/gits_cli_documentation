---
sidebar_position: 5
---

# Assets

Asset has its own module which aims to support all other modules so that they can use the asset, the location of the assets is in `./assets`

## Usages

Here are the steps for creating a logo.png image file as an example:

1. Add the logo files to the `assets/assets/images/` folder

   ![File generated](../../static/img/generate/assets/copy_file.png)

2. Generate constants with the [Gits CLI](../gits_cli/started.md) command:

    ```bash
    gits assets
    ```

    Learn more about command assets [here](../gits_cli/generate/assets)

    The logo constant will be generated in the `core/assets/lib/gits_images.dart` file

    ![File generated](../../static/img/generate/assets/const_generated.png)

    :::info

    Adjust the placement of the assets that we use

    - Image file path `assets/assets/images/` constant will be generated in the file `core/assets/lib/gits_images.dart`
    - The file path icon `assets/assets/icons/` constant will be generated in the file `core/assets/lib/gits_icons.dart`
    - The path of the json file `assets/assets/json/` constant will be generated in the file `core/assets/lib/gits_json.dart`

    :::

3. Now you can use `GitsImages.logo` in your code

    ```dart
    Image.asset(GitsImages.logo);
    ```
