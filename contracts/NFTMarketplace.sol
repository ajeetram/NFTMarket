// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract NFTMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenId;
    Counters.Counter private _itemsSold;
    uint256 listingPrice =0.0025 ether;
    address payable owner;

    struct MarketItems
    {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool sold;
    }

    mapping(uint256=>MarketItems) private MarketItemsId;

    event MarketItemsIdCreated(uint256 indexed tokenId, address owner, address seller, uint256 price,bool sold);

    constructor() ERC721("NFTMetaverseToken", "MyNFT")
    {
        owner == payable(msg.sender);
    }

    modifier OnlyOwner{
        require(owner==msg.sender,"Only owner of the marketplace can change the listing price");
        _;
    }

    function updateListingPrice(uint256 _updatedPrice) public payable OnlyOwner
    {
        listingPrice = _updatedPrice;

    }

    function getListingPrice()public view returns(uint256)
    {
        return listingPrice;
    }

    // let create NFT token functon

    function createToken(string memory tokenURI, uint256 price) public payable returns(uint256)
    {
        _tokenId.increment();

        uint256 newTokenId = _tokenId.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId,tokenURI);
        createMarketItem(newTokenId,price);

        return newTokenId;
    }

    // creating market items
    function createMarketItem(uint256 tokenId, uint256 price) private 
    {
        require(price>0,"Price must be atleast 1");
        require(msg.value==listingPrice,"Price must be equal to listing price");

        MarketItemsId[tokenId]=MarketItems(tokenId, payable(msg.sender),payable(address(this)),price,false);
        _transfer(msg.sender, address(this),tokenId);

        emit MarketItemsIdCreated(tokenId,msg.sender,address(this),price,false);

    }

    //function for resale token

    function reSellToken(uint256 tokenId, uint256 price) public payable
    {
        require(MarketItemsId[tokenId].owner == msg.sender, "Only item owner can perform this operation");
        require(msg.value==listingPrice,"Price must be equal to listed price");

        MarketItemsId[tokenId].sold = false;
        MarketItemsId[tokenId].price = price;
        MarketItemsId[tokenId].seller = payable(msg.sender);
        MarketItemsId[tokenId].owner = payable(address(this));

        _itemsSold.decrement();
        _transfer(msg.sender,address(this), tokenId);
    }

    // function createmarketsale

    function  createMarketSale(uint256 tokenId) public payable
    {
        uint256 price  = MarketItemsId[tokenId].price;
        require(msg.value == price, "Plaese sub,it the asking price in order to complete the purchase");

        MarketItemsId[tokenId].owner = payable(msg.sender);
        MarketItemsId[tokenId].sold = true;
        MarketItemsId[tokenId].owner = payable(address(0));

        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(MarketItemsId[tokenId].seller).transfer(msg.value);



    }

    //getting unsold net data

    function fetchMarketItem() public view returns(MarketItems[] memory)
    {
        uint256 itemCount = _tokenId.current();
        uint256 unSoldItemCount = _tokenId.current()- _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItems[] memory items = new MarketItems[](unSoldItemCount);
        for(uint256 i=0;i<itemCount;i++)
        {
            if(MarketItemsId[i+1].owner == address(this))
            {
                uint256 currentId= i+1;

                MarketItems storage currentItem = MarketItemsId[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }

        return items;
    }

    //PURCHASE ITEm

    function fetchMyNFT() public view returns(MarketItems[] memory)
    {
        uint256 totalCount = _tokenId.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=0;i<totalCount;i++)
        {
            if(MarketItemsId[i+1].owner ==msg.sender){
                itemCount +=1;
            }
        }

        MarketItems[] memory items = new MarketItems[](itemCount);
        for(uint256 i=0;i<totalCount;i++)
        {
            if(MarketItemsId[i+1].owner == msg.sender)
            {
            uint256 currentId = i+1;
            MarketItems storage currentItem = MarketItemsId[currentId];
            items[currentIndex] = currentItem;
            currentIndex +=1;
                
            }
        }

        return items;
    }


    //Single user item

    function fetchItemListed() public view returns(MarketItems[] memory)
    {
        uint256 totalCount = _tokenId.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=0;i<totalCount;i++)
        {
            if(MarketItemsId[i+1].seller == msg.sender)
            {
                itemCount +=1;
            }
        }

        MarketItems[] memory items = new MarketItems[](itemCount);
        for(uint256 i=0;i<totalCount;i++)
        {
            if(MarketItemsId[i+1].seller==msg.sender)
            {
                uint256 currentId = i+1;

                MarketItems storage currentItem = MarketItemsId[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;

            }
        }

        return items;
    }

}