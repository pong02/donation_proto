class CartItem {
  /*cart item is different from event because it is a demo, 
  and i need fundraisermenu to have more items. Can reuse
  same class in the future */
  constructor({
    fundID,
    price,
    title,
    desc = "No description set",
    subtitle = "N/A",
    imgpath = "ww.png",
    shipping = false,
    freemode = false,
  }) {
    this.title = title;
    //can be used to move to corresponding eevent,
    //link (in Event) is a more primitive version of id
    this.fundID = fundID;
    this.price = price;
    this.desc = desc;
    //optional, mainly to hold shipping address, but can be additional info
    this.subtitle = subtitle;
    this.imgpath = imgpath;
    //toggle for elements
    this.shipping = shipping; //if true, will allow edit of address (subtitle)
    this.freemode = freemode; //if true will allow edit of price
  }
}

export default class CartSample {
  constructor() {
    const funds = [
      new CartItem({
        title: "Childhood Cancer",
        fundID: "CC-0",
        price: 130,
        imgpath: "kid3.png",
      }),
      new CartItem({
        title: "Support Ukrainian Childhood Cancer Community",
        fundID: "SUCCC-3",
        price: 30,
        desc: "Funds for daily operation",
        imgpath: "kidsplaying.png",
      }),
      new CartItem({
        title: "Pediatric Cancer Research Foundation Funding",
        fundID: "PCRF-8",
        price: 70,
        imgpath: "kid2.png",
      }),
      new CartItem({
        title: "National Pediatric Cancer Foundation Fundraiser",
        fundID: "NPCF-0",
        price: 44,
        freemode: true,
        imgpath: "ww2.png",
      }),
      new CartItem({
        title: "National Cancer Society Malaysia Funds",
        fundID: "NCSM-2",
        price: 63,
        desc: "Funding for new location",
        freemode: true,
      }),
      new CartItem({
        title: "Sarawak Children's Cancer Society Drive",
        fundID: "SCCS-6",
        price: 89,
        desc: "Funding for 1320 new beneficiaries",
        imgpath: "ww3.png",
      }),
      new CartItem({
        title: "American Childhood Cancer Organisation Pajamma Party",
        fundID: "ACC0-3",
        price: 202,
        desc: "Pajama party for children in hospitals around NYC, includes a set of pajamas for kids to participate",
        shipping: true,
        subtitle: this.getAddress,
        imgpath: "pajama.png",
      }),
      new CartItem({
        title: "Understanding Cancer",
        fundID: "GF-14",
        price: 55,
        desc: "Funds for renting talk locations",
        freemode: true,
        imgpath: "ww3.png",
      }),
      new CartItem({
        title: "Cancer Research Institute Fundraiser",
        fundID: "CRI-11",
        price: 46,
        desc: "Funding Harvard's research on latest therapy",
        freemode: true,
        imgpath: "harvard.png",
      }),
      new CartItem({
        title: "Livestrong charity drive",
        fundID: "GF-15",
        price: 89,
        imgpath: "ww2.png",
      }),
    ];
    this.items = [];
    for (let i = 0; i < funds.length; i++) {
      if (Math.floor(Math.random() * 10) >= 5) {
        this.items.push(funds[i]);
      }
    }
  }

  //address is hardcoded, but in actual implementation, fetch from profile on cart item creation
  getAddress() {
    return "L4E2 Enterprise 4, Technology Park Malaysia, Bukit Jalil, 57000 Kuala Lumpur";
  }

  getItems() {
    return this.items;
  }
}
