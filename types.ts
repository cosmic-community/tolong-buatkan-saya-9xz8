// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image structure from Cosmic file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Character object
export interface Character extends CosmicObject {
  type: 'characters';
  metadata: {
    nama?: string;
    ilustrasi?: CosmicImage;
    peran?: string;
    kepribadian?: string;
    deskripsi?: string;
  };
}

// Scene object
export interface Scene extends CosmicObject {
  type: 'scenes';
  metadata: {
    judul_adegan?: string;
    nomor_urut?: number;
    latar?: string;
    naskah?: string;
    deskripsi_visual?: string;
    gambar_referensi?: CosmicImage;
    karakter?: Character[];
  };
}

// Episode object
export interface Episode extends CosmicObject {
  type: 'episodes';
  metadata: {
    judul_episode?: string;
    sinopsis?: string;
    sampul?: CosmicImage;
    adegan?: Scene[];
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isCharacter(obj: CosmicObject): obj is Character {
  return obj.type === 'characters';
}

export function isScene(obj: CosmicObject): obj is Scene {
  return obj.type === 'scenes';
}

export function isEpisode(obj: CosmicObject): obj is Episode {
  return obj.type === 'episodes';
}