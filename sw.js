self.addEventListener("install", function (event) {
  event.waitUntil(preLoad());
});

var filesToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/offline.html",
    "/scan.py",
    "/sw.js",
    "/css/all.min.css",
    "/css/bootstrap.min.css",
    "/css/custom.css",
    "/images/add.png",
    "/images/icon/apple-icon-180.png",
    "/images/icon/image.svg",
    "/images/icon/manifest-icon-192.maskable.png",
    "/images/icon/manifest-icon-512.maskable.png",
    "/js/bootstrap.bundle.min.js",
    "/js/generate.js",
    "/js/JsBarcode.all.min.js",
    "/js/jspdf.umd.min.js",
    "/js/sweetalert2@11.js",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff2"
  
];

var preLoad = function () {
  return caches.open("offline").then(function (cache) {
    // caching index and important routes
    return cache.addAll(filesToCache);
  });
};

self.addEventListener("fetch", function (event) {
  event.respondWith(
    checkResponse(event.request).catch(function () {
      return returnFromCache(event.request);
    })
  );
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};
