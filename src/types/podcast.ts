export interface Summary {
  title: string;
  summary: string;
  duration: string;
}

export interface AudioFile {
  file: File;
  type: 'upload';
}

export interface PodcastURL {
  url: string;
  type: 'url';
}

export type AudioSource = AudioFile | PodcastURL;