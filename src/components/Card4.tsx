/** @jsx jsx */
import { jsx } from "theme-ui"
import CustomContestCard from "./CustomContestCard";

const Card4 = () => (
    <CustomContestCard contestType="Ranked Winners"
                       countdown="7d"
                       prizeInKUSD={2}
                       gradientStart="#D585FF"
                       gradientEnd="#00FFEE"
                       imageUrl="4.png"/>
)

export default Card4
