export interface Platform {
    PlatformID: string
    Metadata: { [key: string]: string }
    MaximumInputs: number
    FriendlyName: string
    FileTypes: { [key: string]: string }
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
  