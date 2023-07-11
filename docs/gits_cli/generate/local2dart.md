---
sidebar_position: 12
---

# Local2Dart

This command will generate local database using sqflite from a yaml which is in `local2dart/local2dart.yaml`.

```bash
gits local2dart
```

for projects that don't have `local2dart/local2dart.yaml` you can do the command.

```bash
gits local2dart init
```

## Sturcture local2dart.yaml

```yaml
version: 1
dir_database: "gits"
foreign_key_constrain_support: true
table:
  example_category:
    create_if_not_exists: true
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: "TEXT"
        nullable: false
  example:
    create_if_not_exists: true
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: "TEXT"
        nullable: false
      example_category_id:
        type: "INTEGER"
        nullable: false
    foreign:
      example_category_id:
        to_table: "example_category"
        to_column: "id"
        on_update: "CASCADE"
        on_delete: "CASCADE"

query:
  table_name:
    custom_query_name:
      disticnt: boolean by default value is false
      column:
        example_id:
          type: "INTEGER"
          origin: "id"
        example_name:
          type: "TEXT"
          origin: "name"
        example_total:
          type: "INT"
          origin: "SUM(quantity)"
        example_count:
          type: "INT"
          origin: "count(*)"
      join:
         - "INNER JOIN example ON example.id = table_name.example_id"
      where: "create_at BEETWEEN ? AND ?"
      group_by: "example_id"
      order_by: ""
      limit: 10
      offset: 0
      having: ""

seed:
  status:
    column:
      - "id"
      - "name"
    value:
      - "1,pending"
      - "2,onprogress"
      - "3,done"
      - "4,cancel"

view:
  view_name:
    create_if_not_exists: bool, by default is true
    disticnt: boolean by default value is false
    column:
      example_id:
        type: "INTEGER"
        origin: "id"
      example_name:
        type: "TEXT"
        origin: "name"
      example_total:
        type: "INT"
        origin: "SUM(quantity)"
      example_count:
        type: "INT"
        origin: "count(*)"
    from: table_name
    join:
        - "INNER JOIN example ON example.id = table_name.example_id"
    where: "create_at BEETWEEN ? AND ?"
    group_by: "example_id"
    order_by: ""
    limit: 10
    offset: 0
    having: ""

trigger:
  example:
    raw_sql: >
      CREATE TRIGGER [IF NOT EXISTS] trigger_name
        [BEFORE|AFTER|INSTEAD OF] [INSERT|UPDATE|DELETE]
        ON table_name
        [WHEN condition]
      BEGIN
        statements;
      END;
```

### Version

Determine the version of the database if you add and replace existing tables in the database, the version must be added to avoid conflicts.

### Dir Database

Directory for open database by default value is gits, recommendation to replace from this database by using the project name.

### Foreign Key Constrain Support

SQLite has supported foreign key constraint since version 3.6.19. The SQLite library must also be compiled with neither SQLITE_OMIT_FOREIGN_KEY nor SQLITE_OMIT_TRIGGER.

foreign_key_constrain_support is boolean

if you set foreign_key_constrain_support true then:

```dart
PRAGMA foreign_keys = ON;
```

otherwise

```dart
PRAGMA foreign_keys = OFF;
```

