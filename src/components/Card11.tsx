/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card11 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown="2d"
                       prizeInKUSD={10}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="5.png"/>
)

export default Card11
