"use client"
import React, {useState, useEffect} from "react";
import Web3Model from "web3modal"
import { ethers, providers } from "ethers"

import land from "./Land.json"
const ContractAddress = "0x31650e4104ecf87f120ffee9f5efab456dc9611c"
const ContractABI = land.abi

// FETCH
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ContractAddress, ContractABI, signerOrProvider)


export const LandContext = React.createContext();

export const LandProvider = ({children}) => {
    const DappName = "Land Tenure";
    const [currentUser, setCurrentUser] = useState("")

    const createLandDetail = async (items) => {
        console.log(items);
        const {person, location, size} = items;

        try {
            const web3modal = new Web3Model();
            const connection = await web3modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            const contract = fetchContract(signer)
            // Functions in contract
            const createItem = await contract.createLandEntry(
                person,
                location,
                size,
            )
            await createItem.wait()
            console.log(createItem);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }  


const getAllLandInfo = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider)

        const landTitles  = await contract.getAllLandDetails()
        const allLandTitles = landTitles.map((landTitle) => ({
            person: landTitle.person,
            location: landTitle.location,
            size: landTitle.size.toNumber()
        }))

        return allLandTitles

    } catch (error) {
        console.log("Something went wrong", error);
    }
}

const getLandInfoCount = async () => {
    try {
        if (!window.ethereum) return "Install MetaMask";
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        })
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider)
        const landInfoCount = await contract.getLandDetailsCount(accounts[0])
        return landInfoCount.toNumber();
    } catch (error) {
        console.log("Error, not geting count");
    }
}

const getLandDetail = async (index) => {
    console.log(index * 1);
    try {
        if (!window.ethereum) return "Install MetaMask";

        const accounts =await window.ethereum.request({
            method: "eth_accounts"
        })

        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider)
        const land_detail = await contract.getLandDetail(accounts[0], index * 1)

        const SingleLandDetail = {
            person: land_detail[0],
            location: land_detail[1],
            size: land_detail[2].toNumber(),
            status: land_detail[3]
        }

        return SingleLandDetail
    } catch (error) {
        console.log("Error, not geting land Det", error);
    }
}

// CHEACK WALLET CONNECTED
const checkIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return "Install MetaMask";

        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        })

        if (accounts.length) {
            setCurrentUser(accounts[0])
        } else {
            return "No account"
        }
    } catch (error) {
        return "Not Connected"
    }
}

// CONNECT WALLET FUNCTION
const connectWallet  = async () => {
    try {
        if (!window.ethereum) return "Install MetaMask";

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        setCurrentUser(accounts[0])
    } catch (error) {
        return "Something went wrong"
    }
}

useEffect(() => {
    checkIfWalletConnected()
}, [])

return (
    <LandContext.Provider
    value={{
        connectWallet,
        createLandDetail,
        getLandDetail,
        getLandInfoCount,
        getAllLandInfo,
        DappName,
        currentUser
    }}>{children}</LandContext.Provider>
)

}