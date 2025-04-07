export interface Product {
    id: number;
    name: string;
    productLink: string;
    imageUrl: string;
    primarySource: string;
    secondarySources: string[];
  }
  
  export const products: Product[] = [
    {
      id: 2,
      name: 'FlexBeam Portable Red Light Therapy Device',
      productLink: 'https://recharge.health/product/flexbeam/',
      imageUrl: 'https://recharge.health/wp-content/uploads/2023/11/PRODUCT-SHOT_HSAFSA_CG_V2-1-600x600.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/Home',
      secondarySources: [
        'https://www.instagram.com/p/CqvOersLZlH/?utm_source=ig_embed',
        'https://mynucleus.com/blog/bryan-johnson-red-light-therapy'
      ]
    },
    {
      id: 3,
      name: 'Pulsetto Vagus Nerve Stimulation Device',
      productLink: 'https://pulsetto.tech/',
      imageUrl: 'https://pulsetto.tech/cdn/shop/files/Group_68283_690x517_crop_center.png?v=1737021715',
      primarySource: 'https://x.com/bryan_johnson/status/1878858543371272204',
      secondarySources: [
        'https://protocol.bryanjohnson.com/#blueprint-starter-guide',
        'https://www.reddit.com/r/blueprint_/comments/13r975v/what_device_is_this/'
      ]
    },
    {
      id: 4,
      name: 'Roots by GA Hair Loss Genetic Test & Personalized Topical',
      productLink: 'https://www.rootsbyga.com/product/personalised-topical-hair-growth-solution',
      imageUrl: 'https://www.rootsbyga.com/wp-content/uploads/2024/10/topical_container-6-min.png',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=229',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1848809355887743470',
        'https://youtu.be/qdLFcEHT-Q4?t=3701'
      ]
    },
    {
      id: 5,
      name: 'Carex 10,000 LUX Light Therapy Lamp',
      productLink: 'https://amzn.to/43jXCLE',
      imageUrl: 'https://m.media-amazon.com/images/I/61AgzRSoy9L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=147',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1824078102731137409',
        'https://blueprint.bryanjohnson.com/blogs/news/why-i-avoid-the-sun',
        'https://youtu.be/n4_IT7HIPnI?t=905'
      ]
    },
    {
      id: 6,
      name: 'FoodMarble Digestive Breath Tester',
      productLink: 'https://foodmarble.com/',
      imageUrl: 'https://foodmarble.com/src/images/products/FODMAP_Kit.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/Blueprint-Starter-Guide',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1617914502309351425'
      ]
    },
    {
      id: 7,
      name: 'Jinfiniti Intracellular NAD Test',
      productLink: 'https://www.jinfiniti.com/product/intracellular-nad-test/',
      imageUrl: 'https://www.jinfiniti.com/wp-content/themes/yootheme/cache/35/intracellular-slide-1-353b438d.jpeg',
      primarySource: 'https://x.com/bryan_johnson/status/1775309553649012856',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1651290523087544320'
      ]
    },
    {
      id: 8,
      name: 'TRU NIAGEN Nicotinamide Riboside',
      productLink: 'https://amzn.to/4gSmhdy',
      imageUrl: 'https://m.media-amazon.com/images/I/710Tea+c4mL._AC_SY300_SX300_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1651290523087544320',
      secondarySources: []
    },
    {
      id: 9,
      name: 'TruAge Biological Age Test',
      productLink: 'https://shop.trudiagnostic.com/products/truage-complete-epigenetic-collection',
      imageUrl: 'https://shop.trudiagnostic.com/cdn/shop/files/TruageTest.jpg?v=1730725739&width=1080',
      primarySource: 'https://x.com/bryan_johnson/status/1784707363255263456',
      secondarySources: [
        'https://www.rejuvenationolympics.com/',
        'https://www.bloomberg.com/news/features/2023-01-25/anti-aging-techniques-taken-to-extreme-by-bryan-johnson'
      ]
    },
    {
      id: 10,
      name: 'Eight Sleep Mattress',
      productLink: 'https://www.eightsleep.com/product/pod-cover/',
      imageUrl: 'https://eightsleep.imgix.net/risk-free-boxing-day.jpg?auto=format,compress&h=1000&dpr=1',
      primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1788346338087743701',
        'https://x.com/bryan_johnson/status/1824078105155420508',
        'https://youtu.be/n4_IT7HIPnI?t=646'
      ]
    },
    {
      id: 11,
      name: 'Nurosym Vagal Neuromodulation System',
      productLink: 'https://nurosym.com/products/nurosym',
      imageUrl: 'https://nurosym.com/cdn/shop/files/en-01.png?v=1724246800&width=1946',
      primarySource: 'https://x.com/bryan_johnson/status/1878858543371272204',
      secondarySources: [
        'https://youtu.be/Al-CG7ULYtk?t=567',
        'https://x.com/bryan_johnson/status/1778493590387503315'
      ]
    },
    {
      id: 12,
      name: 'Sensate Infrasonic Sensory Device',
      productLink: 'https://getsensate.com/',
      imageUrl: 'https://getsensate.com/cdn/shop/files/sensate_2_device_1200x.jpg',
      primarySource: 'https://youtu.be/Al-CG7ULYtk?t=567',
      secondarySources: []
    },
    {
      id: 13,
      name: 'GR-7 Grey Hair Treatment',
      productLink: 'https://gr-7.uk/',
      imageUrl: 'https://gr-7.uk/wp-content/uploads/2024/01/gr7-product-spring-2024.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-new-morning-routine',
      secondarySources: []
    },
    {
      id: 14,
      name: 'Plant Therapy Organic Tea Tree Oil',
      productLink: 'https://amzn.to/4kqWhXX',
      imageUrl: 'https://m.media-amazon.com/images/I/71uYKTRIL-L._AC_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/floral-health',
      secondarySources: []
    },
    {
      id: 15,
      name: 'EltaMD UV Clear Face Sunscreen',
      productLink: 'https://amzn.to/46l5nGW',
      imageUrl: 'https://m.media-amazon.com/images/I/61KzMRcnc-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/does-your-skin-make-you-look-older',
      secondarySources: []
    },
    {
      id: 16,
      name: 'Vanicream Daily Facial Moisturizer',
      productLink: 'https://amzn.to/3QVg9tD',
      imageUrl: 'https://m.media-amazon.com/images/I/71KzMRcnc-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/does-your-skin-make-you-look-older',
      secondarySources: []
    },
    {
      id: 17,
      name: 'Vanicream Moisturizing Skin Cream (Body)',
      productLink: 'https://amzn.to/3EUNs2F',
      imageUrl: 'https://m.media-amazon.com/images/I/71KzZg4XJ-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/does-your-skin-make-you-look-older',
      secondarySources: []
    },
    {
      id: 18,
      name: 'Vanicream Gentle Facial Cleanser',
      productLink: 'https://amzn.to/3XxkCYX',
      imageUrl: 'https://m.media-amazon.com/images/I/61GGkTpqKL._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/does-your-skin-make-you-look-older',
      secondarySources: []
    },
    {
      id: 19,
      name: 'Herbtonics Plant Melatonin',
      productLink: 'https://symphonynaturalhealth.com/products/herbatonic-0-3mg',
      imageUrl: 'https://symphonynaturalhealth.com/cdn/shop/files/SNLH_ERB02_Website_box.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1825642760827278',
      secondarySources: []
    },
    {
      id: 20,
      name: 'Proferrin Clear Heme Iron Polypeptide',
      productLink: 'https://amzn.to/41Nh0Ga',
      imageUrl: 'https://m.media-amazon.com/images/I/615GJSh2Ib-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: [
        'https://protocol.bryanjohnson.com/supp-step-2-supplements',
        'https://mypost.com/2024/01/04/health/bryan-johnson-the-supplements-he-shares-with-son/'
      ]
    },
    {
      id: 21,
      name: 'Tesseract ProButyrate',
      productLink: 'https://amzn.to/43pF5Qv',
      imageUrl: 'https://m.media-amazon.com/images/I/71Q4R57bxL._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 22,
      name: 'Kyolic Aged Garlic Extract',
      productLink: 'https://amzn.to/49yy7V',
      imageUrl: 'https://m.media-amazon.com/images/I/71MQy4GtB-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 23,
      name: 'NOW Foods Inulin',
      productLink: 'https://amzn.to/43oasHE',
      imageUrl: 'https://m.media-amazon.com/images/I/71nDJIo7ILL._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 24,
      name: 'NOW Foods Sunflower Lecithin',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71nDJIo7ILL._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 25,
      name: 'House of Macadamias Macadamia Nuts',
      productLink: 'https://www.houseofmacadamias.com/collections/macadamia-nuts/products/raw-macadamia-nuts?variant=40474858471583',
      imageUrl: 'https://www.houseofmacadamias.com/cdn/shop/products/raw-macadamia-nuts-1kg.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 26,
      name: 'Macadamia Macadamia Milk',
      productLink: 'https://amzn.to/3DaEkOm',
      imageUrl: 'https://m.media-amazon.com/images/I/71YkXM6ZX-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 27,
      name: 'Almond Malk',
      productLink: 'https://amzn.to/3Qw6w1g',
      imageUrl: 'https://m.media-amazon.com/images/I/71TekKnCw-L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=1104',
      secondarySources: []
    },
    {
      id: 28,
      name: 'Timeless Black Beluga Lentils',
      productLink: 'https://amzn.to/439V02X',
      imageUrl: 'https://m.media-amazon.com/images/I/61XZQpnSV-L._AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 29,
      name: 'Nu-Salt Salt Substitute',
      productLink: 'https://amzn.to/41e5WV2',
      imageUrl: 'https://m.media-amazon.com/images/I/71ZerCmkS-L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/bwM5G4M4qmg?t=144',
      secondarySources: []
    },
    {
      id: 30,
      name: 'Designs for Health Whole Body Collagen',
      productLink: 'https://amzn.to/41duKT',
      imageUrl: 'https://m.media-amazon.com/images/I/71ZerCmkS-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 31,
      name: 'Vital Proteins Collagen Peptides',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71nDJIo7ILL._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 32,
      name: 'Designs for Health PurePaleo Protein',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71KH8BtP-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 33,
      name: 'Thorne Creatine',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/61XZQpnSV-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 34,
      name: 'Thorne L-Glutamine',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71YkXM6ZX-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 35,
      name: 'Thorne Amino Complex',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71TekKnCw-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 36,
      name: 'Thorne Betaine HCl & Pepsin',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/61XZQpnSV-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 37,
      name: 'Thorne Bio-Gest',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71ZerCmkS-L._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 38,
      name: 'Thorne Calcium-Magnesium Malate',
      productLink: 'https://amzn.to/3ETZ11z',
      imageUrl: 'https://m.media-amazon.com/images/I/71Q4R57bxL._AC_SX679_.jpg',
      primarySource: 'https://bryanpinkshop.korni.io/',
      secondarySources: []
    },
    {
      id: 39,
      name: 'AISIPRIN Glass Jars with Airtight Lid',
      productLink: 'https://amzn.to/4fbzps6',
      imageUrl: 'https://m.media-amazon.com/images/I/815GhBNxL_AC_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/Blueprint-starter-guide',
      secondarySources: []
    },
    {
      id: 40,
      name: 'Nutehouse Airtight Glass Storage Jars',
      productLink: 'https://amzn.to/46jAAJH',
      imageUrl: 'https://m.media-amazon.com/images/I/61fmQK8JJP_AC_SX300_QL70_FMwebp.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/Blueprint-starter-guide',
      secondarySources: []
    },
    {
      id: 41,
      name: 'HOMEFAVOR Stainless Steel Food Container',
      productLink: 'https://amzn.to/4bmwEof',
      imageUrl: 'https://m.media-amazon.com/images/I/61MLwWIVX_AC_SX679_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1880671414488008',
      secondarySources: []
    },
    {
      id: 42,
      name: 'Braun Thermoscan',
      productLink: 'https://amzn.to/3DGmYz',
      imageUrl: 'https://m.media-amazon.com/images/I/61ZRqyYp2_AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/measure-to-optimize-it-all',
      secondarySources: ['https://youtu.be/djiU_pFTEVE?t=180']
    },
    {
      id: 43,
      name: 'AdamHealth Erection Health Tracker',
      productLink: 'https://talkloadam.com/adam-sensor/',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e17eed60b47e8b9401f36b0/ce-0b89-4c17-88b0-4c9847fb3843/Mares.png',
      primarySource: 'https://youtu.be/beXZrpJtmXZ8Tt=66',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1843695974734782',
        'https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol'
      ]
    },
    {
      id: 44,
      name: 'Dr Tung Floss',
      productLink: 'https://amzn.to/4gTgc2f',
      imageUrl: 'https://m.media-amazon.com/images/I/71HMDKJk_SX679_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1824078102731137409',
      secondarySources: []
    },
    {
      id: 45,
      name: 'Waterpik Cordless Advanced Flosser',
      productLink: 'https://amzn.to/4bbg7tr',
      imageUrl: 'https://m.media-amazon.com/images/I/71GmILZIkk_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol',
      secondarySources: ['https://youtu.be/XQrUJ9nmw?t=97']
    },
    {
      id: 38,
      name: 'SomniDent Avant Bruxism Device',
      productLink: 'https://somnomed.com/en/patients/products/somnodent-avant/',
      imageUrl: 'https://somnomed.com/wp-content/uploads/sites/23/2018/image-for-website-13.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol',
      secondarySources: [
        'https://youtu.be/beXQrUJ9nmw?t=238',
        'https://x.com/bryan_johnson/status/1825963746026984519'
      ]
    },
    {
      id: 39,
      name: 'TheraBreath Oral Rinse with Xylitol',
      productLink: 'https://amzn.to/41nfbpE',
      imageUrl: 'https://m.media-amazon.com/images/I/41T7TyVb6b_SX679_.jpg',
      primarySource: 'https://youtu.be/beXQrUJ9nmw?t=218',
      secondarySources: []
    },
    {
      id: 40,
      name: 'Cerave Resurfacing Retinol Serum',
      productLink: 'https://amzn.to/3C1h3sE',
      imageUrl: 'https://m.media-amazon.com/images/I/71zxPJgU7F_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 41,
      name: 'Japanese Washcloth',
      productLink: 'https://amzn.to/43zmrR5',
      imageUrl: 'https://m.media-amazon.com/images/I/61VXbsM4c_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 42,
      name: 'KeraFactor Skincare for Hair with Kerisse Scalp Stimulant',
      productLink: 'https://mykerafactor.com/pages/new-kerafactor-procedure',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0244/9576/2013/files/KF-Procedure-2.jpg?v=1666637130',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: ['https://youtu.be/Al-CG7ULYtk?t=216']
    },
    {
      id: 43,
      name: 'VELIMAX Bedroom Blackout Film',
      productLink: 'https://amzn.to/3Qhgzyz',
      imageUrl: 'https://m.media-amazon.com/images/I/719mmMkk_AC_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: []
    },
    {
      id: 44,
      name: 'Levels Blood Glucose Measurement',
      productLink: 'https://www.levels.com/',
      imageUrl: 'https://levelshealth.com/static/landing-page/device.png?scale-down-to=1024',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: []
    },
    {
      id: 45,
      name: 'FANGSUN Pill Tins',
      productLink: 'https://amzn.to/48sbOy',
      imageUrl: 'https://m.media-amazon.com/images/I/81bcowwbQ_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: []
    },
    {
      id: 46,
      name: 'Grounding Bed Sheets',
      productLink: 'https://amzn.to/3Qk2bop',
      imageUrl: 'https://m.media-amazon.com/images/I/513mdQwdlt_AC_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: ['https://youtu.be/n4_IT7HIPnI?t=649']
    },
    {
      id: 47,
      name: 'ZAMAT Contour Memory Foam Pillow',
      productLink: 'https://amzn.to/48V5esQ',
      imageUrl: 'https://m.media-amazon.com/images/I/71TweKnZP3_AC_SX300_QL70_FMwebp.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: ['https://youtu.be/tzZYesMTLu47?t=122']
    },
    {
      id: 48,
      name: 'Logies Grip Strength Trainer',
      productLink: 'https://amzn.to/41y9fw3',
      imageUrl: 'https://m.media-amazon.com/images/I/81WnX5D7_AC_SX679_.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/',
      secondarySources: []
    },
    {
      id: 49,
      name: 'WHOOP Fitness and Sleep Tracker',
      productLink: 'https://amzn.to/3EWDhwZ',
      imageUrl: 'https://m.media-amazon.com/images/I/71H4wvbpg_AC_SX679_.jpg',
      primarySource: 'https://youtu.be/beWddpJnMYdk?t=549',
      secondarySources: []
    },
    {
      id: 50,
      name: 'WHOOP Blue Light Blocking Glasses',
      productLink: 'https://shop.whoop.com/en-us/products/blue-light-blocking-glasses/?sku=520-000006-252',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0704/0515/2/products/WHOOP-Product-View-1.png',
      primarySource: 'https://youtu.be/beWddpJnMYdk?t=297',
      secondarySources: []
    },
    {
      id: 51,
      name: 'Mila Air Purifier',
      productLink: 'https://milacares.com/eu',
      imageUrl: 'https://milacares.com/cdn/shop/products/mila-eu-1.webp?v=1671064348b0a',
      primarySource: 'https://x.com/bryan_johnson/status/1725500951805181814',
      secondarySources: ['https://youtu.be/n4_IT7HIPnI?t=526']
    },
    {
      id: 52,
      name: 'Honeywell Air Touch v1 Air Purifier',
      productLink: 'https://honeywellconnection.com/in/product/air-touch-v1/',
      imageUrl: 'https://honeywellconnection.com/cdn/shop/files/2024/03/08/GSCTWVAV_MAIN.jpg',
      primarySource: 'https://youtu.be/beXbZ7cZVmk?t=232',
      secondarySources: ['https://x.com/bryan_johnson/status/1868602139840354136']
    },
    {
      id: 53,
      name: 'IQAir AirVisual Indoor Air Quality Monitor',
      productLink: 'https://www.iqair.com/products/air-quality-monitors/airvisual-pro/indoor-monitor',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0101/0252/7800/files/AVP_Home_Purple_1540x1.jpg?v=1701762433',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=452',
      secondarySources: ['https://youtu.be/beUzFe63MagTt=312']
    },
    {
      id: 54,
      name: 'Moonbird Handheld Breathing Coach',
      productLink: 'https://www.moonbird.life/',
      imageUrl: 'https://www.moonbird.life/cdn/shop/files/moonbird-med-lines-blue/green.jpg?v=1711016121&width=540',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=411',
      secondarySources: []
    },
    {
      id: 55,
      name: 'f.lux Blue Light Blocking Software',
      productLink: 'https://justgetflux.com/',
      imageUrl: 'https://justgetflux.com/news/images/fluxomat48.png',
      primarySource: 'https://x.com/bryan_johnson/status/1824078102731137409',
      secondarySources: []
    },
    {
      id: 56,
      name: 'Spectra Blue Blocking Glasses',
      productLink: 'https://amzn.to/4bTZQG2',
      imageUrl: 'https://m.media-amazon.com/images/I/51D156UAE_AC_SX679_.jpg',
      primarySource: 'https://www.reddit.com/r/blueprint_/comments/1hy1sh3/hey_does_what_brand_the_se_are_i_tried_multiple/',
      secondarySources: ['https://x.com/bryan_johnson/status/1899223813121812s=46&t=TaeoFAc2eJI1edRJyLGmw']
    },
    {
      id: 57,
      name: '2DOR Hair Serum',
      productLink: 'https://www.2dornar.com/products/2dor-advanced-formula-2-derma-roller-free-shipping',
      imageUrl: 'https://www.2dornar.com/cdn/shop/files/2DOR_20219954&width=1300',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=243',
      secondarySources: ['https://x.com/bryan_johnson/status/1810220250647782']
    },
    {
      id: 58,
      name: 'Lectrofan White Noise Machine',
      productLink: 'https://amzn.to/41gkhbX',
      imageUrl: 'https://m.media-amazon.com/images/I/61ASRAUQ_AC_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=437',
      secondarySources: []
    },
    {
      id: 59,
      name: 'Capillus Hair Growth Red Light Cap',
      productLink: 'https://www.capillus.com/products/capillus-spectrum',
      imageUrl: 'https://www.capillus.com/cdn/shop/files/capillus-spectrum-2034/28.webp?v=1727222753&width=1800',
      primarySource: 'https://x.com/bryan_johnson/status/1840934611040863',
      secondarySources: ['https://youtu.be/G7b28Vm9-O0?t=847']
    },
    {
      id: 60,
      name: 'Alkaline Water Filtration System',
      productLink: 'http://www.oxygeniozone.com/',
      imageUrl: 'http://www.oxygeniozone.com/images/1.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1793312141414867',
      secondarySources: []
    },
    {
      id: 61,
      name: 'Mother In Law\'s Kimchi - Napa Cabbage',
      productLink: 'https://amzn.to/4bfop5KN',
      imageUrl: 'https://m.media-amazon.com/images/I/71wvYUd2_SX473_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=2080',
      secondarySources: []
    },
    {
      id: 62,
      name: 'Pickled Planet Beat Kraut',
      productLink: 'https://amzn.to/4gXpCpf',
      imageUrl: 'https://m.media-amazon.com/images/I/71W6UWXc_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=2080',
      secondarySources: []
    },
    {
      id: 63,
      name: 'Pickled Planet I-Boost Herbal Krauts',
      productLink: 'https://amzn.to/48skKb6',
      imageUrl: 'https://m.media-amazon.com/images/I/81KQIc5Db_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=2080',
      secondarySources: []
    },
    {
      id: 64,
      name: 'Atlantic Sea Farms Seaweed Salad',
      productLink: 'https://amzn.to/4gZ47QU',
      imageUrl: 'https://m.media-amazon.com/images/I/71XMUJs_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=2110',
      secondarySources: []
    },
    {
      id: 65,
      name: 'Dell UltraSharp U2715H Monitor',
      productLink: 'https://amzn.to/3QA2Xi8',
      imageUrl: 'https://m.media-amazon.com/images/I/51wfNyyJG_AC_SX300_QL70_FMwebp.jpg',
      primarySource: 'https://youtu.be/beXSaD4EO0-g?t=165',
      secondarySources: []
    },
    {
      id: 66,
      name: 'Samsung Odyssey G9 49" Monitor',
      productLink: 'https://amzn.to/3XkJy3z',
      imageUrl: 'https://m.media-amazon.com/images/I/612ZVSS0c_AC_SX679_.jpg',
      primarySource: 'https://youtu.be/beXSaD4EO0-g?t=165',
      secondarySources: []
    },
    {
      id: 67,
      name: 'Poppin Series L 25 Standing Desk',
      productLink: 'https://amzn.to/48s8WG',
      imageUrl: 'https://m.media-amazon.com/images/I/71H3wqbp_AC_SX679_.jpg',
      primarySource: 'https://youtu.be/beXSaD4EO0-g?t=165',
      secondarySources: []
    },
    {
      id: 68,
      name: 'Dr Collins Biomin Restore Toothpaste',
      productLink: 'https://amzn.to/3Xvs8PF',
      imageUrl: 'https://m.media-amazon.com/images/I/71NppMWH_AC_SX679_SH40_01.jpg',
      primarySource: 'https://youtu.be/beXQrUJ6maw?t=192',
      secondarySources: ['https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol']
    },
    {
      id: 69,
      name: 'Sensodyne Repair and Protect Whitening Toothpaste',
      productLink: 'https://amzn.to/3EYcmqB',
      imageUrl: 'https://m.media-amazon.com/images/I/415RgpDkTk_SX300_SX300_04.FM_wl85_.jpg',
      primarySource: 'https://youtu.be/beXQrUJ6maw?t=192',
      secondarySources: []
    },
    {
      id: 70,
      name: 'Dr Tung\'s Tongue Cleaner',
      productLink: 'https://amzn.to/41l8Bsk',
      imageUrl: 'https://m.media-amazon.com/images/I/61Fp8GNcys_SX300_SX300_04.FM_wl85_.jpg',
      primarySource: 'https://youtu.be/beXQrUJ6maw?t=195',
      secondarySources: ['https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol']
    },
    {
      id: 71,
      name: 'Cerave Hydrating Facial Cleanser',
      productLink: 'https://amzn.to/3DhEbXx',
      imageUrl: 'https://m.media-amazon.com/images/I/61PzwCqNV_SX300_SX300_04.FM_wl85_.jpg',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=271',
      secondarySources: []
    },
    {
      id: 72,
      name: 'Elixir Infinity Exosome Serum',
      productLink: 'https://elixirskincare.com/products/infinity',
      imageUrl: 'https://elixirskincare.com/cdn/shop/products/perf_800x800_crop_center.png?v=1712042966&width=990',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=356',
      secondarySources: ['https://blueprint.bryanjohnson.com/', 'https://youtu.be/beZnw6PFxO94?t=73']
    },
    {
      id: 73,
      name: 'Adipeau Active Face Cream',
      productLink: 'https://shop.adipeau.com/en-us/products/active-face-cream',
      imageUrl: 'https://shop.adipeau.com/cdn/shop/files/AFO-1.jpg?v=1712042966&width=990',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=392',
      secondarySources: []
    },
    {
      id: 74,
      name: 'OneSkin OS-01 Peptide Skin Longevity Age Reversal Duo',
      productLink: 'https://amzn.to/3QOFqUZ',
      imageUrl: 'https://m.media-amazon.com/images/I/411Ts1FUzd_SX522_.jpg',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=392',
      secondarySources: []
    },
    {
      id: 75,
      name: 'Insignia All-In-One Travel Converter and Adapter',
      productLink: 'https://www.bestbuy.com/site/insignia-all-in-one-travel-adapter-and-converter-with-2-usb-ports-black/6350084.html',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6350/6350084_sd.jpg',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=551',
      secondarySources: []
    },
    {
      id: 76,
      name: 'Ultima Electrolyte Drink Mix - Lemonade',
      productLink: 'https://amzn.to/4iL9MN',
      imageUrl: 'https://m.media-amazon.com/images/I/613dR-_SX300_SX300_04.FM_wl85_.jpg',
      primarySource: 'https://youtu.be/beAl-CG7ULYk?t=615',
      secondarySources: []
    },
    {
      id: 77,
      name: 'NEXSTAND Laptop Stand',
      productLink: 'https://nexstand.eu/products/nexstand-k2-laptop-stand-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0579/9972/0615/files/NEXSTAND2_1.jpg?v=1688756611&width=990',
      primarySource: 'https://x.com/bryan_johnson/status/1853818378697236647',
      secondarySources: [
        'https://www.instagram.com/p/CovnWastand1tg',
        'https://www.youtube.com/watch?v=XvlGKcRDvRWi'
      ]
    },
    {
      id: 78,
      name: 'Langkou Air Quality Monitor',
      productLink: 'https://amzn.to/41ABLl8',
      imageUrl: 'https://m.media-amazon.com/images/I/71kALhxe_AC_SX679_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1880671414488008',
      secondarySources: ['https://youtu.be/beWXkcmSeBY?t=523']
    },
    {
      id: 79,
      name: 'Spsson Scalp Massager',
      productLink: 'https://amzn.to/41ul8cF',
      imageUrl: 'https://m.media-amazon.com/images/I/71kY7DaHx0_SX466_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/how-i-reversed-my-hair-loss-graying',
      secondarySources: []
    },
    {
      id: 80,
      name: 'KeraFlex Laser Cap',
      productLink: 'https://shop.mykerafactor.com/collections/at-home-products/products/keraflex-laser-cap',
      imageUrl: 'https://shop.mykerafactor.com/cdn/shop/files/KF-Laser_540x.jpg?v=1711863777',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/how-i-reversed-my-hair-loss-graying',
      secondarySources: []
    },
    {
      id: 81,
      name: 'Oral-B Pro 1000 Electric Toothbrush',
      productLink: 'https://amzn.to/3DlplEY',
      imageUrl: 'https://m.media-amazon.com/images/I/71MEQOGg_AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol',
      secondarySources: []
    },
    {
      id: 82,
      name: 'Buried Treasure Xyli-Swish Mouthwash',
      productLink: 'https://amzn.to/4b4bkQ15',
      imageUrl: 'https://m.media-amazon.com/images/I/41TOYzUyA_AC_SX679_.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-oral-health-protocol',
      secondarySources: []
    },
    {
      id: 83,
      name: 'IQAir HealthPro Plus Air Purifier',
      productLink: 'https://amzn.to/3CUMWoQ',
      imageUrl: 'https://m.media-amazon.com/images/I/71AGyUkFTL_AC_SX300_QL70_FMwebp.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1880671414488008',
      secondarySources: []
    },
    {
      id: 84,
      name: 'AnteAGE Exosome Solution',
      productLink: 'https://anteage.com/products/exosome-solution',
      imageUrl: 'https://anteage.com/cdn/shop/files/AzteAG_20-web-commerce_1600x.jpg?v=1684747257',
      primarySource: 'https://youtu.be/be5mSSmWyk?t=46',
      secondarySources: ['https://youtu.be/beJpfm-A5Ug8?t=8']
    },
    {
      id: 85,
      name: 'Red Dot LED Red Light Therapy Panels',
      productLink: 'https://www.reddotled.com/products/ntore6000-6000w-led-red-light-therapy-equipment.html',
      imageUrl: 'https://img.jj5star.com/images/202117/05/70907090scale100.jpg',
      primarySource: 'https://youtu.be/beG7b28Vm9-O0?t=550',
      secondarySources: [
        'https://protocol.bryanjohnson.com/#skin-health',
        'https://www.instagram.com/p/CvcrnsQ5LUg/?utm_source=ig_embed',
        'https://www.womensmagazine.com/culture/bryan-johnson-wants-you-to-have-better-bones/'
      ]
    },
    {
      id: 86,
      name: 'VISIA Multispectral Skin Analysis Device',
      productLink: 'https://www.canfieldsci.com/imaging-systems/visia-complexion-analysis/',
      imageUrl: 'https://www.canfieldsci.com/FileLibrary/images/imaging-systems/visia-booth.jpg',
      primarySource: 'https://youtu.be/be58ZyNm3t=275',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1839339206880332',
        'https://youtu.be/n4_IT7HIPnI?t=1217',
        'https://youtu.be/beAl-CG7ULYk?t=341',
        'https://youtu.be/beZnw6PFxO94?t=188'
      ]
    },
    {
      id: 87,
      name: 'Mayraki Anti-Grey Restoring Treatment',
      productLink: 'https://mayraki.com/anti-grey-hair-color-restoring-treatment/',
      imageUrl: 'https://mayraki.com/cdn/shop/files/mayraki_new_source_1726011036.jpg',
      primarySource: 'https://youtu.be/beF2c46UZQ5Lk?t=254',
      secondarySources: []
    },
    {
      id: 88,
      name: 'Tixel Skin Therapy',
      productLink: 'https://www.novoxel.com/index.php?todo=products',
      imageUrl: 'https://www.novoxel.com/files/tixel.jpg',
      primarySource: 'https://www.youtube.com/watch?v=3nGmSmWek',
      secondarySources: [
        'https://youtu.be/beUoR_F4?t=',
        'https://www.youtube.com/watch?v=jsm=A5ksk8'
      ]
    },
    {
      id: 89,
      name: 'Sofwave Ultrasound Body and Face Treatment',
      productLink: 'https://sofwave.com/',
      imageUrl: 'https://api.sofwave.com/app/uploads/2024/11/Explore-our-dedicated-sections-Sofwave-2048x1365.jpg',
      primarySource: 'https://youtu.be/beG7h29Vm9-O0?t=550',
      secondarySources: [
        'https://youtu.be/beY3sYQHTPY?t=2676',
        'https://youtu.be/n4_IT7HIPnI?t=884',
        'https://www.instagram.com/p/DEyFGcYsaGu/',
        'https://www.instagram.com/bryanjohnson_/reel/C9VvEInyFKc/?hl=en'
      ]
    },
    {
      id: 90,
      name: 'Renasculpt FE60 EMS Sculpting Machine',
      productLink: 'https://www.winkonlaser.cn/products/renasculpt%C2%AE-fe60-max-5-handles-ems-rf-sculpting-machine-neo',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0579/9972/0615/files/FE60__06.jpg?v=1726041180',
      primarySource: 'https://youtu.be/G7b28Vm9-O0?t=638',
      secondarySources: [
        'https://youtu.be/58rZylfxnjE?t=802',
        'https://www.youtube.com/watch?v=ajYrnKPvPKI',
        'https://youtu.be/n4_IT7HIPnI?t=1233'
      ]
    },
    {
      id: 91,
      name: 'Vegetology Omega-3 Supplements (EPA & DHA)',
      productLink: 'https://www.vegetology.com/supplements/omega-3',
      imageUrl: 'https://www.vegetology.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/m/omega3_front_1.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 92,
      name: 'Achilles Ankle and Knee Repair Machine',
      productLink: 'https://anklerepair.com/products/achilles-elite-package',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0549/9644/0241/files/achilles-elite-package.jpg',
      primarySource: 'https://youtu.be/Y2gkSLvdmY?t=510',
      secondarySources: []
    },
    {
      id: 93,
      name: 'Lamicall Adjustable Laptop Stand',
      productLink: 'https://amzn.to/48qg7z',
      imageUrl: 'https://m.media-amazon.com/images/I/71bNZc6TV+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/Y2gkSLvdmY?t=666',
      secondarySources: []
    },
    {
      id: 94,
      name: 'Incrediwear Ankle Sleeve',
      productLink: 'https://amzn.to/3EWG7XW',
      imageUrl: 'https://m.media-amazon.com/images/I/71bNZc6TV+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/Y2gkSLvdmY?t=922',
      secondarySources: []
    },
    {
      id: 95,
      name: 'Peloton Bike',
      productLink: 'https://www.onepeloton.com/shop/bike/bike-package',
      imageUrl: 'https://www.onepeloton.com/cdn/shop/files/Bike-Plus_Carousel_1_2048x.png',
      primarySource: 'https://www.youtube.com/watch?v=bxkdio_k07Q',
      secondarySources: ['https://x.com/bryan_johnson/status/1804545467037861764']
    },
    {
      id: 96,
      name: 'Minicircle Follistatin Gene Therapy',
      productLink: 'https://minicircle.clinic/',
      imageUrl: 'https://minicircle.clinic/wp-content/uploads/2023/12/minicircle-therapy-device.jpg',
      primarySource: 'https://youtu.be/5r7b28Vm9-O0?t=181',
      secondarySources: []
    },
    {
      id: 97,
      name: 'HPOTECH ZEUGMA hyperbaric chamber (2.0 ATA)',
      productLink: 'https://www.hpotech.com/hyperbaric-chambers/zeugma-monospace-hyperbaric-chamber',
      imageUrl: 'https://www.hpotech.com/wp-content/uploads/2023/zeugma-chamber-main.jpg',
      primarySource: 'https://youtu.be/5r7b28Vm9-O0?t=181',
      secondarySources: []
    },
    {
      id: 98,
      name: 'Withings Body Smart Scale',
      productLink: 'https://www.withings.com/us/en/body-smart',
      imageUrl: 'https://www.withings.com/content/dam/withings/global/b2c/products/body/body-smart/v1/hero.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-new-morning-routine',
      secondarySources: []
    },
    {
      id: 99,
      name: 'Diagnostica AGE Reader mu',
      productLink: 'https://www.diagnoptics.com/age-reader',
      imageUrl: 'https://www.diagnoptics.com/wp-content/uploads/2017/10/agereader-mu.png',
      primarySource: 'https://youtu.be/5r5kZyNm8E?t=643',
      secondarySources: []
    },
    {
      id: 100,
      name: 'Cutera Excel V Skin Laser',
      productLink: 'https://cutera.com/uk/en/products/excel-v',
      imageUrl: 'https://cutera.com/wp-content/uploads/2023/08/excel-v-plus-device.png',
      primarySource: 'https://youtu.be/5r5kZyNm8E?t=643',
      secondarySources: []
    },
    {
      id: 101,
      name: 'Sciton mJoule IPL Machine',
      productLink: 'https://sciton.com/mjoule/',
      imageUrl: 'https://sciton.com/wp-content/uploads/2024/03/mjoule-device-main.jpg',
      primarySource: 'https://youtu.be/5r5kZyNm8E?t=710',
      secondarySources: []
    },
    {
      id: 102,
      name: 'Philips Epiq 5 Ultrasound Machine',
      productLink: 'https://www.usa.philips.com/healthcare/product/HC795118/epiq-5-premium-ultrasound-system',
      imageUrl: 'https://images.philips.com/is/image/PhilipsConsumer/HC795118-IMS-en_US?wid=1200',
      primarySource: 'https://youtu.be/5r5kZyNm8E?t=720',
      secondarySources: []
    },
    {
      id: 103,
      name: 'Skin Cooling Machine',
      productLink: 'https://www.aliexpress.us/item/3256807353562708.html',
      imageUrl: 'https://ae01.alicdn.com/kf/H54543a31136e8c8035d5dcaead5d520b4/Cryo-Skin-Cooling-System-Machine.jpg',
      primarySource: 'https://youtu.be/5r5kZyNm8E?t=792',
      secondarySources: []
    },
    {
      id: 104,
      name: 'Rogue HR-2 Half Rack',
      productLink: 'https://www.roguefitness.com/rogue-hr-2-half-rack',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Rigs%20and%20Racks/Half%20Racks/HR-2/HR2_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?feature=shared',
      secondarySources: []
    },
    {
      id: 105,
      name: 'Rogue Monster Lite Matador Dip Station',
      productLink: 'https://www.roguefitness.com/rogue-monster-lite-matador',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Strength%20Equipment/Strength%20Training/Dip%20Stations/Monster%20Lite%20Matador/SAML-MAT_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=518',
      secondarySources: []
    },
    {
      id: 106,
      name: 'SAML-24 Monster Lite Safety Spotter Arms (Pair)',
      productLink: 'https://www.roguefitness.com/saml-24-monster-lite-spotter-arms-pair',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Rigs%20and%20Racks/Monster%20Lite/Accessories/Monster%20Lite%20Safety%20Arms/SAML24_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=518',
      secondarySources: []
    },
    {
      id: 107,
      name: 'SP3358 Plate Storage Pair - Long for Monster Lite',
      productLink: 'https://www.roguefitness.com/sp3358-plate-storage-ring-for-monster-lite',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Rigs%20and%20Racks/Monster%20Lite/Accessories/SP3358/SP3358_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=524',
      secondarySources: []
    },
    {
      id: 108,
      name: 'Flybird Adjustable Bench',
      productLink: 'https://amzn.to/3Y5mB',
      imageUrl: 'https://m.media-amazon.com/images/I/711LG84ora+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=528',
      secondarySources: []
    },
    {
      id: 109,
      name: 'Finer Form Foldable Flat Bench',
      productLink: 'https://amzn.to/4c6MN2d',
      imageUrl: 'https://m.media-amazon.com/images/I/61uF2FQkq+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=528',
      secondarySources: []
    },
    {
      id: 110,
      name: 'Rogue 45LB Ohio Power Bar - Black Zinc',
      productLink: 'https://www.roguefitness.com/rogue-45lb-ohio-power-bar-black-zinc',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Weightlifting%20Bars%20and%20Plates/Barbells/Ohio%20Power%20Bar/OHIO-POWER-BAR_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=1002',
      secondarySources: []
    },
    {
      id: 111,
      name: 'Rogue Echo Bumper Plates',
      productLink: 'https://www.roguefitness.com/rogue-echo-bumper-plates-with-white-text',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Weightlifting%20Bars%20and%20Plates/Bumper%20Plates/Echo%20Bumper%20Plates/ECHO-BUMPERS_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=521',
      secondarySources: []
    },
    {
      id: 112,
      name: 'Bowflex SelectTech Dumbbells',
      productLink: 'https://amzn.to/43Y2QEV',
      imageUrl: 'https://m.media-amazon.com/images/I/71+QWWpJ7+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=513',
      secondarySources: []
    },
    {
      id: 113,
      name: 'Rogue Floor Glute',
      productLink: 'https://www.roguefitness.com/floor-glute',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Strength%20Equipment/Strength%20Training/Machines/Floor%20Glute/FLOOR-GLUTE_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=505',
      secondarySources: []
    },
    {
      id: 114,
      name: 'XMark Seated Calf Raise Machine',
      productLink: 'https://amzn.to/4s4JZZk',
      imageUrl: 'https://m.media-amazon.com/images/I/61YAWtlpgL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=530',
      secondarySources: []
    },
    {
      id: 115,
      name: 'Valor Fitness Adjustable Back Extension Machine',
      productLink: 'https://amzn.to/4XDTmcS',
      imageUrl: 'https://m.media-amazon.com/images/I/611YAWtlpgL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=495',
      secondarySources: []
    },
    {
      id: 116,
      name: 'Peloton Bike',
      productLink: 'https://amzn.to/48NWYuR',
      imageUrl: 'https://m.media-amazon.com/images/I/61URH1xm6L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=1114',
      secondarySources: []
    },
    {
      id: 117,
      name: 'Concept2 Indoor Rower',
      productLink: 'https://amzn.to/3EJgf2D',
      imageUrl: 'https://m.media-amazon.com/images/I/61zFzrBWWL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=507',
      secondarySources: ['https://youtu.be/5YVc-H-od7?t=794']
    },
    {
      id: 118,
      name: 'Life Fitness E1 Elliptical',
      productLink: 'https://amzn.to/42syW7X',
      imageUrl: 'https://m.media-amazon.com/images/I/814dRFzJTjL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=793',
      secondarySources: []
    },
    {
      id: 119,
      name: 'Lebert Fitness Dip Bar Stand',
      productLink: 'https://amzn.to/2RbgwLc',
      imageUrl: 'https://m.media-amazon.com/images/I/71hdRbgwLc+L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=734',
      secondarySources: []
    },
    {
      id: 120,
      name: 'Rogue Dip Belt',
      productLink: 'https://www.roguefitness.com/rogue-dip-belt',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Bodyweight%20Training%20Equipment/Dip%20Belts/DIP-BELT_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=613',
      secondarySources: []
    },
    {
      id: 121,
      name: 'Rogue TF-1 Tibialis Trainer',
      productLink: 'https://www.roguefitness.com/rogue-tf-1',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Strength%20Equipment/Strength%20Training/TF-1/TF1_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=563',
      secondarySources: []
    },
    {
      id: 122,
      name: 'HOG Performance ISOTIB-LT',
      productLink: 'https://www.xprddistribution.com/products/isotib-lt',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0549/9644/0241/products/isotib-lt-main.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=250',
      secondarySources: []
    },
    {
      id: 123,
      name: 'IronMind Captains of Crush Hand Gripper',
      productLink: 'https://amzn.to/42bcT1r',
      imageUrl: 'https://m.media-amazon.com/images/I/71estyzcRs+L._AC_SX679_.jpg',
      primarySource: 'https://www.tiktok.com/@_bryan_johnson_video/7226298791855373374',
      secondarySources: []
    },
    {
      id: 124,
      name: 'Rogue Tube Bands',
      productLink: 'https://www.roguefitness.com/rogue-tube-bands',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Strength%20Equipment/Bands/Tube%20Bands/TUBE-BANDS_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=218',
      secondarySources: []
    },
    {
      id: 125,
      name: 'Nike Metcon 5 Black Gum',
      productLink: 'https://www.goat.com/sneakers/metcon-5-black-gum-aq1189-009',
      imageUrl: 'https://image.goat.com/transform/v1/attachments/product_templates/images/040/195/698/original/1028_0.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=857',
      secondarySources: []
    },
    {
      id: 126,
      name: 'Slant Board Guy Step Up Board',
      productLink: 'https://slantboardguy.com/product/step-up-board/',
      imageUrl: 'https://slantboardguy.com/wp-content/uploads/2023/12/step-up-board-main.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=368',
      secondarySources: [
        'https://www.instagram.com/bryanjohnson_/C5XyH4rJKc/'
      ]
    },
    {
      id: 127,
      name: 'Slant Board Guy Slant Board',
      productLink: 'https://amzn.to/4cqssy7',
      imageUrl: 'https://m.media-amazon.com/images/I/81W9deEbAkL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=268',
      secondarySources: [
        'https://www.instagram.com/bryanjohnson_/C5XyH4rJKc/'
      ]
    },
    {
      id: 128,
      name: 'Rogue Dog Sled',
      productLink: 'https://www.roguefitness.com/dog-sled',
      imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:f8f8f8/catalog/Conditioning/Sleds/Dog%20Sled/DOG-SLED_1600x.jpg',
      primarySource: 'https://youtu.be/5YVc-H-od7?t=196',
      secondarySources: []
    },
    {
      id: 129,
      name: 'The Backward Treadmill',
      productLink: 'https://atgequipment.com/products/the-backward-treadmill',
      imageUrl: 'https://atgequipment.com/cdn/shop/files/backward-treadmill-main.jpg',
      primarySource: 'https://youtu.be/5e7h28Nmd-Q0?t=220',
      secondarySources: []
    },
    {
      id: 130,
      name: 'Hoka One One Clifton 7 Running Shoes',
      productLink: 'https://amzn.to/2XbhbH',
      imageUrl: 'https://m.media-amazon.com/images/I/611GqaJfiwL._AC_SX679_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1687355169105500',
      secondarySources: []
    },
    {
      id: 131,
      name: 'STORZ Medical Magnetolith Ultra+ EMTT Device',
      productLink: 'https://www.curamed-shop.de/orthopedics/devices/magnetolith-0',
      imageUrl: 'https://www.curamed-shop.de/media/image/product/1234/lg/magnetolith-ultra-plus.jpg',
      primarySource: 'https://youtu.be/Y2gkeSLvdmY?t=309',
      secondarySources: ['*used at Orthoheling Longevity Center LA (for ankle rehab)']
    }
  ] as const;