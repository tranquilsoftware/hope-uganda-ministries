import type React from "react"
import { ArrowUpRight, Target, Briefcase, DollarSign } from "lucide-react"
import { useNavigation } from "../../utils/navigationUtils"

interface CardData {
  id: string
  title: string
  subtitle: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  featured?: boolean
}

const cardData: CardData[] = [

  {
    id: "events",
    title: "Fund distribution",
    subtitle: "Where the donations go",
    href: "/get-involved/fund-distribution",
    icon: DollarSign,
    featured: false,
  },

  {
    id: "fundraising",
    title: "Fundraising",
    subtitle: "Raise funds for Orphans",
    href: "/get-involved/fundraising",
    icon: Target,
    featured: true,
  },

  {
    id: "corporate",
    title: "Corporate Giving",
    subtitle: "Let's become partners",
    href: "/get-involved/corporate-fundraising",
    icon: Briefcase,
    featured: false,
  },
]

interface IconCardProps {
  card: CardData
}

function IconCard({ card }: IconCardProps) {
  const { title, subtitle, href, icon: Icon, featured } = card
  const navigate = useNavigation()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(href, true)
  }

  return (
    <div className="group relative">
      <a
        href={href}
        onClick={handleClick}
        className={`
          block relative overflow-hidden rounded-2xl p-6 h-48 transition-all duration-300 ease-out cursor-pointer
          hover:scale-105 hover:shadow-xl border border-border
          ${
            featured
              ? "bg-gradient-to-br from-primary to-primary-dark text-foreground border-0"
              : "bg-background-secondary text-content hover:bg-accent-light/50"
          }
        `}
      >
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className={`w-5 h-5 ${featured ? 'text-foreground' : 'text-accent'}`} />
        </div>

        {/* Main Icon */}
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="relative">
              <Icon
                className={`
                w-12 h-12 transition-all duration-500 ease-out
                group-hover:scale-125 group-hover:rotate-3
                ${featured ? "text-foreground" : "text-primary"}
              `}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-end">
            <h3
              className={`
              text-lg font-semibold mb-2 transition-all duration-300
              ${featured ? "text-foreground" : "text-content"}
            `}
            >
              {title}
            </h3>
            <p
              className={`
              text-sm transition-all duration-300
              ${featured ? "text-foreground/80" : "text-content-muted"}
            `}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div
          className={`
          absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl
          ${featured ? "bg-foreground" : "bg-primary"}
        `}
        />
      </a>
    </div>
  )
}

// Function to determine the number of columns based on screen size and number of items
const getGridCols = (count: number) => {
  if (count >= 5) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
  if (count === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
  if (count === 3) return 'grid-cols-1 sm:grid-cols-3';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
  return 'grid-cols-1';
};

export default function IconCardsGrid() {
  const gridCols = getGridCols(cardData.length);
  
  return (
    <div className="w-full max-w-7xl mx-auto p-2">
      <div className={`grid ${gridCols} gap-4`}>
        {cardData.map((card) => (
          <IconCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}