export abstract class VecBase<T extends VecBase<T>> {
  abstract clone(this: Readonly<T>): T;
  abstract copy(this: T, v: Readonly<T>): T;
  abstract addScaled(this: T, v: Readonly<T>, s: number): T;
  abstract scale(this: T, s: number): T;
  abstract dot(this: Readonly<T>, v: Readonly<T>): number;
  abstract toString(this: Readonly<T>): string;

  scaled(this: Readonly<T>, s: number): T {
    return this.clone().scale(s);
  }

  addedScaled(this: Readonly<T>, v: Readonly<T>, s: number): T {
    return this.clone().addScaled(v, s);
  }

  neg(this: T): T {
    this.scale(-1);
    return this;
  }

  negated(this: Readonly<T>): T {
    return this.clone().neg();
  }

  add(this: T, v: Readonly<T>): T {
    this.addScaled(v, 1);
    return this;
  }

  added(this: Readonly<T>, v: Readonly<T>): T {
    return this.clone().add(v);
  }

  sub(this: T, v: Readonly<T>): T {
    this.addScaled(v, -1);
    return this;
  }

  subbed(this: Readonly<T>, v: Readonly<T>): T {
    return this.clone().sub(v);
  }

  magSq(this: Readonly<T>): number {
    return this.dot(this);
  }

  mag(this: Readonly<T>): number {
    return Math.sqrt(this.magSq());
  }

  normalize(this: T): T {
    const m = this.mag();
    if (m === 0) {
      return this;
    }
    this.scale(1/m);
    return this;
  }

  normalized(this: Readonly<T>): T {
    return this.clone().normalize();
  }

  proj(this: T, u: Readonly<T>): T {
    const mSq = u.magSq();
    if (mSq === 0) {
      this.scale(0);
      return this;
    }

    const s = this.dot(u) / mSq;
    this.copy(u).scale(s);
    return this;
  }

  projected(this: Readonly<T>, u: Readonly<T>): T {
    return this.clone().proj(u);
  }

  clampMag(this: T, max: number): T {
    const mag = this.mag();
    if (mag > max) {
      this.scale(max/mag);
    }
    return this;
  }

  clampedMag(this: Readonly<T>, max: number): T {
    return this.clone().clampMag(max);
  }

  print(this: Readonly<T>): void {
    console.log(this.toString())
  }
}
