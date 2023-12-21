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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b29a346185c5ff76e7739fc2db054427"
  },
  {
    "url": "assets/css/0.styles.ed53f56a.css",
    "revision": "a4255a6ce3446fb8680c981d195eeb93"
  },
  {
    "url": "assets/img/image1.85b4a543.png",
    "revision": "85b4a543f82df2cd0f039e89428d4a84"
  },
  {
    "url": "assets/img/image10.b875de1c.png",
    "revision": "b875de1c73bf53dc64fcf9b6de99861f"
  },
  {
    "url": "assets/img/image11.b9a60ce5.png",
    "revision": "b9a60ce5f005a5551eb0e5fd2bf3be74"
  },
  {
    "url": "assets/img/image12.7df86f60.png",
    "revision": "7df86f604ac027b5cb92aeb2a720d28a"
  },
  {
    "url": "assets/img/image13.b980a4a2.png",
    "revision": "b980a4a259408d8340244760778cd04f"
  },
  {
    "url": "assets/img/image14.4a7eb262.png",
    "revision": "4a7eb26267f61ffaa56482f4e19e2b48"
  },
  {
    "url": "assets/img/image15.c850ebb9.png",
    "revision": "c850ebb9c51c388d67e348ee479bd2d9"
  },
  {
    "url": "assets/img/image2.ebd26d41.png",
    "revision": "ebd26d41985d5acb83189223e5865029"
  },
  {
    "url": "assets/img/image3.65c826b3.png",
    "revision": "65c826b327629c72af7e1d6265642613"
  },
  {
    "url": "assets/img/image4.bd9c9a72.png",
    "revision": "bd9c9a7228673756bd6ed93bd5c9bdc8"
  },
  {
    "url": "assets/img/image5.61a3685b.png",
    "revision": "61a3685ba28aae948b4aff614f90e5b8"
  },
  {
    "url": "assets/img/image6.33bbf573.png",
    "revision": "33bbf573d06609684cb9f3094aa88f6d"
  },
  {
    "url": "assets/img/image7.9913bc50.png",
    "revision": "9913bc50be9ed146210755327728a744"
  },
  {
    "url": "assets/img/image8.823a5764.png",
    "revision": "823a576476dfb4263e6e5b0c955dbcfa"
  },
  {
    "url": "assets/img/image9.d7d72e57.png",
    "revision": "d7d72e578d7addfbbf05a09ceb2e02f5"
  },
  {
    "url": "assets/img/relation-diagram.51ca862c.png",
    "revision": "51ca862c7a78f5747b0b88effa86456f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a04bc287.js",
    "revision": "b10a402ee1b7db8979f0efbecab952f3"
  },
  {
    "url": "assets/js/11.bf064f8f.js",
    "revision": "d42d9e01d806d98710a2414a2fdba488"
  },
  {
    "url": "assets/js/12.a4efb6a6.js",
    "revision": "2bba033998d56f36b39f8b22900430b8"
  },
  {
    "url": "assets/js/13.995f5cfc.js",
    "revision": "9674075cca9ebd67eb97b07b2c6df390"
  },
  {
    "url": "assets/js/14.9d1431a4.js",
    "revision": "7bc0507e413d56e8c97d99ac7d6b552b"
  },
  {
    "url": "assets/js/15.7870d169.js",
    "revision": "41349aaded87daccbbab986f37d01acb"
  },
  {
    "url": "assets/js/16.f458f61d.js",
    "revision": "15acc6f0bf1f275b59d215f05355af8c"
  },
  {
    "url": "assets/js/17.ec55237b.js",
    "revision": "35f09fb1e60ae7e8b62280460f65bfb2"
  },
  {
    "url": "assets/js/18.f5f0f30c.js",
    "revision": "3b65ea2e712d368c295f797cefb425fd"
  },
  {
    "url": "assets/js/19.28deb8a3.js",
    "revision": "e6d194479b6dc15485083cbed2f4c0e4"
  },
  {
    "url": "assets/js/2.575d08e7.js",
    "revision": "f068e624d20deaecce8b57b864613349"
  },
  {
    "url": "assets/js/20.09dc4f52.js",
    "revision": "5497c9dfa374888a5b3894a0559ade7b"
  },
  {
    "url": "assets/js/21.96404804.js",
    "revision": "c8ba99d47efda1831edfaae679c63b71"
  },
  {
    "url": "assets/js/22.3a5765db.js",
    "revision": "4b3f647db16afb6e052730ec839ab7a9"
  },
  {
    "url": "assets/js/23.6ab7be10.js",
    "revision": "d77b4ee0309621233716d08f5b275824"
  },
  {
    "url": "assets/js/24.a174cd32.js",
    "revision": "d48d9f546db86fd83dc02a108673cbbf"
  },
  {
    "url": "assets/js/26.a5d72282.js",
    "revision": "1f699572d420f274ae9ce6327b2f7ecd"
  },
  {
    "url": "assets/js/3.d2f8e585.js",
    "revision": "ce4e6c18372fd0efd5839fa33d796434"
  },
  {
    "url": "assets/js/4.bb9dbd42.js",
    "revision": "d86c2d48fce80da20890745ea1dd9ca6"
  },
  {
    "url": "assets/js/5.07efba14.js",
    "revision": "c8da9fe745dc353003e72e046e2a3df4"
  },
  {
    "url": "assets/js/6.ee876ea4.js",
    "revision": "08733714edb3e594ede51a15bc578f0d"
  },
  {
    "url": "assets/js/7.1bb658f5.js",
    "revision": "fe01d4692760048d55cae5fe39e79090"
  },
  {
    "url": "assets/js/8.af458eeb.js",
    "revision": "bfaac57b78d6b3a8d8bfabce5b7897be"
  },
  {
    "url": "assets/js/9.013dce20.js",
    "revision": "ad90b957afc65c8430dbbf8b9303b158"
  },
  {
    "url": "assets/js/app.a8520435.js",
    "revision": "26ceccf4e5ff0c2cf7ee3e8277604746"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7801a57da44a65c5197c852301993899"
  },
  {
    "url": "design/index.html",
    "revision": "7bd8e74665e3e7c550bea2d2c10cd4e3"
  },
  {
    "url": "index.html",
    "revision": "67b6e8993ec22e88d4a0a9e996c03098"
  },
  {
    "url": "intro/index.html",
    "revision": "3ab41bf6bd04a85bdafeae07b9187906"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f365dc7f446fb9a7949f5e9091aac9b4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "14005de37fce4de469ab487d1dbfbf65"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "472c6de8d7749ffd8bc706dae38fa4ca"
  },
  {
    "url": "software/index.html",
    "revision": "39ff48d6656aa679fa19503dcb3a7a9e"
  },
  {
    "url": "test/index.html",
    "revision": "6aeaa5eea6a721ec7b1e53126bccedb7"
  },
  {
    "url": "use cases/index.html",
    "revision": "ef2de48a9f22e908df7aaeaf09d611e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
