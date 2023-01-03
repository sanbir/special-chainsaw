/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card12 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown="12d"
                       prizeInKUSD={5}
                       gradientStart="#D4145A"
                       gradientEnd="#00FFEE"
                       imageUrl="6.png"/>
)

export default Card12
