// SPDX-License-Identifier: MIT
pragma solidity ~0.8.17;

interface IPriceOracle {
    /*
     * Shared by actions: [register, grab, renew]
     * If action is grab, grabRefund will send to the previous owner
     */
    struct Price {
        // cost to pay to perform the action
        uint256 cost;
        // intrinsic domain value per year 
        uint256 value;
        uint256 durationInYears;
        uint256 grabRefund;
    }
}


interface IZbraController {
    /*
     * Called by register, or grab
     */
    function grabPriceFrom(string memory, uint256 durationInYears, address owner)
        external
        returns (IPriceOracle.Price memory);

    /*
     * Called by renew
     */
    function renewPrice(string memory, uint256 durationInYears)
        external
        returns (IPriceOracle.Price memory);


    function available(string memory) external returns (bool);

    /*
     * durationInYears = 1 means buy the domain for 1 year
     * duration = 365 * 24 * 3600
     */
    function register(
        string calldata name,
        address owner,
        address referrer,
        uint256 durationInYears
    ) external payable;

    function renew(string calldata, uint256 durationInYears) external payable;

    function grab(string calldata, address owner, address referrer) external payable;
}
