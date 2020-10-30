const path = require("path");

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig } = ctx;
  const enableSmoothScroll = themeConfig.smoothScroll === true;

  return {
    plugins: [
      ["@vuepress/active-header-links", options.activeHeaderLinks],
      "@vuepress/search",
      "@vuepress/plugin-nprogress",
      [
        "container",
        {
          type: "details",
          before: (info) =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ""
            }\n`,
          after: () => "</details>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-file",
          defaultTitle: "Bestand",
          before: (info) => `<ContainerBlock info="${info}" name="file">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-adobe",
          defaultTitle: "Adobe",
          before: (info) => `<ContainerBlock info="${info}" name="adobe">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-android",
          defaultTitle: "Android",
          before: (info) => `<ContainerBlock info="${info}" name="android">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-app-store",
          defaultTitle: "App Store",
          before: (info) =>
            `<ContainerBlock info="${info}" name="app-store">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-apple",
          defaultTitle: "Apple",
          before: (info) => `<ContainerBlock info="${info}" name="apple">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-bad",
          defaultTitle: {
            "/": "Fout",
            "/en/": "Bad",
          },
          before: (info) => `<ContainerBlock info="${info}" name="bad">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-blender",
          defaultTitle: "Blender",
          before: (info) => `<ContainerBlock info="${info}" name="blender">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-danger",
          defaultTitle: {
            "/": "Opgelet",
            "/en/": "Warning",
          },
          before: (info) => `<ContainerBlock info="${info}" name="warning">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-definition",
          defaultTitle: {
            "/": "Definitie",
            "/en/": "Definition",
          },
          before: (info) =>
            `<ContainerBlock info="${info}" name="definition">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-info",
          defaultTitle: "Info",
          before: (info) => `<ContainerBlock info="${info}" name="info">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-female",
          defaultTitle: "Jane Doe",
          before: (info) => `<ContainerBlock info="${info}" name="person">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-github",
          defaultTitle: "GitHub",
          before: (info) => `<ContainerBlock info="${info}" name="github">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-good",
          defaultTitle: {
            "/": "Goed",
            "/en/": "Good",
          },
          before: (info) => `<ContainerBlock info="${info}" name="good">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ios",
          defaultTitle: "iOS",
          before: (info) => `<ContainerBlock info="${info}" name="apple">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ipados",
          defaultTitle: "iPadOS",
          before: (info) => `<ContainerBlock info="${info}" name="apple">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-know",
          defaultTitle: {
            "/": "Wist-je-datje",
            "/en/": "Did you know?",
          },
          before: (info) => `<ContainerBlock info="${info}" name="know">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-linux",
          defaultTitle: "Linux",
          before: (info) => `<ContainerBlock info="${info}" name="linux">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-macos",
          defaultTitle: "macOS",
          before: (info) => `<ContainerBlock info="${info}" name="apple">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-male",
          defaultTitle: "John Doe",
          before: (info) => `<ContainerBlock info="${info}" name="person">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-microsoft",
          defaultTitle: "Microsoft",
          before: (info) =>
            `<ContainerBlock info="${info}" name="microsoft">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-mouse",
          defaultTitle: {
            "/": "Muis",
            "/en/": "Mouse",
          },
          before: (info) => `<ContainerBlock info="${info}" name="mouse">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-npm",
          defaultTitle: "npm",
          before: (info) => `<ContainerBlock info="${info}" name="npm">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-person",
          defaultTitle: "John/Jane Doe",
          before: (info) => `<ContainerBlock info="${info}" name="person">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-quote",
          defaultTitle: {
            "/": "Citaat",
            "/en/": "Quote",
          },
          before: (info) => `<ContainerBlock info="${info}" name="quote">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-raspbian",
          defaultTitle: "Raspbian",
          before: (info) => `<ContainerBlock info="${info}" name="raspbian">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ubuntu",
          defaultTitle: "Ubuntu",
          before: (info) => `<ContainerBlock info="${info}" name="ubuntu">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-see",
          defaultTitle: {
            "/": "Zie ook",
            "/en/": "See",
          },
          before: (info) => `<ContainerBlock info="${info}" name="see">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-sources",
          defaultTitle: {
            "/": "Geraadpleegde bronnen",
            "/en/": "Referenced sources",
          },
          before: (info) => `<ContainerBlock info="${info}" name="sources">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-steam",
          defaultTitle: "Steam",
          before: (info) => `<ContainerBlock info="${info}" name="steam">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-task",
          defaultTitle: {
            "/": "Taak",
            "/en/": "Task",
          },
          before: (info) => `<ContainerBlock info="${info}" name="task">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tip",
          defaultTitle: "Tip",
          before: (info) => `<ContainerBlock info="${info}" name="tip">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tree",
          defaultTitle: {
            "/": "Mappen & bestanden",
            "/en/": "Folders & files",
          },
          before: (info) => `<ContainerBlock info="${info}" name="tree">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video",
          defaultTitle: "Video",
          before: (info) => `<ContainerBlock info="${info}" name="video">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-linkedin-learning",
          defaultTitle: "LinkedIn Learning",
          before: (info) =>
            `<ContainerBlock info="${info}" name="linkedin-learning">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-yarn",
          defaultTitle: "Yarn",
          before: (info) => `<ContainerBlock info="${info}" name="yarn">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-youtube",
          defaultTitle: "YouTube",
          before: (info) => `<ContainerBlock info="${info}" name="youtube">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-warning",
          defaultTitle: {
            "/": "Opmerking",
            "/en/": "Remark",
          },
          before: (info) => `<ContainerBlock info="${info}" name="remark">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-windows",
          defaultTitle: "Windows",
          before: (info) => `<ContainerBlock info="${info}" name="windows">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      "@vuepress/last-updated",
      [
        "vuepress-plugin-mathjax",
        {
          target: "svg",
          macros: {
            "\\ampere": "\\rm{A}",
            "\\arcmin": "^{\\prime}",
            "\\atto": "\\rm{a}",
            "\\bit": "\\rm{b}",
            "\\byte": "\\rm{B}",
            "\\celsius": "\\rm{°\\!C}",
            "\\centi": "\\rm{c}",
            "\\coulomb": "\\rm{C}",
            "\\deca": "\\rm{da}",
            "\\degree": "°",
            "\\exa": "\\rm{E}",
            "\\exbi": "\\rm{Ei}",
            "\\fahrenheit": "\\rm{°F}",
            "\\farad": "\\rm{F}",
            "\\femto": "\\rm{f}",
            "\\gibi": "\\rm{Gi}",
            "\\giga": "\\rm{G}",
            "\\gram": "\\rm{g}",
            "\\hecto": "\\rm{h}",
            "\\hertz": "\\rm{Hz}",
            "\\hour": "\\rm{h}",
            "\\inch": "^{\\prime\\prime}",
            "\\joule": "\\rm{J}",
            "\\kelvin": "\\rm{K}",
            "\\kibi": "\\rm{Ki}",
            "\\kilo": "\\rm{k}",
            "\\Kilo": "\\rm{K}",
            "\\lumen": "\\rm{lu}",
            "\\lux": "\\rm{lx}",
            "\\mebi": "\\rm{Mi}",
            "\\mega": "\\rm{M}",
            "\\meter": "\\rm{m}",
            "\\micro": "\\rm{\\mu}",
            "\\milli": "\\rm{m}",
            "\\minutes": "^{\\prime}",
            "\\nano": "\\rm{n}",
            "\\newton": "\\rm{N}",
            "\\ohm": "\\rm{\\Omega}",
            "\\pebi": "\\rm{Pi}",
            "\\peta": "\\rm{P}",
            "\\pico": "\\rm{p}",
            "\\pixel": "\\rm{px}",
            "\\pixeldensity": "\\rm{ppi}",
            "\\qubit": "\\rm{qubit}",
            "\\qutrit": "\\rm{qutrit}",
            "\\radian": "\\rm{rad}",
            "\\second": "\\rm{s}",
            "\\seconds": "^{\\prime\\prime}",
            "\\tebi": "\\rm{Ti}",
            "\\tera": "\\rm{T}",
            "\\tesla": "\\rm{T}",
            "\\tpm": "\\rm{tpm}",
            "\\transfers": "\\rm{T}",
            "\\volt": "\\rm{V}",
            "\\watt": "\\rm{W}",
            "\\yobi": "\\rm{Yi}",
            "\\yocto": "\\rm{y}",
            "\\yotta": "\\rm{Y}",
            "\\zebi": "\\rm{Zi}",
            "\\zepto": "\\rm{z}",
            "\\zetta": "\\rm{Z}",

            "\\Alpha": "\\rm{A}",
            "\\Beta": "\\rm{B}",
            "\\Epsilon": "\\rm{E}",
            "\\Zeta": "\\rm{Z}",
            "\\Eta": "\\rm{H}",
            "\\Iota": "\\rm{I}",
            "\\Kappa": "\\rm{K}",
            "\\Mu": "\\rm{M}",
            "\\Nu": "\\rm{N}",
            "\\Omicron": "\\rm{O}",
            "\\Rho": "\\rm{P}",
            "\\Tau": "\\rm{T}",
            "\\Chi": "\\rm{X}",

            "\\N": "\\mathbb{N}",
            "\\R": "\\mathbb{R}",
            "\\Q": "\\mathbb{Q}",
            "\\Z": "\\mathbb{Z}",

            "\\positiveElectrode": "{\\bf\\color{Red}+}",
            "\\negativeElectrode": "{\\bf\\color{Black}-}",
          },
        },
      ],
      ["smooth-scroll", enableSmoothScroll],
    ],
  };
};
