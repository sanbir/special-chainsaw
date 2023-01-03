/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card7 = () => (
    <CustomContestCard contestType="Multiple Winners"
                       countdown="1d"
                       prizeInKUSD={1}
                       gradientStart="#D4145A"
                       gradientEnd="#FBB03B"
                       imageUrl="1.png"/>
)

export default Card7
