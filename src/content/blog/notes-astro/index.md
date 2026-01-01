---
title: "Notes: Astro"
description: "These are my personal notes for Astro and maintaining this site."
date: 12/31/2025
draft: false
---
These are my personal notes for Astro and maintaining this site.

## Getting Started

### Basic Configuration

Edit `src/consts.ts` to customize the base site:

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Nano",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |
| EMAIL | Yes | Displayed in contact section. |
| NUM_POSTS | Yes | Limit num of posts on home page. |
| NUM_WORKS | Yes | Limit num of works on home page. |
| NUM_PROJECTS | Yes | Limit num of projects on home page. |

### Page Metadata

```ts
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS. |

### Social Media

```ts
// src/consts.ts

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in contact section as a link. |
| HREF | Yes | External url to social media profile. |

---

## Collections

### Blog Collection

The `blog` collection is found in `src/content/blog`. Each post should be in its own folder with an `index.md` or `index.mdx` file. The folder name represents the slug.

```
📁 /src/content/blog
└── 📁 post-1
      └── 📄 index.md
└── 📁 post-2
      └── 📄 index.mdx
```

Required metadata:

```mdx
---
title: "My cool new title"
description: "A description of my content."
date: "Mar 22 2024"
draft: false
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No* | boolean | draft: true, content will not be published.      |

### Projects Collection

The `projects` collection is found in `src/content/projects`. Structure is similar to blog posts.

Required metadata:

```mdx
---
title: "My awesome project"
description: "A description of my project."
date: "Mar 22 2024"
draft: false
demoURL: "https://example.com"
repoURL: "https://github.com/example"
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean | draft: true, content will not be published.      |
| demoURL     | No  | string  | Link to live project demo, if applicable.        |
| repoURL     | No  | string  | Link to project repo, if applicable.             |

### Work Collection

The `work` collection is found in `src/content/work`. Each work entry is a single markdown file.

```
📁 /src/content/work
└── 📄 apple.md
└── 📄 facebook.md
└── 📄 google.md
```

Required metadata:

```mdx
---
company: "McDonalds"
role: "French Fryer"
dateStart: "01/01/2020"
dateEnd: "11/27/2022"
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| company     | Yes | string  | Company name.                                    |
| role        | Yes | string  | Role at the company. Ex: Full stack developer.   |
| dateStart   | Yes | string  | Date string that can be parsed to a date.        |
| dateEnd     | Yes | string  | Date string that can be parsed to a date.        |

*Note: If you are still employed at company, for dateEnd you can enter Current, Now or Present instead of a date.*

---

## Markdown Syntax

### Headings

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Text Formatting

- **Bold**: `**text**` or `__text__`
- *Italic*: `*text*` or `_text_`
- ***Bold and Italic***: `***text***` or `*__text__*`
- ~~Strikethrough~~: `~~text~~`

### Links

- Standard: `[title](url)`
- Quick link: `<http://www.example.com>`
- Email: `<emailaddress>`

### Lists

**Ordered:**
```md
1. Item 1
2. Item 2
    1. Sub item 1
    2. Sub item 2
3. Item 3
```

**Unordered:**
```md
- Item 1
- Item 2
    - Sub item 1
    - Sub item 2
- Item 3
```

**Task Lists:**
```md
- [x] Completed task
- [ ] Incomplete task
```

### Images

- Relative: `![title](./image.*)` (relative to markdown file)
- Public: `![title](/image.*)` (relative to public folder)
- External: `![title](url)`

### Code

- Inline: `` `code` ``
- Code block with syntax highlighting:

````md
```js
function hello() {
  console.log("hello world");
}
```
````

### Tables

```md
| Item    | Count |
| :------ | --:   |
| Bread   | 1     |
| Milk    | 1     |
| Haribo  | 10    |
```

### Blockquotes

```md
> it was the spring of hope, it was the winter of despair.
>
> ~ Charles Dickens
```

### Other Elements

- **Line breaks**: `---`
- **Subscript**: `H<sub>2</sub>O`
- **Superscript**: `E=mc<sup>2</sup>`
- **Keyboard**: `<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>`
- **Abbreviation**: `<abbr title="Graphics Interchange Format">GIF</abbr>`
- **Highlight**: `<mark>Very important text</mark>`
- **Footnotes**: `[^1]` with definition `[^1]: This is the first footnote.`

For more details, see [markdownguide.org](https://www.markdownguide.org/basic-syntax)

---

## MDX Syntax

MDX extends markdown with the ability to import `.astro`, `.jsx`, `.tsx` and other framework components.

### Importing Components

**From components directory:**
```astro
import FormattedDate from "../../../components/FormattedDate.astro";

<FormattedDate date={new Date()} />
```

**From relative path:**
```astro
import RelativeComponent from "./component.astro";

<RelativeComponent />
```

**Important:** Use the `client` directive to make components interactive:
```astro
<ReactComponent client:load />
```

Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.

### Resources

- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)
- [Astro Framework Integrations](https://docs.astro.build/en/guides/integrations-guide)
- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)
- [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)

---

## Additional Notes

### Year Sorting

Nano groups posts by year automatically based on the date field in metadata.

### Draft Posts

Set `draft: true` in the metadata to hide posts from being published. Draft posts will not appear in the blog listing.
