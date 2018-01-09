# Looping Timer

Use this chrome extension to create customized revolving time blocks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Fork and clone this repository to your local machine.

### Installing

A step by step series of examples that tell you have to get a development env running

Install dependencies  
```
npm install
```

Start the local server  
```
npm start
```

<!-- End with an example of getting some data out of the system or using it for a little demo -->

## Running the tests

<!-- Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

<!-- ## Deployment

Add additional notes about how to deploy this on a live system -->

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
* [Material UI @next](https://material-ui-next.com/)

### Stack
- react
- redux

## Contributing

Please read [CONTRIBUTING.md](#) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Rachel Ralston** - *Initial work*
  - [rachel-ftw](https://github.com/rachel-ftw)
    + [linkedin](http://www.linkedin.com/in/rachelralston)
    + [website](http://www.rachelralston.com)

See also the list of [contributors](https://github.com/rachel-ftw/looping-timer/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by [Timer Loop](https://chrome.google.com/webstore/detail/timer-loop/mdkfiefeoimmobmhdimachkfcpkgahlc?hl=en)

---

### Development
#### Specifications
- [X] users can see display timers on the nav bar
  - [X] users can use sub timers
  - [ ] sub timers automatically rotate and keep track of total rotations
- [ ] local timer updates persist through page reload
- [ ] users can download the app from the Chrome store
- [ ] users can read about the app on landing page at rachelralston.com
- [ ] users can adjust the order of timers by dragging and dropping
- [ ] users can choose color theme or background from [Unsplash api](https://unsplash.com/developers)

WIP
- ! - DEBUG why isn't rotateSubTimer dispatching the action to the reducer?
- figure out MUI's withStyles HOC
  - work with this on [nested nav](https://codesandbox.io/s/v806y321yy)
  - [api](https://material-ui-next.com/customization/css-in-js/#withstyles-styles-options-higher-order-component)
  - [overrides](https://material-ui-next.com/customization/overrides/)
