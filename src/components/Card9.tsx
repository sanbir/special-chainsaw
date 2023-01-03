/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card9 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown="5d"
                       prizeInKUSD={5}
                       gradientStart="#00FFEE"
                       gradientEnd="#FBB03B"
                       imageUrl="2.png"/>
)

export default Card9
