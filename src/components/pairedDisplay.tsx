import { Grid, Typography } from '@mui/material'
import React from "react";

interface PairedDisplayProps {
    label: React.ReactNode
    children: React.ReactElement
}

const PairedDisplay : React.FC<PairedDisplayProps> = ({ label, children }) => (
    <Grid data-testid="paired-display" container direction="row" spacing={2}>
        <Grid item xs={4}>
            <Typography data-testid="paired-display-title">{label}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
            <Typography data-testid="paired-display-children">{children}</Typography>
        </Grid>
    </Grid>
)
export default PairedDisplay;