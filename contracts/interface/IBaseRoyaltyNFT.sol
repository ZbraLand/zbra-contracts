// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

interface IBaseRoyaltyNFT {
    // Royalties is by 1% of intrinsic value (value x durationInYears)
    function transferWithRoyalties(
        address from, 
        address to, 
        uint256 tokenId
    ) external payable;

}
