const cars = [
  {
    id: 1,
    model: 'ecocar Low Speed',
    price: 5123.4,
    batteries: [
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '100/7.2',
        price: 1249.4,
        maxRange: 'έως 70 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '120/8.5',
        price: 1706.24,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '100/7.5',
        price: 2404.4,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '155/11.5',
        price: 3724.4,
        maxRange: 'έως 120 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '206/15',
        price: 4853.62,
        maxRange: 'έως 160 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
    ],
    colors: [
      {
        name: 'ΑΣΠΡΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-white.jpg',
      },
      {
        name: 'ΚΟΚΚΙΝΟ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-red.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-red.jpg',
      },
      {
        name: 'ΚΙΤΡΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-yellow.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-yellow.jpg',
      },
      {
        name: 'ΠΡΑΣΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-laxani-1.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-laxani.jpg',
      },
      {
        name: 'ΠΟΡΤΟΚΑΛΙ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-portokali-1.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-orange.jpg',
      },
      {
        name: 'ΡΟΖ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-fux-1.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-pink.jpg',
      },
      {
        name: 'ΚΑΦΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-brown.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-brown.jpg',
      },
      {
        name: 'ΜΠΛΕ',
        price: 148.8,
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-blue.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-blue.jpg',
      },
      {
        name: 'ΜΩΒ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-purple.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-purple.jpg',
      },
      {
        name: 'ΜΑΥΡΟ ΜΑΤ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/10/ecocar-black-mat.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-black.jpg',
      },
    ],
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
    interiors: [
      {
        type: 'ΒΑΣΙΚΟΣ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_8689ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ',
        price: 186,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0978ok.jpg',
      },
      {
        type: '2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 310,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0963ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ & 2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 496,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0968-ok.jpg',
      },
    ],
    components: [
      {
        name: 'MP5',
        price: 422,
      },
      {
        name: 'Κάμερα οπισθοπορείας (απαιτείται MP5)',
        price: 114.01,
        requires: 'MP5',
      },
      {
        name: 'Σκίαστρο',
        price: 116.99,
      },
      {
        name: 'Ηλεκτρικά υποβοηθούμενο τιμόνι',
        price: 558,
      },
      {
        name: 'Κλιματισμός',
        price: 1282,
      },
      {
        name: 'Αντηλιακές Μεμβράνες αυτοκινήτου - Επίπεδο 1ο',
        price: 149,
      },
      {
        name: 'Φ/Β Συλλέκτης οροφής',
        price: 232,
      },
    ],
  },
  {
    id: 2,
    model: 'ecocar High Speed',
    price: 6275.6,
    batteries: [
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '100/7.2',
        price: 1249.4,
        maxRange: 'έως 70 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '120/8.5',
        price: 1706.24,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '100/7.5',
        price: 2404.4,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '155/11.5',
        price: 3724.4,
        maxRange: 'έως 120 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '206/15',
        price: 4853.62,
        maxRange: 'έως 160 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '277/20.5',
        price: 6099.7,
        maxRange: 'έως 220 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
    ],
    colors: [
      {
        name: 'ΑΣΠΡΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-white.jpg',
      },
      {
        name: 'ΚΟΚΚΙΝΟ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-red.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-red.jpg',
      },
      {
        name: 'ΚΙΤΡΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-yellow.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-yellow.jpg',
      },
      {
        name: 'ΠΡΑΣΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-laxani-1.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-laxani.jpg',
      },
      {
        name: 'ΠΟΡΤΟΚΑΛΙ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-portokali-1.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-orange.jpg',
      },
      {
        name: 'ΡΟΖ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-fux-1.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-pink.jpg',
      },
      {
        name: 'ΚΑΦΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-brown.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-brown.jpg',
      },
      {
        name: 'ΜΠΛΕ',
        price: 148.8,
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-blue.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-blue.jpg',
      },
      {
        name: 'ΜΩΒ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-purple.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-purple.jpg',
      },
      {
        name: 'ΜΑΥΡΟ ΜΑΤ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/10/ecocar-black-mat.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-black.jpg',
      },
    ],
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
    interiors: [
      {
        type: 'ΒΑΣΙΚΟΣ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_8689ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ',
        price: 186,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0978ok.jpg',
      },
      {
        type: '2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 310,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0963ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ & 2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 496,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0968-ok.jpg',
      },
    ],
    components: [
      {
        name: 'MP5',
        price: 422,
      },
      {
        name: 'Κάμερα οπισθοπορείας (απαιτείται MP5)',
        price: 114.01,
        requires: 'MP5',
      },
      {
        name: 'Σκίαστρο',
        price: 116.99,
      },
      {
        name: 'Ηλεκτρικά υποβοηθούμενο τιμόνι',
        price: 558,
      },
      {
        name: 'Κλιματισμός',
        price: 1282,
      },
      {
        name: 'Αντηλιακές Μεμβράνες αυτοκινήτου - Επίπεδο 1ο',
        price: 149,
      },
      {
        name: 'Φ/Β Συλλέκτης οροφής',
        price: 232,
      },
    ],
  },
  {
    id: 3,
    model: 'ecocar Pick Up High Speed',
    price: 7220.8,
    batteries: [
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '100/7.2',
        price: 1249.4,
        maxRange: 'έως 70 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '100/7.5',
        price: 2404.4,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '155/11.5',
        price: 3724.4,
        maxRange: 'έως 120 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '206/15',
        price: 4853.62,
        maxRange: 'έως 160 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '277/20.5',
        price: 6099.7,
        maxRange: 'έως 220 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
    ],
    colors: [
      {
        name: 'ΑΣΠΡΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040_523x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-white.jpg',
      },
      {
        name: 'ΚΟΚΚΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-red_523x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-red.jpg',
      },
      {
        name: 'ΚΙΤΡΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-yellow_523x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-yellow.jpg',
      },
      {
        name: 'ΠΡΑΣΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-laxani_523x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-laxani.jpg',
      },
      {
        name: 'ΠΟΡΤΟΚΑΛΙ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-portokali_523x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-orange.jpg',
      },
      {
        name: 'ΡΟΖ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-fux_523x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-pink.jpg',
      },
      {
        name: 'ΚΑΦΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-brown_523x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-brown.jpg',
      },
      {
        name: 'ΜΠΛΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-blue_523x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-blue.jpg',
      },
      {
        name: 'ΜΩΒ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040-purple_523x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-purple.jpg',
      },
      {
        name: 'ΜΑΥΡΟ ΜΑΤ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/11/ecocar-pickup-black-mat.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-black.jpg',
      },
    ],
    image:
      'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040_523x414.jpg',
    interiors: [
      {
        type: 'ΒΑΣΙΚΟΣ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_8689ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ',
        price: 186,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0978ok.jpg',
      },
      {
        type: '2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 310,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0963ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ & 2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 496,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0968-ok.jpg',
      },
    ],
    components: [
      {
        name: 'MP5',
        price: 422,
      },
      {
        name: 'Κάμερα οπισθοπορείας (απαιτείται MP5)',
        price: 114.01,
        requires: 'MP5',
      },
      {
        name: 'Σκίαστρο',
        price: 116.99,
      },
      {
        name: 'Ηλεκτρικά υποβοηθούμενο τιμόνι',
        price: 558,
      },
      {
        name: 'Κλιματισμός',
        price: 1282,
      },
      {
        name: 'Αντηλιακές Μεμβράνες αυτοκινήτου - Επίπεδο 1ο',
        price: 149,
      },
      {
        name: 'Φ/Β Συλλέκτης οροφής',
        price: 232,
      },
    ],
  },
  {
    id: 4,
    model: 'ecocar Van High Speed',
    price: 7592.8,
    batteries: [
      {
        type: 'ΜΟΛΥΒΔΟΥ (Pb)',
        kWh: '100/7.2',
        price: 1249.4,
        maxRange: 'έως 70 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '100/7.5',
        price: 2404.4,
        maxRange: 'έως 90 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '155/11.5',
        price: 3724.4,
        maxRange: 'έως 120 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '206/15',
        price: 4853.62,
        maxRange: 'έως 160 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
      {
        type: 'ΛΙΘΙΟΥ (Li-On)',
        kWh: '277/20.5',
        price: 6099.7,
        maxRange: 'έως 220 χλμ',
        image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
      },
    ],
    colors: [
      {
        name: 'ΑΣΠΡΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892_535x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-white.jpg',
      },
      {
        name: 'ΚΟΚΚΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-red_535x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-red.jpg',
      },
      {
        name: 'ΚΙΤΡΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-yellow_535x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-yellow.jpg',
      },
      {
        name: 'ΠΡΑΣΙΝΟ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-laxani_535x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-laxani.jpg',
      },
      {
        name: 'ΠΟΡΤΟΚΑΛΙ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-portokali_535x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-orange.jpg',
      },
      {
        name: 'ΡΟΖ',
        price: 0,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-fux_535x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-pink.jpg',
      },
      {
        name: 'ΚΑΦΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-brown_535x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-brown.jpg',
      },
      {
        name: 'ΜΠΛΕ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-blue_535x414.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-blue.jpg',
      },
      {
        name: 'ΜΩΒ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892-purple_535x414.jpg',
        thumb:
          'https://ecocar.city/wp-content/uploads/2021/11/color-purple.jpg',
      },
      {
        name: 'ΜΑΥΡΟ ΜΑΤ',
        price: 148.8,
        image:
          'https://ecocar.city/wp-content/uploads/2021/11/ecocar-van-black-mat.jpg',
        thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-black.jpg',
      },
    ],
    image:
      'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892_535x414.jpg',
    interiors: [
      {
        type: 'ΒΑΣΙΚΟΣ',
        price: 0,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_8689ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ',
        price: 186,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0978ok.jpg',
      },
      {
        type: '2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 310,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0963ok.jpg',
      },
      {
        type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ & 2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
        price: 496,
        image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0968-ok.jpg',
      },
    ],
    components: [
      {
        name: 'MP5',
        price: 422,
      },
      {
        name: 'Κάμερα οπισθοπορείας (απαιτείται MP5)',
        price: 114.01,
        requires: 'MP5',
      },
      {
        name: 'Σκίαστρο',
        price: 116.99,
      },
      {
        name: 'Ηλεκτρικά υποβοηθούμενο τιμόνι',
        price: 558,
      },
      {
        name: 'Κλιματισμός',
        price: 1282,
      },
      {
        name: 'Αντηλιακές Μεμβράνες αυτοκινήτου - Επίπεδο 1ο',
        price: 149,
      },
      {
        name: 'Φ/Β Συλλέκτης οροφής',
        price: 232,
      },
      {
        name: 'Ισοθερμικός Θάλαμος',
        price: 2480,
        model: 'ecocar Van High Speed',
      },
      {
        name: 'Ισοθερμικός Θάλαμος με ψυκτικό μηχάνημα',
        price: 6448,
        model: 'ecocar Van High Speed',
      },
    ],
  },
]

export default cars
