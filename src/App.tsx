
import mock from "../__mocks__/mock_data.json"
import {DocumentInterface} from "../utils/types/types.ts";
import renderFile from "./renderFiles.tsx";

function App() {
    const data = mock as DocumentInterface
    return (
        <>
            {data.map(entry => {
                if ("files" in entry) {
                   return entry.files.map(file => renderFile(file));
                } else {
                   return renderFile(entry)
                }
            })}
        </>
    )
}

export default App
