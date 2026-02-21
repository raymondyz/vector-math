import { VecBase } from "./VecBase";

export class Vec2 extends VecBase<Vec2> {
  public static ZERO(): Vec2 {return new Vec2(0, 0)}
  public static ONE(): Vec2 {return new Vec2(1, 1)}
  public static UNIT_X(): Vec2 {return new Vec2(1, 0)}
  public static UNIT_Y(): Vec2 {return new Vec2(0, 1)}
  public static NEG_X(): Vec2 {return new Vec2(-1, 0)}
  public static NEG_Y(): Vec2 {return new Vec2(0, -1)}

  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    super();
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  // Required methods

  clone(this: Readonly<Vec2>): Vec2 {
    return new Vec2(this.x, this.y);
  }

  copy(this: Vec2, v: Readonly<Vec2>): Vec2 {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  addScaled(this: Vec2, v: Readonly<Vec2>, s: number): Vec2 {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }

  scale(this: Vec2, s: number): Vec2 {
    this.x *= s;
    this.y *= s;
    return this;
  }

  dot(this: Readonly<Vec2>, v: Readonly<Vec2>): number {
    return this.x * v.x + this.y * v.y;
  }

  toString(this: Readonly<Vec2>): string {
    return `Vec2(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`;
  }

  // Additional methods

  rotate(this: Vec2, theta: number): Vec2 {
    const x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
    const y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
    this.x = x;
    this.y = y;
    return this;
  }

  rotated(this: Readonly<Vec2>, theta: number): Vec2 {
    return this.clone().rotate(theta);
  }

  angle(this: Readonly<Vec2>): number {
    return Math.atan2(this.y, this.x);
  }
}
