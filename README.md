# name-of-project

## Documentation

<https://docs.amaze360.nl/name-of-project>

## Issues

[issues@example.com](mailto:issues@example.com)

## Github Repository

<https://git.amaze360.nl/360/name-of-project>

## Install

```sh
npm install git+ssh://git@gitlab.amaze-escape.com/360/name-of-project.git
```

## Upgrade

```sh
npm upgrade git+ssh://git@gitlab.amaze-escape.com/360/name-of-project.git
```

##  Naming Convention

| Style          | Category                                                           |
| !------------- | !----------------------------------------------------------------- |
| UpperCamelCase | class / interface / type / enum / decorator / type parameters      |
| lowerCamelCase | variable / parameter / function / method / property / module alias |
| CONSTANT_CASE  | global constant values, including enum values                      |
| #ident         | private identifier, we don't use 'private/public'                  |

## Consume bundle.js

### Bundle.js

#### HTML

```html
<html>
<head>
</head>
<body>
    <!-- HTML code goes here -->
    <!-- Include JS -->
    <script src="path/to/my-project/lib/bundle.js"></script>
</body>
</html>
```
#### JS

```js
const MC = new window.MyProject.MyClass();
```
