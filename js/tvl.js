window.addEventListener('load', async () => {
    try {
        const web3 = new Web3('https://pulsechain.publicnode.com');
        const contractABI = [{
            "inputs": [],
            "name": "getTotalPLSStake",
            "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
            "stateMutability": "view",
            "type": "function"
        }];
        const contractAddress = '0x29Bc0daAAdc34767509869170B36Ea170893C629';
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Fetching PulseChain price from CoinGecko API
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const pulsePriceUSD = data.pulsechain.usd;

                // Fetching TVL from the smart contract
                contract.methods.getTotalPLSStake().call()
                    .then(tvl => {
                        const tvlInPLS = web3.utils.fromWei(tvl, 'ether');
                        const tvlInUSD = parseFloat(tvlInPLS) * pulsePriceUSD;
                        const formattedTVLPLS = parseFloat(tvlInPLS).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        const formattedTVLUSD = tvlInUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                        // Update the webpage content for USD and PLS
                        document.querySelector('.usd-value').innerHTML = `$${formattedTVLUSD}`;
                        document.querySelector('.pls-value').textContent = `${formattedTVLPLS} PLS`;
                    })
                    .catch(error => console.error('Error fetching TVL:', error));
            })
            .catch(error => console.error('Error fetching PulseChain price:', error));

    } catch (error) {
        console.error('Error initializing web3:', error);
    }
});
