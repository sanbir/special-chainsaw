/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card3 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown="10d"
                       prizeInKUSD={10}
                       gradientStart="#009245"
                       gradientEnd="#FCEE21"
                       imageUrl="3.png"/>
)

export default Card3
