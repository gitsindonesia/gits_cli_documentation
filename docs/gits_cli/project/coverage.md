---
sidebar_position: 6
---

# Coverage

## Requirement

Install lcov with follow [this installation](https://github.com/linux-test-project/lcov)

:::info

LCOV is an extension of GCOV, a GNU tool which provides information about
  what parts of a program are actually executed (i.e. "covered") while running
  a particular test case. The extension consists of a set of Perl scripts
  which build on the textual GCOV output to implement the following enhanced
  functionality:

    * HTML based output: coverage rates are additionally indicated using bar
      graphs and specific colors.

    * Support for large projects: overview pages allow quick browsing of
      coverage data by providing either a hierarchical directory structure
      view or a three-level detail view: directory, file and source code view.

  LCOV was initially designed to support Linux kernel coverage measurements,
  but works as well for coverage measurements on standard user space
  applications.

:::

check your installation with run:

```bash
lcov -v
```

or you can run command:

```bash
gits doctor
```

## Usage

This command is used to calculate our code coverage based on the tests that have been made. Code coverage will not be generated if all the tests we make have not been passed.

```bash
gits coverage
```

:::caution

`gits coverage` support for Linux and macOS.

:::

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
