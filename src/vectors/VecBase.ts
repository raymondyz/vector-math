export abstract class VecBase<T extends VecBase<T>> {
  abstract clone(): T;
  abstract add(v: T): T;
  abstract scale(s: number): T;
  abstract dot(v: T): number;
  abstract toString(): string;

  neg(): T {
    return this.scale(-1);
  }

  sub(v: T): T {
    return this.add(v.neg());
  }

  addScaled(v: T, s: number): T {
    return this.add(v.scale(s));
  }

  magSq(): number {
    return this.dot(this as unknown as T);
  }

  mag(): number {
    return Math.sqrt(this.magSq());
  }

  normalize(): T {
    const m = this.mag();
    return (m === 0) ? (this as unknown as T) : this.scale(1/m);
  }

  proj(u: T): T {
    const mSq = u.magSq();
    return (mSq === 0) ? u.scale(0) : u.scale(this.dot(u) / mSq);
  }

  print(): void {
    console.log(this.toString())
  }
}
