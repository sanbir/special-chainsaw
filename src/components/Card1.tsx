/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card1 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown="2d"
                       prizeInKUSD={1}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="1.png"/>
)

export default Card1
