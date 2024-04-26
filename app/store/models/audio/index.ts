import {IAudiOptionState} from '../../../screens'

export interface IAudioState {
  error: string | null
  loading: boolean
  audios: []
  audioTrack: IAudiOptionState[]
}
