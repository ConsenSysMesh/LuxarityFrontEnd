import LuxOrders from '../build/contracts/LuxOrders.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    LuxOrders
  ],
  events: {
    LuxOrders: ['SoldAndMintedToken'],
    LuxOrders: ['DonationChosen'],
    LuxOrders: ['DonationMadeToCharity'],
    LuxOrders: ['RedeemedToken']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
