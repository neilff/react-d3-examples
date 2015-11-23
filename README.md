# d3-rect-examples

> Examples of how to use D3 with React

## Description

This reposistory is a collection of D3 examples using React.

I created this repository because a lot the information I found regarding D3 + React seemed to be fairly dated. With the introduction of stateless components in React 0.14, I wanted to see if the typical approach to building D3 + React could be reapproached.

This respository is a collection of my findings so far. I've attempted to use the least amount of D3 required to create simple, reusable components. D3 is primarily used to calculate SVG element positions, rather than the typical appraoch of using it to also manipulate DOM.

Instead React is used to manage the DOM, which it does very well. This approach allows me to avoid some of the D3 spaghetti that typically occurs when using its API.

## Development

```bash
$ npm install
$ npm run dev
```

## Examples

```bash
$ npm install
$ npm start
```

Navigate to `http://localhost:8080/`
