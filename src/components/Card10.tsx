/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card10 = () => (
    <CustomContestCard contestType="League Winners"
                       countdown="5d"
                       prizeInKUSD={2}
                       gradientStart="#009245"
                       gradientEnd="#D585FF"
                       imageUrl="4.png"/>
)

export default Card10
