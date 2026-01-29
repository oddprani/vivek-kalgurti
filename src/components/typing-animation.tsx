"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
    texts: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
}

export default function TypingAnimation({ texts, typeSpeed = 100, backSpeed = 50, backDelay = 1500 }: TypingAnimationProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingInterval, setTypingInterval] = useState(typeSpeed)

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setTypingInterval(backSpeed)
      } else {
        setText(fullText.substring(0, text.length + 1))
        setTypingInterval(typeSpeed)
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), backDelay)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingInterval)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, texts, typeSpeed, backSpeed, backDelay, typingInterval])

  return (
    <span className="text-red-500 border-r-2 border-red-500" aria-label={text}>
      {text}
    </span>
  )
}