Learn more about Foreign Key Constrain Support [here](https://www.sqlitetutorial.net/sqlite-foreign-key/)

### Table

For all naming use `snake_case`.

```yaml
table:
  table_name:
    create_if_not_exists: bool, by default is true
    column:
      column_name:
        type: INTEGER, REAL, TEXT, BLOB, BOOL
        constraint: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK (optional)
        autoincrement: boolean by default value is null (optional)
        nullable: boolean by default value is true (optional)
        default: Default value if insert with null (optional)
    foreign:
      column_name:
        to_table: references table
        to_column: references column
        on_update: constraint actions values SET NULL, SET DEFAULT, RESTRICT, NO ACTION, CASCADE (optional)
        on_update: constraint actions values SET NULL, SET DEFAULT, RESTRICT, NO ACTION, CASCADE (optional)
```

#### Column

To use column_name you can use 2 ways:

1. Directly using the data type

    ```yaml
    column:
      id: INTEGER
      name: TEXT
      description: TEXT
    ```

2. More specific

    ```yaml
    column:
      id:
        type: INTEGER
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: TEXT
        nullable: false
      description: TEXT
    ```

You can also combine the two methods according to your needs.

#### Foreign

To use this foreign in the column there must be a column_name that will be used as a foreign key.

```yaml
column:
  category:
    create_if_not_exists: true
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: "TEXT"
        nullable: false
  todo:
    create_if_not_exists: true
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: "TEXT"
        nullable: false
      category_id:
        type: "INTEGER"
        nullable: false
    foreign:
      category_id:
        to_table: "category"
        to_column: "id"
        on_update: "CASCADE"
        on_delete: "CASCADE"
```

### Query

Query is used if you need a custom query other than the one provided by default from generate.

Without join:

```yaml
query:
  table_name:
    custom_query_name:
      disticnt: boolean by default value is false
      column:
        id:
          type: "INTEGER"
          origin: "id"
        name:
          type: "TEXT"
          origin: "name"
        total:
          type: "INT"
          origin: "SUM(quantity)"
        count:
          type: "INT"
          origin: "count(*)"
      where: "create_at BEETWEEN ? AND ?"
      group_by: "example_id"
      order_by: ""
      limit: 10
      offset: 0
      having: ""
```

With join:

```yaml
query:
  table_name:
    custom_query_name:
      disticnt: boolean by default value is false
      column:
        id:
          type: "INTEGER"
          origin: "table_name.id"
        example_id:
          type: "INTEGER"
          origin: "example.id"
        name:
          type: "TEXT"
          origin: "table_name.name"
        total:
          type: "INT"
          origin: "SUM(table_name.quantity)"
        count:
          type: "INT"
          origin: "count(*)"
      join:
         - "INNER JOIN example ON example.id = table_name.example_id"
      where: "create_at BEETWEEN ? AND ?"
      group_by: "example_id"
      order_by: ""
      limit: 10
      offset: 0
      having: ""
```

In this case, the difference is if you join with another table, then in `origin` use the `table_name.` prefix to determine which column to know from which table to avoid conflicts with the same column name.

### Seed

Seed is used if you want to create seed data when the database creation data has been inserted without having to do it manually.

For example here we have a table called `status` and the status we want already has data when we create the database.

```yaml
seed:
  status:
    column:
      - "id"
      - "name"
    value:
      - "1,pending"
      - "2,onprogress"
      - "3,done"
      - "4,cancel"
```

### View

View is used to create a view of the table, the declaration is almost the same as [Query](#query) except that there is an addition of `from` which is used to determine from which table the data is retrieved.

```yaml
view:
  view_name:
    create_if_not_exists: bool, by default is true
    disticnt: boolean by default value is false
    column:
      example_id:
        type: "INTEGER"
        origin: "id"
      example_name:
        type: "TEXT"
        origin: "name"
      example_total:
        type: "INT"
        origin: "SUM(quantity)"
      example_count:
        type: "INT"
        origin: "count(*)"
    from: table_name
    join:
        - "INNER JOIN example ON example.id = table_name.example_id"
    where: "create_at BEETWEEN ? AND ?"
    group_by: "example_id"
    order_by: ""
    limit: 10
    offset: 0
    having: ""
```

### Trigger

If you want to add a trigger to the database for the trigger here use raw_sql so you are more flexible in defining it.

```yaml
trigger:
  example:
    raw_sql: >
      CREATE TRIGGER [IF NOT EXISTS] trigger_name
        [BEFORE|AFTER|INSTEAD OF] [INSERT|UPDATE|DELETE]
        ON table_name
        [WHEN condition]
      BEGIN
        statements;
      END;
```

Learn more about Trigger [here](https://www.sqlitetutorial.net/sqlite-trigger/)

## Result Generate

The result of generating local2dart will be a new module inside `core/packages/local2dart`, don't forget to add `export 'package:local2dart/local2dart.dart';` in `core/lib/core.dart`.

### Available Method in Service

- count
- get
- getWithPagination
- getById
- insert
- bulkInsert
- upsert
- update
- bulkUpdate
- updateById
- bulkUpdateById
- delete
- bulkDelete
- deleteById
- bulkDeleteById
