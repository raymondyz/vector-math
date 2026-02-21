import { VecBase } from "./VecBase";

export class Vec3 extends VecBase<Vec3> {
  public static ZERO(): Vec3 {return new Vec3(0, 0, 0)}
  public static ONE(): Vec3 {return new Vec3(1, 1, 1)}
  public static UNIT_X(): Vec3 {return new Vec3(1, 0, 0)}
  public static UNIT_Y(): Vec3 {return new Vec3(0, 1, 0)}
  public static UNIT_Z(): Vec3 {return new Vec3(0, 0, 1)}
  public static NEG_X(): Vec3 {return new Vec3(-1, 0, 0)}
  public static NEG_Y(): Vec3 {return new Vec3(0, -1, 0)}
  public static NEG_Z(): Vec3 {return new Vec3(0, 0, -1)}

  public x: number;
  public y: number;
  public z: number;

  constructor(x?: number, y?: number, z?: number) {
    super();
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.z = z ?? 0;
  }

  // Required methods

  clone(this: Readonly<Vec3>): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }

  copy(this: Vec3, v: Readonly<Vec3>): Vec3 {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }

  addScaled(this: Vec3, v: Readonly<Vec3>, s: number): Vec3 {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }

  scale(this: Vec3, s: number): Vec3 {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  dot(this: Readonly<Vec3>, v: Readonly<Vec3>): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  toString(this: Readonly<Vec3>): string {
    return `Vec3(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${this.z.toFixed(3)})`;
  }

  // Additional methods

  rotateX(this: Vec3, theta: number): Vec3 {
    const x = this.x;
    const y = this.y * Math.cos(theta) - this.z * Math.sin(theta);
    const z = this.y * Math.sin(theta) + this.z * Math.cos(theta);
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  rotatedX(this: Readonly<Vec3>, theta: number): Vec3 {
    return this.clone().rotateX(theta);
  }

  rotateY(this: Vec3, theta: number): Vec3 {
    const x = this.x * Math.cos(theta) + this.z * Math.sin(theta);
    const y = this.y;
    const z = -this.x * Math.sin(theta) + this.z * Math.cos(theta);
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  rotatedY(this: Readonly<Vec3>, theta: number): Vec3 {
    return this.clone().rotateY(theta);
  }

  rotateZ(this: Vec3, theta: number): Vec3 {
    const x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
    const y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
    const z = this.z;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  rotatedZ(this: Readonly<Vec3>, theta: number): Vec3 {
    return this.clone().rotateZ(theta);
  }

  cross(this: Vec3, other: Readonly<Vec3>): Vec3 {
    const x = this.y * other.z - this.z * other.y;
    const y = this.z * other.x - this.x * other.z;
    const z = this.x * other.y - this.y * other.x;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  crossed(this: Readonly<Vec3>, other: Readonly<Vec3>): Vec3 {
    return this.clone().cross(other);
  }
}
