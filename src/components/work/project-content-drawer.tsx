import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"

export const ProjectContentDrawer = ({ content }: { content: any }) => {
  return (
    <Drawer>
      <DrawerTrigger className="hover:bg-primary hover:text-background tw-transition flex items-center justify-center gap-x-2.5 p-5 text-center text-sm font-bold uppercase md:text-base">
        <PlusIcon className="size-4" />
        <span>{`Info`}</span>
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea className="mx-auto h-[75vh] w-full max-w-prose p-5 md:p-10">
          {/* <CustomMDX source={content} /> */}
        </ScrollArea>

        <DrawerHeader>
          <DrawerClose>
            <Button variant="outline">{`Close`}</Button>
          </DrawerClose>
          {/* <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        {/* <DrawerFooter>
          <Button>Submit</Button>
        
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}
