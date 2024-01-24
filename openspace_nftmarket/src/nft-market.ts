import {
  NFTBought as NFTBoughtEvent,
  NFTDelisted as NFTDelistedEvent,
  NFTListed as NFTListedEvent,
  WithdrawBalance as WithdrawBalanceEvent
} from "../generated/NFTMarket/NFTMarket"
import {
  NFTBought,
  NFTDelisted,
  NFTListed,
  WithdrawBalance
} from "../generated/schema"

export function handleNFTBought(event: NFTBoughtEvent): void {
  let entity = new NFTBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.NFTAddr = event.params.NFTAddr
  entity.tokenId = event.params.tokenId
  entity.bidValue = event.params.bidValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTDelisted(event: NFTDelistedEvent): void {
  let entity = new NFTDelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.NFTAddr = event.params.NFTAddr
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTListed(event: NFTListedEvent): void {
  let entity = new NFTListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.NFTAddr = event.params.NFTAddr
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawBalance(event: WithdrawBalanceEvent): void {
  let entity = new WithdrawBalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.withdrawer = event.params.withdrawer
  entity.withdrawnValue = event.params.withdrawnValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
