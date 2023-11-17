export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  brewers_tips?: string;
  contributed_by?: string;
  tagline?: string;
  first_brewed?: string;
  abv?: number;
  ibu?: number;
  target_fg?: number;
  target_og: number;
  ebc?: number | null;
  srm?: number | null;
  ph?: number;
  attenuation_level?: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp?: {
      temp?: {
        value?: number;
        unit?: string;
      };
      duration: number | null;
    }[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist?: string | null;
  };
  ingredients?: {
    malt?: {
      name?: string;
      amount?: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  food_pairing: string[];
}

export const mockBeerList: Beer[] = [
  {
    id: 81,
    name: 'India Session Lager - Prototype Challenge',
    tagline: 'Refreshing Hop Fix.',
    first_brewed: '11/2015',
    description:
      'BrewDog’s level of dry-hop to a beer formed with a baseline of 100% pilsner malt – and at under 4.5% ABV – gives you a style that flirts at the edges of several others. Think aromas of fresh cut grass, nettle, white grape, melon, tangerine - with similar flavours leading to a dry, bitter finish.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.4,
    ibu: 35,
    target_fg: 1007,
    target_og: 1040,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 79.5,
    volume: { value: 20, unit: 'litres' },
    boil_volume: { value: 25, unit: 'litres' },
    method: {
      mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }],
      fermentation: { temp: { value: 10, unit: 'celsius' } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: 'Pilsner', amount: { value: 3.25, unit: 'kilograms' } },
        { name: 'Dextrin Malt', amount: { value: 0.38, unit: 'kilograms' } },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: { value: 2.5, unit: 'grams' },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: { value: 25, unit: 'grams' },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: { value: 12.5, unit: 'grams' },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: { value: 25, unit: 'grams' },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: { value: 12.5, unit: 'grams' },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: { value: 63, unit: 'grams' },
          add: 'dry hop',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: { value: 63, unit: 'grams' },
          add: 'dry hop',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: { value: 63, unit: 'grams' },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: [
      'Tomato and rosemary palmiers',
      'Bratwurst with sauerkraut',
      'Lemon drizzle cake',
    ],
    brewers_tips:
      'Let the beer lager at a low temperature for 3-4 weeks before adding the dry hops.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
];
