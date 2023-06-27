import { GridIcon, ListIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const ViewToggle = ({
  toggleViewMode,
  setToggleViewMode,
}: {
  toggleViewMode: boolean
  setToggleViewMode: (value: boolean) => void
}) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <ListIcon
        onClick={() => setToggleViewMode((toggleViewMode = false))}
        className={cn(toggleViewMode ? "opacity-30" : "opacity-100")}
      />
      <GridIcon
        onClick={() => setToggleViewMode((toggleViewMode = true))}
        className={cn(!toggleViewMode ? "opacity-30" : "opacity-100")}
      />
    </div>
  )
}
