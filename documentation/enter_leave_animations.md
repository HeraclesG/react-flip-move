# Enter/Leave Animations

FlipMove supports CSS-based enter/leave animations. For convenience, several presets are provided:


#### Elevator (default)

![Elevator](https://s3.amazonaws.com/githubdocs/fm-elevator.gif)

```jsx
<FlipMove enterAnimation="elevator" leaveAnimation="elevator" />
```

#### Fade

![Fade](https://s3.amazonaws.com/githubdocs/fm-fade.gif)

```jsx
<FlipMove enterAnimation="fade" leaveAnimation="fade" />
```

#### Accordion (Vertical)

![Accordion (Vertical)](https://s3.amazonaws.com/githubdocs/fm-accordian-vertical.gif)

```jsx
<FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical" />
```

#### Accordion (Horizontal)

![Accordion (Horizontal)](https://s3.amazonaws.com/githubdocs/fm-accordian-horizontal.gif)

```jsx
<FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" />
```

#### Custom

You can supply your own CSS-based transitions to customize the behaviour. Both `enterAnimation` and `leaveAnimation` take an object with `from` and `to` properties. You can then provide any valid CSS properties to this object, although for performance reasons it is recommended that you stick to `transform` and `opacity`.

![Custom](https://s3.amazonaws.com/githubdocs/fm-custom-rotate-x.gif)

```jsx
 <FlipMove
   staggerDelayBy={150}
   enterAnimation={{
     from: {
       transform: 'rotateX(180deg)',
       opacity: 0.1,
     },
     to: {
       transform: '',
     },
   }}
   leaveAnimation={{
     from: {
        transform: '',
     },
     to: {
       transform: 'rotateX(-120deg)',
       opacity: 0.1,
     },
   }}
 >
   {this.renderRows()}
 </FlipMove>
```

## Appear animations

`enterAnimation` will not fire for the _initial_ render. If you want your items to animate on mount, you'll have to use `appearAnimation`.

It functions identically to `enterAnimation`, and has the same presets.

For example:

```jsx
 <FlipMove
   staggerDelayBy={150}
   appearAnimation="accordionVertical"
   enterAnimation="fade"
   leaveAnimation="fade"
 >
   {this.renderRows()}
 </FlipMove>
```
