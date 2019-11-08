//open source the following:

//svg string to blob url
//svg string to png blob url

const svgToPngBase64 = (svgString) => {
  return new Promise((res, rej) => {
    var image = new Image();
    let xml = window.btoa(unescape(encodeURIComponent(svgString)));
    image.src = "data:image/svg+xml;base64," + xml;
    let url = "";
    image.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = 280;
      canvas.height = 280;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      url = canvas.toDataURL("image/" + "png");
      res(url);
    };
  });
};

const createBlobURL = (image) => {
  return URL.createObjectURL(image);
};

const makeBlobFromBase64 = (dataURL) => {
  const BASE64_MARKER = ";base64,";
  const parts = dataURL.split(BASE64_MARKER);
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: "image/png" });
};

const convertSVGToPNGUrl = async (SVGString) => {
  const base64 = await svgToPngBase64(SVGString);
  const pngBlob = makeBlobFromBase64(base64);
  return createBlobURL(pngBlob);
};

module.exports = {
  convertSVGToPNGUrl,
  makeBlobFromBase64,
  svgToPngBase64,
  createBlobURL
};
