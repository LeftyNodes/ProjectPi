window.addEventListener('load', async () => {
    try {
        const web3 = new Web3('https://pulsechain.publicnode.com');

        // Assuming this is the WPLS token contract address; replace it if WPLS has a different address
        const wplsTokenContractAddress = '0x9ee215E7339A01234B2f35A0403c57b7896c14C7';

        // Fetching PulseChain price from CoinGecko API
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const pulsePriceUSD = data.pulsechain.usd;

                // Assume web3.eth.getBalance is used for native token balance
                web3.eth.getBalance(wplsTokenContractAddress).then(balanceWei => {
                    const balanceInPLS = web3.utils.fromWei(balanceWei, 'ether');
                    const balanceInUSD = parseFloat(balanceInPLS) * pulsePriceUSD;
                    const formattedBalancePLS = parseFloat(balanceInPLS).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    const formattedBalanceUSD = balanceInUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                    // Update the webpage content for USD and PLS
                    document.querySelector('.usd-value').innerHTML = `$${formattedBalanceUSD}`;
                    document.querySelector('.pls-value').textContent = `${formattedBalancePLS} PLS`;
                }).catch(error => console.error('Error fetching contract WPLS balance:', error));
            })
            .catch(error => console.error('Error fetching PulseChain price:', error));
    } catch (error) {
        console.error('Error initializing web3:', error);
    }
});
