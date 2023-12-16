
export const FilterFunction = (influencers, shortBy) => {

    if (shortBy !== "All") {
        return influencers.filter(influencer => influencer.type === shortBy)
    }
    return influencers
}
