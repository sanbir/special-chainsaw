/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Flex, Radio, Label, Slider, Button, Box } from 'theme-ui'
import {useState} from "react";

export const ConfirmPopup = ({choiceSelected, totalEntries, totalCredit}:{
    choiceSelected: string
    totalEntries: number
    totalCredit: number
}) => {

    return (
        <div sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: 4,
            py: [4, 5],
            color: `white`,
            background: `linear-gradient(to right, #a0aec0 0%, #000000 100%)`,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
                color: `white !important`,
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
        }}>

            <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
                <Flex sx={{flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                    <Flex sx={{alignItems: 'center'}}>
                        <Label>Choice selected:</Label>
                        <Label>{choiceSelected}</Label>
                    </Flex>
                    <Flex sx={{alignItems: 'center'}}>
                        <Label>Total entries:</Label>
                        <Label>{totalEntries}</Label>
                    </Flex>
                    <Flex sx={{alignItems: 'center'}}>
                        <Label>Total credit:</Label>
                        <Label>{totalCredit}</Label>
                    </Flex>
                    <Button sx={{width: 'fit-content'}}>
                        Join Now
                    </Button>
                </Flex>
            </div>
        </div>
    )
}
