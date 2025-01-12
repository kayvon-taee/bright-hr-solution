import PairedDisplay from "./components/pairedDisplay.tsx";
import {Box, Typography} from "@mui/material";
import {FileInterface} from "../utils/types/types.ts";

const renderFile = (file: FileInterface) => (
        <PairedDisplay label={file.name} key={file.name}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%"}}>
                <Typography data-testid="paired-display-date">{file.added}</Typography>
                <Typography data-testid="paired-display-date">{file.size} KB</Typography>
            </Box>
        </PairedDisplay>
)

export default renderFile;