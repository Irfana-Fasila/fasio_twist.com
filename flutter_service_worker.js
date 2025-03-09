'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d65cc234051bb24e5a7b0b2eacfa7d93",
"assets/AssetManifest.bin.json": "eff855aac08d8c495fca371b9e7b633f",
"assets/AssetManifest.json": "01369c1d65297f0c28a3d7a32b31f3ec",
"assets/assets/icons/add_to_cart.svg": "91d2102e7b89fec10fcb816275041b0a",
"assets/assets/icons/back.svg": "6faa6d40f8e404d040b147b67d9bf16c",
"assets/assets/icons/bag_1.svg": "25dc761330863a4fc3123437787c95c9",
"assets/assets/icons/cart.svg": "2cc4f936dbb97ec3263d3d3c08a38290",
"assets/assets/icons/heart.svg": "fafdb8afc30748f259b6ff64d51e3088",
"assets/assets/icons/search.svg": "676863abb3dbd91d7139d3434c94736a",
"assets/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/assets/images/casual1.jpeg": "130d58b2a3f0a141f980016a80b7f65d",
"assets/assets/images/casual2.jpeg": "ee50c5b65d5c9d446e48bdc30403527f",
"assets/assets/images/casual3.jpeg": "f7cd999336616c3253647113e918d303",
"assets/assets/images/casual4.jpeg": "6f7a6cc7f40326eff2cabb397ca90dcf",
"assets/assets/images/casual5.jpeg": "4757577f36f3dd3c4d55d94623ef15b3",
"assets/assets/images/cls1.jpeg": "d26c7851c50ecb049a826c5aaf9ca366",
"assets/assets/images/cls2.jpeg": "e55fafc1b74251d0ba49b56b82a96296",
"assets/assets/images/cls3.jpeg": "6a29379060d54bc8e9a5bc0619e1996c",
"assets/assets/images/form1.jpeg": "c9a1f62b1b93240421af77de715493e3",
"assets/assets/images/form2.jpeg": "04da7fcaf30eae54e4726f7256f623b5",
"assets/assets/images/gown2.jpeg": "c260dfaea375e513deae5d22a34bcba2",
"assets/assets/images/gown3.jpeg": "8711ddb50fd3f8c6d8568e43c4ef96c9",
"assets/assets/images/mod1.jpeg": "c9694d4dbaa57793613b0ac4edf69f58",
"assets/assets/images/mod2.jpeg": "60d39b4799d8f12d6302826ce84c6c8e",
"assets/assets/images/mod3.jpeg": "5f87ab8500af68c309733e230d9fdcca",
"assets/assets/images/pak1.jpeg": "d58567789fc47990e9e58da1a49fcde0",
"assets/assets/images/pak2.jpeg": "766d4f3d8f874bfb9eab98c0cde00e14",
"assets/assets/images/pak3.jpeg": "3e92306424275fc6b4451234adb6b474",
"assets/assets/images/pak4.jpg": "db363ea8af10488750bad1083d901a8e",
"assets/assets/images/tred1.jpeg": "7fda57a9f74b43a692f8b1656bc8355d",
"assets/assets/images/tred2.jpeg": "e00ee50e1453db44fd169c1988b2e8a1",
"assets/assets/images/tred3.jpeg": "b53aa6451ffe1fd27355724b576fc257",
"assets/assets/images/tred4.jpeg": "8579feb656fb655338b854cb34e474de",
"assets/assets/images/tred5.jpeg": "3b6e0d2e4c9b50fd8e5411c04f93a584",
"assets/assets/images/tred6.jpeg": "3900a73e2a58699eb8a7f9e568191037",
"assets/assets/images/trendy1.jpeg": "9779197e41ac6ead6d6427b6b9a4f9c0",
"assets/assets/images/trendy2.jpeg": "6e3bd0b33a938863afce7694e8189971",
"assets/assets/images/trendy3.jpeg": "bf8e4bc0482d10dacc4c19e3b0e0e187",
"assets/assets/images/west1.jpeg": "a7f6d44ae6acc2cb60eb6917240b25e8",
"assets/assets/images/west2.jpeg": "00167f848d61491003aa52aa5533a8c5",
"assets/assets/images/west3.jpeg": "8a406d032ad0ba34cb895450ad829413",
"assets/assets/images/west4.jpeg": "b90d0b2d8e1bbb8d224ff3dee7d3bf7e",
"assets/assets/images/west5.jpg": "2a8b3cf881ca2f062332e535e39c3ffb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fdb3e7136fd17c935a47a402e1e0b731",
"assets/NOTICES": "56f1377997db0b6d83ebb06d8541503c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b41097460255e54aa87933ce00661ddb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1dd07d615c8ff7394863e01b1d30a7ba",
"/": "1dd07d615c8ff7394863e01b1d30a7ba",
"main.dart.js": "9c5df27ee2d87899042cdb4bc57addf2",
"manifest.json": "7de53dac7ececebb6a2efeb6079ef428",
"version.json": "d50daabdb4ae5a877ddbe3e3a302f767"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
