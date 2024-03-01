export interface ImageFilter {
  cvs:HTMLCanvasElement;
  process(img:HTMLImageElement): void;
  convert(r:number,g:number,b:number,a:number): {r:number,g:number,b:number,a:number};
}