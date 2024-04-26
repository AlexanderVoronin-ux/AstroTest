import TrackPlayer, {Event, AddTrack} from 'react-native-track-player'

export async function SetupPlayer() {
  let isSetUp = false
  try {
    await TrackPlayer.getActiveTrackIndex()
    isSetUp = true
  } catch (e) {
    await TrackPlayer.setupPlayer()
    isSetUp = true
  } finally {
    return isSetUp
  }
}

// export async function AddTrack(track: []) {
export async function AddAudioTrack(track: AddTrack[]) {
  await TrackPlayer.add(track)
}

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
}
