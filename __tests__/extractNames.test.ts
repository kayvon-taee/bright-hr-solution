import {expect, it, describe} from '@jest/globals';
import {DocumentInterface} from "../utils/types/types";
import extractNames from "../src/utils/extractNames";
import mock from "../__mocks__/mock";

describe('ExtractNames', () => {
    it("extracts the names correctly", () => {
        // Given the data
        const data = mock as DocumentInterface
        // When we extract the names
        const extractedNames = extractNames(data)
        // Then assert it works as expected
        expect(extractedNames).toHaveLength(9)
        expect(extractedNames).toStrictEqual([
            "Employee Handbook",
            "Public Holiday policy",
            "Expenses",
            "Expenses claim form",
            "Fuel allowances",
            "Cost centres",
            "Misc",
            "Christmas party",
            "Welcome to the company!"
        ])
    })
})

