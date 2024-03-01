import { GenericImageFilter } from "./GenericImageFilter";

export class BlackwhiteFilter extends GenericImageFilter {
  threshold:number = 127;
  convert(r: number, g: number, b: number, a: number): { r: number; g: number; b: number; a: number; } {
    const gray = this.grayscale(r,g,b);
    let value = 255;
    if (gray < this.threshold) {
      value = 0;
    }
    return {r:value,g:value,b:value,a:a};
  }

  grayscale(r: number, g: number, b: number): number {
    return (r * 6966 + g * 23436 + b * 2366) >> 15;
  }

  setThreshold(threshold:number){
    this.threshold = threshold;
  }
}