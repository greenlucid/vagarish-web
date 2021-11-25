export interface SearchResult {
  id: string
  klerosLiquidId: string
  arbitrable: string
  matchedEvidence: Evidence[]
  courtId: number
}

export interface Evidence {
  id: string
  textContent: string
  hasFile?: boolean
  fileTextContent?: string
  fileIpfsPath?: string
  byAddress: string
  timestamp: number
}
