"use client"

import { Disclosure, Transition } from "@headlessui/react"
import { PlusSmallIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

export const ProjectTable = ({
  tableTitle,
  rows,
  tableClassName,
  defaultOpen,
}: {
  tableTitle: string
  rows: any
  tableClassName?: string
  defaultOpen?: boolean
}) => {
  return (
    <dl>
      <Disclosure
        as="div"
        className={clsx("py-5", tableClassName)}
        defaultOpen={defaultOpen ?? false}
      >
        {({ open }: { open: any }) => (
          <>
            <dt>
              <Disclosure.Button className="group flex w-full items-start justify-between text-left text-zinc-50">
                <span
                  className={clsx(
                    "tw-transition text-base font-medium uppercase leading-7 tracking-wider group-hover:text-branding-300",
                    open ? "text-branding-300" : "text-zinc-300"
                  )}
                >
                  {tableTitle}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    className={clsx(
                      "tw-transition h-6 w-6 group-hover:text-branding-300",
                      open
                        ? "rotate-45 text-branding-300"
                        : "rotate-0 text-zinc-300"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as="dd" className="mt-2.5">
                {rows.map((row: any, rowIdx: number) => (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-3 items-baseline py-2.5 capitalize"
                  >
                    <h5 className="col-span-1 text-left text-sm tracking-wider text-zinc-500">
                      {row.label}
                    </h5>
                    <h4 className="col-span-2 text-right font-mono text-lg font-semibold">
                      {row.value}
                    </h4>
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </dl>
  )
}
