import { CustomMDX } from "@/components/mdx/mdx-remote"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"

export const ProjectContentDrawer = ({ content }: { content: any }) => {
  return (
    <Drawer>
      <DrawerTrigger className="hover:bg-primary hover:text-background tw-transition p-5 text-center font-medium uppercase">
        {`More Info`}
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea className="mx-auto h-[75vh] w-full max-w-prose p-5 md:p-10">
          <CustomMDX source={content} />
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
