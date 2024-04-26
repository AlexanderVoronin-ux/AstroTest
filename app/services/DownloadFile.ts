import RNBlobUtil from 'react-native-blob-util'

import {IAudiOption} from '../screens'
import {Dispatch, SetStateAction} from 'react'

export const downloadFile = async (
  audioTrack: IAudiOption,
  setIsDownload: Dispatch<SetStateAction<boolean>>,
) => {
  const url = audioTrack?.media.url
  const pathToDownload =
    RNBlobUtil.fs.dirs.DownloadDir + `/${audioTrack?.name}.mp3`
  await RNBlobUtil.config({
    path: pathToDownload,
    fileCache: true,
    addAndroidDownloads: {
      // Show notification when response data transmitted
      notification: true,
      // Title of download notification
      title: `${audioTrack?.name}.mp3`,
      // File description (not notification description)
      description: 'MP3_File',
      // Make the file scannable  by media scanner
      mediaScannable: false,
    },
  })
    .fetch('GET', url, {})
    .then(res => {
      // the path should be dirs.DocumentDir + 'path-to-file.anything'
      console.log('The file saved to ', res.path())
    })

  setIsDownload(true)
}
