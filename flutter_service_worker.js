'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f04d1056ac64fa48e785972e26dd8cbe",
"version.json": "affd7e947b30da30fa72b8de17c70ee6",
"splash/img/light-background.png": "9bb8af299567ae61e935ea85eaa3211a",
"index.html": "34cd7cac6df286106aaf74711c7bb7e5",
"/": "34cd7cac6df286106aaf74711c7bb7e5",
"main.dart.js": "4fca78c2de6d0cc0c9c70af44f61dbbf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "8ef693f2bf5e554fa4c82074680ae974",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb82ee4a023ac2263516deaeae948db9",
"assets/AssetManifest.json": "d86373ac1b8d14ca3dc8d22660e34104",
"assets/NOTICES": "04c6b090aa0150b51146f70117182bb5",
"assets/FontManifest.json": "86eb5b94afd44ce0bdb814edd4e2aa5b",
"assets/AssetManifest.bin.json": "9e7a318019b74584f97f5c199448b787",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/dpgames_flutter/fonts/Akrobat-Bold.otf": "e592c9850a6620fff5708450e1775b5a",
"assets/packages/dpgames_flutter/assets/jsons/win_rate.json": "7dc74baac503985800c99bcf386e40e4",
"assets/packages/dpgames_flutter/assets/images/home/pin-fill.png": "f44dab2921378efcb9c5016bf3cbebd5",
"assets/packages/dpgames_flutter/assets/images/home/scroll_top_night.png": "8041e361cd2ef98fa883079c1f562b50",
"assets/packages/dpgames_flutter/assets/images/home/search_history_text_del.svg": "ca5b40822b068f44f3809cb6b13628dd",
"assets/packages/dpgames_flutter/assets/images/home/pin.png": "281fa794544e3ca5d8d1e98dc0d0577d",
"assets/packages/dpgames_flutter/assets/images/home/alarm_light.7edb.webp": "25ab8057a3bc06fa693cb64eaa70f18f",
"assets/packages/dpgames_flutter/assets/images/home/league_search.svg": "de15bf80a34fd82b2790520308703ad9",
"assets/packages/dpgames_flutter/assets/images/home/baseball-hit-icon.svg": "e506335515ba708311e161cfc48a7597",
"assets/packages/dpgames_flutter/assets/images/home/league_search_inner.svg": "7f20399cec9daa4ffadcd4ef4693dfad",
"assets/packages/dpgames_flutter/assets/images/home/empty_light.png": "826e47c6d6becaf0d52ba1a1935f6534",
"assets/packages/dpgames_flutter/assets/images/home/search_history_del.svg": "1ed4d2a4bebf44485253976621f35c6a",
"assets/packages/dpgames_flutter/assets/images/home/img.png": "0c83516f3828d736d1545699af405ff2",
"assets/packages/dpgames_flutter/assets/images/home/baseball-hit-night-icon.svg": "3d102aaaeec95975bd68cbfb066c0f78",
"assets/packages/dpgames_flutter/assets/images/home/league_search_inner_night.svg": "aef9f167616d45a968d07d566e023297",
"assets/packages/dpgames_flutter/assets/images/home/league-close-icon.svg": "bb4609e5df1e1bfdeb0b2b96e7e7406a",
"assets/packages/dpgames_flutter/assets/images/home/midfield_icon_grey_app.svg": "aa65d812bec9fd5b16243b528f7494b4",
"assets/packages/dpgames_flutter/assets/images/home/search_history_text_del_night.svg": "2294bb87377cb984dd6344f417a9bea5",
"assets/packages/dpgames_flutter/assets/images/home/league-close-icon-night.svg": "474822d56c22e232f21d80b4698a4ef9",
"assets/packages/dpgames_flutter/assets/images/home/union.svg": "4bf0cfc5ece4eb1e93fbe8be8335d511",
"assets/packages/dpgames_flutter/assets/images/home/alarm_dark.9e3a.webp": "17940c277cec0719082355b61ce653c9",
"assets/packages/dpgames_flutter/assets/images/home/scroll_top.png": "e53f47f314db32c34d2eb90fcb6b65b7",
"assets/packages/dpgames_flutter/assets/images/home/midfield_icon_app.svg": "e65a4a1ff6a3d49700fe8d546bd68608",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296-active.png": "4568627944b37f878bd14d0af3be5739",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2-active.png": "8ee8e5095aab96354f84fc68ae5a6a00",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278-active.png": "d51e71195cd96fb96c1277613feae2c6",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292-dark.png": "5e98e260777cdb92e67b84913d028a2c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293-dark.png": "bcc9d8c808174d0a52469fb75a00ceb9",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287-active.png": "f510df20c8b689bf7c27a4f362f8728b",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277-dark.png": "0ea0e2a1afdba35828bccd76c75ae9c4",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276-dark.png": "ecbbfaca471cabdf80065f6f8938cf28",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282-active.png": "d16d3e9833e8c280319beb4d90c6da02",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3-dark.png": "a46bafad8b7d39406d071fcf10955eb0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2-dark.png": "e181bb391346568e52667eb308764201",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285-dark.png": "da3f3fdfd1799006ba5ddf67125215e9",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293-active.png": "0d0215e1eda1b525667a1273e34134e6",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294-active.png": "169cf888d6b199f5f1edf47a9c36d76b",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277.png": "373c3edb293602f9803ef93c8ef4a70c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288.png": "48c6709511ea872a47bc832f0c84d2e9",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288-dark.png": "7aab2c697f1fb0dd39eded9049a6a657",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289-dark.png": "6a8f3e8eb9fd34a9c776c76524dd51b8",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289.png": "1f7b3ebc7f8d0c20b961e6b8c43cb599",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276.png": "5c0185ec356a6e823c1d0b321f2237a0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288-active.png": "1d0e6a997234351da606973c012c6c42",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277-active.png": "b25863d4945e65a0c9052a0fb9c67a86",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282-dark.png": "1aec9fce21a88f0b82ab67f1e1669d2a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285-active.png": "294ad99d62d26b9f1469fe4569ee7cea",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280-active.png": "7fbe95c61cda9e46e5f420efa616b55d",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291-active.png": "24aea74af5a38ad4d2a4acc09847c054",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295-dark.png": "bc49df268f684d96ab6e7bad937514f7",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294-dark.png": "bead585bea326c9422d6a47e858160eb",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286-dark.png": "6f6181288fdbfc6aa8478de0334f3152",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287-dark.png": "c3dd72112ddf63dec5c7a43e3461a450",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281.png": "6f9dbdfa02ccb5d19e214a825c7d6a66",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295.png": "86ebafb170c21755760f95397b4a2124",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294.png": "0c509dcda37f85c5cede87ce9c785be0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280.png": "f566a7e06c4a63d69b9ec04829ce2ce4",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296.png": "f9622ab8efdf6639b4827f978e11696c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282.png": "169a830d296b2b848374bfe6ffe12986",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297.png": "1491b04be4fac5815311b277e4fab601",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292-active.png": "74a5d4645fc3a471b11517c18ace4bcf",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291-dark.png": "54c2cb3481ab67250f6ee2fc6abfb643",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290-dark.png": "00757ad3ea4b313619a1cf8975488ec3",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278.png": "a803b4b4aa0a0e021bfe2f7d4519c03a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293.png": "78ea9bd06e669266071b55307f916502",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287.png": "e1446d5a8b5dfc5e818d8829ab74224a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286.png": "28778bd17dff42515b180748951d0f9c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292.png": "c44a25be683ca56882ec1d5b83d171ba",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279.png": "0c933a3573294ba2245fb409a317806c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3-active.png": "32c2a96fbac8becdb85bd03f42fc9fc6",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297-active.png": "0064f32e9d93a6a977fe4f60348b0620",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286-active.png": "7a115943fb0af6e66ee7af5996920779",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279-active.png": "f9929ae781e57195d31e2aff7597fe2c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290.png": "d7916b4f2759e3f465bee2ef0eb08a07",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291.png": "a9dde7eb3bde1a32620a40f35631f5df",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285.png": "cb8beac75e15082c14ce8a8bffba1a62",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296-dark.png": "7540afe4ba9f1cbc3ba78a33165866f0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297-dark.png": "0667dc945614daacb15c1942894d815c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281-active.png": "0cca4dcb76468096d6afa7a6539b88aa",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3.png": "2564475f9272f783a46a0d7a427d55f9",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290-active.png": "a0538983e1686150dd71e01fab3b82b3",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2.png": "5c4b88c6f8dd312ab3134def1fa41bff",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279-dark.png": "b3c99f9351481a7a2dcef1d1deb41fcc",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278-dark.png": "4e444c3f01dda11c4f2b1f4abddd611d",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281-dark.png": "34dcf30a991e830023ccf3dda56d1a87",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280-dark.png": "77871fe47d11443e244d81fd3a947fc4",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295-active.png": "48d7eeb7d85e217f729663fc7bb45758",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276-active.png": "e2a454e08500dd050bb346078d752e53",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289-active.png": "b4e56b8d1add3ba2958c33e146c97bd4",
"assets/packages/dpgames_flutter/assets/images/hot-leagues/sportstab_ico_40_sel.png": "88b1f263c21ae2277be5dc2fed9bc049",
"assets/packages/dpgames_flutter/assets/images/hot-leagues/sportstab_ico_4_sel.png": "925ccfd87efec267c60b6a5b2e8da354",
"assets/packages/dpgames_flutter/assets/images/djbg/291.webp": "b16075ab08361550f04b30eeaa6d9ef4",
"assets/packages/dpgames_flutter/assets/images/djbg/286.webp": "90428dbbf9df12b3a44efc306a2f66b5",
"assets/packages/dpgames_flutter/assets/images/djbg/290.webp": "571c53957f83cb8a0fa7129954538712",
"assets/packages/dpgames_flutter/assets/images/djbg/297.webp": "ac14729cd4d592bc19aa786c4fdd28f2",
"assets/packages/dpgames_flutter/assets/images/djbg/278.webp": "ae8209279a9a10de9f99616cc38174d6",
"assets/packages/dpgames_flutter/assets/images/djbg/281.webp": "2758f170f76cdfd96f6745cf5bd96812",
"assets/packages/dpgames_flutter/assets/images/djbg/002.webp": "4a32d0268f33197ea283b6125eda5b5f",
"assets/packages/dpgames_flutter/assets/images/djbg/280.webp": "29019fc79eaf5e019f4236055118a815",
"assets/packages/dpgames_flutter/assets/images/djbg/296.webp": "08af4190f01678a04e70448a1bf67f97",
"assets/packages/dpgames_flutter/assets/images/djbg/279.webp": "11b1e6ac3f0201a84fcd07dcc0062a2f",
"assets/packages/dpgames_flutter/assets/images/djbg/000.webp": "01a6c0cc2b681b21813aa7da097162c0",
"assets/packages/dpgames_flutter/assets/images/djbg/295.webp": "951078e8f098e8e320830c9d960ed074",
"assets/packages/dpgames_flutter/assets/images/djbg/276.webp": "01312147c6248ba1c5f49d1787ebbe01",
"assets/packages/dpgames_flutter/assets/images/djbg/277.webp": "305ad89c07ca99517811c0e64bb4e5f3",
"assets/packages/dpgames_flutter/assets/images/djbg/294.webp": "6d595890390cef827c53d530cbb36e3a",
"assets/packages/dpgames_flutter/assets/images/djbg/282.webp": "d7819ed95b0c0ae96efeb7aae1791ebc",
"assets/packages/dpgames_flutter/assets/images/djbg/001.webp": "1a88fdc0c52c7ad3761812b0431ca37c",
"assets/packages/dpgames_flutter/assets/images/djbg/289.webp": "236c9ae37a1feb52c8931f52b9dd574d",
"assets/packages/dpgames_flutter/assets/images/djbg/285.webp": "53df0cdd8eebbdaf6b7c0dc06efa4337",
"assets/packages/dpgames_flutter/assets/images/djbg/293.webp": "d5e338c908a884677c152417d843519c",
"assets/packages/dpgames_flutter/assets/images/djbg/292.webp": "d1fe751cef4cc905410bdf6eb70956a1",
"assets/packages/dpgames_flutter/assets/images/djbg/288.webp": "c7e0bcbd6780944ef8c1f4b46741a671",
"assets/packages/dpgames_flutter/assets/images/league/seaction_expand.png": "55e4e6c564cfe68f3713aa4d5b856ff7",
"assets/packages/dpgames_flutter/assets/images/league/icon_arrow_right_grey.png": "19d6ee24cf1328f01b672e121119c569",
"assets/packages/dpgames_flutter/assets/images/league/icon_all.png": "8cff233aeb9308936667088af0149571",
"assets/packages/dpgames_flutter/assets/images/league/seaction_pin.png": "ff5557885a23be2b8412760b29cfb742",
"assets/packages/dpgames_flutter/assets/images/league/sportstab_ico_0_nor_league.png": "3e752819f7a0a575fd4cef1a242dfb77",
"assets/packages/dpgames_flutter/assets/images/shopcart/fullscreen-bet-confirmed.svg": "ac6c77d9d40121d3cd50b5d54751be54",
"assets/packages/dpgames_flutter/assets/images/shopcart/closed_pic1.png": "66fa621674e04b22abc6f0785b682a2a",
"assets/packages/dpgames_flutter/assets/images/shopcart/closed_bg2.png": "cbf8e91adbbdf0f58de33919f6c2a544",
"assets/packages/dpgames_flutter/assets/images/shopcart/fullscreen-bet-confirm.svg": "0cf77f01bf2fc57a182be7f4ed2f861e",
"assets/packages/dpgames_flutter/assets/images/common/empty_dark.png": "7d28353e422926caa5fc256c5d994130",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_bg_dark.png": "42614eff36d16ad7ca6403580b27669d",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_bg_dark.png": "ac29d113b1d05047e08df71463eddb41",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_bg_light.png": "bf78d911f3841ae81afd79ff1d91c4fb",
"assets/packages/dpgames_flutter/assets/images/common/over.png": "98d70ad94fa48663519461ccc25f8484",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_dark.png": "7423c542e3907d407d24be9df38f04b7",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_bg_light.png": "73831b7f807df7912cb932e50ad5c8be",
"assets/packages/dpgames_flutter/assets/images/common/empty_light.png": "826e47c6d6becaf0d52ba1a1935f6534",
"assets/packages/dpgames_flutter/assets/images/common/val.png": "331736cebcadaa9792217e0b618eea4c",
"assets/packages/dpgames_flutter/assets/images/common/icon_close_white.svg": "635abf9f1577623e2f3329c0c4b76c4f",
"assets/packages/dpgames_flutter/assets/images/common/h5_battle.png": "2e0a6134faf285dec22bef83683819d7",
"assets/packages/dpgames_flutter/assets/images/common/h5_king.png": "46324a3010e961b833d2e1092c368421",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_light.png": "ce6ae160294e67eb8ebd203fd241dd34",
"assets/packages/dpgames_flutter/assets/images/common/h5_endless.png": "006fa78e2ee12bf4a83895fd26382da0",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_light.png": "dbe1574b736b440eb224b93439e44217",
"assets/packages/dpgames_flutter/assets/images/common/h5_dota.png": "2239f778615037720754328d3088cc8d",
"assets/packages/dpgames_flutter/assets/images/common/h5_csgo.png": "d0f10169af0951c3b453f8ea1eeadf4d",
"assets/packages/dpgames_flutter/assets/images/common/h5_lol.png": "4a029549c738c843de96e06bb084237e",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_dark.png": "f15eddd30c9a5eeaa4d9b07c8161d08c",
"assets/packages/dpgames_flutter/assets/images/detail/result_top.svg": "4a3fbb60eab09fb60013b6d5c365f5ce",
"assets/packages/dpgames_flutter/assets/images/detail/def_common_night.svg": "b8f40c727f623c3a6962aed6ba0ec828",
"assets/packages/dpgames_flutter/assets/images/detail/video_play.svg": "bf88f0e1ddd1bfb91a8ea017e79b59ac",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result_active.svg": "d9d06c34bf9f87bad783f1daf9b06b72",
"assets/packages/dpgames_flutter/assets/images/detail/def_common.svg": "eaf42d17549479cbcf2591af957f6ae7",
"assets/packages/dpgames_flutter/assets/images/detail/video_fixed.png": "75d31ca03ce1c1d1a459de58a02f0df5",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result_night.svg": "1b038467eed4984112879a3635073109",
"assets/packages/dpgames_flutter/assets/images/detail/video_unfixed.png": "8f2defccbcde1a39aa4351d2762429c0",
"assets/packages/dpgames_flutter/assets/images/detail/live-app.svg": "8103fefbc7151d700b85a5b60738f7ad",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-bet.svg": "151a195480b8d3920aa4c1033e4fd85e",
"assets/packages/dpgames_flutter/assets/images/detail/animate-app.svg": "a60af69cc568d89e1a9e188274166acf",
"assets/packages/dpgames_flutter/assets/images/detail/scroll_top.webp": "453f495a519e1ba6763fd96819cce11a",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-lock.svg": "4aa02aee4f1ba607a7a1cd5064dd3d96",
"assets/packages/dpgames_flutter/assets/images/detail/def_marketclose.png": "262275e408384ed7bd7083df12043b3d",
"assets/packages/dpgames_flutter/assets/images/detail/bg/eSports_default.png": "9e7b5b708e400c6f4b51505b7b9c9880",
"assets/packages/dpgames_flutter/assets/images/detail/bg/football.jpg": "7921ec4fcb33497dd0421f3d121ee144",
"assets/packages/dpgames_flutter/assets/images/detail/bg/basketball.jpg": "197863ffea6a8a98435fcf8e0556e2e0",
"assets/packages/dpgames_flutter/assets/images/detail/bg/cricket_ball.png": "9fe294920794dcdd52651c43ac7a8fea",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-12.webp": "4b5b281000ac27fb1e52b82b2cb5697b",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-28.webp": "cb576fea809124e0e6932ef2710500f3",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-1.webp": "6da0316dc508647414c9a57006195587",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-13.webp": "5fa2c68ee10074cfaeb6d4d917b24e72",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-18.webp": "1b2a79f2f2280e421db079624647cb81",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-6.webp": "2d179dfca863c5e343f4ccf37b19dab1",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-23.webp": "3cfef2a17e817d7655a11097a32bcaf9",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-19.webp": "1f8c617a6ffa90570d5be0349cb18e4e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-8.webp": "c51bab70422871291280985f64766d3e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-16.webp": "ec1d0f3308fc8db592e23872f32d2aff",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-5.webp": "6539387b1e38cd3ec4854f3d3c592830",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/esports.webp": "25acdeb7016030ec78cb430756741fe0",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-9.webp": "bfe72208aa4f80aba4b0eab023e719cb",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-2.webp": "b76d5ae3fb7332478d22311896edf06e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-10.webp": "c6af991eca96d085d46e1f5735e9dfca",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-11.webp": "41f759e93f13308939422f92c9c6aa7e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-3.webp": "b61cd6d8386bc724e667cda023426789",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/ownGoal.svg": "fdc52ee003c8d62582159d80b21933f3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/substitution-icon.svg": "072f2a447bb1911f7b81c949aa23ef60",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/goal-icon.svg": "0fdd21976d80903b97ac337d41c623c1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/var-night.svg": "f377827e774995f6e395f634a2ca24a3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/fan-gui-b.svg": "41a288cf3b391ff3f42f90cf0a322aef",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/er-fen-de-fen-night.svg": "bbdfc11f2d58da6d127ba5bb613527c1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/missed-penalty-icon-night.svg": "4aa4fbd412423979723b25cdc302a568",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/var.svg": "453afc3a99d0c0e113f690a249ea854b",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/substitution-icon-night.svg": "237f41f6dac8134c17db1177e6a2c7c8",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-yellow.svg": "ba2c7f87b7a2a9e8f5fcab9744bcc0e3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/assist-night.svg": "1dc4f1bfe165fbfc09a7e660746ab9ce",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/assist.svg": "c2599721d6b85502af2acf9477d403db",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/missed-penalty-icon.svg": "d0af073c72101f244e57846d0c8c4c6f",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/shootNotScore.svg": "f6ee99e654dd7bb0cecdc985259bc62e",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-icons-arrow-up.svg": "89531d094fa55e86d76e0750a27e0c07",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/goal-icon-night.svg": "ca77037b61aca8553e5ba58a2306a2de",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowScored.svg": "36e3e7096424c5370bca10d11d9f328e",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/er-fen-de-fen.svg": "c51729aec24db87b1b3980fe902cb608",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-icons-arrow-down.svg": "2e1d9e47a702eb2804e5e7bc3fe1e361",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/corner-icon.svg": "3ef2597b50b7d2877331a49f59e2c505",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/towyellowonered-icon.svg": "bd9026b99ac703e7cb7fd7271b7d6ec1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowMissed-night.svg": "1c0b4f18b6d6f38584019b919942b562",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/corner-icon-night.svg": "308eb1e706ba78235c9236f912497da5",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-red.svg": "bbc24f19023658166cf42015f1a68365",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowMissed.svg": "88b38843cfd0c71a85441c892cc9f889",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/penalty-kick-icon.svg": "3173f421a1512b43ea6934262ce9292c",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/shootNotScore-night.svg": "c6047e0ac054700a9de936d9100c1244",
"assets/packages/dpgames_flutter/assets/images/detail/ico_new_cornerkick.svg": "f5b0df382e5520e24945f13200908358",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result.svg": "ad12645bd6fe291b2548b2513590f988",
"assets/packages/dpgames_flutter/assets/images/detail/def_nocollection.png": "9881618b5e2526f7fc3a4f54ebc85901",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-nodata-lock.svg": "ae800f0854c13f54a0ced307d8e11652",
"assets/packages/dpgames_flutter/assets/images/detail/result_top_night.svg": "72cd7f17ba5f88d3bbac7eecf260aa13",
"assets/packages/dpgames_flutter/assets/images/icon/tutorial_background_darks.png": "9f0a80872a31de77c63a8c404b309159",
"assets/packages/dpgames_flutter/assets/images/icon/result_tab.svg": "3d5fd883feb361287993b9f673d280b3",
"assets/packages/dpgames_flutter/assets/images/currency/BND.png": "aa0dad4f7b98664e349115f4bd5821ac",
"assets/packages/dpgames_flutter/assets/images/currency/KRW.png": "c43582a8f7d71fdf9b8e80f5ad6b7243",
"assets/packages/dpgames_flutter/assets/images/currency/PEN.png": "eb50b706871a7e2a906a1a7d7abdec21",
"assets/packages/dpgames_flutter/assets/images/currency/AED.png": "89b26c683e20a549976ee6994ee09909",
"assets/packages/dpgames_flutter/assets/images/currency/RMB.png": "5df265372028ec71e99e268e931ddf85",
"assets/packages/dpgames_flutter/assets/images/currency/SGD.png": "dbe654813bdd68465677d4cb67d7834f",
"assets/packages/dpgames_flutter/assets/images/currency/GBP.png": "1330a77decd8c25f763258f9c5161725",
"assets/packages/dpgames_flutter/assets/images/currency/BDT.png": "83cafb30d19a6205b0e9ff531484e088",
"assets/packages/dpgames_flutter/assets/images/currency/MYR.png": "294bf1101820c4eb20497354c3ef4dcd",
"assets/packages/dpgames_flutter/assets/images/currency/HKD.png": "15472b103f1abfea305a61a36474fa39",
"assets/packages/dpgames_flutter/assets/images/currency/USD.png": "62a172a2ad7b9230d62854e816c6603c",
"assets/packages/dpgames_flutter/assets/images/currency/RUB.png": "952c54e6c1cc76603a2b87e8c1369bd2",
"assets/packages/dpgames_flutter/assets/images/currency/USDT.png": "ee88a05eff9cd1c40ad3e2756cd79983",
"assets/packages/dpgames_flutter/assets/images/currency/BRL.png": "fd9ac09c154ea9c8cd23225281cf67be",
"assets/packages/dpgames_flutter/assets/images/currency/INR.png": "309dc155b70c50c0631bab35c9663363",
"assets/packages/dpgames_flutter/assets/images/currency/ZMW.png": "835604307484be94b431bb25acce9aed",
"assets/packages/dpgames_flutter/assets/images/currency/CNY.png": "5df265372028ec71e99e268e931ddf85",
"assets/packages/dpgames_flutter/assets/images/currency/AUD.png": "45296888ca1db2b7132f6434e504d6b9",
"assets/packages/dpgames_flutter/assets/images/currency/MOP.png": "20116ce65dc80845a81fe74f0ff63984",
"assets/packages/dpgames_flutter/assets/images/currency/MXN.png": "c0baad9fce585005996670a5e63c7189",
"assets/packages/dpgames_flutter/assets/images/currency/EUR.png": "a165088b5a75a12b74689c394daf64ea",
"assets/packages/dpgames_flutter/assets/images/currency/MMK.png": "8aafc03788f3e41f1dfe523582c3d3da",
"assets/packages/dpgames_flutter/assets/images/currency/ZAR.png": "285a22f899ad7a5486d016fbf28f6089",
"assets/packages/dpgames_flutter/assets/images/currency/TWD.png": "fc252ce53fae0d1c2ba20dc00480e6b6",
"assets/packages/dpgames_flutter/assets/images/currency/VND.png": "36747342776a8b89bdbe0c450ac99a18",
"assets/packages/dpgames_flutter/assets/images/currency/CAD.png": "200b19fdc9d289f79e8d252e8ab194a0",
"assets/packages/dpgames_flutter/assets/images/currency/IDR.png": "f76009287e29c27c168b65c6eedc7254",
"assets/packages/dpgames_flutter/assets/images/currency/TRY.png": "f854b3f7f49af385e5440ae5c8a17426",
"assets/packages/dpgames_flutter/assets/images/currency/THB.png": "1188abdc81f93ce7a9f14f7d1962eed0",
"assets/packages/dpgames_flutter/assets/images/currency/PHP.png": "4afec2c3822347a0f6576dbf81876789",
"assets/packages/dpgames_flutter/assets/images/currency/KES.png": "99b24defdf1387a5adab363140c0eae0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2a6bca6504039c32861a2fe5b30a39a8",
"assets/fonts/MaterialIcons-Regular.otf": "76f51c7a330631e5f04694dba6e42e75",
"assets/assets/images/home/mic_support.png": "49b4245eb79125cac40ed8501b0d697f",
"assets/assets/images/home/popular_bold.png": "c49f4b3a7f3434989c54f8da78bede02",
"assets/assets/images/home/lang.png": "0a35c57243f6b7e0450d36612ce50c9d",
"assets/assets/images/home/email.png": "a8667dfde397370180046c6c14cb560e",
"assets/assets/images/home/home_activity.png": "5a6bd618e9a436b426a3b8c8264201a6",
"assets/assets/images/home/phyiscal_bold.png": "87fb4c370790ed4e36d9f10887abbef8",
"assets/assets/images/home/tiancheng.png": "5afe661d5e4d8743b4db9a66dc79d5c3",
"assets/assets/images/home/live_chat_light.png": "e2f2d3f617825de8d9b657cf6c14ab5a",
"assets/assets/images/home/lottery.png": "8b40499b024f5f0f555f80dceb2cacc6",
"assets/assets/images/home/physical.png": "329b2f0a87597c3fbf6e814e81aaade2",
"assets/assets/images/home/hb_icon.png": "b5eb4d3b8f45eee5b6bf2f80f366908b",
"assets/assets/images/home/arrow-circle-left.png": "62f1cb1dc1fbb21589232099b7befdda",
"assets/assets/images/home/home_light.png": "61554e8ca5f3e6e37d75138376472a0d",
"assets/assets/images/home/gift_bold.png": "123c3297273a634cb1845b7730fc20cf",
"assets/assets/images/home/jili_slot.png": "d7c2ee2108f6aaa04d3aec8b4a1b215d",
"assets/assets/images/home/telegram.png": "62ec0638888327cdd1dc311131b0c743",
"assets/assets/images/home/betting_record_light.png": "7d47f144871b2f8ad87bd709fa85ee54",
"assets/assets/images/home/main_invite_light.png": "9eb7ec1e607736d3340a6153f0483f52",
"assets/assets/images/home/real_person_bold.png": "2c5b9cce80e843e555490e41f31f886f",
"assets/assets/images/home/mic_light.png": "376301b83434ef35a3cd6e4175c78c8f",
"assets/assets/images/home/transection_history_light.png": "3fb80f9011ef0fc711d2bd7d24f30f83",
"assets/assets/images/home/game.png": "a3549b16945d9f3fb395c3cea684900e",
"assets/assets/images/home/question_mark.png": "0934dcabc30a09e35d405f22096a5cdf",
"assets/assets/images/home/pp_slot.png": "5adf7cf0af70e1c819b2cc8b770e2c67",
"assets/assets/images/home/hourse_bold.png": "9f3f15990804be453287f4f1805bff5d",
"assets/assets/images/home/empty-wallet.png": "9596d10c7c6d871e61f9526873cfc44e",
"assets/assets/images/home/bag-2.png": "6536b84d91b165a2e0128e5ce1d22def",
"assets/assets/images/home/lottery_bold.png": "6f5a2bf1ab231548f521c55e3ca87654",
"assets/assets/images/home/live_chat.png": "aad346fdd5501c0b6393672b6011b65a",
"assets/assets/images/home/sponser_light.png": "70cbb5a3db828d6a3e83068e80db8f20",
"assets/assets/images/home/sponser.png": "e6fc0b7326569160f3cd29df22d12b47",
"assets/assets/images/home/main_invite_dark.png": "62e10679f153d851e0aca55c10d4507b",
"assets/assets/images/home/banner1.png": "9e6fb2cc697f678c40a9fb4f7223a139",
"assets/assets/images/home/home_bold.png": "90b8b290342bde61fed146a70e03a1cb",
"assets/assets/images/home/tf_sport_image.png": "c4f936ddb61a6f7223377881616f9258",
"assets/assets/images/home/wallet-money_light.png": "b16a6f22ce102f2312ee64e0635fd48a",
"assets/assets/images/home/hb_slot_image.png": "adcbdafe6f7b7129acf1c489d16b8511",
"assets/assets/images/home/home.png": "093daeea16a18c8a610ed37a33dd2ff2",
"assets/assets/images/home/person.png": "fe6e9d76c7eb2d70ae5b106d21ac4c6e",
"assets/assets/images/home/password-check.png": "d95169ccf8762ed6c82520ae99f7d88b",
"assets/assets/images/home/ronaldo.png": "c8ee61bc9428cbff2641dd452336a961",
"assets/assets/images/home/contact_mic.png": "c38c8e737d13a5c6d3fe3e69618dce1b",
"assets/assets/images/home/person_light.png": "e35e4760fdfd0e5ea6d8e3839a95f344",
"assets/assets/images/home/cup_bold.png": "b6bfef6fd149eee9f10b4b3bb046504d",
"assets/assets/images/home/hours_icon.png": "d483640cb2a91722d419448edca4873f",
"assets/assets/images/home/kayan_game.png": "26c9f8ec217bd3250fcda577c979f2eb",
"assets/assets/images/home/hourse.png": "f9c96b826ee90626a8a8d14ff4680ec4",
"assets/assets/images/home/mic_bold.png": "158b12149b950fcc4078facec965611d",
"assets/assets/images/home/setting_light.png": "502580cedf5bdcd878576555f6807a95",
"assets/assets/images/home/skype.png": "cf5ca471fd77d822addd51c6b2920962",
"assets/assets/images/home/mineiro.png": "72e3b781665b6f5655c1a08886042656",
"assets/assets/images/home/cup.png": "c483ffb1c05ddfe5618787d005a48451",
"assets/assets/images/home/live_chat_dark.png": "e7d4a4a9cb01d1ea6e8c9b8c1b228dc5",
"assets/assets/images/home/pp.png": "16d95d6bfbaab669e3fd37b066881a02",
"assets/assets/images/home/gift_light.png": "2e01228075edcaa61f4047ac71383782",
"assets/assets/images/home/cup_light.png": "f8fb983cee54c3b95a9aff68c49db3c3",
"assets/assets/images/home/gift.png": "b9c0615db64200c8ff43051da4040a2d",
"assets/assets/images/home/kayan_icon.png": "e40b3234158fdd3299e56eb311379d8c",
"assets/assets/images/home/promotion_clock.png": "13daa62352a67fd10817d6241434e0e8",
"assets/assets/images/home/jili.png": "fef86c8c0447ddf7510ce115c93274c5",
"assets/assets/images/home/clock.png": "a9ee329f5bd18b741e37fb7a09b7b0a4",
"assets/assets/images/home/hours_game.png": "33a03a5a5b6d30d92469212973e0b4b4",
"assets/assets/images/home/tf_sport_icon.png": "d92bf015f6ee49b727f9bf031ca6a878",
"assets/assets/images/home/super_game3.png": "443aa5c347decf6fc9b29f4a76cceef0",
"assets/assets/images/home/footbal.png": "c18d9a9aef4cedce5754b5d02739b2f2",
"assets/assets/images/home/real_person.png": "bdb02bea71c1a8498c1fc383ad4114e2",
"assets/assets/images/home/circle_logo.png": "b3cc126d587182aa6358f5518f32a606",
"assets/assets/images/home/lottery_tian.png": "b48ac294fe81d8a0d8d8bf3c9367da03",
"assets/assets/images/home/messages.png": "bd267c37bad9c517a7cd314a7d940ceb",
"assets/assets/images/home/live_game.png": "25f7a9c3f7ee7a1cc5712df83254bbb8",
"assets/assets/images/home/person_bold.png": "7e0291f5641625c357eaa191aad006d5",
"assets/assets/images/home/popular.png": "0d894a7fa343e986b90c8c7490ebf9bc",
"assets/assets/images/home/invite-poster%25201.png": "c72a7f0961117e6d863ecf5fc41bccad",
"assets/assets/images/home/email_profile.png": "40c5e9f276bdaa8e66471d4112f4f3ee",
"assets/assets/images/home/edit_pen.png": "26c4e5f8309140214a615b64c210e17a",
"assets/assets/images/home/mic.png": "7641eb23ecf5dd22f6ff22750b06bbf3",
"assets/assets/images/more_icon.png": "4cc980d0cbd303b1f78efb912c40485a",
"assets/assets/images/drawer/deposit.png": "e628662ef3af12aaa02a5507652f5772",
"assets/assets/images/drawer/secondary_password.png": "55772633e12ac0e1393bfe5662d9cd53",
"assets/assets/images/drawer/device_info.png": "0583e00f99e4dc2a33e7d5cb09417be5",
"assets/assets/images/drawer/refresh-circle.png": "7418124dee4a85a5a7e11532ca1bec76",
"assets/assets/images/drawer/withdraw.png": "935219a7c0cddb9b89e168dbcdc68033",
"assets/assets/images/drawer/moon.png": "551aaff4eaddb0e2c543b671222cbac7",
"assets/assets/images/drawer/personal_profile.png": "3747088b478eb22baaacae6554c6196c",
"assets/assets/images/drawer/eye.png": "8ef6a69a2a977ea1fa66e7155dc8254e",
"assets/assets/images/drawer/change_password.png": "006397e1fde453ce09f59a596a530348",
"assets/assets/images/drawer/vip.png": "35b3d5ee782675d169dc42ccbd4239ed",
"assets/assets/images/drawer/magicpen.png": "ad80fc655654e42c9f3433a1b97e3aeb",
"assets/assets/images/drawer/eye-slash.png": "42bf9af083bb73f9f7d8a1d329ce4a92",
"assets/assets/images/drawer/tranfer.png": "1e23bdf9c29e87056119f476f16f07db",
"assets/assets/images/drawer/drawer_bg.png": "8364d5ed2111ffba0b7c60d2bf8ba374",
"assets/assets/images/qr_code_overlay_light.png": "0fc8188aed565a75a5ea10bbb98c055e",
"assets/assets/images/invite_line.png": "ace67ad7e86da13b0ef9668e643b995a",
"assets/assets/images/vip/card.png": "46115529d8c35659dc34a6168e62dba2",
"assets/assets/images/vip/vip_coin.png": "b578dabe59bac4c388523bdb8cfb3b0e",
"assets/assets/images/vip/card_bg_dark.png": "c7f59aa30eaef737e3f1630fece0dc0c",
"assets/assets/images/vip/cake.png": "1ce4f30e0d4f7c173a353a93f445a27b",
"assets/assets/images/vip/suprem.png": "904493fa397d119fcacdb43f411440f1",
"assets/assets/images/vip/sms.png": "5142558a060848def7edb882ead525be",
"assets/assets/images/vip/card_bg_long_light.png": "8c4960ff62d5e3d4bb72015bdd88d77c",
"assets/assets/images/vip/vip10.png": "5d02b4f794cdb79ef82c469fb8bd0222",
"assets/assets/images/vip/vip10_bg.png": "58bb0adb0eef450ca6c2efc6c2375adc",
"assets/assets/images/vip/vip9.png": "e9ac44b622c37e7de3f78115a0030da9",
"assets/assets/images/vip/supremBG.png": "8db0bb94f47534a094ee246a6ae35130",
"assets/assets/images/vip/vip8.png": "c019e96a42dd777c0d0234cc985f350a",
"assets/assets/images/vip/export.png": "45726341c5ae23b1b011bca63beeb503",
"assets/assets/images/vip/card_bg_light.png": "954235b6e62b166ab966e40e42d7575f",
"assets/assets/images/vip/vip0.png": "88269ff4a40427a02d9e8ebf5e4dbc15",
"assets/assets/images/vip/vip1.png": "d4081b38dc448f310023e1a0c72223ad",
"assets/assets/images/vip/vip3.png": "cff577ede838da5a6279e83b799e92ce",
"assets/assets/images/vip/vip2.png": "a5cfa551f23e7b9d5e03652edce19ac1",
"assets/assets/images/vip/vip_level0.png": "58bd317c08e11094f2908c9d58d9327a",
"assets/assets/images/vip/vip6.png": "f715115b3c9688559637d0f5ffdf255a",
"assets/assets/images/vip/vip7.png": "72c18151fc8266c5cec1c32f89238acf",
"assets/assets/images/vip/vip5.png": "54a0419032dfa5f1f4ca6cbc83245b01",
"assets/assets/images/vip/vip4.png": "d26cdffc8edf97d92ed699bca696387f",
"assets/assets/images/vip/downgrad.png": "d5b32c8417b8f832c7d6b528dc28528c",
"assets/assets/images/vip/card_bg_long_dark.png": "0d78c33ff5f1ab867b13bd093cbeea3c",
"assets/assets/images/vip/minus-cirlce.png": "11d73ac002b3cf03c7862301985f201a",
"assets/assets/images/splash/splash_circle.png": "427cc93c04fa3932e467fa2600834e42",
"assets/assets/images/splash/splash_circle1.png": "7d8e9da35763d884a852e75f2d035e22",
"assets/assets/images/splash/splash1.png": "7457a0892b432182f227f5fcb98df4c6",
"assets/assets/images/splash/splash3.png": "67002233e7a8c03af054ee5743a763c0",
"assets/assets/images/splash/splash2.png": "43f67ca25e820c9f3526ef0c04837e7d",
"assets/assets/images/splash/mic.png": "110003039430036d95035cc14101c2d2",
"assets/assets/images/profile_img.png": "672144ac68b76ee98d11594023b9f28c",
"assets/assets/images/real_mad.png": "9b4fd7691f905ba165463c07b0aec07b",
"assets/assets/images/deposit/bitcoin.png": "be2c23c26d5005d1cce0c48002aed1ef",
"assets/assets/images/deposit/shield-tick.png": "f95b16616cf826733b72f4e33a41f571",
"assets/assets/images/deposit/copy-success.png": "06b4ebf4f331a6e5231c8c05c007b935",
"assets/assets/images/deposit/debit_card.png": "a132b20992c582d74b478ec7eea6b965",
"assets/assets/images/deposit/add-circle.png": "e89c7b2fd528c86d708ad5fd75a30c85",
"assets/assets/images/deposit/alipay.png": "5526667aad43f078e46d4b508efde199",
"assets/assets/images/deposit/bank_card.png": "e6cb19540c1235bc1457770d38d498a0",
"assets/assets/images/deposit/visacard.png": "8b58f5cad6c0b19ddabc4553c63c2b9c",
"assets/assets/images/deposit/wechat.png": "b2f458afeeedf164f791448310a1f329",
"assets/assets/images/deposit/tick-circle.png": "773814d175924321c95a8856a915a915",
"assets/assets/images/deposit/copy.png": "4ad4a89dc5d31ec62063240c3d2a5a50",
"assets/assets/images/deposit/info-circle.png": "9388df77397be959a7241165d0450374",
"assets/assets/images/arrow-right.png": "095e0d6fba448ff6f583c4a1d8eb5361",
"assets/assets/images/circle_email.png": "840d0fd221651e4e8a6ffca536c9a831",
"assets/assets/images/serie.png": "dba7cdc4f199a2dbf439091af5fae66e",
"assets/assets/images/bundseliga.png": "cf3e35086b3be8f8b08910fad99a4540",
"assets/assets/images/login_bg.webp": "8bc9af4bb0d10c5a7351eb1878ae8cb5",
"assets/assets/images/lottery_static.png": "486ea9175b2e6d50416b8b60fff7e0aa",
"assets/assets/images/activity/cake.png": "35721995cc82bd9f99c2498cd2a9f408",
"assets/assets/images/activity/coin_dollar.png": "576ca7cbaffe468b977f1fbdaee14bde",
"assets/assets/images/activity/dollar-circle.png": "cfe189438d927f5d53f9906a7123eed0",
"assets/assets/images/activity/card-add.png": "8f978aa0a2d657a300bfdf42891d3f59",
"assets/assets/images/activity/card-tick.png": "232152d65242d2b876acda0f13a05977",
"assets/assets/images/activity/personalcard.png": "e00fe41c419dd064ab24479b0a978612",
"assets/assets/images/activity/coin.png": "81aa008ae597248011aa015806e60d6a",
"assets/assets/images/faq/betting_tutorial.png": "7484586a2b0a7b03d14c971539fa09f4",
"assets/assets/images/faq/wifi-square.png": "88bae5f72179693c09293eee4c9eb497",
"assets/assets/images/faq/withdraw_down.png": "be2e0b38c61deb3a30271183d2a4f141",
"assets/assets/images/faq/mega.png": "1412c2bcf39d177ccae9517209b7a4ef",
"assets/assets/images/faq/sponsor_page_image.png": "c96f99089f905330d5e55c5f135a6a97",
"assets/assets/images/faq/lock.png": "4b34137c7aa860401b97c55ebd1fc245",
"assets/assets/images/faq/sponser_richer.png": "494b79ec18d4014499b9f28a0ae4d9fe",
"assets/assets/images/faq/cup6.png": "b0a1ecba7d56b16465c2f5e20e4270f8",
"assets/assets/images/faq/shield-tick.png": "624a169240c6b89b129efe7cb11abf1f",
"assets/assets/images/faq/cup5.png": "15d9c5f55ed5b9944f592dc7d09bcff9",
"assets/assets/images/faq/cup4.png": "8ca5139bb89140b473bcec244c78daf9",
"assets/assets/images/faq/cup1.png": "c4ac0bb8bd7dd9bf73c798205d59a956",
"assets/assets/images/faq/cup3.png": "51bb2d59650084838a934ddfd6e71c31",
"assets/assets/images/faq/like.png": "852e1fe8e40740e88e5887f6611b5114",
"assets/assets/images/faq/cup2.png": "3f76f8663a9ac801c8f92e488b4cd980",
"assets/assets/images/faq/refresh-2.png": "fd063b5c715609bcbfe26c2b3eb03a4f",
"assets/assets/images/faq/sponser_img.png": "f8db4663f8b78cbd8b7dcec21804ad4d",
"assets/assets/images/faq/sponser_winlok.png": "224517d56d7f8f1debfe8732757a84b0",
"assets/assets/images/faq/lamp-charge.png": "de518af71c7c7cc399e728516398cfb4",
"assets/assets/images/faq/btc.png": "ef654fe961f101d0f1b3302e23cf312b",
"assets/assets/images/faq/withdraw_up.png": "f014cfbafe1627c0619377916d2439f1",
"assets/assets/images/faq/game_tutorial.png": "0961c42cd43022329431eb96c5a6455f",
"assets/assets/images/app_logo2.png": "8ef693f2bf5e554fa4c82074680ae974",
"assets/assets/images/app_icon2.png": "4ec8165943b8fcc0f26b0331b19ab13b",
"assets/assets/images/bank_logo.png": "1d779cf5ce257eb4c897627715541e56",
"assets/assets/images/app_icon1.png": "6a40846ef31f55c36b895b73b7b4bbc3",
"assets/assets/images/philippin.png": "fd92fac165ed9e555725b327408871f4",
"assets/assets/images/loading.gif": "c24c9822c16d5916dd2fe715d378904b",
"assets/assets/images/malaysia.png": "05d82ab0118252d354fb093a5849c937",
"assets/assets/images/clipboard-close.png": "d29b2bfd33380239805a5994d8bc82de",
"assets/assets/images/login_start1.png": "f6bee2d25ff5938a321068a8e06aa458",
"assets/assets/images/british.png": "8ff09e59f1f6ca5ef3ffd880a71fbf58",
"assets/assets/images/profile/maintinance_setting.png": "086757b4329bca607ad524cdb2ce4ed2",
"assets/assets/images/profile/rotate-left.png": "4e568743388f7f8a466aff252ac9eee6",
"assets/assets/images/profile/recruitment-page-image.png": "8fcd6c32408d908ac54c69718d02b7e3",
"assets/assets/images/profile/recruitment.png": "3283b9d2f3609dab0059f8232043d01f",
"assets/assets/images/profile/setting.svg": "840eea16726f44247a8331107e020710",
"assets/assets/images/profile/setting-2.png": "858f26b41ec78dc9b21a03a42d09a5a2",
"assets/assets/images/profile/betting_record.svg": "efeed4ad0975268269b3cb9bec58979f",
"assets/assets/images/profile/wallet-money.png": "b8a4db58f0d4cbaf0f012ca0f0c08e00",
"assets/assets/images/profile/invite_icon.svg": "aa4c43c4e760817d10c0ea0edb7b4adc",
"assets/assets/images/profile/transection_history.png": "5a7e30e302a951058f65a54088d858a7",
"assets/assets/images/profile/transection_history.svg": "bfea317e46a21358501d1838139d44a7",
"assets/assets/images/profile/youtak.png": "b9691e9f932cfe82cee98f88f2f0fc06",
"assets/assets/images/profile/stars.png": "df277665a23d7df3e0b455161ee1105b",
"assets/assets/images/profile/wallet-money.svg": "0561a290d9e46e6265dfdf9fa90e0ac7",
"assets/assets/images/profile/betting_record.png": "464f4ac044b447eee0d42964f0f34f32",
"assets/assets/images/profile/setting.png": "3437592fd1badbe73f428f2fc5d4a7a1",
"assets/assets/images/profile/recruitment.svg": "210a3a765ed2d395267f3750eeb1b2be",
"assets/assets/images/profile/info-circle.png": "545546caf454ebb6f6b11dc9e45e7524",
"assets/assets/images/profile/mic.png": "abdccc74eafdaa6f10518a4c3b5c6c5e",
"assets/assets/images/splash2.png": "9bb8af299567ae61e935ea85eaa3211a",
"assets/assets/images/app_logo.png": "00f4d0ff6608e9e67c9fa923866a952a",
"assets/assets/images/withdraw/emoji_unhappy_light.png": "90085e32fecbad56841651f8bd702159",
"assets/assets/images/withdraw/emoji_happy_dark.png": "2c67365cd6d0e3cb86661a92c7a72ae6",
"assets/assets/images/withdraw/emoji-happy.png": "da9eba25a0af1d67ac022fb369a62432",
"assets/assets/images/withdraw/flag.png": "8a3f5e09b678fe63f908235ee07e6dd2",
"assets/assets/images/withdraw/apply_withdraw.png": "0d195fd0c11ced6066469ddafae5d92d",
"assets/assets/images/withdraw/withdraw_field.png": "80d2cfeb6bfdecaa4d63961588a374cf",
"assets/assets/images/withdraw/close-circle.png": "3d40ba18db8256763c4cfb0f5213cc99",
"assets/assets/images/withdraw/progress4.png": "9bc1430ac85ab67a6a3076c55e5081fb",
"assets/assets/images/withdraw/progress3.png": "4a1bcabcf1ea8a474ece072ddb425d2f",
"assets/assets/images/withdraw/progress2.png": "da05162d071ef08bf883cd189b666ba2",
"assets/assets/images/withdraw/emoji_happy_ligh.png": "8c745d8719cda6636e63c94f0654d16a",
"assets/assets/images/withdraw/progress1.png": "874a1e976d415af4f45fd108a0da5321",
"assets/assets/images/withdraw/receipt-item.png": "d91dfd437afa56eefd5df9c122dab67c",
"assets/assets/images/withdraw/card-remove.png": "e084cf8a1d07b95e272113c30aace27e",
"assets/assets/images/withdraw/emoji_unhappy_dark.png": "abbea962d116969af25f9460c364e238",
"assets/assets/images/withdraw/cloud-add.png": "f798bead76d1ff15f4801cca267a7e27",
"assets/assets/images/withdraw/progress_empty.png": "bb0b2b696761cd9b1038e8516e06032e",
"assets/assets/images/qr_code_overlay.png": "f2e55158e2d9dc73282a4aade161a042",
"assets/assets/images/send.png": "82ff08be0ea9248e650c97cdafc950f2",
"assets/assets/images/no_internet.png": "ef95839c78d98df35aa580fbd1348808",
"assets/assets/images/loading.png": "0132038f92a10fe0bf1858053557c044",
"assets/assets/images/game_tutorial.png": "3d74ac0a128aa948010ab6a915e74507",
"assets/assets/images/customer_mask.png": "e81696f9c44d913fe0d7f244237af344",
"assets/assets/images/bg.png": "e15e9e2bfff2cc3c807e955a8358b61f",
"assets/assets/images/dialog_blure.png": "6ef98c73383624e77104340cff931a90",
"assets/assets/icons/promotion_step5.png": "78be3262236423d6d026d4dd467b7e80",
"assets/assets/icons/CN.png": "b1f914da8f801ac350e2447e383f2e4e",
"assets/assets/icons/promotion_game.png": "f3e0347de34b43f932421d5b99ace39b",
"assets/assets/icons/cantones.png": "ca6076a7a506c0b7c423bfe8dd62ba1f",
"assets/assets/icons/calender_bold.png": "b64d4cfa3133fb5ae3a9b684e01f9868",
"assets/assets/icons/message_read.png": "50671ee22fc753bbe6ca0078eea1389f",
"assets/assets/icons/promotion_game_light.png": "5889e893851caab4b9fa5c2856b80cc0",
"assets/assets/icons/promotion_step4.png": "308feb110180335d8d27b0336a0f2ad6",
"assets/assets/icons/search-normal.png": "07c534dc6a4f217a07107caf08d72927",
"assets/assets/icons/promotion_step6.png": "1799689c8e69163726ee258c0359c0ae",
"assets/assets/icons/emoji-happy.png": "219c57da203cfc35e931fd21d416756c",
"assets/assets/icons/telegram.png": "3621abdffd13bdaac49fa861111b2d44",
"assets/assets/icons/paperclip-2.png": "363f54950808c100f841a484ffb3be06",
"assets/assets/icons/customer_service_icon.png": "ed8765ebfc678bcd44612bef5e791328",
"assets/assets/icons/profile-add.png": "6a278cf180a863871922e6c3cfd3cb81",
"assets/assets/icons/promotion_step3.png": "11fca413afb6ce11fcf1a8a7eb66f3ef",
"assets/assets/icons/abbout_Mask_dark.png": "9d90f9c66c2887624706a4efa7300092",
"assets/assets/icons/invite_group.png": "95e2d1aecbcf067782b95a507de445af",
"assets/assets/icons/promotion_step2.png": "0f005f60eb7b848524f150d5b1d32c68",
"assets/assets/icons/receive-square.png": "5f648147e84699109fb107811f68e7bc",
"assets/assets/icons/emoji_unhappy.png": "70d1a7540817b30f1ce5eb713bab90c5",
"assets/assets/icons/link.png": "aa50720441581129620a5efce60be2c7",
"assets/assets/icons/invite_V_icon.png": "ec53115d90084b14fd5594595d214a06",
"assets/assets/icons/promotion_step1.png": "bd3916e5883d1836a74bd09174c296af",
"assets/assets/icons/profile-2user.png": "4eb8465705330a512898065b56275d1e",
"assets/assets/icons/profile-2userBold.png": "956cb877a414bcb0c01add4d99063728",
"assets/assets/icons/cn_icon.png": "53298bcfb535e21a20fb262887685666",
"assets/assets/icons/calendar-add.png": "036c1bb7f016450bc88d8fb234d4a7f3",
"assets/assets/icons/en.png": "9a106639fc7697c1ff522e5a6d7ce905",
"assets/assets/icons/faded_arrow_forward.png": "7c7654d455d4575348fdea8ae6046467",
"assets/assets/icons/inactive_square.png": "8c0002f6ab0d31aff06ff5397264f13d",
"assets/assets/icons/hide_password.png": "55e4efb422d54f327bf13ea69810446e",
"assets/assets/icons/visit_profile_icon.png": "783f9478a486d19bd07beeba588fb353",
"assets/assets/icons/binance.png": "db1659069d5d0cf5a55672ade571048b",
"assets/assets/icons/clipboard-tick.png": "b7095efc515a2c010020b75f8be71afb",
"assets/assets/icons/fast_transection.png": "6b2274602a5812c771889cff070d6cab",
"assets/assets/icons/promotion_step5_light.png": "3f6346840a69fe32c97896fc35a6b682",
"assets/assets/icons/selected_tab_light.png": "cc0727e8a64287c2fa196ae93d07e1b9",
"assets/assets/icons/safety.png": "8b0ebf3d2e58320356fc265c10d46745",
"assets/assets/icons/menu_refresh.png": "767abfb0d826060c645d4c5abe9fce34",
"assets/assets/icons/abbout_Mask.png": "722d9b7c411a21cb8147a3ebbfea6307",
"assets/assets/icons/invite_rebate.png": "d4d7edaf453317ad51f12630798e9b11",
"assets/assets/icons/huobi.png": "843c8807787795956dc01044ad309593",
"assets/assets/icons/telegram-recruitment.png": "f61f651026be676004d2611570beaa3e",
"assets/assets/icons/whatsapp-recruitment.png": "bc1deb97f70faf029a5f8a41a6372d0e",
"assets/assets/icons/englind.png": "eaee7cfb42b159aff9cb19dfe43f1357",
"assets/assets/icons/home_money_icon.png": "d581932055b3fd146ec80f96228290ae",
"assets/assets/icons/apple.png": "ba64e931263ed00dfb433fcbf9270b65",
"assets/assets/icons/visible_password.png": "da38cf8b69aabcf51d64c626d28d0f92",
"assets/assets/icons/layer.png": "b874bf5f44a5fb542998297970e35989",
"assets/assets/icons/money-recive.png": "2113f42832818653cc06232f396f2511",
"assets/assets/icons/lock-circle1.png": "bbd8a3c0086d6153005b839747499dd1",
"assets/assets/icons/menu.png": "8c51e8f778e79f5bd8316c7769e1e394",
"assets/assets/icons/traditional.png": "59edc267e56a417aecb0d703302c00ef",
"assets/assets/icons/lock-circle.png": "f3750de5a5676ba203bb53b04cba72e9",
"assets/assets/icons/personalize.png": "312b35676fb9499419fd231dbb296135",
"assets/assets/icons/arrow_forward.png": "c0dbbdee57cb1b80dc04cd218731b6a9",
"assets/assets/icons/profile-circle.png": "e62a90795fc2586a38b2f1d0840ace14",
"assets/assets/icons/Mask%2520group-1%2520(2).png": "cc0727e8a64287c2fa196ae93d07e1b9",
"assets/assets/icons/enabled_text_field.png": "6140d90c91c901ab7b99847f760d8f45",
"assets/assets/icons/twitter.png": "02f8f4c6fd6b239c547ea38943f73bcf",
"assets/assets/icons/arrow-square-down.png": "356bbebe63503647787c6e213b556581",
"assets/assets/icons/gift.png": "5b30005351fe0846d8b73ec32385af53",
"assets/assets/icons/share.png": "167c56815ec7193dc869ae05ede6f9a1",
"assets/assets/icons/profile-tick.png": "52865db5ad3c013e8c023217d9d322c7",
"assets/assets/icons/invite_wind.png": "3904a5d100a49aea60cb622c073ddb1a",
"assets/assets/icons/strong_encrip.png": "9160be30ee14491bace8a64d7f35003b",
"assets/assets/icons/chines_currency.png": "78e86d7835823b45fe0f8223908e66a4",
"assets/assets/icons/promotion_plateform1.png": "b12159d9422bc5b3d5666e980e67ada8",
"assets/assets/icons/volume-high.png": "621cad56a6e638b97f3824cd8e7cb427",
"assets/assets/icons/danger.png": "3daa51df4c05ef165dff4f64fca9c031",
"assets/assets/icons/menu_full.png": "f2809bb8ff01e3a655a9e379081150d3",
"assets/assets/icons/telephone.png": "3610d582ea8ba5d92f68b813c0c014d3",
"assets/assets/icons/record-circle.png": "9e1c72a0b1a80bdb476cc5364fa93cbf",
"assets/assets/icons/promotion_plateform2.png": "b391464090dc50b55df32365fb59d163",
"assets/assets/icons/promotion_plateform3.png": "821a983bed66b5db433250434be5f793",
"assets/assets/icons/invite_icon.png": "94fe710209c4299c3313888d04c85690",
"assets/assets/icons/bag_cross.png": "c64998c29c0ce6c6437b66e79586be77",
"assets/assets/icons/whatsapp.png": "5297e99c4bd5cbd31e35fdc86a8b17d7",
"assets/assets/icons/google.png": "732d5493ffaa0736388f8f9d7418cb01",
"assets/assets/icons/facebook.png": "ce1f1c51b4e62f0cc6c5b300a56f6193",
"assets/assets/icons/j_icon.png": "e9f7b4fe14694eae0f31dc1d26bc4baa",
"assets/assets/icons/invite_barcode.png": "43994858dcd55dce3a288db2e15dbb86",
"assets/assets/icons/chat.png": "878d13c38f3868ac31f17fbf4c338bc8",
"assets/assets/icons/close_icon.png": "dff4737c590ddb34dc4c1810f69c2b76",
"assets/assets/icons/high_quality_user.png": "a0de37f7967902cb11bb089f24c53ae7",
"assets/assets/icons/sos.png": "f11e2f1b2c631121b6a37716c66b0db9",
"assets/assets/icons/promotion_plateform4.png": "dceff9ad1b3e9b8f8a4e204f32c5937c",
"assets/assets/icons/selected_tab_dark.png": "f91b5ad2f0bfefae76c03dac769bfa69",
"assets/assets/icons/mx_play.png": "7703a272adc24f3683981aecdce4f72d",
"assets/assets/icons/close.png": "3e72868fe28cbf4d9bf999c8cee689cb",
"assets/assets/fonts/chinese.msyh.ttf": "12916d9b61a4f1381ddb11ec0b53f8a6",
"assets/assets/fonts/Inter-VariableFont.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
