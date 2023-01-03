/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card6 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown="4d"
                       prizeInKUSD={5}
                       gradientStart="#D4145A"
                       gradientEnd="#009245"
                       imageUrl="6.png"/>
)

export default Card6
