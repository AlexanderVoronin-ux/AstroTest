import {MediaType} from '../../../screens'

type AudiOptionState = {
  id: number
  name: string
  title: string
  icon: string
  media: MediaType
  paid: boolean
}

export interface IAudioState {
  error: string | null
  loading: boolean
  audios: []
  audioTrack: AudiOptionState[]
}
