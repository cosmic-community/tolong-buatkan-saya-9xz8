import { createBucketClient } from '@cosmicjs/sdk'
import type { Character, Scene, Episode } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render any metafield value as a string
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

// ---------- Characters ----------
export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'characters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch characters')
  }
}

export async function getCharacter(slug: string): Promise<Character | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'characters', slug })
      .depth(1)
    const character = response.object as Character
    if (!character) return null
    return character
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch character')
  }
}

// ---------- Scenes ----------
export async function getScenes(): Promise<Scene[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'scenes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const scenes = response.objects as Scene[]
    return scenes.sort((a, b) => {
      const orderA = a.metadata?.nomor_urut ?? 0
      const orderB = b.metadata?.nomor_urut ?? 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch scenes')
  }
}

export async function getScene(slug: string): Promise<Scene | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'scenes', slug })
      .depth(1)
    const scene = response.object as Scene
    if (!scene) return null
    return scene
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch scene')
  }
}

// ---------- Episodes ----------
export async function getEpisodes(): Promise<Episode[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'episodes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(2)
    return response.objects as Episode[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch episodes')
  }
}

export async function getEpisode(slug: string): Promise<Episode | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'episodes', slug })
      .depth(2)
    const episode = response.object as Episode
    if (!episode) return null
    return episode
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch episode')
  }
}