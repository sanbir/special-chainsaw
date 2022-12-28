/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Grid, Image, Button } from "@theme-ui/components"
import ContestCard from "./ContestCard";
import {LargeText} from "./LargeText";

const CustomContestCard = ({ countdown, prizeInKUSD, contestType, gradientStart, gradientEnd, imageUrl }: {
    countdown: string
    prizeInKUSD: number
    contestType: string
    gradientStart: string
    gradientEnd: string
    imageUrl: string
}) => {
    return (
        <ContestCard bg={`linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 100%)`}>
            <Grid sx={{gridTemplateColumns: '1fr 2fr 1fr'}}>
                <Image src={imageUrl}/>
                <Flex sx={{flexDirection: 'column', gap: '1rem'}}>
                    <LargeText>
                        {countdown}
                    </LargeText>
                    <LargeText>
                        Prize: {prizeInKUSD}K USD
                    </LargeText>
                    <Button sx={{width: 'fit-content'}}>
                        Guess Now
                    </Button>
                </Flex>
                <LargeText>
                    {contestType}
                </LargeText>
            </Grid>
        </ContestCard>
    )
}

export default CustomContestCard
