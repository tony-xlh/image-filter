import { GenericImageFilter } from "./GenericImageFilter";
// @ts-ignore
import otsu from 'otsu';

export class BlackwhiteFilter extends GenericImageFilter {
  threshold:number = 127;
  otsuEnabled:boolean = false;
  constructor(cvs:HTMLCanvasElement,threshold:number,otsuEnabled:boolean){
    super(cvs);
    this.threshold = threshold;
    this.otsuEnabled = otsuEnabled;
  }

  process(img:HTMLImageElement|HTMLCanvasElement):number{
    let width;
    let height;
    if (img instanceof HTMLImageElement) {
      width = img.naturalWidth;
      height = img.naturalHeight;
    }else{
      width = img.width;
      height = img.height;
    }
    const context = this.cvs.getContext('2d');
    this.cvs.width = width;
    this.cvs.height = height;
    let threshold;
    if (context) {
      context.drawImage(img, 0, 0);
      const imageData = context.getImageData(0, 0, this.cvs.width, this.cvs.height);
      const pixels = imageData.data; //[r,g,b,a,...]
      const grayscaleValues = [];
      for (var i = 0; i < pixels.length; i += 4) {
        const red = pixels[i];
        const green = pixels[i + 1];
        const blue = pixels[i + 2];
        const grayscale = this.grayscale(red, green, blue);
        grayscaleValues.push(grayscale);
      }
      if (this.otsuEnabled) {
        threshold = otsu(grayscaleValues);
      }else{
        threshold = this.threshold;
      }
      let grayscaleIndex = 0;
      for (var i = 0; i < pixels.length; i += 4) {
        const gray = grayscaleValues[grayscaleIndex];
        grayscaleIndex = grayscaleIndex + 1;
        let value = 255;
        if (gray < threshold) {
          value = 0;
        }
        pixels[i] = value;
        pixels[i + 1] = value;
        pixels[i + 2] = value;
      }
      context.putImageData(imageData, 0, 0);
    }
    return threshold;
  }

  grayscale(r: number, g: number, b: number): number {
    return (r * 6966 + g * 23436 + b * 2366) >> 15;
  }

  setThreshold(threshold:number){
    this.threshold = threshold;
  }

  setOTSUEnabled(enabled:boolean){
    this.otsuEnabled = enabled;
  }
}