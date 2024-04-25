import {IArticlesOption} from '../screens'

export enum MainStackScreen {
  BottomTabNavigator = 'BottomTabNavigator',
}

export enum BottomTabStack {
  ArticlesStackNavigator = 'ArticlesStackNavigator',
  AudioScreen = 'AudioScreen',
}

export enum ArticlesStack {
  ArticlesScreen = 'ArticlesScreen',
  ArticleScreen = 'ArticleScreen',
}

export type BottomTabParamList = {
  ArticlesStackNavigator: undefined
  AudioScreen: undefined
}
export type ArticlesStackList = {
  [ArticlesStack.ArticlesScreen]: undefined
  [ArticlesStack.ArticleScreen]: {article: IArticlesOption}
}
