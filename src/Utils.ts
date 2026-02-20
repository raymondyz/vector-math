import { VecBase } from "./vectors/VecBase";

export class Utils {

  static clamp(x: number, bound1: number, bound2: number): number {
    const max = Math.max(bound1, bound2);
    const min = Math.min(bound1, bound2);
    return Math.max(min, Math.min(max, x));
  }

  static dist<T extends VecBase<T>>(v1: Readonly<T>, v2: Readonly<T>): number {
    return v1.clone().sub(v2).mag();
  }

  static randFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Random integer from min to max inclusive
  static randInt(min: number, max: number): number {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  }

  static randItem<T>(arr: Array<T>): T {
    const index = this.randInt(0, arr.length - 1);
    return arr[index];
  }
}

