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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c5f0715ee649494b64c0.js"
  },
  {
    "url": "styles.2b236cd9b2577935a226.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-445649399d1c721f1f74.js"
  },
  {
    "url": "ff239f9d-bfe0ebd52ef36619143f.js"
  },
  {
    "url": "app-2bb28da24250d11b1c78.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e6ab6fdc962ae824a8c68671e6873d9a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0556ce5127c1a3e2490.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "9a1822e26c2a6fc9da2129096eb524fb"
  },
  {
    "url": "polyfill-48e56cca0128f3598c84.js"
  },
  {
    "url": "11a94a3e73140724a8de4b52d94986fe0f3aacd5-23224db301aa2a7cbfc7.js"
  },
  {
    "url": "component---src-pages-index-js-e3c890802eb413972899.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "ea52e8b084ed22d1edb1c96dfa8cf863"
  },
  {
    "url": "page-data/sq/d/1022643890.json",
    "revision": "02390ef178682719272117a83d0f0940"
  },
  {
    "url": "page-data/sq/d/14776378.json",
    "revision": "315dea306359f9c7a1ee7b7f64c98fd1"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "caf8de25136237a66c40e63a63b15251"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "d240857bce9ba83720c5e79f382b1a64"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f5bbbe12546c55223f12c5ec9365653a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-2bb28da24250d11b1c78.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
    self.registration.showNotification("Instalar Mi Planta - DURO")
    }, 3000)
    
    // register a custom navigation route
    const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
    // ...
    })
    workbox.routing.registerRoute(customRoute)