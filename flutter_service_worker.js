'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "dfa85062a7c133073a57e4e548468add",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8d24d0b79a3d7850584bf02c0a6cd07e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "011143c149bb981607f1762f0678b5e9",
".git/logs/refs/heads/main": "fa9405f4f52da77cb0ee81277614dc22",
".git/logs/refs/remotes/origin/main": "5664f42f2d2aea3f9b1950019fc4ce39",
".git/objects/03/4e039fd7a23a29d45ae31136bdc553a2652f90": "4553172630c7a5a412bffaad860a34f0",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/fe77d5de3d53da611176d8659affac0d64d31e": "4c2e7ca2116b0c567ebf5596e9def0da",
".git/objects/10/1e85ca88bd68841259fbb452b215e823cad89d": "e8622c19edabd184ae7ddff975259ed8",
".git/objects/12/16c51da8ee4ffe73971197a4e7a863d77042b4": "8ba74df481c39abff8e1655061332b85",
".git/objects/16/3352377454e18212b8511d91c51f0ff41359d4": "4dcd90f7a18ef720034ccf2dcb495b70",
".git/objects/17/46d5f605b2e64b56ee4787e5e5c9526730a592": "44c31e6eef8d1da225a845ff31bd69c5",
".git/objects/1a/7fe5e6b7264fe22c314ac7f9c93b459b35000e": "884b85bce5152e10da43a17985f0d355",
".git/objects/1a/d80b5217c0476ac1ee8d43ec3810e56345fc1a": "f9241e7c202e8bee646afb0bd8622dd7",
".git/objects/1c/70bb04be843c6bb73976ed60fb5db88f9c48d5": "536660e0f391d91b130dc5cda005c76d",
".git/objects/1e/b0deb6907a03b63a483d1ddf779906027d21fe": "965b6e9e04f961ceb09f98d35d470caa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/ff6fec611ad95eed0b2c27e4e4e27454b9383a": "2d6ef26547b41fe50899f0ea604bd783",
".git/objects/22/e7e32561e4c7098c6de6373117cbfa4ee2edf4": "8a1d97f7b7f16f136e8ecf2aab43dfeb",
".git/objects/24/1493b8c97db83ce97055fda5581489daac9e45": "da37f4d41ab90f20056ac2ba794267f0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/26240b3799d8015d6f432a1deb6459a751bfd5": "d3bf1ab811d1b8c2114b392506eb4bfd",
".git/objects/27/6650c096a7e0d7558ce09550cbf6e9bb727046": "ee5f47d8e44f85e3111e0efba35f6721",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/10bfa1f9d13b9109dea7942a4360e57caa84c1": "f3508c1bde40cb1618f8632b1944cb65",
".git/objects/2f/2712164d189a8049344f3e6ccb46fc70d40a29": "c76aefa47696898a3929875223b37bf7",
".git/objects/2f/789d9a33fe6569fa012fe70b1c82d57db8a833": "a8b61fd418108702b36bba5480a0150e",
".git/objects/31/0fe3ae7a05c765d85457d84ac5fae72b16b793": "e167d425d417d8fd0503e5136fde323f",
".git/objects/32/a244a26c0a672b6fe08ce3bd8c56fe4811860b": "84bc06fb0aac0a7fdf5aaa06339274af",
".git/objects/37/e427690e592709e9607d7169eeffe02cddefa6": "153edcfa3b002edd1879d3de0ab7c0cd",
".git/objects/38/86b265ea2aae41e2d9243cd25bf81daf290d0c": "3309f1b53ef1cc1784d9ddaef513c15b",
".git/objects/3b/6c1070db9cc595ad84a0bb975aec01d6a38403": "701df626d2bee40b98b0d03fe3a1a538",
".git/objects/3b/defce633389710f9275b34bde1a3d96e16deca": "144852d3efe6fbcd0193e78edaa32f5b",
".git/objects/3c/8f5358321707c6b259bbc8f6a39fc494f52f12": "3f06709b4a8d020bbad797b5394580c3",
".git/objects/3f/6c87fc7ddac15f2b264adb37d5dcf8da35d80d": "f64d7a727ee128b33f73d4beba312350",
".git/objects/44/ae552e177ecb8cae53be4e2a7275379acd5378": "a8310c59fedba52bc4e54e003011edca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/d55f3d812a61140061041ad3824bd3cfac1232": "e2b650bba7eebdd7efc47220b54cfbd2",
".git/objects/51/a4410f8962be18700e5162b63c637b4201247b": "813e6126ac07eeb05622f9cb93b14b4c",
".git/objects/54/e0aad03742a6bf44d53e20f2ce7e2ccdb6879b": "4b5642d3d054c7d37fe1bdf006b8e9da",
".git/objects/59/301cfdf3207251edd1dfcfff9a37c66f9ed98a": "807626a362868eb2e72f7947b29a036f",
".git/objects/61/cc9b14e86cda48f3c99e118ad10c887ef8d1c3": "00ecd5c5b9c741b3677ad93019f668b6",
".git/objects/63/4f018f82dc3e8cd4ef032a4ffb012e82e05991": "f8669fcb19b6ae169e9e106a51649dba",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/b7b06412bc00587ee705b45b0f294cc995e57c": "9cb18d24298921cb6205f27722c58db4",
".git/objects/6b/b2d474d5115b3261088e351bdc3800301a8df3": "d79206e415566b0b4bd97e48074139dd",
".git/objects/6d/5a30a8f3add023b4f946c2af216ca6b4b3fa43": "d275086c53c50a9ce4ef2e46d9bb372d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/72/85ef215994cf210e5c638b87c5a0eff90e6644": "8210caa1f7c0782660093a94a40c5166",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/81dbaa5aaa8856752e0b24782d7938d6c5870c": "79360fc92b16685955ff3cb46abf8806",
".git/objects/85/0c4670d73422d74e0a50faea2815af2d462d41": "96d23ea0bf153d3b391df0d2c9d41541",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e2b2a174875c5852e8f093b2ecf4bdbe3537f9": "75646903f75b073df339f8bce54be4a9",
".git/objects/8a/7d80d64bdfedb69bd4fb33766a801a83fc2510": "f0e42e84cc3afac3e5e0c89e0e7545d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/65741110f7621c18de8244af86f99a8e885e38": "5db139668f1f361cc3eae5f18aff096a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a0/882a402d26aa68900528a13831d253352b701e": "39fff7ad37c4e2f91a9ec60c0496f9f7",
".git/objects/aa/0f862a82c8addf2ec116521c739875972c50b0": "01c993cdf4b40df17209cd264e58c355",
".git/objects/ab/4da4d29e7cf2f8891177ced0cc326269a859c7": "d9728762aaa588e1f5fa7246b7d024b3",
".git/objects/ad/ccb1ec089a436cb2c2a079fb21b2e426b51722": "cbcd125a947358db874e2c939371619d",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/6a9681ece2562eb301a42d83531517ddf9ddca": "849b861bc3182d3dd7bfb6d2a5d8bfc1",
".git/objects/be/63227c2356d16f3b9f15b9e7cb10ff826d694e": "319fadfaf6dc0f1c0b6abab207bd364f",
".git/objects/c0/4bc61a121e56382f0023570d568da3fa94f999": "43432d1efc827981fe7ef8d581226746",
".git/objects/c3/5d62142219aff141ba8fc461dff45a87c6147b": "fa98807eb4c0ebd424279f366baa39cf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cd/4927b9a7724c0371e9af495cf2eec79d1c3218": "7e30a1d02a747307a3e7033b232b8f59",
".git/objects/cf/55a282504cccf3b1f6757ad9ba79fc65f62a79": "9a2880e594da7e804e85cf475e5d39a7",
".git/objects/d0/9d3f2eea737e16fcbcaa2abb271c1c83479178": "1678417d8f38a733a5dba86ad12f3613",
".git/objects/d2/34efda6dbd88b951be99b72200c891bf2200f2": "bc052d996679c4e78b6b0e2cd62914bd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ddd521431eee2087e751478e61568e77a41a36": "97f56146c9dc271f296fbc85c4b23a79",
".git/objects/dc/121c04c4732ddd55c39d26ad143ce3e843ccc4": "501b5915c0d17595e70bc5f84139a641",
".git/objects/df/36c30d9c98981d7df70779185474222b2fa29e": "3f9c14ad9cc3cebcb3d24656d2b10bbc",
".git/objects/e2/4e12c95b103b7556605fc19c3b7113e4b31ec7": "b386c19d36b374adfdd9160c4cfead2a",
".git/objects/e2/e76b4ce829ef3a2e3684102dbe8a6d335c9bb1": "677a4fbf5156649514adf82752dec420",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/a5a6294465e940d8efa8504abc353c9ca67f2a": "29f5f673508488f648aafb0f6a149953",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/61f61ae4f6398cc0732be2f62bdbe169f83772": "b1fa2de993839aa1f12b50f39ded62b3",
".git/objects/f4/bc10bb942fb2ec2ea755c7c338984941188d9a": "2e6bd4a7d64b1333bdaf5ecea8ec561c",
".git/objects/f9/95a02ae5a016799c8e3dcfbcfd938f4bd38700": "05721e2f246ef92a627cc65920d37ecd",
".git/objects/fc/7739bd51504b6fb24f170b800d213e177533f7": "98afe0c218e546444007826a0b145bed",
".git/refs/heads/main": "19ea20a024fc9396ade29e1fd8ef2158",
".git/refs/remotes/origin/main": "19ea20a024fc9396ade29e1fd8ef2158",
"assets/AssetManifest.bin": "d65cc234051bb24e5a7b0b2eacfa7d93",
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
"assets/NOTICES": "e5f73231cbd98d01179baf91e35cb04c",
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
"flutter_bootstrap.js": "cbbe5fab30ac8c8878a58b7d36abf1a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1dd07d615c8ff7394863e01b1d30a7ba",
"/": "1dd07d615c8ff7394863e01b1d30a7ba",
"main.dart.js": "75f46c801d87d5c7f5c1d2a192d069fc",
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
