
export type ViewTransitionEvent<T> = {
    nextView: ViewStates
    props?: T
}
  
export enum ViewStates {
    GameView = 'GameView',
    PlatformView = 'PlatformView',
    GameDetailsView = 'GameDetailsViews'
}