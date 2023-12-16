import Wishlist from "../pages/Wishlist"


const typeReducer = (pre, cur) => {

    switch (cur.type) {
        case 'INITIAL_INFLUENCERS':
            return {
                ...pre, influencers: cur.payload
            }
        case 'ADD_TO_WISHLIST':
            console.log(Wishlist)
            return {
                ...pre,
                influencers: pre.influencers.map((influencer) => ({
                    ...influencer, wishList: cur.payload.some((item) => item.id === influencer.id)
                })),

            }

        default:
            return pre
    }


}

export default typeReducer