/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card2 = () => (
    <CustomContestCard contestType="Solo Winner"
                       countdown="5d"
                       prizeInKUSD={5}
                       gradientStart="#662D8C"
                       gradientEnd="#ED1E79"
                       imageUrl="2.png"/>
)

export default Card2
