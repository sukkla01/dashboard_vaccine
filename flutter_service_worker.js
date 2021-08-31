'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4d15ae2eaed9848b6367bad429d02928",
"index.html": "66ac01a012aeac00e564e68b34c46515",
"/": "66ac01a012aeac00e564e68b34c46515",
"main.dart.js": "d369009b93bb31bf2fbf9e53e471dbde",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93044325e892caabb47d048f0fb95d7c",
".git/config": "f7ade1311376605cad2b9a0760d88dbb",
".git/objects/0d/ecbac38c7711e177791cd93cb84dffd385a8f2": "a58aa6c7483dc89deb44cb7257ed55da",
".git/objects/0d/2b40949a0ed76d19d49a5c35a12cc347ffe556": "b8c3ac5eae1c4970f3f78b0d10dcafe9",
".git/objects/95/7a846688d9dd14a3eaeec9f5c04b61b8bec53c": "ced303158307bdb9a61d534504d3b0e6",
".git/objects/3e/97cec9a770d901feedd4f664ac210aa8ff3588": "b1cddec82912805b78ad767c965c1d70",
".git/objects/50/122ef4c1c5421dd3fb7074b68e580565747768": "f3711a48af32de85a9d615bbf9d65937",
".git/objects/57/d3d602c34644681cc890dd5b6caa6b0bd6623e": "e1e29263d720779c8151a355515ac5ef",
".git/objects/04/8282e7553e0550c5e83dc0867397db27f94046": "3a7ed5e49bd2dd9f758b1435b5b1bcb1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/7c553ca9a3666d4b42404364374a6d7d49fd61": "2c4992ade12596781a9025bb909b3016",
".git/objects/5a/28e5679b8ecdd0af8c5aca50b79157776393d7": "941a11ba122b0d4545f7ada28798849f",
".git/objects/d0/c4d70489938584b886b561ca95231948e51977": "8e0a4d36c50d4ed3ce98dffcad82a406",
".git/objects/d8/316a271d93b9ca4bde2effc843e6edd0e9f803": "699edc9a591a133b7dd2e127e9abba1f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/1473c03b25f0c3e53522f75960798c8cf2bfd0": "a1b09089344beb8baf42b29fd924b483",
".git/objects/c9/7af13236576263d8ce67d758676f5cd1d46894": "82638442e6990189aabf61d5ca77a22b",
".git/objects/e3/15159a6e02cb240848816597146eddb23179a4": "c358fc0bafc916c4383d558fbcb74949",
".git/objects/e4/5398364b8088e0da8e3a6af18fa5a765f7c25a": "444be1ec32a3afa69c26b8bee021f2d4",
".git/objects/fb/bdc5a9e46bb7397e58ff2a31b6b9a6d2124e3d": "995a32a9c5419bcd53879f0bea484625",
".git/objects/c1/044b444913f624cf0a6a8f3f720e59f54e474b": "d64d16e47557281faba5dccb7de9ec82",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8f/92db17a4de2eea762b876624152a00258dfd47": "f96c00cb055123f3a225d2b216c45476",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/dc07c97503793be3f93b56315ccc144e8a8696": "eb2397f9dc07dd685ea45c3fba93bba9",
".git/objects/72/1a32e1c150c25bb6d8cdcd64d9993cf5a4b7fe": "6638085c81052878a740721913c8030d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/6811e417219dafff606facce1e209a4e9014ee": "b2e6c3f2ea952c031a8d8855b88e5074",
".git/objects/36/01d2b33ca7611d9f93cf9701fecb2c2e10259e": "f4e25875ac85f6240a90250c13761331",
".git/objects/98/6143d7ec5795ef69500f2dfe61cdd3e49057d2": "e9d5b07d80abb6c01dc1186aececeefa",
".git/objects/3f/8f15e882550df138863a0da6ddfec56c226541": "36a973ea918d6c01afd3f6de325b9e4e",
".git/objects/30/57974c50b115afb9567b926d657c9f7f1e9df3": "657b4355a00eff0cd5a5830f87b8623e",
".git/objects/39/1132085d2337d98f71d51e1ca41e2dd5e5e4cb": "fbe7c86d1b01c0af730eb945c12fb763",
".git/objects/39/f7bfe944b6ccf5435654c2f167d793173c67a3": "c7e9d6269522959c3c7e0025182bd000",
".git/objects/ba/ffc91601c301394ddd0b22de338c94ca5647c9": "81437cb2451fcb514ba417406c63d72a",
".git/objects/dc/e4d74d5f691a27de64eb1412e66020b2cf19ad": "3c645bdc623ddf68bd4eca1c8695e9a3",
".git/objects/b6/1deefac18beab90bc958c4fbbe6eaf2f5c141b": "e5aff24278ac1065b5763f99a37ce087",
".git/objects/aa/fb65c3b10d600ebf4cccba52b8eabf634b0c8f": "f73b5f1276cf8eb3ccffc80082f04c45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/bb11367c489cf3d072ef94c055ba592f19f041": "b5488e139e640e5228a20841f2523ef8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/578a92451671dbe37f057b75f4ab36ff7d2aa8": "06f015c52e10a98348ada04b1588c45a",
".git/objects/fa/096f46fafd99f7274a92a5476cf312bbe62f0f": "70c52d9112f7785cc58bcc1b416dfef9",
".git/objects/f6/366cb4f18f4ae1fca9bd552d5ec25bfa178bba": "223a2af4bc03ed0873080159a72cd63c",
".git/objects/f1/04db8f4b558943d2936072287405b772e4c747": "261d822f6dc8a26a7de85e7cce81e7f0",
".git/objects/cb/e9e4cdbce82836cf5562c7841b9b8975ae9f00": "32665d19dd86de3313eb6ef7302aab44",
".git/objects/e0/dc24b0e3d31eaf8429a7c5791db896f002ec14": "17eeb34519e6816b6a99ec9ef06c069f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8d/fbd30d4a090a426632e24566c59b98ee2452e9": "369ec741c756c1315567fb148e004fad",
".git/objects/47/a2433c4f87489e72b920d54283e21eb79385d6": "b0f0bc4e869a89dcf250465859d0c5fb",
".git/objects/8b/2d0fe652c1852c0eda20055e94c5dfc1b704db": "1697a11c9c26fea8130e86e7ee6b9323",
".git/objects/13/4a253c7472746397c3488d11f503feca229297": "0cf476d28c6f5b6db14e0cf0ff592980",
".git/objects/7a/0f89ebea063b616219dd4d65fbb6b51b44af80": "d002acf96ec7a3adf01ea42ef70fa47f",
".git/objects/14/11df4690fea88fa3269fb8ef099fbe1ca28f29": "966ea3b8ae10f6733daad1cbf38bde37",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "857acb37d73ab392dab25389b1653abf",
".git/logs/refs/heads/main": "80b6ec7fdd5ad9dfa53dd5d5fb560a68",
".git/logs/refs/remotes/origin/main": "94e22eea9240eb9d1ebff5ed6173dbf7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "015d8c8666c0b5c3d6f3064f5af52222",
".git/refs/remotes/origin/main": "015d8c8666c0b5c3d6f3064f5af52222",
".git/index": "d2a528afb5d5f442ddc99ef35d628f61",
".git/COMMIT_EDITMSG": "401b30e3b8b5d629635a5c613cdb7919",
".git/FETCH_HEAD": "7581ca01d3fb8b10ab165b2c208c5b3d",
"assets/AssetManifest.json": "ffdabd2c4aa44899a222ddb8df11aab4",
"assets/NOTICES": "9acfbf97c53bb7134b65ad37578ba8aa",
"assets/FontManifest.json": "957fe091e4fd7d4a4f3222a238b365c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/target.json": "9ffa9c8291736ac428483c681d09ca02",
"assets/assets/images/bg.svg": "e94c1680432a75dcb055382e497798db",
"assets/assets/images/bg2.svg": "5710ccdfe04efd3beb9743f69c6f6f6f",
"assets/assets/fonts/Kanit-Regular.ttf": "b935eb6769e902b3b0086459a7c55a05",
"assets/assets/fonts/Kanit-Bold.ttf": "d204df3d775c0c90d1773a97743a77b5",
"assets/assets/fonts/Kanit-Light.ttf": "3a5af91532287f228070af610add510c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
