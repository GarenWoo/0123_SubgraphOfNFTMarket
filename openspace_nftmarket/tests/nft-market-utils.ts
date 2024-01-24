import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTBought,
  NFTDelisted,
  NFTListed,
  WithdrawBalance
} from "../generated/NFTMarket/NFTMarket"

export function createNFTBoughtEvent(
  NFTAddr: Address,
  tokenId: BigInt,
  bidValue: BigInt
): NFTBought {
  let nftBoughtEvent = changetype<NFTBought>(newMockEvent())

  nftBoughtEvent.parameters = new Array()

  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("NFTAddr", ethereum.Value.fromAddress(NFTAddr))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "bidValue",
      ethereum.Value.fromUnsignedBigInt(bidValue)
    )
  )

  return nftBoughtEvent
}

export function createNFTDelistedEvent(
  NFTAddr: Address,
  tokenId: BigInt
): NFTDelisted {
  let nftDelistedEvent = changetype<NFTDelisted>(newMockEvent())

  nftDelistedEvent.parameters = new Array()

  nftDelistedEvent.parameters.push(
    new ethereum.EventParam("NFTAddr", ethereum.Value.fromAddress(NFTAddr))
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftDelistedEvent
}

export function createNFTListedEvent(
  NFTAddr: Address,
  tokenId: BigInt,
  price: BigInt
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam("NFTAddr", ethereum.Value.fromAddress(NFTAddr))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftListedEvent
}

export function createWithdrawBalanceEvent(
  withdrawer: Address,
  withdrawnValue: BigInt
): WithdrawBalance {
  let withdrawBalanceEvent = changetype<WithdrawBalance>(newMockEvent())

  withdrawBalanceEvent.parameters = new Array()

  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawnValue",
      ethereum.Value.fromUnsignedBigInt(withdrawnValue)
    )
  )

  return withdrawBalanceEvent
}
