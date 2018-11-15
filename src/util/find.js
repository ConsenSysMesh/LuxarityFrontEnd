//resources
const web3Utils = require('web3-utils')
const Web3 = require('web3')
const sha256 = require('js-sha256')
const LuxOrder = require('../../build/contracts/LuxOrders.json')
const csv = require('csvtojson')
const ObjectsToCsv = require('objects-to-csv');
//files
const csvFilePath = './files/orders_export.csv'

//starting process
console.log("Creating empty object...")

//create array
let newObject = []

//start script
console.log("Start Script...")
start()

// Async / await usage
async function start() {
  let donorObject = []
  let buyerObject = []
  const jsonArray = await csv().fromFile(csvFilePath)

  //get web3 instance
  let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

  //get abi information
  let abi = LuxOrder.abi
  let contract = await new web3.eth.Contract(abi, "0xa4c69450f2dea4a10a7e799674feda99c9af9732")

  //iterate through json object and create new object
  for (let i = 0; i < jsonArray.length; i++) {

    console.log("Processing Datum #" + (i + 1))

    //get email hash
    //check if allocation amount is sufficient to choose a donation
    let emailHash = sha256(jsonArray[i].Email)
    let finalHash = web3Utils.keccak256(emailHash.toUpperCase())

    let buyerData = await getBuyerData(contract, finalHash)
    let donationData = await getDonationData(contract, jsonArray[i].Name.substring(1, jsonArray[i].Name.length))

    donorObject.push({
      email: jsonArray[i].Email,
      orderNumber: jsonArray[i].Name.substring(1, jsonArray[i].Name.length),
      purchaseDate: jsonArray[i].Paidat,
      billingName: jsonArray[i].BillingName,
      chosenCharity: donationData.charityName,
      amountAllocated: donationData.amountAllocated,
      totalAmountSpent: jsonArray[i].Total,
      orderId: jsonArray[i].Id,
    })

    buyerObject.push({
      email: jsonArray[i].Email,
      orderNumber: jsonArray[i].Name.substring(1, jsonArray[i].Name.length),
      purchaseDate: jsonArray[i].Paidat,
      billingName: jsonArray[i].BillingName,
      totalAmountAllocated: buyerData.totalDonationsAllocated,
      totalAmountSpent: jsonArray[i].Total,
      orderId: jsonArray[i].Id,
    })
  }

  //create new file with new data
  let csvDonor = new ObjectsToCsv(donorObject);
  let csvBuyer = new ObjectsToCsv(buyerObject);

  // Save to file:
  await csvDonor.toDisk('./choseDonationsData.csv');
  await csvBuyer.toDisk('./buyersData.csv');

}

//get blockchain data
async function getBuyerData(contract, hash) {

  //check the buyers donation allocation remaining
  return await contract.methods.buyers(hash).call()

}

async function getDonationData(contract, orderNumber) {

  return await contract.methods.choseDonations(orderNumber).call()

}
