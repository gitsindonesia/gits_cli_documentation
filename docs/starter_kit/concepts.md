---
sidebar_position: 3
---

# Concepts

GITS Flutter Starter Kit built with modular to be easy maintained and separate tasking.

## Tech Stack

GITS Flutter Starter Kit built using the following major dependencies:

- [Gits CLI](../gits_cli/started)
- [Gits Base](https://pub.dev/packages/gits_base)
- [Gits HTTP](https://pub.dev/packages/gits_http)
- [Gits Inspector](https://pub.dev/packages/gits_inspector)
- [Gits Extension](https://pub.dev/packages/gits_extension)
- [Google Fonts](https://pub.dev/packages/google_fonts)
- [Flutter Bloc](https://pub.dev/packages/flutter_bloc)
- [Go Router](https://pub.dev/packages/go_router)
- [Get It](https://pub.dev/packages/get_it)
- [Flutter Secure Storage](https://pub.dev/packages/flutter_secure_storage)
- [Shimmer](https://pub.dev/packages/shimmer)
- [Cached Network Image](https://pub.dev/packages/cached_network_image)
- [Equatable](https://pub.dev/packages/equatable)
- [Logger](https://pub.dev/packages/logger)
- [Collection](https://pub.dev/packages/collection)
- [Firebase](https://firebase.google.com/docs/flutter/setup?platform=android)
- [Mocktail](https://pub.dev/packages/mocktail)
- [Bloc Test](https://pub.dev/packages/bloc_test)

## Folder Structure

```console title="Overall Folder Structure"
.
├── android                             # Android native directory
├── assets                              # Module assets
│   ├── assets                          # Assets directory
│   ├── lib                             # Assets source code directory
├── core                                # Module core
│   ├── lib                
│   │   ├── src                         
│   │   │   ├── components              # Global components
│   │   │   ├── constants               # Global constants
│   │   │   ├── extensions              # Global extensions
│   │   │   ├── firebase                # Firebase helper
│   │   │   ├── helper                  # Global helper
│   │   │   ├── l10n                    # Localization (generated with gits l10n)
│   │   │   ├── shared                  # Global shared class
│   │   │   ├── test                    # Global helper test
│   │   │   ├── themes                  # Global themes style
│   │   │   ├── environment.dart        # Environment data from --dart-define
│   │   │   ├── global_variable.dart    # Global variable may used in feature module
│   │   │   ├── locator.dart            # Service locator core
│   │   ├── core_test.dart              # Identity library core test
│   │   ├── core.dart                   # Identity library core 
│   ├── packages                    
│   │   ├── dependency_manager          # Module global dependencies
│   │   ├── gits_library                # Specific dependencies from gits_library
│   ├── test                            # Core unit test & widget test
├── features                            # Modules feature directory
│   ├── auth                            # Auth's modules (example)
│   ├── home                            # Home's modules (example)
├── firebase                            # Firebase directory
│   ├── dev                             # Firebase dev flavor 
│   │   ├── google-services.json        # google services dev for android
│   │   ├── GoogleService-Info.plist    # google services dev for ios
│   ├── stag                            # Firebase stag flavor 
│   │   ├── google-services.json        # google services stag for android
│   │   ├── GoogleService-Info.plist    # google services stag for ios
│   ├── prod                            # Firebase prod flavor 
│   │   ├── google-services.json        # google services prod for android
│   │   ├── GoogleService-Info.plist    # google services prod for ios
├── ios                                 # iOS native directory
├── json2dart                           # Json2dart directory
│   ├── json                           
│   │   ├── body                        # Parameter body api in json
│   │   ├── response                    # Response api in json
│   ├── json2dart.yaml                  # Main file to control generate json2dart
├── lib       
│   ├── main                            
│   │   ├── main_page.dart              # Main pages  
│   ├── routes                          # Routes with Go Router
│   ├── locator.dart                    # Routes with Go Router
│   ├── main.dart                       # Service locator main (auto generated)
├── gits.yaml                           # Main environtment variable
└── ...

```

```console title="Feature Folder Structure (Example)"
┌── ...
├── features                                    # Modules feature directory
│   ├── auth                                    # Auth's modules (example)
│   │   ├── lib                         
│   │   │   ├── login                           # Login's page (example)           
│   │   │   │   ├── data                        # Data layer   
│   │   │   │   │   ├── datasources             # Datasource implementation (auto generated)          
│   │   │   │   │   ├── models                  # Data model body and response (auto generated)   
│   │   │   │   │   ├── repositories            # Implementation repositories (auto generated)           
│   │   │   │   ├── domain                      # Domain layer   
│   │   │   │   │   ├── entities                # Entity take from response (auto generated)
│   │   │   │   │   ├── repositories            # Contract repositories (auto generated)  
│   │   │   │   │   ├── usecases                # Usecase implementation (auto generated)
│   │   │   │   ├── presentation                # Presentation layer    
│   │   │   │   │   ├── bloc                    # Implementation bloc for fetch api (auto generated)
│   │   │   │   │   ├── cubit                   # Controller with Cubit
│   │   │   │   │   ├── pages                   # Pages directory
│   │   │   │   │   ├── widgets                 # Widgets directory for login page
│   │   │   │   ├── locator.dart                # Service locator login page (auto generated)      
│   │   │   │   ├── mapper.dart                 # Mapper models to entities vice versa (auto generated)    
│   │   │   ├── locator.dart                    # Service locator auth (auto generated)  
│   │   ├── test                                # Auth's unit test & widget test
└── ...

```

## Config (gits.yaml)

Like the .env gits.yaml aims to save the config environment will be ignored and keep secret only the team in the project has the right to get the gits.yaml.

## Core

The core module is a reusable code that is used in all features. Core module has additional dependencies on packages:

- Dependency Manage : All third party dependency except Gits Library
- Gits Library      : Dependency from Gits

## Internationalization

Internationalization location in `assets/assets/l10n` and will generated to `core/lib/src/l10n` with official tools `flutter gen-l10n` and simplied with Gits CLI command `gits l10n`. Learn more about Internationalization [here](https://docs.flutter.dev/development/accessibility-and-localization/internationalization)

## Pattern

- [BLoC Pattern](https://bloclibrary.dev/#/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [TDD Pattern](https://resocoder.com/category/tutorials/flutter/tdd-clean-architecture/)
- [Solid Pattern](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
