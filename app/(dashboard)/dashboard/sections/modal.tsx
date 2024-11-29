'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="fixed inset-0 bg-black/50 z-10 " />
      <DialogContent
        className="fixed inset-0 flex items-center justify-center  z-20 m-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem]">
          <DialogTitle className="text-2xl font-bold  text-center mb-5">Notifications</DialogTitle>
          <DialogDescription className=" mb-3 space-y-2 ">
            <span className="font-medium block my-2 text-lg">Dear Users,</span>
            <span className="text-sm text-gray-600 lg:text-base">
              Dear Users, We’re currently experiencing a technical issue that may impact your
              ability to e.g., "purchased data" or "process new orders". Our engineers are aware of
              the situation and are working tirelessly to bring everything back online.
            </span>
          </DialogDescription>
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
          >
            OK
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
