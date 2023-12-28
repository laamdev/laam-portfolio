import { GridIcon, ListIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const ViewToggle = ({
  isToggled,
  setToggle,
}: {
  isToggled: boolean
  setToggle: () => void
}) => {
  return (
    <button className="self-end" onClick={() => setToggle()}>
      {isToggled ? "List View" : "Grid View"}
    </button>
  )
}
