import PairedDisplay from "./components/pairedDisplay.tsx";
import {Typography} from "@mui/material";
import {FileInterface} from "../utils/types/types.ts";

const renderFile = (file: FileInterface) => (
    <PairedDisplay label={file.name} key={file.name}>
        <>
            <Typography data-testid="paired-display-date">{file.added}</Typography>
            <Typography data-testid="paired-display-date">{file.size} KB</Typography>
        </>
    </PairedDisplay>
)

export default renderFile;