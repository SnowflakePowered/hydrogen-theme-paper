import * as Immutable from 'immutable'

export interface Platform {
    readonly PlatformID: string
    readonly Metadata: { [key: string]: string }
    readonly MaximumInputs: number
    readonly FriendlyName: string
    readonly FileTypes: { [key: string]: string[] }
  }
    
export interface Game {
    Files: File[]
    Guid: string
    Metadata: { [key: string]: Metadata }
    PlatformID: string
    Title: string
  }

export interface File {
    FilePath: string
    Guid: string
    Metadata: { [key: string]: Metadata }
    MimeType: string
    Record: string
  }
  
export interface Metadata {
    Guid: string
    Key: string
    Record: string
    Value: string
}
  
export type ConfigurationOptionType = 'integer' | 'boolean' | 'decimal' | 'selection' | 'string'

export interface ConfigurationValue {
  Value: number | boolean | string,
  Guid: string
}

export interface ConfigurationDescriptor {
  Default: number | boolean | string,
  Description: string,
  DisplayName: string,
  Simple: boolean,
  Type: ConfigurationOptionType,
  Min?: number,
  Max?: number,
  Increment?: number
}

export interface ConfigurationSelection {
  DisplayName: string,
  Private: boolean,
  NumericValue: number
}

export interface ConfigurationOption {
  Value: ConfigurationValue,
  Descriptor: ConfigurationDescriptor,
  Selection?: ConfigurationSelection[]
}

export interface ConfigurationSectionDescriptor {
  Description: string,
  DisplayName: string,
  SectionName: string
}

export interface ConfigurationSection {
  Configuration: { [OptionName: string]: ConfigurationOption }
  Descriptor: ConfigurationSectionDescriptor
}

export interface ConfigurationCollection {
  [SectionName: string]: ConfigurationSection
}

class ConfigurationKeyProxyHandler implements ProxyHandler<ConfigurationKey> {
  // tslint:disable-next-line:no-any
  private immutableBacking: Immutable.Map<string, any>
  constructor (gameGuid: string, emulatorName: string, profileName: string) {
    this.immutableBacking = Immutable.fromJS({ 
      gameGuid: gameGuid, emulatorName: emulatorName, profileName: profileName })
  }

  // tslint:disable-next-line:typedef
  public get (target, property, receiver) {
    return this.immutableBacking.get(property) || this.immutableBacking[property]
  }

  // tslint:disable-next-line:typedef
  public set (target, property, value, receiver) {
    return false
  }
}

/**
 * Used to access a ConfigurationCollection object.
 */
export type ConfigurationKey = {
  gameGuid: string,
  emulatorName: string,
  profileName: string
}
/**
 * Used to create a ConfigurationKey.
 *
 * Do not manually create one from a plain JavaScript object, it will not have proper value semantics.
 *
 * This function creates a Proxy that is backed by Immutable for proper value semantics when using
 * as a Map key.
 *
 * @param gameGuid The GUID of the game.
 * @param emulatorName The name of the emulator this collection is for.
 * @param profileName The name of the collection profile.
 *
 */
export const ConfigurationKey = (gameGuid: string, emulatorName: string, profileName: string): ConfigurationKey => {
  const handler = new ConfigurationKeyProxyHandler(gameGuid, emulatorName, profileName)
  return new Proxy<ConfigurationKey>(
    {gameGuid: gameGuid, emulatorName: emulatorName, profileName: profileName}, handler)
}