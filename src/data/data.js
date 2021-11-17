export const cars = [
  {
    id: 1,
    model: 'ecocar Low Speed',
    price: 5123.4,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
  },
  {
    id: 2,
    model: 'ecocar High Speed',
    price: 6275.6,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
  },
  {
    id: 3,
    model: 'ecocar Pick Up High Speed',
    price: 7220.8,
    image:
      'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040_523x414.jpg',
  },
  {
    id: 4,
    model: 'ecocar Van High Speed',
    price: 7592.8,
    image:
      'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892_535x414.jpg',
  },
]

export const batteries = [
  {
    id: 1,
    type: 'ΜΟΛΥΒΔΟΥ (Pb)',
    kWh: '100/7.2',
    price: 1249.4,
    maxRange: 'έως 70 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    id: 2,
    type: 'ΜΟΛΥΒΔΟΥ (Pb)',
    kWh: '120/8.5',
    price: 1706.24,
    maxRange: 'έως 90 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Pb_.jpg',
    models: ['ecocar Low Speed', 'ecocar High Speed'],
  },
  {
    id: 3,
    type: 'ΛΙΘΙΟΥ (Li-On)',
    kWh: '100/7.5',
    price: 2404.4,
    maxRange: 'έως 90 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    id: 4,
    type: 'ΛΙΘΙΟΥ (Li-On)',
    kWh: '155/11.5',
    price: 3724.4,
    maxRange: 'έως 120 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    id: 5,
    type: 'ΛΙΘΙΟΥ (Li-On)',
    kWh: '206/15',
    price: 4853.62,
    maxRange: 'έως 160 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    id: 6,
    type: 'ΛΙΘΙΟΥ (Li-On)',
    kWh: '277/20.5',
    price: 6099.7,
    maxRange: 'έως 220 χλμ',
    image: 'https://ecocar.city/wp-content/uploads/2021/11/Li-On.jpg',
    models: [
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
]

export const colors = [
  {
    name: 'ΑΣΠΡΟ',
    price: 0,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-white.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-white.jpg',
      },
      {
        model: 'ecocar Pick Up High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_6040_523x414.jpg',
      },
      {
        model: 'ecocar Van High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2018/09/DSC_2892_535x414.jpg',
      },
    ],
  },
  {
    name: 'ΚΟΚΚΙΝΟ',
    price: 0,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-red.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-red.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-red.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-red.jpg',
      },
    ],
  },
  {
    name: 'ΚΙΤΡΙΝΟ',
    price: 0,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-yellow.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-yellow.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-yellow.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-yellow.jpg',
      },
    ],
  },
  {
    name: 'ΠΡΑΣΙΝΟ',
    price: 0,
    image:
      'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-laxani-1.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-laxani.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-laxani-1.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-laxani-1.jpg',
      },
    ],
  },
  {
    name: 'ΠΟΡΤΟΚΑΛΙ',
    price: 0,
    image:
      'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-portokali-1.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-orange.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-portokali-1.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-portokali-1.jpg',
      },
    ],
  },
  {
    name: 'ΡΟΖ',
    price: 0,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-fux-1.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-pink.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-fux-1.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/DSC7097-fux-1.jpg',
      },
    ],
  },
  {
    name: 'ΚΑΦΕ',
    price: 148.8,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-brown.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-brown.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-brown.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-brown.jpg',
      },
    ],
  },
  {
    name: 'ΜΠΛΕ',
    price: 148.8,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-blue.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-blue.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-blue.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-blue.jpg',
      },
    ],
  },
  {
    name: 'ΜΩΒ',
    price: 148.8,
    image: 'https://ecocar.city/wp-content/uploads/2021/05/ecocar-purple.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-purple.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-purple.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/05/ecocar-purple.jpg',
      },
    ],
  },
  {
    name: 'ΜΑΥΡΟ ΜΑΤ',
    price: 148.8,
    image:
      'https://ecocar.city/wp-content/uploads/2021/10/ecocar-black-mat.jpg',
    thumb: 'https://ecocar.city/wp-content/uploads/2021/11/color-black.jpg',
    models: [
      {
        model: 'ecocar High Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/10/ecocar-black-mat.jpg',
      },
      {
        model: 'ecocar Low Speed',
        image:
          'https://ecocar.city/wp-content/uploads/2021/10/ecocar-black-mat.jpg',
      },
    ],
  },
]

export const interiors = [
  {
    type: 'ΒΑΣΙΚΟΣ',
    price: 0,
    image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_8689ok.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ',
    price: 186,
    image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0978ok.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    type: '2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
    price: 310,
    image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0963ok.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    type: 'ΔΕΡΜΑΤΙΝΟ ΤΙΜΟΝΙ & 2ΧΡΩΜΑ ΚΑΘΙΣΜΑΤΑ ΔΕΡΜΑΤΙΝΗΣ',
    price: 496,
    image: 'https://ecocar.city/wp-content/uploads/2021/11/MAK_0968-ok.jpg',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
]

export const components = [
  {
    name: 'MP5',
    price: 422,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Κάμερα οπισθοπορείας (απαιτείται MP5)',
    price: 114.01,
    requires: 'MP5',
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Σκίαστρο',
    price: 116.99,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Ηλεκτρικά υποβοηθούμενο τιμόνι',
    price: 558,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Κλιματισμός',
    price: 1282,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Αντηλιακές Μεμβράνες αυτοκινήτου - Επίπεδο 1ο',
    price: 149,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Φ/Β Συλλέκτης οροφής',
    price: 232,
    models: [
      'ecocar Low Speed',
      'ecocar High Speed',
      'ecocar Pick Up High Speed',
      'ecocar Van High Speed',
    ],
  },
  {
    name: 'Ισοθερμικός Θάλαμος',
    price: 2480,
    models: ['ecocar Van High Speed'],
  },
  {
    name: 'Ισοθερμικός Θάλαμος με ψυκτικό μηχάνημα',
    price: 6448,
    models: ['ecocar Van High Speed'],
  },
]
