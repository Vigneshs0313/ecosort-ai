import type { CategoryId } from './categories'

/**
 * Transparent label → disposal-category mapping for MobileNet (ImageNet-1k) predictions.
 *
 * IMPORTANT: ImageNet is NOT a waste dataset. Its 1000 classes contain everyday objects
 * (bottles, cans, fruit, phones…). We match a prediction's label against the keyword lists
 * below to SUGGEST a category. The suggestion is a heuristic, shown to the user as such.
 * Order matters: the first rule that matches wins, so e-waste is checked before paper
 * ("notebook, notebook computer" is a laptop in ImageNet).
 * Batteries and most packaging waste have no ImageNet class, so they need manual selection.
 */
export interface MapRule { category: CategoryId; keywords: string[] }

export const IMAGENET_RULES: MapRule[] = [
  { category: 'ewaste', keywords: ['cellular telephone', 'mobile phone', 'laptop', 'notebook computer', 'hand-held computer', 'desktop computer', 'computer keyboard', 'mouse, computer', 'remote control', 'ipod', 'hard disc', 'modem', 'monitor', 'screen, crt', 'television', 'joystick', 'radio', 'loudspeaker', 'speaker', 'digital clock', 'digital watch', 'cd player', 'cassette player', 'dial telephone', 'pay-phone', 'electric fan', 'space heater', 'printer', 'projector', 'power drill', 'router', 'iron, smoothing', 'hair dryer', 'toaster', 'microwave', 'washer', 'electric guitar', 'oscilloscope', 'plug', 'switch, electric', 'camera', 'reflex camera', 'polaroid' ] },
  { category: 'glass', keywords: ['beer bottle', 'wine bottle', 'red wine', 'whiskey jug', 'vase', 'goblet', 'beer glass', 'pitcher', 'perfume', 'cocktail shaker' ] },
  { category: 'plastic', keywords: ['water bottle', 'pop bottle', 'soda bottle', 'plastic bag', 'water jug', 'pill bottle', 'lotion', 'sunscreen', 'soap dispenser', 'bucket', 'pail', 'measuring cup', 'bottlecap', 'shower cap', 'hamper', 'laundry basket', 'crate', 'rain barrel', 'diaper', 'mixing bowl', 'plate rack', 'lunchbox' ] },
  { category: 'metal', keywords: ['milk can', 'tin', 'can opener', 'frying pan', 'wok', 'caldron', 'cauldron', 'pot, flowerpot', 'strainer', 'thimble', 'safety pin', 'nail', 'screw', 'padlock', 'chain', 'cleaver', 'ladle', 'spatula', 'corkscrew', 'barbell', 'dumbbell', 'trash can', 'ashcan', 'oil filter', 'tray', 'coffeepot', 'teapot', 'kettle', 'stove', 'hammer', 'screwdriver', 'wrench' ] },
  { category: 'paper', keywords: ['carton', 'envelope', 'packet', 'paper towel', 'toilet tissue', 'notebook', 'book jacket', 'binder', 'menu', 'crossword', 'comic book', 'newspaper', 'paper bag', 'cardboard', 'box', 'handkerchief', 'tissue', 'paper', 'file, file cabinet', 'rule, ruler', 'pencil box', 'web site'] },
  { category: 'organic', keywords: ['banana', 'orange', 'lemon', 'strawberry', 'pineapple', 'pomegranate', 'fig', 'granny smith', 'jackfruit', 'custard apple', 'corn', 'cucumber', 'zucchini', 'broccoli', 'cauliflower', 'cabbage', 'mushroom', 'artichoke', 'bell pepper', 'squash', 'pizza', 'bagel', 'pretzel', 'hotdog', 'hot dog', 'cheeseburger', 'hamburger', 'guacamole', 'burrito', 'potpie', 'meat loaf', 'acorn', 'cardoon', 'head cabbage', 'mashed potato', 'carbonara', 'french loaf', 'dough', 'ice cream', 'trifle', 'chocolate sauce', 'apple', 'coral fungus', 'agaric', 'gyromitra', 'stinkhorn', 'earthstar', 'hen-of-the-woods', 'bolete', 'leaf'] } ]

export interface MapResult { category: CategoryId; matchedKeyword: string }

/** Match a single model label (may be "pop bottle, soda bottle") against the rules. */
export function mapLabel(label: string): MapResult | null {
  const l = label.toLowerCase()
  for (const rule of IMAGENET_RULES) {
    for (const k of rule.keywords) {
      if (l.includes(k)) return { category: rule.category, matchedKeyword: k }
    }
  }
  return null
}

/** Item names for custom-model labels that are already category ids/names. */
export function mapCustomLabel(label: string): CategoryId | null {
  const l = label.toLowerCase().trim()
  const direct: Record<string, CategoryId> = {
    plastic: 'plastic', paper: 'paper', cardboard: 'paper', 'paper & cardboard': 'paper', metal: 'metal',
    glass: 'glass', organic: 'organic', biological: 'organic', compost: 'organic', ewaste: 'ewaste',
    'e-waste': 'ewaste', battery: 'ewaste', batteries: 'ewaste', hazardous: 'ewaste', trash: 'general',
    general: 'general', clothes: 'general', shoes: 'general', 'brown-glass': 'glass', 'green-glass': 'glass', 'white-glass': 'glass',
  }
  if (direct[l]) return direct[l]
  return mapLabel(l)?.category ?? null
}
