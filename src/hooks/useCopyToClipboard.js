import { useCallback, useState } from 'react'

export function useCopyToClipboard(timeout = 2000) {
  const [copiedKey, setCopiedKey] = useState(null)

  const copy = useCallback(
    async (text, key) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopiedKey(key)
        setTimeout(() => setCopiedKey(null), timeout)
        return true
      } catch {
        return false
      }
    },
    [timeout],
  )

  return { copiedKey, copy }
}
