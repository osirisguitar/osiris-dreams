export interface Song {
  id: string
  name: string
  albumCover?: string
  services: Record<string, { url: string; linkText: string }>
  fileName?: string
}
