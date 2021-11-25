Frontend for [Vagarish](https://github.com/greenlucid/vagarish), a Kleros search engine.

## Instructions

In the text box, if you put:

- Ethereum address, you'll do a "by" search, that is, get all evidence and disputes by an address.
- Number, you'll do an "id" search, you'll go to a dispute directly.
- Text, you'll do a "substring" search, that's searching by 

### Clicking
- If you click a #Number, you'll automatically go to the dispute.
- If you click a `by 0x4dree5001010101011010101`, you'll see the evidence by that address.
- If you click a `Court #10`, you'll see all disputes from that court.

### Advanced behaviour

If you want to search by courtId, you have to edit the URL manually. Example: `/search?courtId=23`

If you want to do a complex search, you have to add parameters manually, divided by &. Example: `/search?courtId=23&by=0x349FF1ea10E2560017BFbB942eFd1cC08100f8E3`

Search logic is spaghetti code at the moment, so complex queries can break. Sorry