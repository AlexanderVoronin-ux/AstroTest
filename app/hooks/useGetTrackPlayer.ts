import {useSelector} from 'react-redux'
import {selectAudioTrack} from '../store/selectors/articles.ts'
import {useCallback, useEffect, useState} from 'react'
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player'
import {AddAudioTrack, SetupPlayer} from '../services/PlaybackService.ts'

const events = [Event.PlaybackState, Event.PlaybackError]

export const useGetTrackPlayer = () => {
  const audioTrack = useSelector(selectAudioTrack)

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false)
  const [playerState, setPlayerState] = useState<string>('')

  const stopPlayer = async () => {
    await TrackPlayer.stop()
    await TrackPlayer.removeUpcomingTracks()
    await TrackPlayer.reset()
  }

  useEffect(() => {
    if (!!audioTrack && isPlayerReady) stopPlayer().then(() => setup())
  }, [audioTrack])

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.')
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state)
    }
  })

  const isPlaying = playerState === State.Playing

  const setup = async () => {
    let isSetUp = await SetupPlayer()

    if (isSetUp && !!audioTrack?.media.url) {
      await AddAudioTrack([{url: audioTrack?.media.url}])
    }
    setIsPlayerReady(isSetUp)
  }

  const togglePlayBack = async () => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex()
    const playbackState = (await TrackPlayer.getPlaybackState()).state

    if (currentTrack !== null) {
      if (playbackState === State.Paused || playbackState === State.Ready) {
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }
  }

  const handleSheetChanges = useCallback(
    async (index: number) => {
      if (index === 1) await setup()
      if (index === -1) await stopPlayer()
    },
    [audioTrack],
  )

  return {
    handleSheetChanges,
    togglePlayBack,
    isPlaying,
    audioTrack,
    isPlayerReady,
  }
}
