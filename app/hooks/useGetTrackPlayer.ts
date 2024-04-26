import {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import RNBlobUtil from 'react-native-blob-util'
import {selectAudioTrack} from '../store/selectors/articles.ts'
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player'

import {AddAudioTrack, SetupPlayer} from '../services/PlaybackService.ts'
import {downloadFile} from '../services/DownloadFile.ts'
import {IAudiOption} from '../screens'

const events = [Event.PlaybackState, Event.PlaybackError]

export const useGetTrackPlayer = () => {
  const audioTrack = useSelector(selectAudioTrack)

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false)
  const [playerState, setPlayerState] = useState<string>('')
  const [isDownload, setIsDownload] = useState<boolean>(false)

  const stopPlayer = async () => {
    await TrackPlayer.stop()
    await TrackPlayer.removeUpcomingTracks()
    await TrackPlayer.reset()
    setIsPlayerReady(false)
  }

  const checkExistFile = async () => {
    const pathToCheck =
      RNBlobUtil.fs.dirs.DownloadDir + `/${audioTrack[0]?.name}.mp3`
    const isExist = await RNBlobUtil.fs.exists(pathToCheck)
    setIsDownload(isExist)
    return {isExist, pathToCheck}
  }

  useEffect(() => {
    if (!!audioTrack && isPlayerReady)
      stopPlayer().then(async () => {
        const {isExist, pathToCheck} = await checkExistFile()
        if (!isExist) {
          await setup('')
        } else {
          await setup(pathToCheck)
        }
      })
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

  const setup = async (localPathToTrack: string) => {
    let isSetUp = await SetupPlayer()

    if (isSetUp && !!audioTrack[0]?.media.url) {
      if (!localPathToTrack) {
        await AddAudioTrack([{url: audioTrack[0]?.media.url}])
      } else {
        await AddAudioTrack([{url: `file://${localPathToTrack}`}])
      }
    }
    setIsPlayerReady(isSetUp)
  }

  const togglePlayBack = async (audioTrack: IAudiOption) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex()
    const playbackState = (await TrackPlayer.getPlaybackState()).state

    if (currentTrack !== null) {
      if (playbackState === State.Paused || playbackState === State.Ready) {
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }

    if (!isDownload) await downloadFile(audioTrack, setIsDownload)
  }

  const handleSheetChanges = useCallback(
    async (index: number) => {
      if (index === 1) {
        const {isExist, pathToCheck} = await checkExistFile()
        if (!isExist) {
          await setup('')
        } else {
          await setup(pathToCheck)
        }
      }
      if (index === -1) await stopPlayer()
    },
    [audioTrack],
  )

  const changeBtnTitle = () => {
    if (isDownload) {
      if (!isPlaying) {
        return 'Play Track'
      } else {
        return 'Pause'
      }
    } else {
      if (!isPlaying) {
        return 'Download'
      } else {
        return 'Pause'
      }
    }
  }

  return {
    handleSheetChanges,
    togglePlayBack,
    isPlaying,
    audioTrack,
    isPlayerReady,
    isDownload,
    changeBtnTitle,
  }
}
