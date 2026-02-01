---
title: "Reusable Procedural Terrain Generation"
description: "A modular, chunk-based procedural terrain system built in Godot 4.5 using custom meshing and FastNoiseLite, designed to be reused across multiple projects."
date: "Jan 28 2026"
demoURL: ""
repoURL: "https://github.com/matupper/TerrainGen#"
draft: true
---
If I had a dollar for every time I started a Godot project, got a player controller feeling good, and then completely lost steam when it came time to build an environment… I’d be about five dollars richer.

So I finally decided to fix that problem by building my own procedural terrain generation system—something I can reuse across future projects.

You might be thinking, “Okay, but aren’t there already a ton of tools and assets that do this?” And yeah, you’d be right. But every time I’ve tried using them, they’ve either felt wrong stylistically, too opaque to customize, or so complex that learning the tool became its own project. When half your game comes from something you downloaded, it also kind of sucks the fun out of actually building it.

On top of that, I’ve always been more interested in understanding how games like Minecraft, Cube World, and Valheim generate their worlds in the first place—so this project became my excuse to finally dig into that problem myself.