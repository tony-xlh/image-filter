import { BlackwhiteFilter } from "./BlackwhiteFilter";
import {GrayscaleFilter} from "./GrayscaleFilter";
import { SepiaFilter } from "./SepiaFilter";

console.log(GrayscaleFilter);
(window as any)["GrayscaleFilter"] = GrayscaleFilter;
(window as any)["SepiaFilter"] = SepiaFilter;
(window as any)["BlackwhiteFilter"] = BlackwhiteFilter;