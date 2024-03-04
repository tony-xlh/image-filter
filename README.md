# image-filter

A JavaScript library to apply image filtering effects. It can be used to enhance scanned documents images or photos.

[Online demo](https://tony-xlh.github.io/image-filter)

## Install

Via NPM:

```bash
npm install image-filter-js
```

Via CDN:

```html
<script type="module">
  import { ImageFilterHandler, BlackwhiteFilter, InvertFilter, GrayscaleFilter, SepiaFilter } from 'https://cdn.jsdelivr.net/npm/image-filter-js/dist/image-filter.js';
</script>
```

## Usage

Process an image with the desired effect and save the data onto a Canvas.

```js
import { ImageFilterHandler, BlackwhiteFilter, InvertFilter, GrayscaleFilter, SepiaFilter } from 'image-filter-js';
let cvs = document.createElement("canvas");
let grayscaleFilter = new GrayscaleFilter(cvs);
grayscaleFilter.process(img);
```

There are four filters:

1. Grayscale
2. Black & White
3. Sepia
4. Invert

The `BlackwhiteFilter`'s constructor takes two extra arguments. You can specify its threshold or enable automatic threshold calculating using OTSU's method.

```js
let blackwhiteFilter = new BlackwhiteFilter(cvs,127,true);
```

## Work with Dynamsoft Document Viewer

The package can use [Dynamsoft Document Viewer](https://www.dynamsoft.com/document-viewer/docs/introduction/index.html)'s [custom image filter](https://www.dynamsoft.com/document-viewer/docs/features/advanced/imagefilter.html) feature to work as its filter handler so that we can use the package's filters in Dynamsoft Document Viewer.

You can set it up with the following code:

```js
let filterHandler = new ImageFilterHandler();
Dynamsoft.DDV.setProcessingHandler("imageFilter", filterHandler);
```

## License

MIT
