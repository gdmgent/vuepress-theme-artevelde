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
          type: "file",
          before: (info) =>
            `<ContainerBlock icon="file-code" info="${info}" type="-file">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-adobe",
          before: (info) =>
            `<ContainerBlock icon="adobe" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-android",
          before: (info) =>
            `<ContainerBlock icon="android" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-apple",
          before: (info) =>
            `<ContainerBlock icon="apple" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-bad",
          before: (info) =>
            `<ContainerBlock icon="thumbs-down" info="${info}" type="-danger -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-blender",
          before: (info) =>
            `<ContainerBlock icon="cube" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-danger",
          before: (info) =>
            `<ContainerBlock icon="exclamation-triangle" info="${info}" type="-danger -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-definition",
          before: (info) =>
            `<ContainerBlock icon="star" info="${info}" type="-info -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-info",
          before: (info) =>
            `<ContainerBlock icon="info-circle" info="${info}" type="-info -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-female",
          before: (info) =>
            `<ContainerBlock icon="female" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-github",
          before: (info) =>
            `<ContainerBlock icon="github" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-good",
          before: (info) =>
            `<ContainerBlock icon="thumbs-up" info="${info}" type="-tip -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ios",
          before: (info) =>
            `<ContainerBlock icon="apple" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ipados",
          before: (info) =>
            `<ContainerBlock icon="apple" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-know",
          before: (info) =>
            `<ContainerBlock icon="question-circle" info="${info}" type="-secondary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-linux",
          before: (info) =>
            `<ContainerBlock icon="linux" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-macos",
          before: (info) =>
            `<ContainerBlock icon="apple" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-male",
          before: (info) =>
            `<ContainerBlock icon="male" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-microsoft",
          before: (info) =>
            `<ContainerBlock icon="microsoft" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-mouse",
          before: (info) =>
            `<ContainerBlock icon="mouse" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],

      [
        "container",
        {
          type: "icon-quote",
          before: (info) =>
            `<ContainerBlock icon="quote-left" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-raspbian",
          before: (info) =>
            `<ContainerBlock icon="raspberry-pi" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-linux-ubuntu",
          before: (info) =>
            `<ContainerBlock icon="ubuntu" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-see",
          before: (info) =>
            `<ContainerBlock icon="book-reader" info="${info}" type="-tip -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-sources",
          before: (info) =>
            `<ContainerBlock icon="atlas" info="${info}" type="-secondary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-task",
          before: (info) =>
            `<ContainerBlock icon="edit" info="${info}" type="-warning -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tip",
          before: (info) =>
            `<ContainerBlock icon="lightbulb" info="${info}" type="-tip -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tree",
          before: (info) =>
            `<ContainerBlock icon="folder-open" info="${info}" type="-primary -icon file-tree">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video",
          before: (info) =>
            `<ContainerBlock icon="film" info="${info}" type="-info -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-linkedin-learning",
          before: (info) =>
            `<ContainerBlock icon="linkedin" info="${info}" type="-info -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-youtube",
          before: (info) =>
            `<ContainerBlock icon="youtube" info="${info}" type="-info -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-warning",
          before: (info) =>
            `<ContainerBlock icon="exclamation-circle" info="${info}" type="-warning -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-windows",
          before: (info) =>
            `<ContainerBlock icon="windows" info="${info}" type="-primary -icon">\n`,
          after: () => "</ContainerBlock>\n",
        },
      ],
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
