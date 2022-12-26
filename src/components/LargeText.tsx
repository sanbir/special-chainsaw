/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box} from "@theme-ui/components"

export const LargeText = ({ children }: {
    children: React.ReactNode
}) => (
    <Box sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
    }}>
        {children}
    </Box>
)
