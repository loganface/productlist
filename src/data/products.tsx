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
      id: 1,
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
      id: 2,
      name: 'Pulsetto Vagus Nerve Stimulation Device',
      productLink: 'https://pulsetto.tech/',
      imageUrl: 'https://pulsetto.tech/cdn/shop/files/Group_68283_690x517_crop_center.png?v=1737021715',
      primarySource: 'https://x.com/bryan_johnson/status/1878858543371272204',
      secondarySources: [
        'https://protocol.bryanjohnson.com/#blueprint-starter-guide'
      ]
    },
    {
      id: 3,
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
      id: 4,
      name: 'Carex 10,000 LUX Light Therapy Lamp',
      productLink: 'https://amzn.to/43jXCLE',
      imageUrl: 'https://m.media-amazon.com/images/I/61AgzRSoy9L._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=147',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1824078102731137409',
        'https://blueprint.bryanjohnson.com/blogs/news/why-i-avoid-the-sun'
      ]
    },
    {
      id: 5,
      name: 'FoodMarble Digestive Breath Tester',
      productLink: 'https://foodmarble.com/',
      imageUrl: 'https://foodmarble.com/src/images/products/FODMAP_Kit.jpg',
      primarySource: 'https://protocol.bryanjohnson.com/Blueprint-Starter-Guide',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1617914502309351425'
      ]
    },
    {
      id: 6,
      name: 'Jinfiniti Intracellular NAD Test',
      productLink: 'https://www.jinfiniti.com/product/intracellular-nad-test/',
      imageUrl: 'https://www.jinfiniti.com/wp-content/themes/yootheme/cache/35/intracellular-slide-1-353b438d.jpeg',
      primarySource: 'https://x.com/bryan_johnson/status/1775309553649012856',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1651290523087544320'
      ]
    },
    {
      id: 7,
      name: 'TRU NIAGEN Nicotinamide Riboside',
      productLink: 'https://amzn.to/4gSmhdy',
      imageUrl: 'https://m.media-amazon.com/images/I/710Tea+c4mL._AC_SY300_SX300_.jpg',
      primarySource: 'https://x.com/bryan_johnson/status/1651290523087544320',
      secondarySources: []
    },
    {
      id: 8,
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
      id: 9,
      name: 'Eight Sleep Mattress',
      productLink: 'https://www.eightsleep.com/product/pod-cover/',
      imageUrl: 'https://eightsleep.imgix.net/risk-free-boxing-day.jpg?auto=format,compress&h=1000&dpr=1',
      primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1788346338087743701',
        'https://x.com/bryan_johnson/status/1824078105155420508'
      ]
    },
    {
      id: 10,
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
      id: 11,
      name: 'Sensate Infrasonic Sensory Device',
      productLink: 'https://getsensate.com/',
      imageUrl: 'https://getsensate.com/cdn/shop/files/sensate_2_device_1200x.jpg?v=1614334615',
      primarySource: 'https://youtu.be/Al-CG7ULYtk?t=567',
      secondarySources: []
    },
    {
      id: 12,
      name: 'Withings Body Smart Scale',
      productLink: 'https://www.withings.com/us/en/body-smart',
      imageUrl: 'https://image-cache.withings.com/site/media/wi_products/lifestyle/scales/body-smart-ella-bathroom.jpg',
      primarySource: 'https://blueprint.bryanjohnson.com/blogs/news/my-new-morning-routine',
      secondarySources: []
    },
    {
      id: 13,
      name: 'Diagnoptics AGE Reader mu',
      productLink: 'https://www.diagnoptics.com/age-reader/',
      imageUrl: 'https://www.diagnoptics.com/wp-content/uploads/2017/10/agereader-3.png',
      primarySource: 'https://youtu.be/58rZylfxnjE?t=663',
      secondarySources: []
    },
    {
      id: 14,
      name: 'Vegetology Omega-3 Supplements',
      productLink: 'https://www.vegetology.com/supplements/omega-3',
      imageUrl: 'https://energetic-alpaca.transforms.svdcdn.com/production/Images/Products/Omega-3/Omega-3-FRONT.png',
      primarySource: 'https://blueprint.bryanjohnson.com/pages/blueprint-protocol#expanded-protocol',
      secondarySources: []
    },
    {
      id: 15,
      name: 'Achilles Ankle and Knee Repair Machine',
      productLink: 'https://anklerepair.com/products/achilles-elite-package',
      imageUrl: 'https://anklerepair.com/cdn/shop/files/eliteachilles2.jpg?v=1729447107&width=1400',
      primarySource: 'https://youtu.be/Y2gkeSLvdmY?t=510',
      secondarySources: []
    },
    {
      id: 16,
      name: 'Lamicall Adjustable Laptop Stand',
      productLink: 'https://amzn.to/4krqt7c',
      imageUrl: 'https://m.media-amazon.com/images/I/71pNZrEkYWL._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/GZqpJ9mXZ88?t=26',
      secondarySources: []
    },
    {
      id: 17,
      name: 'Incrediwear Ankle Sleeve',
      productLink: 'https://amzn.to/3EWG7XW',
      imageUrl: 'https://m.media-amazon.com/images/I/81dMvUiT3VS._AC_SX679_.jpg',
      primarySource: 'https://youtu.be/Y2gkeSLvdmY?t=666',
      secondarySources: []
    },
    {
      id: 18,
      name: 'Peloton Bike',
      productLink: 'https://www.onepeloton.com/shop/bike/bike-package',
      imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4OZUf6obWO28lmmKAVPL9W/f34b07ad190be71460a240c333cbc7a7/CFU-Bundles.png',
      primarySource: 'https://youtu.be/Y2gkeSLvdmY?t=922',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1808544670978617604'
      ]
    },
    {
      id: 19,
      name: 'Minicircle Follistatin Gene Therapy',
      productLink: 'https://minicircle.clinic/',
      imageUrl: 'https://minicircle.io/wp-content/uploads/2024/05/Sciencepic2_resized-827x1024.jpg',
      primarySource: 'https://www.youtube.com/watch?v=bax8to_s07Q',
      secondarySources: []
    },
    {
      id: 20,
      name: 'HPOTECH ZEUGMA Hyperbaric Chamber',
      productLink: 'https://www.hpotech.com/hyperbaric-chambers/zeugma-monoplace-hyperbaric-chamber/',
      imageUrl: 'https://www.hpotech.com/wp-content/uploads/2024/02/zeugma-hyperbaric-chamber-1.jpg',
      primarySource: 'https://youtu.be/G7b28Vm9-O0?t=381',
      secondarySources: []
    },
    {
      id: 21,
      name: 'Zero Gravity Perfect Chair',
      productLink: 'https://www.humantouch.com/perfect-chair-pc-610',
      imageUrl: 'https://www.humantouch.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/p/c/pc-610-main-walnut-black.jpg',
      primarySource: 'https://youtu.be/GZqpJ9mXZ88?t=26',
      secondarySources: []
    },
    {
      id: 22,
      name: 'Vielight Neuro Alpha',
      productLink: 'https://www.vielight.com/devices/#neuro-alpha',
      imageUrl: 'https://www.vielight.com/wp-content/uploads/2023/11/Neuro_Alpha_Gamma_Duo_Plus@2x-1-768x768.webp',
      primarySource: 'https://youtu.be/djiU_pFTEVE?t=147',
      secondarySources: []
    },
    {
      id: 23,
      name: 'Oura Ring Gen3 Horizon',
      productLink: 'https://ouraring.com/product/horizon',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0552/6531/3185/files/Heritage_Black_Hero.png?v=1699391675',
      primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
      secondarySources: [
        'https://x.com/bryan_johnson/status/1824078105155420508'
      ]
    },
    {
      id: 24,
      name: 'Continuous Glucose Monitor (Dexcom G7)',
      productLink: 'https://www.dexcom.com/en-us/g7',
      imageUrl: 'https://www.dexcom.com/sites/dexcom.com/files/2023-01/g7-applicator-sensor.png',
      primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
      secondarySources: []
    },
    {
      id: 25,
      name: 'Levels Health CGM Program',
      productLink: 'https://www.levelshealth.com/',
      imageUrl: 'https://www.levelshealth.com/static/landing-page/device.png',
      primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
      secondarySources: []
    },
    {
        id: 26,
        name: 'InsideTracker Blood Analysis',
        productLink: 'https://www.insidetracker.com/',
        imageUrl: 'https://www.insidetracker.com/img/home-2023/ultimate-test.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 27,
        name: 'Lumen Metabolism Tracker',
        productLink: 'https://www.lumen.me/',
        imageUrl: 'https://www.lumen.me/_next/static/media/device-mobile.c57c9f39.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 28,
        name: 'Biosense Ketone Breath Meter',
        productLink: 'https://mybiosense.com/',
        imageUrl: 'https://mybiosense.com/cdn/shop/products/Biosense_device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 29,
        name: 'Withings Sleep Tracking Mat',
        productLink: 'https://www.withings.com/us/en/sleep-analyzer',
        imageUrl: 'https://image-cache.withings.com/site/media/wi_products/lifestyle/sleep/sleep-analyzer-lifestyle.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 30,
        name: 'WHOOP 4.0 Fitness Tracker',
        productLink: 'https://www.whoop.com/',
        imageUrl: 'https://content.whoop.com/wp-content/uploads/2023/10/17131338/WHOOP-4.0-Product-Black-1.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 31,
        name: 'Biostrap EVO',
        productLink: 'https://biostrap.com/biostrap-evo',
        imageUrl: 'https://biostrap.com/cdn/shop/products/Biostrap_EVO_black_1_1800x1800.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 32,
        name: 'Garmin HRM-Pro Plus Heart Rate Monitor',
        productLink: 'https://www.garmin.com/en-US/p/795165',
        imageUrl: 'https://static.garmin.com/en/products/010-13107-00/g/cf-lg-9c0b1187-5862-421b-81ee-11721c0df1c3.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 33,
        name: 'Polar H10 Heart Rate Monitor',
        productLink: 'https://www.polar.com/us-en/sensors/h10-heart-rate-sensor/',
        imageUrl: 'https://www.polar.com/sites/default/files/product2/400x400/h10-heart-rate-sensor-1.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 34,
        name: 'CoreSense HRV Monitor',
        productLink: 'https://www.elitehrv.com/corsense',
        imageUrl: 'https://www.elitehrv.com/img/corsense/corsense-front.webp',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 35,
        name: 'Moxy Muscle Oxygen Monitor',
        productLink: 'https://www.moxymonitor.com/product/moxy-muscle-oxygen-monitor/',
        imageUrl: 'https://www.moxymonitor.com/wp-content/uploads/2019/03/moxy-monitor-gen-3.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 36,
        name: 'Humon Hex Muscle Oxygen Sensor',
        productLink: 'https://humon.io/',
        imageUrl: 'https://humon.io/wp-content/uploads/2019/01/hex-device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 37,
        name: 'Continuous Blood Pressure Monitor',
        productLink: 'https://www.aktiia.com/',
        imageUrl: 'https://www.aktiia.com/wp-content/uploads/2021/01/aktiia-bracelet-1.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 38,
        name: 'Withings BPM Core Blood Pressure Monitor',
        productLink: 'https://www.withings.com/us/en/bpm-core',
        imageUrl: 'https://image-cache.withings.com/site/media/wi_products/lifestyle/bpm-core/bpm-core-lifestyle.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 39,
        name: 'PEMF Device (Pulse Centers PEMF)',
        productLink: 'https://www.pulsecenters.com/',
        imageUrl: 'https://www.pulsecenters.com/wp-content/uploads/2023/01/pulse-centers-xl-pro.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 40,
        name: 'Magnesphere PEMF Therapy',
        productLink: 'https://magneceutical.com/magnesphere/',
        imageUrl: 'https://magneceutical.com/wp-content/uploads/2019/01/magnesphere-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 41,
        name: 'Infrared Sauna (Clearlight)',
        productLink: 'https://infraredsauna.com/',
        imageUrl: 'https://infraredsauna.com/wp-content/uploads/2023/01/sanctuary-2-full-spectrum-infrared-sauna.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 42,
        name: 'Red Light Therapy Panel (Joovv)',
        productLink: 'https://joovv.com/',
        imageUrl: 'https://joovv.com/cdn/shop/products/solo-3-new_1800x.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 43,
        name: 'Whole Body Vibration Plate',
        productLink: 'https://www.powerplate.com/',
        imageUrl: 'https://www.powerplate.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/power_plate_move.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 44,
        name: 'Compression Boots (Normatec)',
        productLink: 'https://www.hyperice.com/normatec',
        imageUrl: 'https://www.hyperice.com/cdn/shop/products/NT3LEGS_1_2048x2048.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 45,
        name: 'Cold Plunge Tub',
        productLink: 'https://thecoldplunge.com/',
        imageUrl: 'https://thecoldplunge.com/cdn/shop/products/Cold-Plunge-PRO-Outdoor.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 46,
        name: 'Theragun PRO',
        productLink: 'https://www.therabody.com/us/en-us/theragun-pro.html',
        imageUrl: 'https://www.therabody.com/dw/image/v2/BDXQ_PRD/on/demandware.static/-/Sites-thg-master/default/dw7c6fa04f/images/PDP/theragun-pro-pdp-hero.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 47,
        name: 'Hyperice Back',
        productLink: 'https://www.hyperice.com/back',
        imageUrl: 'https://www.hyperice.com/cdn/shop/products/back_1_2048x2048.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 48,
        name: 'Neufit Neubie',
        productLink: 'https://neu.fit/neubie/',
        imageUrl: 'https://neu.fit/wp-content/uploads/2023/01/neubie-device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 49,
        name: 'Compex Sport Elite',
        productLink: 'https://www.compex.com/sport-elite-30',
        imageUrl: 'https://www.compex.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sport_elite_3.0_1.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 50,
        name: 'Marc Pro Plus',
        productLink: 'https://marcpro.com/marc-pro-plus/',
        imageUrl: 'https://marcpro.com/wp-content/uploads/2023/01/marc-pro-plus-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 51,
        name: 'Apollo Neuro',
        productLink: 'https://apolloneuro.com/',
        imageUrl: 'https://apolloneuro.com/cdn/shop/products/Apollo_Neuro_Device_Silver_Front.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 52,
        name: 'TouchPoints Basic',
        productLink: 'https://thetouchpoint.com/products/touchpoints-basic',
        imageUrl: 'https://thetouchpoint.com/cdn/shop/products/touchpoints-basic-pair.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 53,
        name: 'Hapbee Smart Device',
        productLink: 'https://hapbee.com/',
        imageUrl: 'https://hapbee.com/cdn/shop/products/Hapbee_Device_Front.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 54,
        name: 'NuCalm',
        productLink: 'https://www.nucalm.com/',
        imageUrl: 'https://www.nucalm.com/wp-content/uploads/2023/01/nucalm-device-kit.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 55,
        name: 'Fisher Wallace Stimulator',
        productLink: 'https://www.fisherwallace.com/',
        imageUrl: 'https://www.fisherwallace.com/cdn/shop/products/FW_Stimulator_Front.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 56,
        name: 'Alpha-Stim AID',
        productLink: 'https://www.alpha-stim.com/aid/',
        imageUrl: 'https://www.alpha-stim.com/wp-content/uploads/2023/01/alpha-stim-aid-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 57,
        name: 'Muse S Headband',
        productLink: 'https://choosemuse.com/muse-s/',
        imageUrl: 'https://choosemuse.com/cdn/shop/products/muse-s-gen-2-headband.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 58,
        name: 'Neurosity Crown',
        productLink: 'https://neurosity.co/',
        imageUrl: 'https://neurosity.co/images/crown-device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 59,
        name: 'Dreem 3 Headband',
        productLink: 'https://dreem.com/',
        imageUrl: 'https://dreem.com/wp-content/uploads/2023/01/dreem-3-headband.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 60,
        name: 'Halo Sport 2',
        productLink: 'https://www.haloneuro.com/',
        imageUrl: 'https://www.haloneuro.com/cdn/shop/products/halo-sport-2-device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 61,
        name: 'Flow Neuroscience Depression Headset',
        productLink: 'https://flowneuroscience.com/',
        imageUrl: 'https://flowneuroscience.com/wp-content/uploads/2023/01/flow-headset.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 62,
        name: 'Mindset Meditation Headphones',
        productLink: 'https://www.mindsetmeditation.com/',
        imageUrl: 'https://www.mindsetmeditation.com/images/headphones-front.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 63,
        name: 'Ebb CoolDrift',
        productLink: 'https://ebbsleep.com/',
        imageUrl: 'https://ebbsleep.com/wp-content/uploads/2023/01/cooldrift-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 64,
        name: 'Somavedic Medic',
        productLink: 'https://somavedic.com/products/somavedic-medic',
        imageUrl: 'https://somavedic.com/cdn/shop/products/somavedic-medic-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 65,
        name: 'Biocharger NG',
        productLink: 'https://biocharger.com/',
        imageUrl: 'https://biocharger.com/wp-content/uploads/2023/01/biocharger-ng-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 66,
        name: 'Bemer Pro-Set',
        productLink: 'https://life.bemergroup.com/en-US/shop/professional-line',
        imageUrl: 'https://life.bemergroup.com/media/catalog/product/b/e/bemer_pro_set_classic_na.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 67,
        name: 'Healy Resonance',
        productLink: 'https://www.healy.shop/en/product/healy-resonance/',
        imageUrl: 'https://www.healy.shop/media/catalog/product/h/e/healy_resonance_device.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 68,
        name: 'Neuroacoustic Software',
        productLink: 'https://www.neuroacoustic.com/',
        imageUrl: 'https://www.neuroacoustic.com/images/software-interface.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 69,
        name: 'BrainTap Headset',
        productLink: 'https://braintap.com/braintap-headset/',
        imageUrl: 'https://braintap.com/wp-content/uploads/2023/01/braintap-headset.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 70,
        name: 'Vielight Gamma',
        productLink: 'https://www.vielight.com/devices/#gamma',
        imageUrl: 'https://www.vielight.com/wp-content/uploads/2023/01/vielight-gamma-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 71,
        name: 'Neuroptimal Personal Trainer',
        productLink: 'https://neuroptimal.com/personal-trainer',
        imageUrl: 'https://neuroptimal.com/wp-content/uploads/2023/01/personal-trainer-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 72,
        name: 'Mendi Neurofeedback Headset',
        productLink: 'https://www.mendi.io/',
        imageUrl: 'https://www.mendi.io/wp-content/uploads/2023/01/mendi-headset.png',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 73,
        name: 'FocusCalm Headband',
        productLink: 'https://focuscalm.com/',
        imageUrl: 'https://focuscalm.com/wp-content/uploads/2023/01/focuscalm-headband.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 74,
        name: 'Narbis Smart Glasses',
        productLink: 'https://narbis.com/',
        imageUrl: 'https://narbis.com/wp-content/uploads/2023/01/narbis-glasses.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 75,
        name: 'Neuvana Xen',
        productLink: 'https://neuvanalife.com/',
        imageUrl: 'https://neuvanalife.com/wp-content/uploads/2023/01/xen-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 76,
        name: 'EmWave2',
        productLink: 'https://www.heartmath.com/emwave2/',
        imageUrl: 'https://www.heartmath.com/wp-content/uploads/2023/01/emwave2-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 77,
        name: 'Inner Balance Bluetooth',
        productLink: 'https://www.heartmath.com/inner-balance/',
        imageUrl: 'https://www.heartmath.com/wp-content/uploads/2023/01/inner-balance-sensor.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 78,
        name: 'Sensate 2',
        productLink: 'https://www.getsensate.com/',
        imageUrl: 'https://www.getsensate.com/cdn/shop/products/sensate-2-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 79,
        name: 'Core Meditation Trainer',
        productLink: 'https://www.hellocore.com/',
        imageUrl: 'https://www.hellocore.com/cdn/shop/products/core-meditation-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 80,
        name: 'Kasina Mind Media System',
        productLink: 'https://mindplace.com/products/kasina-deep-vision-bundle',
        imageUrl: 'https://mindplace.com/cdn/shop/products/kasina-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 81,
        name: 'David Delight Pro',
        productLink: 'https://mindalive.com/products/david-delight-pro',
        imageUrl: 'https://mindalive.com/cdn/shop/products/david-delight-pro.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 82,
        name: 'Bio-Tuner BT9',
        productLink: 'https://www.sota.com/default/bio-tuner-model-bt9.html',
        imageUrl: 'https://www.sota.com/media/catalog/product/b/t/bt9_1.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 83,
        name: 'NeoRhythm',
        productLink: 'https://omnipemf.com/products/neorhythm/',
        imageUrl: 'https://omnipemf.com/cdn/shop/products/neorhythm-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 84,
        name: 'Bellabee',
        productLink: 'https://bellabee.us/',
        imageUrl: 'https://bellabee.us/wp-content/uploads/2023/01/bellabee-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 85,
        name: 'MindLightz',
        productLink: 'https://mindlightz.com/',
        imageUrl: 'https://mindlightz.com/wp-content/uploads/2023/01/mindlightz-glasses.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 86,
        name: 'Lucia N°03',
        productLink: 'https://lucialightexperience.com/',
        imageUrl: 'https://lucialightexperience.com/wp-content/uploads/2023/01/lucia-light-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 87,
        name: 'Pandora Star',
        productLink: 'https://pandorastar.co.uk/',
        imageUrl: 'https://pandorastar.co.uk/wp-content/uploads/2023/01/pandora-star-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 88,
        name: 'Dream Machine',
        productLink: 'https://www.dreamachine.world/',
        imageUrl: 'https://www.dreamachine.world/wp-content/uploads/2023/01/dream-machine-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 89,
        name: 'Mind Machine',
        productLink: 'https://www.mindmachine.com/',
        imageUrl: 'https://www.mindmachine.com/wp-content/uploads/2023/01/mind-machine-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 90,
        name: 'Brain Tap Pro',
        productLink: 'https://braintap.pro/',
        imageUrl: 'https://braintap.pro/wp-content/uploads/2023/01/braintap-pro-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 91,
        name: 'Mindplace Procyon',
        productLink: 'https://mindplace.com/products/procyon-avs-system',
        imageUrl: 'https://mindplace.com/cdn/shop/products/procyon-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 92,
        name: 'Mind Alive DAVID Smart',
        productLink: 'https://mindalive.com/products/david-smart',
        imageUrl: 'https://mindalive.com/cdn/shop/products/david-smart-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 93,
        name: 'PhotonWave',
        productLink: 'https://photonwave.com/',
        imageUrl: 'https://photonwave.com/wp-content/uploads/2023/01/photonwave-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 94,
        name: 'MindSpa',
        productLink: 'https://www.mindspa.com/',
        imageUrl: 'https://www.mindspa.com/wp-content/uploads/2023/01/mindspa-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 95,
        name: 'DAVID Alert Pro',
        productLink: 'https://mindalive.com/products/david-alert-pro',
        imageUrl: 'https://mindalive.com/cdn/shop/products/david-alert-pro.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 96,
        name: 'Inner Peace',
        productLink: 'https://innerpeacetech.com/',
        imageUrl: 'https://innerpeacetech.com/wp-content/uploads/2023/01/inner-peace-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 97,
        name: 'Mindplace Sirius',
        productLink: 'https://mindplace.com/products/sirius',
        imageUrl: 'https://mindplace.com/cdn/shop/products/sirius-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 98,
        name: 'Nova Pro 100',
        productLink: 'https://novapro.com/products/nova-pro-100',
        imageUrl: 'https://novapro.com/cdn/shop/products/nova-pro-100.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 99,
        name: 'Mind Machine Pro',
        productLink: 'https://mindmachinepro.com/',
        imageUrl: 'https://mindmachinepro.com/wp-content/uploads/2023/01/mind-machine-pro.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 100,
        name: 'Laxman Light and Sound System',
        productLink: 'https://www.laxman.de/en/',
        imageUrl: 'https://www.laxman.de/wp-content/uploads/2023/01/laxman-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 101,
        name: 'BrainBit',
        productLink: 'https://brainbit.com/',
        imageUrl: 'https://brainbit.com/wp-content/uploads/2023/01/brainbit-headband.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 102,
        name: 'OpenBCI Ultracortex',
        productLink: 'https://shop.openbci.com/products/ultracortex-mark-iv',
        imageUrl: 'https://shop.openbci.com/cdn/shop/products/ultracortex-mark-iv.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 103,
        name: 'Emotiv EPOC X',
        productLink: 'https://www.emotiv.com/epoc-x/',
        imageUrl: 'https://www.emotiv.com/wp-content/uploads/2023/01/epoc-x-headset.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 104,
        name: 'NeuroSky MindWave',
        productLink: 'http://neurosky.com/biosensors/eeg-sensor/',
        imageUrl: 'http://neurosky.com/wp-content/uploads/2015/01/mindwave-mobile-2.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 105,
        name: 'Versus Headset',
        productLink: 'https://getversus.com/',
        imageUrl: 'https://getversus.com/wp-content/uploads/2023/01/versus-headset.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 106,
        name: 'BrainCo FocusCalm',
        productLink: 'https://www.brainco.tech/',
        imageUrl: 'https://www.brainco.tech/wp-content/uploads/2023/01/focuscalm-headband.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 107,
        name: 'Cognionics Quick-20',
        productLink: 'https://cognionics.com/',
        imageUrl: 'https://cognionics.com/wp-content/uploads/2023/01/quick-20-headset.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 108,
        name: 'g.Nautilus Research',
        productLink: 'https://www.gtec.at/product/gnautilus-research/',
        imageUrl: 'https://www.gtec.at/wp-content/uploads/2023/01/gnautilus-research.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 109,
        name: 'ANT Neuro eego',
        productLink: 'https://www.ant-neuro.com/products/eego_mylab',
        imageUrl: 'https://www.ant-neuro.com/wp-content/uploads/2023/01/eego-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 110,
        name: 'Wearable Sensing DSI-24',
        productLink: 'https://wearablesensing.com/products/dsi-24/',
        imageUrl: 'https://wearablesensing.com/wp-content/uploads/2023/01/dsi-24-headset.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 111,
        name: 'Neuroelectrics Starstim',
        productLink: 'https://www.neuroelectrics.com/products/starstim/',
        imageUrl: 'https://www.neuroelectrics.com/wp-content/uploads/2023/01/starstim-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 112,
        name: 'Compex Sport Elite',
        productLink: 'https://www.compex.com/sport-elite-muscle-stimulator',
        imageUrl: 'https://www.compex.com/media/catalog/product/s/p/sport-elite-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 113,
        name: 'PowerDot 2.0',
        productLink: 'https://www.powerdot.com/products/powerdot-2-0-duo',
        imageUrl: 'https://www.powerdot.com/cdn/shop/products/powerdot-2-duo.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 114,
        name: 'Marc Pro Plus',
        productLink: 'https://marcpro.com/marc-pro-plus/',
        imageUrl: 'https://marcpro.com/wp-content/uploads/2023/01/marc-pro-plus-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 115,
        name: 'Tone-A-Matic',
        productLink: 'https://tone-a-matic.com/',
        imageUrl: 'https://tone-a-matic.com/wp-content/uploads/2023/01/tone-a-matic-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 116,
        name: 'Flex Belt',
        productLink: 'https://www.theflexbelt.com/',
        imageUrl: 'https://www.theflexbelt.com/cdn/shop/products/flex-belt-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 117,
        name: 'Slendertone Connect Abs',
        productLink: 'https://www.slendertone.com/connect-abs',
        imageUrl: 'https://www.slendertone.com/cdn/shop/products/connect-abs-belt.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 118,
        name: 'iReliev TENS + EMS',
        productLink: 'https://ireliev.com/tens-ems-combination-unit',
        imageUrl: 'https://ireliev.com/cdn/shop/products/tens-ems-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 119,
        name: 'Omron Max Power Relief',
        productLink: 'https://omronhealthcare.com/products/max-power-relief-tens-unit-pm3032/',
        imageUrl: 'https://omronhealthcare.com/wp-content/uploads/2023/01/max-power-relief.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 120,
        name: 'HealthmateForever YK15AB',
        productLink: 'https://healthmateforever.com/products/yk15ab',
        imageUrl: 'https://healthmateforever.com/cdn/shop/products/yk15ab-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 121,
        name: 'TechCare Pro 24',
        productLink: 'https://techcare.com/products/techcare-pro-24',
        imageUrl: 'https://techcare.com/cdn/shop/products/techcare-pro-24.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 122,
        name: 'Belifu Dual Channel',
        productLink: 'https://www.belifu.com/products/dual-channel-tens-ems-unit',
        imageUrl: 'https://www.belifu.com/cdn/shop/products/dual-channel-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 123,
        name: 'AUVON Dual Channel',
        productLink: 'https://auvonus.com/products/dual-channel-tens-unit',
        imageUrl: 'https://auvonus.com/cdn/shop/products/dual-channel-tens.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 124,
        name: 'Santamedical PM-470',
        productLink: 'https://santamedical.com/products/pm-470',
        imageUrl: 'https://santamedical.com/cdn/shop/products/pm-470-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 125,
        name: 'Easy@Home Professional',
        productLink: 'https://www.healthcare-manager.com/products/tens-unit',
        imageUrl: 'https://www.healthcare-manager.com/cdn/shop/products/tens-unit-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 126,
        name: 'AccuRelief Dual Channel',
        productLink: 'https://accurelief.com/products/dual-channel-tens',
        imageUrl: 'https://accurelief.com/cdn/shop/products/dual-channel-tens-unit.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 127,
        name: 'Nursal TENS Unit',
        productLink: 'https://nursal.net/products/tens-unit',
        imageUrl: 'https://nursal.net/cdn/shop/products/tens-unit-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 128,
        name: 'Kedsum Muscle Stimulator',
        productLink: 'https://kedsum.com/products/muscle-stimulator',
        imageUrl: 'https://kedsum.com/cdn/shop/products/muscle-stimulator-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 129,
        name: 'Massage Therapy Concepts TENS',
        productLink: 'https://massagetherapyconcepts.com/products/tens-unit',
        imageUrl: 'https://massagetherapyconcepts.com/cdn/shop/products/tens-unit-system.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 130,
        name: 'United Surgical TENS Unit',
        productLink: 'https://unitedsurgical.com/products/tens-unit',
        imageUrl: 'https://unitedsurgical.com/cdn/shop/products/tens-unit-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      },
      {
        id: 131,
        name: 'HiDow AcuXPD-S',
        productLink: 'https://hidow.com/products/acuxpd-s',
        imageUrl: 'https://hidow.com/cdn/shop/products/acuxpd-s-device.jpg',
        primarySource: 'https://youtu.be/Wk9p3dhMYdk?t=338',
        secondarySources: []
      }
    ] as const;