import { GridIcon, ListIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

export const ViewToggle = ({
  isToggled,
  setToggle,
}: {
  isToggled: boolean
  setToggle: () => void
}) => {
  return (
    <Button variant="ghost" className="self-end" onClick={() => setToggle()}>
      {isToggled ? "List View" : "Grid View"}
    </Button>
  )
}
