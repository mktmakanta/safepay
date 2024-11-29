'use client'

import React, { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { CheckCircle, Clipboard } from 'lucide-react'

const CopyToClipboardButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            onClick={copyText}
            className="px-2 py-2 w-8 h-8 flex justify-center items-center bg-green-500 text-white rounded-sm "
          >
            {isCopied ? (
              <CheckCircle size={20} className="text-white" />
            ) : (
              <Clipboard size={20} className="text-white" />
            )}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span className="bg-black text-white py-1 px-2 rounded-md ">
            {isCopied ? 'Text copied!' : 'Click to copy'}
          </span>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default CopyToClipboardButton
