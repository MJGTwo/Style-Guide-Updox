During my summer internship in 2017, I worked at Updox in Dublin, Ohio. During this time, one of the projects that I worked on was a style guide. The purpose of this style guide was to implement the designs from the UX/UI Designer for the next generation of software produced developed by Updox. The project uses NodeJS, ReactJS, SASS and some of Google's Material-UI.

My responsibility during this project was to design the structure of the project as well as implementing the first working version of the project. The end goal of the project is to have a private node package that Updox developers can install/add to their projects to allow them to use pre-defined elements resulting in two effects:
* Ensuring consistency in code function and appearance.
* Saving developers time by preventing the creation of already known elements.

Updox was generous and let me keep a copy of this project at the end of my internship.

=================

* [Setup](#setup)

* [Adding a Component](#adding-a-component)

  * [Create The Component Directory](#create-the-component-directory)

    * [index.js](#indexjs)

    * [my_component.js](#my_componentjs)

    * [my_component.scss](#my_componentscss)

    * [example.js](#examplejs)

  * [Edit /lib/index.js and /lib/examples.js](#edit-libindexjs-and-libexamplesjs)

    * [Editing /lib/examples.js](#editing-libexamplesjs)

    * [Editing /lib/index.js](#editing-libindexjs)

* [Next Steps](#next-steps)

  * [Automate addition of a new component](#automate-addition-of-a-new-component)

  * [NPM Package](#npm-package)

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To setup:

* Clone the repo.

* `yarn install` to install packages.

* `yarn start` to run.

* Go to `localhost:3000` in your browser.

To build:

* `yarn build`

* `serve -s build`

  * `npm -g install serve` if you do not have serve.

## Adding a component

In this section, we will create a stateless component called `<MyComponent />` and add it to the repo.

### Create the component directory

Currently (as of August 4th, 2017), all style guide components live in the directory `/src/lib`. Create a new directory in `/lib` called `MyComponent` and fill it with the following files:

* index.js

* my_component.js

* my_component.scss

* example.js

#### index.js

The following is example code for the `index.js` file for the component `<MyComponent/>`:

```
Object.defineProperty(exports, "__esModule", {
  value : true
});

exports.default = exports.MyComponent = undefined;

var _MyComponent2 = require('./my_component.js');

var _MyComponent3 = _interopRequireDefault(_MyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MyComponent = _MyComponent3.default;
exports.default = _MyComponent3.default;
```

This exports the component as the default component for the directory, as well as allowing for individual component exporting with curly brackets.

#### my_component.js

We are going to keep this component definition brief. The following is example code for the `my_component.js` file for the component `<MyComponent/>`:

```
import React from 'react';

import s from 'my_component.css';

export default function MyComponent(props){

  return(
    <div className = {s.myComponent}>
      {props.text}
    </div>
  )
}
```

#### my_component.scss

This project comes with [SASS](http://sass-lang.com/) enabled :rocket: ! When you create a SASS file, it will be transpiled into a CSS file when the project is running. Please note that there are two important, predefined sass files that are included in this project: `colors.scss`, `type.scss`. You must include them if you want to use the fonts and colors used in this Style Guide. They live in the `/style` directory in the project.

The following is example code for the `my_component.scss` file for the component `<MyComponent/>`:

```
@import '../style/colors.scss';
@import '../style/type.scss';

:local(.my_component){
  background : $colorProduct;
  font-family: $font1;
  color: $colorText;
}
```

#### example.js

The `example.js` is required for the style guide to generate the new component, `<MyComponent/>` in the Style Guide. To do this, a JS object must created to follow a predefined schema.

The following is example code for the `example.js` file for the component `<MyComponent/>`:

```
import React from 'react';

var EXAMPLES = {
  'title' : 'My Component',
  'text' : [<div><h5>This text describes the component My Component and where we should use it.</h5></div>],
  'example' : [
    {
      'title' : 'Examples',
      content : [
        {
          'name' : 'MyComponent',
          'fnx': {
            text : 'An example of MyComponent'
          }
        },
        {
          'name' : 'MyComponent',
          'fnx': {
            text : 'Another example of MyComponent'
          }
        }
      ],
      'code' :
`<MyComponent
  text = 'An example of MyComponent'
/>`,
      'properties' : [
        {
          'name' : 'text',
          'type' : 'String',
          'default' : '',
          'description' : 'The text property value will display inside the body of MyComponent'
        }
      ]
    }
  ],
  'active' : 'false'
}

export default EXAMPLES;
```

This is a lot to take in. Keep the keys the same but play with the values to see how they work.

### Edit /lib/index.js and /lib/examples.js

These two steps will (read: hopefully sometime soon) eventually be automated. Until then, you must do them manually.

#### Editing /lib/examples.js

As of August 4th, 2017, the `/lib/examples.js` file looks like the following:

```
import {default as AlertExamples} from './Alert/example.js';
import {default as ButtonExamples} from './Button/example.js';
import {default as CheckboxExamples} from './Checkbox/example.js';
import {default as ColorsExamples} from './Colors/example.js';
import {default as DropdownExamples} from './Dropdown/example.js';
import {default as InputExamples} from './Input/example.js';
import {default as Introduction} from './Introduction/example.js';
import {default as TypographyExamples} from './Typography/example';
import {default as ModalExamples} from './Modal/example';
import {default as CalendarExamples} from './Calendar/example';
import {default as IconExamples} from './Icons/example';
import {default as BrowserSupportExamples} from './BrowserSupport/example';


let EXAMPLES = [
  Introduction,
  AlertExamples,
  BrowserSupportExamples,
  ButtonExamples,
  CheckboxExamples,
  ColorsExamples,
  CalendarExamples,
  DropdownExamples,
  IconExamples,
  InputExamples,
  ModalExamples,
  TypographyExamples,

];

export default EXAMPLES;
```

To add your component, import it like any other component:

`import {default as MyComponentExamples} from './MyComponent/example'`

Then add that variable _alphabetically_ into the `EXAMPLES` array.

#### Editing /lib/index.js

As of August 4th, 2017, the `/lib/index.js` file looks like the following:

```
let box = {};

box.Intro = require('./Introduction')['Intro'];
box.Alert = require('./Alert')['Alert'];
box.Button = require('./Button')['Button'];
box.HLink = require('./Button')['HLink'];
box.HGButton = require('./Button')['HGButton'];
box.Checkbox = require('./Checkbox')['Checkbox'];
box.Colors = require('./Colors')['Colors'];
box.Calendar = require('./Calendar')['Calendar'];
box.Dropdown = require('./Dropdown')['Dropdown'];
box.FormInput = require('./Input')['FormInput'];
box.TextInput= require('./Input')['TextInput'];
box.StandardModal = require('./Modal')['StandardModal'];
box.OptionsModal = require('./Modal')['OptionsModal'];
box.Typography= require('./Typography')['Typography'];



export default box;
```

Add your new component by adding the following line:

`box.MyComponent = require('./MyComponent')['MyComponent'];`

## Next Steps

### Automate addition of a new component

The Style Guide project will have the feature to refresh the files `/src/lib/index.js` and `/src/lib/examples.js`. The Style Guide project must be able to detect when a new component has been added to the `/src/lib` directory. This file should not live in the `/src/lib` directory and live in `/src/demo` directory so it doesn't ship with the NPM Package.

### NPM Package

# The Style Guide project will be packaged as a NPM package, allowing for developers to install/add this project to their front-end project and use the components seamlessly.

During my summer internship in 2017, I worked at Updox in Dublin, Ohio. During this time, one of the projects that I worked on was a style guide. The purpose of this style guide was to implement the designs from the UX/UI Designer for the next generation of software produced developed by Updox. The project uses NodeJS, ReactJS, SASS and some of Google's Material-UI.

My responsibility during this project was to design the structure of the project as well as implementing the first working version of the project. The end goal of the project is to have a private node package that Updox developers can install/add to their projects to allow them to use pre-defined elements resulting in two effects:

* Ensuring consistency in code function and appearance.
* Saving developers time by preventing the creation of already known elements.

Updox was generous enough to let me keep a copy of this project at the end of my internship.
