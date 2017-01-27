React Flip Move
=========

[![Join the chat at https://gitter.im/react-flip-move/Lobby](https://badges.gitter.im/react-flip-move/Lobby.svg)](https://gitter.im/react-flip-move/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![build status](https://travis-ci.org/joshwcomeau/react-flip-move.svg?branch=master)](https://travis-ci.org/joshwcomeau/react-flip-move)
[![npm version](https://img.shields.io/npm/v/react-flip-move.svg)](https://www.npmjs.com/package/react-flip-move)
[![npm monthly downloads](https://img.shields.io/npm/dm/react-flip-move.svg)](https://www.npmjs.com/package/react-flip-move)



This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes.

CSS transitions only work for CSS properties. If your list is shuffled, the items have rearranged themselves, but without the use of CSS. The DOM nodes don't know that their on-screen location has changed; they've just been removed and inserted elsewhere in the document.

Flip Move uses the [_FLIP technique_](https://aerotwist.com/blog/flip-your-animations/#the-general-approach) to work out what such a transition would look like, and fakes it using 60+ FPS hardware-accelerated CSS transforms.

[![demo](https://s3.amazonaws.com/githubdocs/fm-main-demo.gif)](http://joshwcomeau.github.io/react-flip-move/examples/#/shuffle)



## Demos

  * <a href="http://joshwcomeau.github.io/react-flip-move/examples/#/shuffle" target="_blank">__List/Grid Shuffle__</a>
  * <a href="http://joshwcomeau.github.io/react-flip-move/examples/#/square" target="_blank">__Fuscia Square__</a>
  * <a href="http://joshwcomeau.github.io/react-flip-move/examples/#/scrabble" target="_blank">__Scrabble__</a>
  * <a href="http://joshwcomeau.github.io/react-flip-move/examples/#/laboratory" target="_blank">__Laboratory__</a>

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Quickstart](#quickstart)
* [Compatibility](#compatibility)
* [Enter/Leave Animations](#enterleave-animations)
* [Options](#options)
  * [children](#children)
  * [easing](#easing)
  * [duration](#duration)
  * [delay](#delay)
  * [staggerDurationBy](#staggerdurationby)
  * [staggerDelayBy](#staggerdelayby)
  * [enterAnimation](#enteranimation)
  * [leaveAnimation](#leaveanimation)
  * [maintainContainerHeight](#maintaincontainerheight)
  * [onStart](#onstart)
  * [onFinish](#onfinish)
  * [onStartAll](#onstartall)
  * [onFinishAll](#onfinishall)
  * [style](#style)
  * [className](#classname)
  * [typeName](#typename)
  * [disableAllAnimations](#disableallanimations)
  * [getPosition](#getposition)
  * [verticalAlignment](#verticalalignment)
  * [HTML Attributes](#html-attributes)
* [Gotchas](#gotchas)
* [Known Issues](#known-issues)
* [Changelog](#changelog)
* [Contributions](#contributions)
* [Development](#development)
* [License](#license)



## Installation

```
npm i -S react-flip-move
```

UMD builds are also available via CDN:
* [react-flip-move.js](https://unpkg.com/react-flip-move@2.1.4/dist/react-flip-move.js)
* [react-flip-move.min.js](https://unpkg.com/react-flip-move@2.1.4/dist/react-flip-move.min.js)


## Features

Flip Move was inspired by Ryan Florence's awesome <a href="https://github.com/ryanflorence/react-magic-move" target="_blank">_Magic Move_</a>, and offers:

  * Full compatibility with React 0.13, 0.14, and 15. Will be maintained.

  * Exclusive use of hardware-accelerated CSS properties (`transform: translate`) instead of positioning properties (`top`, `left`). <a href="https://aerotwist.com/blog/pixels-are-expensive/" target="_blank">_Read why this matters_</a>.

  * Full support for enter/exit animations, including some spiffy presets, that all leverage hardware-accelerated CSS properties.

  * Ability to 'humanize' transitions by staggering the delay and/or duration of subsequent elements.

  * Ability to provide `onStart` / `onFinish` callbacks.

  * Implementation based on the [_FLIP technique_](https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd), a beautiful-in-its-simplicity method of tackling this problem. UMD build, when minified and gzipped, is only 6kb! ⚡



## Quickstart

The implementation couldn't be simpler. Just wrap the items you'd like to move in a `FlipMove`, with any [custom options](#options):

```js
import FlipMove from 'react-flip-move';

class TopArticles extends Component {
  renderTopArticles() {
    return this.props.articles.map( article => <Article {...article} key={article.id} /> );
  }

  render() {
    return (
      <div className="top-articles">
        <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
          { this.renderTopArticles() }
        </FlipMove>
      </div>
    );
  }
}
```



## Compatibility

|           | Chrome | Firefox | Safari |   IE  | Edge | iOS Safari/Chrome | Android Chrome |
|-----------|:------:|:-------:|:------:|:-----:|:----:|:-----------------:|:--------------:|
| Supported |  ✔ 10+ |   ✔ 4+  | ✔ 6.1+ | ✔ 10+ |   ✔  |       ✔ 6.1+      |        ✔       |



## How It Works

Curious how this works, under the hood? [__Read the Medium post__](https://medium.com/@joshuawcomeau/animating-the-unanimatable-1346a5aab3cd).



## Enter/Leave Animations




## Options

### `children`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Array`, `Object` | `undefined` |


The children passed to FlipMove are the component(s) or DOM element(s) that will be moved about. Accepts either a single child (as long as it has a unique `key` property) or an array of children.

---

### `easing`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `String` | "ease-in-out" |


Any valid CSS3 timing function (eg. "linear", "ease-in", "cubic-bezier(1, 0, 0, 1)").

---

### `duration`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Number` | `350` |


The length, in milliseconds, that the transition ought to take.


---

### `delay`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Number` | `0` |


The length, in milliseconds, to wait before the animation begins.

---

### `staggerDurationBy`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Number` | `0` |


The length, in milliseconds, to be added to the duration of each subsequent element.

For example, if you are animating 4 elements with a `duration` of 200 and a `staggerDurationBy` of 20:

* The first element will take 200ms to transition.
* The second element will take 220ms to transition.
* The third element will take 240ms to transition.
* The fourth element will take 260ms to transition.

This effect is great for "humanizing" transitions and making them feel less robotic.

---

### `staggerDelayBy`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Number` | `0` |


The length, in milliseconds, to be added to the delay of each subsequent element.

For example, if you are animating 4 elements with a `delay` of 0 and a `staggerDelayBy` of 20:

* The first element will start transitioning immediately.
* The second element will start transitioning after 20ms.
* The third element will start transitioning after 40ms.
* The fourth element will start transitioning after 60ms.

Similarly to staggerDurationBy, This effect is great for "humanizing" transitions and making them feel less robotic.

**Protip:** You can make elements animate one-at-a-time by using an identical `duration` and `staggerDelayBy`.

---

### `enterAnimation`

| **Accepted Types:**            | **Default Value** |
|--------------------------------|-------------------|
|  `String`, `Boolean`, `Object` | 'elevator'        |

Control the onEnter animation that runs when new items are added to the DOM. For examples of this property, see the [**feature description above**](#enterleave-animations).

Accepts several types:

**String:** You can enter one of the following presets to select that as your enter animation:
  * `elevator` (default)
  * `fade`
  * `accordionVertical`
  * `accordionHorizontal`
  * `none`

[View the CSS implementation of these presets](https://github.com/joshwcomeau/react-flip-move/blob/master/src/enter-leave-presets.js).

**Boolean:** You can enter `false` to disable the enter animation, or `true` to select the default enter animation (elevator).

**Object:** For fully granular control, you can pass in an object that contains the styles you'd like to animate.

It requires two keys: `from` and `to`. Each key holds an object of CSS properties. You can supply any valid camelCase CSS properties, and flip-move will transition between the two, over the course of the specified `duration`.

Example:

```js
const customEnterAnimation = {
  from: { transform: 'scale(0.5, 1)' },
  to:   { transform: 'scale(1, 1)' }
};

<FlipMove enterAnimation={customEnterAnimation}>
  {renderChildren()}
</FlipMove>
```

It is recommended that you stick to hardware-accelerated CSS properties for optimal performance: transform and opacity.

---

### `leaveAnimation`

| **Accepted Types:**            | **Default Value** |
|--------------------------------|-------------------|
|  `String`, `Boolean`, `Object` | 'elevator'        |

Control the onLeave animation that runs when new items are removed from the DOM. For examples of this property, see the [**feature description above**](#enterleave-animations).

This property functions identically to `enterAnimation`.

Accepts several types:

**String:** You can enter one of the following presets to select that as your enter animation:
  * `elevator` (default)
  * `fade`
  * `accordionVertical`
  * `accordionHorizontal`
  * `none`

[View the CSS implementation of these presets](https://github.com/joshwcomeau/react-flip-move/blob/master/src/enter-leave-presets.js).

**Boolean:** You can enter `false` to disable the leave animation, or `true` to select the default leave animation (elevator).

**Object:** For fully granular control, you can pass in an object that contains the styles you'd like to animate.

It requires two keys: `from` and `to`. Each key holds an object of CSS properties. You can supply any valid camelCase CSS properties, and flip-move will transition between the two, over the course of the specified `duration`.

Example:

```js
const customLeaveAnimation = {
  from: { transform: 'scale(1, 1)' },
  to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
};

<FlipMove leaveAnimation={customLeaveAnimation}>
  {renderChildren()}
</FlipMove>
```

It is recommended that you stick to hardware-accelerated CSS properties for optimal performance: transform and opacity.

---

### `maintainContainerHeight`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Boolean`          | `false`           |

Do not collapse container height until after leaving animations complete.

When `false`, children are immediately removed from the DOM flow as they animate away. Setting this value to `true` will maintain the height of the container until after their leaving animation completes.

---

### `onStart`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Function`         | `undefined`       |


A callback to be invoked **once per child element** at the start of the animation.

The callback is invoked with two arguments:

* `childElement`: A reference to the React Element being animated.
* `domNode`: A reference to the unadulterated DOM node being animated.

In general, it is advisable to ignore the `domNode` argument and work with the `childElement`. The `domNode` is just an escape hatch for doing complex things not otherwise possible.

---

### `onFinish`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Function`         | `undefined`       |


A callback to be invoked **once per child element** at the end of the animation.

The callback is invoked with two arguments:

* `childElement`: A reference to the React Element being animated.
* `domNode`: A reference to the unadulterated DOM node being animated.

In general, it is advisable to ignore the `domNode` argument and work with the `childElement`. The `domNode` is just an escape hatch for doing complex things not otherwise possible.

---

### `onStartAll`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Function`         | `undefined`       |


A callback to be invoked **once per group** at the start of the animation.

The callback is invoked with two arguments:

* `childElements`: An array of the references to the React Element(s) being animated.
* `domNodes`: An array of the references to the unadulterated DOM node(s) being animated.

These arguments are similar to the ones provided for `onStart`, except we provide an *array* of the elements and nodes. The order of both arguments is guaranteed; this means you can use a zipping function like [lodash's .zip](https://lodash.com/docs#zip) to get pairs of element/node, if needed.

In general, it is advisable to ignore the `domNodes` argument and work with the `childElements`. The `domNodes` are just an escape hatch for doing complex things not otherwise possible.

---

### `onFinishAll`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Function`         | `undefined`       |


A callback to be invoked **once per group** at the end of the animation.

The callback is invoked with two arguments:

* `childElements`: An array of the references to the React Element(s) being animated.
* `domNodes`: An array of the references to the unadulterated DOM node(s) being animated.

These arguments are similar to the ones provided for `onFinish`, except we provide an *array* of the elements and nodes. The order of both arguments is guaranteed; this means you can use a zipping function like [lodash's .zip](https://lodash.com/docs#zip) to get pairs of element/node, if needed.

In general, it is advisable to ignore the `domNodes` argument and work with the `childElements`. The `domNodes` are just an escape hatch for doing complex things not otherwise possible.

---

### `typeName`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `String`           | 'div'             |


Flip Move wraps your children in a container element. By default, this element is a `div`, but you may wish to provide a custom HTML element (for example, if your children are list items, you may wish to set this to `ul`).

Any valid HTML element type is accepted, but peculiar things may happen if you use an unconventional element.

---

### `disableAllAnimations`

| **Accepted Types:** | **Default Value** |
|---------------------|-------------------|
|  `Boolean`          | `false`           |


Sometimes, you may wish to temporarily disable the animations and have the normal behaviour resumed. Setting this flag to `true` skips all animations.

---

### `getPosition`

| **Accepted Types:** | **Default Value**       |
|---------------------|-------------------------|
|  `Function`         | `getBoundingClientRect` |


This function is called with a DOM node as the only argument. It should return an object as specified by the [getBoundingClientRect() spec](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

For normal usage of FlipMove you won't need this. An example of usage is when FlipMove is used in a container that is scaled using CSS. You can correct the values from `getBoundingClientRect` by using this prop.

---

### `verticalAlignment`

| **Accepted Types:** | **Default Value**       |
|---------------------|-------------------------|
|  `String` (either 'top' or 'bottom')         | `top` |

By default, Flip Move assumes that when items are removed from a list, the parent container's height is going to shrink from the bottom.

```
 _____              _____
|     |     ->     |_____|
|     |               
|_____|               ^
```

Sometimes, though, you may wish to position your list so that it shrinks from the top. A good example is Facebook's web chat; it sticks to the bottom of your screen.

```
 _____   
|     |               v
|     |             _____
|_____|      ->    |_____|
```

If your item's container is aligned to the bottom like this, leave animations will be funky. This is because Flip Move does some math to figure out where the item should be, and it orients it relative to _the top of the container_.

By setting `verticalAlignment="bottom"`, you reverse this logic, and ensure that when items are added and removed from the list, they're positioned correctly.

---

### HTML Attributes

FlipMove creates its own DOM node to wrap the children it needs to animate. Sometimes, you'll want to be able to pass specific HTML attributes to this node.

All props other than the ones listed above will be delegated to this new node, so you can apply them directly to FlipMove. For example:

```html
<div>
  <FlipMove typeName="ul" className="row" style={{ backgroundColor: 'red' }}>
    <li className="col">Column 1</li>
    <li className="col">Column 2</li>
  </FlipMove>
</div>
```

FlipMove passes the `className` and `style` props along to the `ul` that needs to be created. Here's how it renders:

```html
<div>
  <ul class="row" style="background-color: red">
    <li class="col">Column 1</li>
    <li class="col">Column 2</li>
  </ul>
</div>
```

This works for all HTML props - there's no validation.

---

## Changelog

See the [GitHub releases](https://github.com/joshwcomeau/react-flip-move/releases) for version changes.


## Gotchas

  * Does not work with stateless functional component children. This is because Flip Move uses refs to identify and apply styles to children, and stateless functional components cannot be given refs.

  * All children **need a unique `key` property**. Even if Flip Move is only given a single child, it needs to have a unique `key` prop for Flip Move to track it.

  * Elements whose positions have not changed between states will not be animated. This means that no `onStart` or `onFinish` callbacks will be executed for those elements.

  * Sometimes you'll want to update or change an item _without_ triggering a Flip Move animation. For example, with optimistic updating, you may render a temporary version before replacing it with the server-validated one. In this case, simply use the same `key` for both versions, and Flip Move will treat them as the same item.


## Known Issues

  * **Interrupted enter/leave animations can be funky**. This has gotten better recently thanks to our great contributors, but extremely fast adding/removing of items can cause weird visual glitches, or cause state to become inconsistent. Experiment with your usecase!

  * **Existing transition/transform properties will be overridden.** I am hoping to change this in a future version, but at present, Flip Move does not take into account existing `transition` or `transform` CSS properties on its direct children.


## Note on `will-change`

To fully benefit from hardware acceleration, each item being translated should have its own compositing layer. This can be accomplished with the [CSS will-change property](https://dev.opera.com/articles/css-will-change-property/).

Applying `will-change` too willy-nilly, though, can have an adverse effect on mobile browsers, so I have opted to not use it at all.

In my personal experimentations on modern versions of Chrome, Safari, Firefox and IE, this property offers little to no gain (in Chrome's timeline I saw a savings of ~0.5ms on a 24-item shuffle).

YMMV: Feel free to experiment with the property in your CSS. Flip Move will respect the wishes of your stylesheet :)

Further reading: [CSS will-change Property](https://dev.opera.com/articles/css-will-change-property/)



## Contributions

Contributors welcome! Please discuss new features with me ahead of time, and submit PRs for bug fixes with tests (Testing stack is Mocha/Chai/Sinon, tested in-browser by Karma).


## Development

This project uses [React Storybook](https://github.com/kadirahq/react-storybook) in development. The developer experience is absolutely lovely, and it makes testing new features like enter/leave presets super straightforward.

After installing dependencies, launch the Storybook dev server with `npm run storybook`.



## License

[MIT](https://github.com/joshwcomeau/flip-move/blob/master/LICENSE.md)
