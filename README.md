# svg-to-png-browser

Converts an svg string to a png blob url in the browser. Extra utility function to convert SVG to base64 png.

### Used in this app to convert SVGs to PNGs. 

[GetAvatars.app](https://getavatars.app/)

### Convert an SVG String to a PNG Blob URL inside the browser

```
const { convertSVGToPNGUrl } = require("svg-to-png-browser"); //function is async

//usage

const pngUrl = await convertSVGToPNGUrl(`<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Home-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Desktop-HD-Copy-8" transform="translate(-488.000000, -338.000000)" fill="#000000" fill-rule="nonzero">
        <g id="refresh-two-counterclockwise-circular-arrows-interface-symbol" transform="translate(488.000000, 338.000000)">
            <path d="M9.24133752,1.67424532 L9.40281916,1.38932843 L10.5517241,0.193421756 C7.75748541,-0.414460502 4.73249324,0.410428994 2.5636169,2.66892385 C-0.47012719,5.826857 -0.811452359,10.7256413 1.54041362,14.2753129 L0.313570728,15.5524075 L4.25193806,16.137931 L3.68944082,12.0383431 L2.6893186,13.0793764 C0.94528256,10.199721 1.27865663,6.34860921 3.68863999,3.83997101 C5.21147536,2.25482677 7.24907279,1.53262049 9.24133752,1.67424532 Z" id="Shape"></path>
            <path d="M17.0959556,1.82813012 L13.0313429,1.24137931 L13.6119007,5.34955982 L14.7409598,4.20839857 C17.0647848,7.14140674 16.8816263,11.4338438 14.1924289,14.1526716 C12.3884139,15.9760534 9.88314246,16.6599148 7.55438799,16.2034503 L6.20689655,17.5653554 C9.32557914,18.5737243 12.8794144,17.8276286 15.3543414,15.3261733 C18.6856708,11.959136 18.8712793,6.61518969 15.9094252,3.02821407 L17.0959556,1.82813012 Z" id="Shape"></path>
        </g>
    </g>
</g>
</svg>`);

console.log(pngUrl); //blob:http://localhost:3000/b42f9ed8-4b6e-40d2-b7a7-5ab11662e54f

```

### Convert an SVG to base64 PNG

```
const { svgToPngBase64 } = require("svg-to-png-browser"); //function is async

//usage
const base64 = await svgToPngBase64(svgString)

console.log(base64)

```
