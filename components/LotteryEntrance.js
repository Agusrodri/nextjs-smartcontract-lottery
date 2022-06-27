import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    /*  const {runContractFunction: enterRaffle} = useWeb3Contract({
        abi: abi ,
        contractAddress: raffleAddress,
        functionName: "enterRaffle" ,
        params: {

        },
        msgValue: 


    })   */

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const something = await getEntranceFee()
                console.log(something)
            }
        }
    })
    return <div>Hi from Lottery entrance!</div>
}