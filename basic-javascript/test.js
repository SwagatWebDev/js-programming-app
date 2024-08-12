import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import org.openqa.selenium.WebElement

// Test Case: Dynamic Verification of Breadcrumb Functionality and Data Table on Patterns Page

// Step 1: Navigate to the Patterns page
WebUI.openBrowser('')
WebUI.navigateToUrl('https://your-app-url.com/patterns')

// Step 2: Verify that the Filter Panel and Data Table are visible
WebUI.verifyElementVisible(findTestObject('Page_Patterns/Filter_Panel'))
WebUI.verifyElementVisible(findTestObject('Page_Patterns/Data_Table'))

// Step 3: Dynamically select Capability L0 (last value), L1, and L2 (first values)

// Select the last value for L0
List<WebElement> l0Options = WebUI.findWebElements(findTestObject('Page_Patterns/Filter_L0_Options'), 10)
WebUI.click(l0Options.get(l0Options.size() - 1))

// Select the first value for L1
List<WebElement> l1Options = WebUI.findWebElements(findTestObject('Page_Patterns/Filter_L1_Options'), 10)
WebUI.click(l1Options.get(0))

// Select the first value for L2
List<WebElement> l2Options = WebUI.findWebElements(findTestObject('Page_Patterns/Filter_L2_Options'), 10)
WebUI.click(l2Options.get(0))

// Step 4: Verify that breadcrumbs are displayed correctly
String expectedBreadcrumb = l0Options.get(l0Options.size() - 1).getText() + " > " +
                            l1Options.get(0).getText() + " > " +
                            l2Options.get(0).getText()
WebUI.verifyTextPresent(expectedBreadcrumb, false)

// Step 5: Click on each breadcrumb and verify the filter panel adjustment

// Click and verify L0 breadcrumb
WebUI.click(findTestObject('Page_Patterns/Breadcrumb_L0'))
WebUI.verifyElementAttributeValue(findTestObject('Page_Patterns/Filter_Panel'), 'value', l0Options.get(l0Options.size() - 1).getText(), 10)

// Click and verify L1 breadcrumb
WebUI.click(findTestObject('Page_Patterns/Breadcrumb_L1'))
WebUI.verifyElementAttributeValue(findTestObject('Page_Patterns/Filter_Panel'), 'value', l1Options.get(0).getText(), 10)

// Click and verify L2 breadcrumb
WebUI.click(findTestObject('Page_Patterns/Breadcrumb_L2'))
WebUI.verifyElementAttributeValue(findTestObject('Page_Patterns/Filter_Panel'), 'value', l2Options.get(0).getText(), 10)

// Step 6: Verify data table updates according to the selected filters
// Assuming that you have a way to determine the expected data for these selections dynamically
List<String> expectedData = getExpectedData(l0Options.get(l0Options.size() - 1).getText(),
                                            l1Options.get(0).getText(),
                                            l2Options.get(0).getText())
List<String> actualData = WebUI.getText(findTestObject('Page_Patterns/Data_Table')).split('\n')

WebUI.verifyMatch(expectedData.toString(), actualData.toString(), false)

// Edge Case Scenarios

// Step 7: Attempt to access the page with no filters selected
WebUI.click(findTestObject('Page_Patterns/Clear_All_Filters'))
WebUI.verifyElementVisible(findTestObject('Page_Patterns/Empty_Data_Message'))

// Step 8: Select only L0 and L1, leaving L2 unselected
WebUI.click(l0Options.get(l0Options.size() - 1))
WebUI.click(l1Options.get(0))
WebUI.verifyTextPresent(l0Options.get(l0Options.size() - 1).getText() + " > " + l1Options.get(0).getText(), false)

// Step 9: Test breadcrumb click out of sequence
WebUI.click(findTestObject('Page_Patterns/Breadcrumb_L1'))
WebUI.verifyElementAttributeValue(findTestObject('Page_Patterns/Filter_Panel'), 'value', l1Options.get(0).getText(), 10)

// Step 10: Validate behavior when no data is available
WebUI.click(findTestObject('Page_Patterns/Filter_No_Data'))
WebUI.verifyElementVisible(findTestObject('Page_Patterns/No_Data_Message'))

// Step 11: Clean up and close browser
WebUI.closeBrowser()

// Function to dynamically determine expected data (mock implementation)
List<String> getExpectedData(String l0, String l1, String l2) {
    // Implement logic to retrieve or generate expected data based on the filters selected.
    return ["Expected Data 1", "Expected Data 2", "Expected Data 3"] // Replace with dynamic logic
}
