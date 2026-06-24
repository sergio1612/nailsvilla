"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type UseCarouselAutoplayOptions = {
  itemCount: number
  currentIndex?: number
  intervalMs?: number
  paused?: boolean
  onIndexChange?: (index: number) => void
}

function scrollCarouselToItem(carousel: HTMLElement, item: HTMLElement) {
  const carouselRect = carousel.getBoundingClientRect()
  const itemRect = item.getBoundingClientRect()
  const targetScrollLeft =
    carousel.scrollLeft +
    (itemRect.left - carouselRect.left) -
    (carouselRect.width - itemRect.width) / 2

  carousel.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: "smooth",
  })
}

export function useCarouselAutoplay({
  itemCount,
  currentIndex = 0,
  intervalMs = 4500,
  paused = false,
  onIndexChange,
}: UseCarouselAutoplayOptions) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(currentIndex)
  const userPausedRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    activeIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)")
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
    )

    observer.observe(carousel)
    return () => observer.disconnect()
  }, [])

  const scrollToIndex = useCallback(
    (index: number) => {
      const carousel = carouselRef.current
      if (!carousel) return

      const item = carousel.querySelector<HTMLElement>(
        `[data-carousel-index="${index}"]`
      )
      if (!item) return

      scrollCarouselToItem(carousel, item)

      activeIndexRef.current = index
      onIndexChange?.(index)
    },
    [onIndexChange]
  )

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || itemCount <= 1) return

    const pauseUser = () => {
      userPausedRef.current = true
    }

    const resumeUser = () => {
      window.setTimeout(() => {
        userPausedRef.current = false
      }, 4000)
    }

    carousel.addEventListener("touchstart", pauseUser, { passive: true })
    carousel.addEventListener("pointerdown", pauseUser)
    carousel.addEventListener("touchend", resumeUser, { passive: true })
    carousel.addEventListener("pointerup", resumeUser)

    return () => {
      carousel.removeEventListener("touchstart", pauseUser)
      carousel.removeEventListener("pointerdown", pauseUser)
      carousel.removeEventListener("touchend", resumeUser)
      carousel.removeEventListener("pointerup", resumeUser)
    }
  }, [itemCount])

  useEffect(() => {
    if (!isMobile || !isInView || itemCount <= 1 || paused) return

    const interval = window.setInterval(() => {
      if (userPausedRef.current) return
      const next = (activeIndexRef.current + 1) % itemCount
      scrollToIndex(next)
    }, intervalMs)

    return () => window.clearInterval(interval)
  }, [isMobile, isInView, itemCount, intervalMs, paused, scrollToIndex])

  return { carouselRef, scrollToIndex }
}
