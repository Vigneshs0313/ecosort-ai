export interface Process { title: string; summary: string; steps: string[] }

export const SEGREGATION_HOME = [
  'Use at least two containers: wet (organic) and dry (recyclables). Add a small box for e-waste and hazardous items.',
  'Rinse and dry recyclables so they do not contaminate other waste.',
  'Keep sanitary and medical waste separate and wrapped, as your local rules require.',
  'Compost kitchen scraps if you have space, or hand wet waste to your collector daily.',
]
export const SEGREGATION_COLLEGE = [
  'Place paired bins (wet and dry) in classrooms, hostels, canteens and labs, with clear colour labels and pictures.',
  'Set up a collection box for batteries, chargers and small electronics at the department or library.',
  'Run a paper collection drive and send clean paper to a recycler instead of the general bin.',
  'Compost canteen food waste and garden leaves on campus.',
  'Review contamination each week and share results so people see the effect.',
]

export const PROCESSES: Process[] = [
  { title: 'Plastic recycling', summary: 'Plastics are sorted by resin type, then cleaned and reprocessed.', steps: ['Collection and sorting by resin type and colour.', 'Shredding into flakes and washing to remove labels and residue.', 'Melting and filtering into pellets.', 'Pellets are manufactured into new products such as containers, fibre or furniture.'] },
  { title: 'Paper recycling', summary: 'Paper is pulped, cleaned and pressed into new sheets.', steps: ['Collection and sorting by grade.', 'Pulping with water to separate fibres.', 'Removing staples, ink and contaminants.', 'Pressing and drying into new paper or board. Fibres weaken after several cycles.'] },
  { title: 'Metal recycling', summary: 'Metals are sorted, melted and recast without losing quality.', steps: ['Separation of ferrous (magnetic) and non-ferrous metals such as aluminium.', 'Shredding or baling.', 'Melting in a furnace.', 'Casting into ingots and rolling into new products.'] },
  { title: 'Glass recycling', summary: 'Glass is crushed into cullet and melted into new containers.', steps: ['Sorting by colour where required.', 'Crushing into cullet and removing caps and labels.', 'Melting with raw materials at a lower furnace temperature.', 'Moulding into new bottles and jars.'] },
  { title: 'Organic composting', summary: 'Microbes turn food and garden waste into soil-enriching compost.', steps: ['Collect vegetable scraps, leaves and tea leaves, and avoid plastic.', 'Layer wet (green) waste with dry leaves or cardboard.', 'Keep the heap moist and turn it every week or two for air.', 'After about 2 to 3 months, use the dark crumbly compost on plants.'] },
  { title: 'E-waste disposal safety', summary: 'Electronics contain recoverable metals and hazardous substances.', steps: ['Never put batteries or electronics in general bins.', 'Tape battery terminals and store them in a dry container.', 'Do not open or crush devices or batteries.', 'Hand them to an authorised collector or take-back programme.'] },
]

export const DOS = [
  'Segregate at the source, before waste mixes.',
  'Empty, rinse and dry recyclables.',
  'Flatten boxes and bottles to save space.',
  'Keep batteries and electronics separate.',
  'Check your local rules for accepted materials.',
  'Reuse, repair and refill before recycling.',
]
export const DONTS = [
  'Do not put food-soiled items in recycling bins.',
  'Do not bag recyclables inside plastic bags unless asked.',
  'Do not throw batteries or electronics in the trash.',
  'Do not burn plastic or mixed waste.',
  'Do not assume every item in a category is recyclable.',
  'Do not mix broken glass with loose waste without wrapping it.',
]
