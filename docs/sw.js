/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "53dc3d19f7e4492bc835e9e3ac5f78d1"
  },
  {
    "url": "build/app/6flvbhv9.es5.js",
    "revision": "7bd21a56f496dcc62805e3eae7237c64"
  },
  {
    "url": "build/app/6flvbhv9.js",
    "revision": "8f9fc28c01b3fc1bdcebe6c8285909c3"
  },
  {
    "url": "build/app/app.3guiqs2r.js",
    "revision": "c0c8f0123691f9afe97db23ab690601a"
  },
  {
    "url": "build/app/app.zmpnofth.js",
    "revision": "be6f8e1536eb7da32baf6ae953e8b1c3"
  },
  {
    "url": "build/app/chunk1.es5.js",
    "revision": "00384b7223208910efa93b9d3994230a"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "702d7659da4f63b9a3387d49b7f24ce9"
  },
  {
    "url": "build/app/px6jbmoj.es5.js",
    "revision": "1f63f545874fdda1b07b09b8815586df"
  },
  {
    "url": "build/app/px6jbmoj.js",
    "revision": "022dcd038605a9881e1f938415b3bb7c"
  },
  {
    "url": "index.html",
    "revision": "e527490827ad0144ccf7a03ec3febb7c"
  },
  {
    "url": "manifest.json",
    "revision": "1b1ddc6463b3313cb9fda9493c0a5050"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
