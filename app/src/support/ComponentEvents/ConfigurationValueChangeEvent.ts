import { ConfigurationOptionType } from 'support/Snowflake'

export type ConfigurationValueChangeEvent = {
    previousValue: boolean | number | string,
    newValue: boolean | number | string,
    type: ConfigurationOptionType,
    valueGuid: string
}