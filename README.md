# @raymondz/vector-math

A lightweight TypeScript vector library for 2D/3D math and physics simulations.

Includes:

- `VecBase<T>` — generic base class  
- `Vec2` — 2D vector  
- `Vec3` — 3D vector  
- Utility helpers  

## Design

- **Mutable by default** — methods modify the vector and return `this`
- **Immutable helpers** — past-tense methods return new vectors

Example:

```ts
v.scale(2);             // mutates v
const v2 = v.scaled(2); // returns new vector
```

## Example Usage

```ts
const a = new Vec2(3, 4);
const b = new Vec2(1, 2);

const distance = a.subbed(b).mag();

a.add(b).normalize().clampMag(5);
```

## Core Features

add, sub, scale

dot, mag, normalize

proj, clampMag

2D rotation (Vec2)

3D axis rotations (Vec3)
