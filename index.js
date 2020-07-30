const path = require("path");

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;
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
            `<div class="custom-block -file"><p class="custom-block-title"><i class="fas fa-fw fa-file-code"></i> <span>${info}</span></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-adobe",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-adobe"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-android",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-android"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-apple",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-apple"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-bad",
          before: (info) =>
            `<div class="custom-block -danger -icon"><p class="custom-block-title"><i class="fas fa-fw fa-thumbs-down"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-blender",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-cube"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-danger",
          before: (info) =>
            `<div class="custom-block -danger -icon"><p class="custom-block-title"><i class="fas fa-fw fa-exclamation-triangle"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-definition",
          before: (info) =>
            `<div class="custom-block -info -icon"><p class="custom-block-title"><i class="fas fa-fw fa-star"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-info",
          before: (info) =>
            `<div class="custom-block -info -icon"><p class="custom-block-title"><i class="fas fa-fw fa-info-circle"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-female",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-female"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-github",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-github"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-good",
          before: (info) =>
            `<div class="custom-block -tip -icon"><p class="custom-block-title"><i class="fas fa-fw fa-thumbs-up"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ios",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-apple"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-ipados",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-apple"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-know",
          before: (info) =>
            `<div class="custom-block -secondary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-question-circle"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-macos",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-apple"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-male",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-male"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-microsoft",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-microsoft"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-mouse",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-mouse"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-linux",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-linux"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-quote",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-quote-left"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-raspbian",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-raspberry-pi"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-linux-ubuntu",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-ubuntu"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-see",
          before: (info) =>
            `<div class="custom-block -tip -icon"><p class="custom-block-title"><i class="fas fa-fw fa-book-reader"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-sources",
          before: (info) =>
            `<div class="custom-block -secondary -icon"><p class="custom-block-title"><i class="fas fa-fw fa-atlas"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-task",
          before: (info) =>
            `<div class="custom-block -warning -icon"><p class="custom-block-title"><i class="fas fa-fw fa-edit"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tip",
          before: (info) =>
            `<div class="custom-block -tip -icon"><p class="custom-block-title"><i class="fas fa-fw fa-lightbulb"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-tree",
          before: (info) =>
            `<div class="custom-block -primary -icon file-tree"><p class="custom-block-title"><i class="fas fa-fw fa-folder-open"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video",
          before: (info) =>
            `<div class="custom-block -info -icon"><p class="custom-block-title"><i class="fas fa-fw fa-film"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-linkedin-learning",
          before: (info) =>
            `<div class="custom-block -info -icon"><p class="custom-block-title"><i class="fab fa-fw fa-linkedin"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-video-youtube",
          before: (info) =>
            `<div class="custom-block -info -icon"><p class="custom-block-title"><i class="fab fa-fw fa-youtube"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-warning",
          before: (info) =>
            `<div class="custom-block -warning -icon"><p class="custom-block-title"><i class="fas fa-fw fa-exclamation-circle"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
        },
      ],
      [
        "container",
        {
          type: "icon-windows",
          before: (info) =>
            `<div class="custom-block -primary -icon"><p class="custom-block-title"><i class="fab fa-fw fa-windows"></i> <strong>${info}</strong></p>\n`,
          after: () => "</div>\n",
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
