
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import renderFile from "./renderFiles.tsx";
import PairedDisplay from "./components/pairedDisplay.tsx";

function App() {
    const data = mock as DocumentInterface
    return (
        <>
            {data.map((entry) => {
                if ("files" in entry) {
                    return (
                        <PairedDisplay key={entry.name} label={entry.name}>
                            <>
                                {entry.files.map((file) => (
                                    <PairedDisplay key={file.name} label={file.name}>
                                        {renderFile(file)}
                                    </PairedDisplay>
                                ))}
                            </>
                        </PairedDisplay>
                    );
                } else {
                    return renderFile(entry);
                }
            })}
        </>
    );
}

export default App
