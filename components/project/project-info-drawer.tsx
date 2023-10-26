"use client"

import { Drawer } from "vaul"

import { Mdx } from "../mdx/mdx-components"
import { Button } from "../ui/button"

export const ProjectInfoDrawer = ({ body }: { body: any }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="w-full p-5 text-center font-medium uppercase hover:bg-primary hover:text-background">
          More
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 flex max-h-[96%] flex-col rounded-t-[10px] bg-primary text-background">
          <div className="prose-xl prose-invert mx-auto w-full max-w-prose overflow-auto rounded-t-[10px] p-5 py-10">
            <Mdx code={body} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

// // mx-auto flex  max-w-md flex-col
