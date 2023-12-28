import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ViewState = {
  isToggled: boolean
}

export type ViewActions = {
  setToggle: () => void
}

const initialViewState: ViewState = {
  isToggled: false,
}

export const useViewStore = create<ViewState & ViewActions>()(
  persist(
    (set) => ({
      ...initialViewState,
      setToggle: () => set((state) => ({ isToggled: !state.isToggled })),
    }),
    { name: "view-store", skipHydration: true }
  )
)
