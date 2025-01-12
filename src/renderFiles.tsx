import PairedDisplay from "./components/pairedDisplay.tsx";
import {Box, Typography} from "@mui/material";
import {FileInterface} from "../utils/types/types.ts";

const renderFile = (file: FileInterface) => (
    <Box sx={{
        padding: '16px'
    }}>
        <PairedDisplay label={file.name} key={file.name}>
            <>
                <Typography data-testid="paired-display-date">{file.added}</Typography>
                <Typography data-testid="paired-display-date">{file.size} KB</Typography>
            </>
        </PairedDisplay>
    </Box>
)

export default renderFile;