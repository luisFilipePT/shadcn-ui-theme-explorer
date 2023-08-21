
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![shadcn/ui Theme Explorer released under the MIT license.](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


![image](https://github.com/luisFilipePT/shadcn-ui-theme-explorer/assets/97113028/c2ab567b-f990-43a9-9266-e9c211b0e6b9)

<h1 align="center">
  shadcn/ui Theme Explorer
</h1>
<p align="center">
  Color the web with beautifully designed themes
</p>

Inspired by [@peduarte](https://github.com/peduarte)'s work on [Raycast Theme Explorer](https://themes.ray.so/), a collection of themes designed to complement [shadcn/ui](https://ui.shadcn.com/) beautifully crafted components.

## What’s In This Document

- [Upload a theme](#-upload-a-theme)
- [License](#memo-license)
- [Thanks to Our Contributors](#-thanks)

## Contributing

This is a [Next.js 13](https://nextjs.org/) app. If you're unfamiliar with it, check out the [Next.js Documentation](https://nextjs.org/docs).

Download the repo and run the development server:

```bash
npm run dev
```

## 🎨 Upload a theme

1. Add your theme info to the [themes](https://github.com/luisFilipePT/shadcn-ui-theme-explorer/blob/main/themes/index.json) file.
2. Create a file inside the folder [`styles/themes`](https://github.com/luisFilipePT/shadcn-ui-theme-explorer/blob/main/styles/themes) with the name of the theme you added in the previous step (if it contains spaces, replace them by `-`).
3. Same format as the following example:
```css
.theme-{theme-name}.light {
  --background: 220, 16%, 96%;
  --foreground: 222, 20%, 16%;

  --muted: 215, 14%, 80%;
  --muted-foreground: 222, 20%, 16%;

  --popover: 220, 16%, 96%;
  --popover-foreground: 222, 20%, 16%;

  --border: 222, 20%, 70%;
  --input: 222, 20%, 70%;

  --card: 220, 16%, 96%;
  --card-foreground: 222, 20%, 16%;

  --primary: 222, 20%, 70%;
  --primary-foreground: 220, 16%, 96%;

  --secondary: 215, 14%, 80%;
  --secondary-foreground: 222, 20%, 16%;

  --accent: 215, 14%, 80%;
  --accent-foreground: 222, 20%, 16%;

  --destructive: 0, 80%, 50%;
  --destructive-foreground: 222, 20%, 16%;

  --ring: 222, 20%, 70%;
}

.theme-{theme-name}.dark {
  --background: 220, 16%, 16%;
  --foreground: 222, 20%, 96%;

  --muted: 215, 14%, 25%;
  --muted-foreground: 222, 20%, 96%;

  --popover: 220, 16%, 16%;
  --popover-foreground: 222, 20%, 96%;

  --border: 222, 20%, 40%;
  --input: 222, 20%, 40%;

  --card: 220, 16%, 16%;
  --card-foreground: 222, 20%, 96%;

  --primary: 222, 20%, 40%;
  --primary-foreground: 220, 16%, 16%;

  --secondary: 215, 14%, 25%;
  --secondary-foreground: 222, 20%, 96%;

  --accent: 215, 14%, 25%;
  --accent-foreground: 222, 20%, 96%;

  --destructive: 0, 80%, 50%;
  --destructive-foreground: 222, 20%, 96%;

  --ring: 222, 20%, 40%;
}

```

5. Import the file you just created in the [`global.css`](https://github.com/luisFilipePT/shadcn-ui-theme-explorer/blob/main/styles/themes/global.css) file.

## ❗ Code of Conduct

We expect everyone to abide by our [**Code of Conduct**](./CODE_OF_CONDUCT.md). Please read it. 🤝

## :memo: License

Licensed under the [MIT License](./LICENSE).

## 💜 Thanks

Thanks to everyone contributing in any manner to this repo and we extend this thanks to everyone working on Open Source.

**Sharing is Caring**

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://tkwordclass.vercel.app/"><img src="https://avatars.githubusercontent.com/u/54640421?v=4?s=100" width="100px;" alt="ThankGod Eboreime"/><br /><sub><b>ThankGod Eboreime</b></sub></a><br /><a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=Tk-brainCodes" title="Code">💻</a> <a href="#maintenance-Tk-brainCodes" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tutods"><img src="https://avatars.githubusercontent.com/u/18479474?v=4?s=100" width="100px;" alt="Daniel Sousa"/><br /><sub><b>Daniel Sousa</b></sub></a><br /><a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=tutods" title="Code">💻</a> <a href="#design-tutods" title="Design">🎨</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.luisfilipept.com/"><img src="https://avatars.githubusercontent.com/u/9373787?v=4?s=100" width="100px;" alt="Luis Filipe"/><br /><sub><b>Luis Filipe</b></sub></a><br /><a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=luisFilipePT" title="Code">💻</a> <a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=luisFilipePT" title="Documentation">📖</a> <a href="#design-luisFilipePT" title="Design">🎨</a> <a href="#ideas-luisFilipePT" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-luisFilipePT" title="Maintenance">🚧</a> <a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/pulls?q=is%3Apr+reviewed-by%3AluisFilipePT" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://joanasantos.vercel.app/"><img src="https://avatars.githubusercontent.com/u/97113028?v=4" width="100px;" alt="Joana Santos"/><br /><sub><b>Joana Santos</b></sub></a><br /><a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=joanamcs" title="Code">💻</a> <a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/commits?author=joanamcs" title="Documentation">📖</a> <a href="#design-luisFilipePT" title="Design">🎨</a> <a href="#ideas-luisFilipePT" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-luisFilipePT" title="Maintenance">🚧</a> <a href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer/pulls?q=is%3Apr+reviewed-by%3Ajoanamcs" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
