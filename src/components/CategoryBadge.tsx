import { CAT_BY_ID, type CategoryId } from '../data/categories'

export default function CategoryBadge({ id }: { id: CategoryId }) {
  const c = CAT_BY_ID[id]
  const Icon = c.icon
  return (
    <span className="chip" style={{ background: c.color + '1f', color: c.color }}>
      <Icon size={14} /> <span className="text-ink">{c.short}</span>
    </span>
  )
}
