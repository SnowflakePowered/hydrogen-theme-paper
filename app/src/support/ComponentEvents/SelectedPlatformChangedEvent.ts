import { Platform } from 'support/Snowflake'

export type SelectedPlatformChangedEvent = {
    previousPlatform: Platform,
    nextPlatform: Platform,
}