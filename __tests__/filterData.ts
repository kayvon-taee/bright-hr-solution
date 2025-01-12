import {expect, it, describe} from '@jest/globals';
import mock from "../__mocks__/mock";
import filterData from "../src/utils/filterData";
import {DocumentInterface} from "../utils/types/types";
describe('filterData', () => {
    const data = mock as DocumentInterface
    it("filters at the top level", () => {
        // Given a selection
        const selection = "Employee Handbook"
        // When we filter the data
        const filteredData = filterData(data, selection);
        // Then assert the filtered data is as expected
        expect(filteredData.length).toBe(1);
        expect(filteredData).toStrictEqual([{
            "type": "pdf",
            "name": "Employee Handbook",
            "added": "2017-01-06",
            "size": 1
        }])
    })
    it("filters at the folder level", () => {
        // Given a selection
        const selection = "Fuel allowances"
        // When we filter the data
        const filteredData = filterData(data, selection);
        // Then assert the filtered data is as expected
        expect(filteredData.length).toBe(1);
        expect(filteredData).toStrictEqual([{
            "type": "doc",
            "name": "Fuel allowances",
            "added": "2017-05-03",
            "size": 4
        }])
    })
    it("filters also for folder name", () => {
        // Given a selection
        const selection = "Misc"
        // When we filter the data
        const filteredData = filterData(data, selection);
        // Then assert the filtered data is as expected
        expect(filteredData.length).toBe(1);
        expect(filteredData).toStrictEqual([{
            "type": "folder",
            "name": "Misc",
            "files":
                [
                    {
                        "type": "doc",
                        "name": "Christmas party",
                        "added": "2017-12-01",
                        "size": 6
                    },
                    {
                        "type": "mov",
                        "name": "Welcome to the company!",
                        "added": "2015-04-24",
                        "size": 7
                    }
                ]
        }])
    })
})