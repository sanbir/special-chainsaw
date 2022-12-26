/** @jsx jsx */
import { jsx } from "theme-ui"
import {useState} from "react";
import { Flex, Box, Select, Grid, Image, Button } from "@theme-ui/components"
import ContestCard from "./ContestCard";
import {LargeText} from "./LargeText";

const SoloWinner = () => {
    return (
        <ContestCard bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            <Grid sx={{gridTemplateColumns: '1fr 2fr 1fr'}}>
                <Image src="1.png"/>
                <Flex sx={{flexDirection: 'column', gap: '1rem'}}>
                    <LargeText>
                        03:25:26
                    </LargeText>
                    <LargeText>
                        Prize: 10K USD
                    </LargeText>
                    <Button sx={{width: 'fit-content'}}>
                        Guess Now
                    </Button>
                </Flex>
                <LargeText>
                    Solo Winner
                </LargeText>
            </Grid>
        </ContestCard>
    )
}

export default SoloWinner
