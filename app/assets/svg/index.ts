import articles from './articles.tsx'
import audio from './audio.tsx'
import chevronLeft from './chevronLeft.tsx'

export const icons = {
  articles,
  audio,
  chevronLeft,
}

export type IconTypes = keyof typeof icons
