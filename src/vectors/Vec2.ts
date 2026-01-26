import { VecBase } from "./VecBase";

export class Vec2 extends VecBase<Vec2> {
  public static readonly ZERO = new Vec2(0, 0);
  public static readonly ONE = new Vec2(1, 1);
  public static readonly UNIT_X = new Vec2(1, 0);
  public static readonly UNIT_Y = new Vec2(0, 1);
  public static readonly NEG_X = new Vec2(-1, 0);
  public static readonly NEG_Y = new Vec2(0, -1);

  public readonly x: number;
  public readonly y: number;

  constructor(x?: number, y?: number) {
    super();
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  // Required methods

  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  add(v: Vec2): Vec2 {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  scale(s: number): Vec2 {
    return new Vec2(s * this.x, s * this.y);
  }

  dot(v: Vec2): number {
    return this.x * v.x + this.y * v.y;
  }

  toString(): string {
    return `Vec2(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`;
  }

  // Additional methods

  rotate(theta: number): Vec2 {
    const x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
    const y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
    return new Vec2(x, y);
  }

  angle(): number {
    return Math.atan2(this.y, this.x);
  }
}
