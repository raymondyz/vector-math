import { VecBase } from "./VecBase";

export class Vec3 extends VecBase<Vec3> {
  public static readonly ZERO = new Vec3(0, 0, 0);
  public static readonly ONE = new Vec3(1, 1, 1);
  public static readonly UNIT_X = new Vec3(1, 0, 0);
  public static readonly UNIT_Y = new Vec3(0, 1, 0);
  public static readonly UNIT_Z = new Vec3(0, 0, 1);
  public static readonly NEG_X = new Vec3(-1, 0, 0);
  public static readonly NEG_Y = new Vec3(0, -1, 0);
  public static readonly NEG_Z = new Vec3(0, 0, -1);

  public readonly x: number;
  public readonly y: number;
  public readonly z: number;

  constructor(x?: number, y?: number, z?: number) {
    super();
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.z = z ?? 0;
  }

  // Required methods

  clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }

  add(v: Vec3): Vec3 {
    return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  scale(s: number): Vec3 {
    return new Vec3(s * this.x, s * this.y, s * this.z);
  }

  dot(v: Vec3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  toString(): string {
    return `Vec3(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${this.z.toFixed(3)})`;
  }

  // Additional methods

  rotateX(theta: number): Vec3 {
    const x = this.x;
    const y = this.y * Math.cos(theta) - this.z * Math.sin(theta);
    const z = this.y * Math.sin(theta) + this.z * Math.cos(theta);
    return new Vec3(x, y, z);
  }

  rotateY(theta: number): Vec3 {
    const x = this.x * Math.cos(theta) + this.z * Math.sin(theta);
    const y = this.y;
    const z = -this.x * Math.sin(theta) + this.z * Math.cos(theta);
    return new Vec3(x, y, z);
  }

  rotateZ(theta: number): Vec3 {
    const x = this.x * Math.cos(theta) - this.z * Math.sin(theta);
    const y = this.x * Math.sin(theta) + this.z * Math.cos(theta);
    const z = this.z;
    return new Vec3(x, y, z);
  }
}
