export interface SearchResult {
  id: string
  klerosLiquidId: string
  arbitrable: string
  matchedEvidence: Evidence[]
}

export interface Evidence {
  id: string
  textContent: string
  hasFile?: boolean
  fileTextContent?: string
  fileIpfsPath?: string
  byAddress: string
}
