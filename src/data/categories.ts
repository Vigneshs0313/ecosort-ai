import { Container, FileText, Cylinder, Wine, Leaf, BatteryWarning, Trash2, type LucideIcon } from 'lucide-react'

export type CategoryId = 'plastic' | 'paper' | 'metal' | 'glass' | 'organic' | 'ewaste' | 'general'

export interface Category {
  id: CategoryId
  name: string
  short: string
  icon: LucideIcon
  color: string
  recyclable: boolean
  description: string
  examples: string[]
  bin: string
  steps: string[]
  importance: string
  impact: string
  avoid: string[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'plastic', name: 'Plastic', short: 'Plastic', icon: Container, color: '#0EA5E9', recyclable: true,
    description: 'Bottles, containers, wrappers and bags made from synthetic polymers. Many types are recyclable, but not all.',
    examples: ['Plastic bottles', 'Food containers', 'Packaging film', 'Plastic bags'],
    bin: 'Dry waste / recyclables (blue or dry bin, subject to local rules)',
    steps: ['Empty the item completely.', 'Rinse it if your local recycler asks for clean plastic.', 'Keep caps and labels as your local collection instructs.', 'Flatten bottles to save space, then place them in the dry recyclables bin.'],
    importance: 'Plastic can persist in soil and water for centuries and breaks into microplastics. Recycling keeps it in use and out of landfills and oceans.',
    impact: 'Recycling plastic generally uses far less energy than producing new plastic from fossil fuels.',
    avoid: ['Greasy or food-soiled plastic', 'Multi-layer sachets (often not accepted)'],
  },
  {
    id: 'paper', name: 'Paper & Cardboard', short: 'Paper', icon: FileText, color: '#F59E0B', recyclable: true,
    description: 'Newspapers, office paper, cartons and cardboard boxes. Paper fibres can be recycled several times when kept clean and dry.',
    examples: ['Newspapers', 'Notebook sheets', 'Cardboard boxes', 'Paper packaging'],
    bin: 'Dry waste / paper recycling bin',
    steps: ['Keep paper dry and free from food and grease.', 'Remove plastic tape, staples and covers where practical.', 'Flatten boxes.', 'Place in the dry recyclables bin or give to a paper collector.'],
    importance: 'Recycling paper reduces demand for virgin pulp and the water and energy used to make it.',
    impact: 'Recycled paper saves trees, water and energy compared with making paper from wood pulp.',
    avoid: ['Greasy pizza boxes', 'Used tissues and napkins', 'Wax- or plastic-coated paper cups (often not accepted)'],
  },
  {
    id: 'metal', name: 'Metal', short: 'Metal', icon: Cylinder, color: '#64748B', recyclable: true,
    description: 'Aluminium cans, steel tins and metal lids. Metals can be recycled repeatedly without losing quality.',
    examples: ['Aluminium cans', 'Steel food tins', 'Metal lids', 'Foil trays'],
    bin: 'Dry waste / recyclables (or a scrap collector for larger items)',
    steps: ['Empty and rinse food residue.', 'Crush cans lightly if your collector allows.', 'Keep sharp edges safely folded.', 'Place in the dry recyclables bin or hand over to a scrap dealer.'],
    importance: 'Mining and refining metal ore is energy intensive. Metal recycling cuts that demand dramatically.',
    impact: 'Recycling aluminium uses a small fraction of the energy needed to make it from ore.',
    avoid: ['Aerosol cans that are not empty', 'Paint tins with wet paint'],
  },
  {
    id: 'glass', name: 'Glass', short: 'Glass', icon: Wine, color: '#14B8A6', recyclable: true,
    description: 'Bottles and jars. Glass can be recycled indefinitely, but broken glass and some types (window, mirror, bulbs) are handled separately.',
    examples: ['Glass bottles', 'Jam jars', 'Glass containers'],
    bin: 'Dry waste / glass collection point (handle carefully)',
    steps: ['Empty and rinse the container.', 'Remove metal or plastic lids and recycle them separately.', 'Wrap broken glass in paper and label it for safety.', 'Place in the glass collection bin or give to a bottle collector.'],
    importance: 'Glass does not decompose in landfills. Recycling saves raw materials and furnace energy.',
    impact: 'Using recycled glass (cullet) lowers furnace temperature and raw material use.',
    avoid: ['Mirrors, window glass and ceramics', 'Light bulbs (check local e-waste or hazardous rules)'],
  },
  {
    id: 'organic', name: 'Organic / Biodegradable', short: 'Organic', icon: Leaf, color: '#16A34A', recyclable: true,
    description: 'Food scraps and garden waste that break down naturally. Composting turns them into soil nutrients.',
    examples: ['Vegetable and fruit peels', 'Food leftovers', 'Dry leaves', 'Tea leaves'],
    bin: 'Wet waste / green bin or home compost',
    steps: ['Keep organic waste separate from dry waste.', 'Drain excess liquid.', 'Place in the wet waste bin or a compost pit.', 'Do not mix with plastic, even "biodegradable" bags, unless your collector says it is accepted.'],
    importance: 'Food waste in landfills produces methane, a potent greenhouse gas. Composting avoids that and returns nutrients to soil.',
    impact: 'Composting cuts landfill methane and produces natural fertiliser.',
    avoid: ['Large amounts of oil', 'Meat and dairy in simple home compost (attracts pests)'],
  },
  {
    id: 'ewaste', name: 'E-waste / Hazardous', short: 'E-waste', icon: BatteryWarning, color: '#DC2626', recyclable: true,
    description: 'Batteries, chargers, phones and other electronics, plus hazardous household items. They contain materials that need specialist handling.',
    examples: ['Batteries', 'Phones and chargers', 'Circuit boards', 'CFL bulbs'],
    bin: 'Do not use ordinary bins. Use an authorised e-waste or hazardous waste collection point',
    steps: ['Keep the item separate from other waste.', 'Do not break open batteries or devices.', 'Tape the terminals of loose batteries.', 'Hand it to an authorised e-waste collector, a take-back programme or a campus collection box.'],
    importance: 'Heavy metals and chemicals can leach into soil and water, and damaged batteries can cause fires.',
    impact: 'Proper recovery returns valuable metals and prevents toxic leakage.',
    avoid: ['Throwing batteries in regular trash', 'Burning or dismantling devices at home'],
  },
  {
    id: 'general', name: 'General / Non-recyclable', short: 'General', icon: Trash2, color: '#78716C', recyclable: false,
    description: 'Items that cannot be safely recycled through ordinary collection, such as contaminated packaging and mixed-material waste.',
    examples: ['Contaminated packaging', 'Mixed-material items', 'Used tissues', 'Broken ceramics'],
    bin: 'General / residual waste bin (black or grey, subject to local rules)',
    steps: ['Check whether the item can be cleaned or separated into recyclable parts first.', 'If not, wrap sharp items safely.', 'Place in the residual waste bin.', 'Prefer reusable alternatives next time.'],
    importance: 'This waste usually goes to landfill or incineration, so reducing it at the source matters most.',
    impact: 'Every item you reuse or avoid reduces this stream.',
    avoid: ['Putting it in recycling bins, which can contaminate the whole batch'],
  },
]

export const CAT_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c])) as Record<CategoryId, Category>
