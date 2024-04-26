/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {PlaybackService} from './app/services/PlaybackService'
import TrackPlayer from 'react-native-track-player'

TrackPlayer.registerPlaybackService(() => PlaybackService)

if (__DEV__) {
  import('./ReactotronConfig').then()
}

AppRegistry.registerComponent(appName, () => App)
