---
title: "3D Graphics Renderer"
description: "A simple, custom 3D graphics pipeline in JavaScript."
date: "Jan 14 2026"
demoURL: "/demos/js-3d-renderer/index.html"
repoURL: "https://github.com/matupper/3D-graphics-renderer"
draft: false
---

This project is a hands-on extension of the ideas I explored in my [Demystifying 3D Graphics](/blog/demystifying-3d-graphics) blog post. After getting a basic cube rendering on screen, I gradually expanded the project into a small, custom 3D graphics pipeline written entirely in JavaScript and rendered to an HTML canvas.

Once I had basic perspective projection working, I moved on to camera rotation and free movement. Being able to navigate the scene exposed a number of classic graphics problems—most notably **z-clipping**, where geometry would distort or explode as it crossed the camera plane. To fix this, I implemented **near-plane clipping**, which helped solidify my understanding of how a real graphics pipeline handles visibility and depth.

From there, the project evolved into something more game-like. I added physics-based movement, gravity, and jumping, along with a toggleable “fly mode” that removes constraints and allows free exploration of the scene. The end result isn’t meant to compete with real engines, but it served as a great sandbox for learning how these systems fit together.

<iframe
  src="/demos/js-3d-renderer/index.html"
  title="3D Graphics Renderer Demo"
  style="width: 100%; aspect-ratio: 1 / 1; max-height: 820px; border: 0; border-radius: 12px; overflow: hidden;"
  loading="lazy"
></iframe>

**Click the demo to try it out**  
*(Press `Esc` to release the mouse)*

## Controls

- **WASD** — Movement  
- **Space** — Jump / Fly up  
- **Shift** — Sprint  
- **T** — Toggle fly mode  
- **C** — Fly down  
- **Arrow Keys (or Mouse)** — Camera rotation  

## What I Learned

- How perspective projection works at a low level (`x / z`, `y / z`)
- Implementing a basic 3D graphics pipeline without external libraries
- Camera transforms, rotation, and movement in 3D space
- Why near-plane clipping is necessary and how to implement it
- The challenges of depth, visibility, and numerical instability
- Basic player physics and game-style movement systems
- How much modern graphics APIs abstract away—and why that abstraction is valuable

[Open the demo in a new tab](/demos/js-3d-renderer/index.html)
