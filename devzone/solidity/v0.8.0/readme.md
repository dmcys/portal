// All Functions Avaibles on version v0.8.0

``` Global Variables  
  
    blockhash(uint blockNumber) returns (bytes32): hash of the given block number  
    block.coinbase (address payable): current block miner’s address  
    block.difficulty (uint): current block difficulty  
    block.gaslimit (uint): current block gaslimit  
    block.number (uint): current block number  
    block.timestamp (uint): current block timestamp as seconds since unix epoch  
    gasleft() returns (uint256): remaining gas  
    msg.data (bytes calldata): complete calldata  
    msg.sender (address payable): sender of the message (current call)  
    msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)  
    msg.value (uint): number of wei sent with the message  
    now (uint): current block timestamp (alias for block.timestamp)  
    tx.gasprice (uint): gas price of the transaction  
    tx.origin (address payable): sender of the transaction (full call chain)  
  
Math Functions  
  
    addmod(uint x, uint y, uint k) returns (uint): compute (x + y) % k where the addition is performed with arbitrary precision and does not wrap around at 2**256  
    mulmod(uint x, uint y, uint k) returns (uint): compute (x * y) % k where the multiplication is performed with arbitrary precision and does not wrap around at 2**256  
    keccak256(bytes memory) returns (bytes32): compute the Ethereum-SHA-3 (Keccak-256) hash of the input  
    sha256(bytes memory) returns (bytes32): compute the SHA-256 hash of the input  
    ripemd160(bytes memory) returns (bytes20): compute RIPEMD-160 hash of the input  
  
Error Handling Functions  
  
    assert(bool condition): throws an exception if the condition is not true  
    require(bool condition): throws an exception if the condition is not true  
    revert(): abort execution and revert state changes  
  
Address-Related Functions  
  
    address(this) returns (address): current contract address  
    address payable(uint160(address)) returns (address payable): convert a regular address to a payable address  
    address.send(uint256 amount) returns (bool): send a transfer to the address and return true if successful or false if not (deprecated; use transfer or call instead)  
    address.transfer(uint256 amount): send a transfer to the address and throw an exception if unsuccessful  
    address.call(...) returns (bool success): make a low-level call and return true if successful or false if not  
    address.delegatecall(...) returns (bool success): make a delegatecall and return true if successful or false if not  
    address.balance (uint256): get the balance of the address in wei  
    address.code (bytes memory): get the contract bytecode of the address  
    address.codehash (bytes32): get the keccak-256 hash of the contract bytecode at the address  
  
Contract-Related Functions  
  
    selfdestruct(address payable recipient): destroy the current contract and send its funds to the specified address    
    block.timestamp (uint): current block timestamp as seconds since unix epoch   
    abi.encode(...) returns (bytes memory): encode arguments as ABI data  
    abi.decode(bytes memory data, (...) returns (bool, ...)): decode ABI data into multiple values of specified types  
    this.transfer(uint256 amount): send a transfer to the contract and throw an exception if unsuccessful  
    this.call(...) returns (bool success): make a low-level call to the contract and return true if successful or false if not  
    this.delegatecall(...) returns (bool success): make a delegatecall to the contract and return true if successful or false if not  
    this.balance (uint256): get the balance of the contract in wei  
    blockhash(uint blockNumber) returns (bytes32): hash of the given block number  
    type(uint).min (uint256): minimum value of uint256  
    type(uint).max (uint256): maximum value of uint256  
    type(int).min (int256): minimum value of int256  
    type(int).max (int256): maximum value of int256  
    type(bytes).min (bytes memory): empty byte array  
    type(bytes).max (bytes memory): maximum length byte array  
    type(string).min (string memory): empty string  
    type(string).max (string memory): maximum length string  
    block.basefee (uint256): base fee of the block  ``` 
