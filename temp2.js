const Web3 = require('web3');

// Connect to an Ethereum node
const web3 = new Web3('https://mainnet.infura.io/v3/edce0f212ef246d09e0ff5638a492298');

// NFT contract address and token ID
const contractAddress = '0xD57474E76C9EBecC01b65a1494F0a1211df7bCd8'; // Replace with the actual contract address
const tokenId = 2709; // Replace with the actual token ID

// NFT metadata retrieval function
async function getNFTMetadata() {
  try {
    const contractABI = require('./contractABI.json'); // Replace with the actual ABI file path
    // console.log(contractABI)
    // Create a contract instance
    const nftContract = new web3.eth.Contract(contractABI, contractAddress);

    // Get the tokenURI of the NFT
    // console.log(nftContract.methods)
    const tokenURI = await nftContract.methods.tokenURI(tokenId).call();

    // Fetch the metadata JSON file
    const metadataResponse = await fetch(tokenURI);
    const metadata = await metadataResponse.json();

    console.log('NFT Metadata:', metadata);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to retrieve NFT metadata
getNFTMetadata();
