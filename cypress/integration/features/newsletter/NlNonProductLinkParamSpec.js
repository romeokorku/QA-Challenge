import NlHelper from "../../../support/helpers/NlHelper";

const nlHelper = new NlHelper();
const nlUrlList = nlHelper.getTestData("nlUrls.json");
const { Haushalt, Baumarkt, Beauty } = nlUrlList;
const newsLetterUrls = [Haushalt, Baumarkt, Beauty];

newsLetterUrls.forEach((newsLetterUrl, index) => {
  const pageName = Object.keys(nlUrlList);
  describe(`Should check for the tracking parameters(wpset and utm_campaign) on the ${pageName[index]} page`, () => {
    before(() => cy.visit(newsLetterUrl));

    // Ignore errors from the site itself
    Cypress.on("uncaught:exception", () => {
      return false;
    });

    it("C962349 Check if utm_campaign value of all non product links is the same, tested newsletter url: ", () => {
      /* Add your test code here
            //filter out all links which contain utm_campaign
            //check if the links were found
            //check if all paramter values are equal to each other
            */

      // getNewsletterUrlWithTrackingParameter is a custom command which takes in a parameter(selector).
      // getNewsletterUrlWithTrackingParameter can be found in command.js file in the support folder.
      cy.getNewsletterUrlWithTrackingParameter("utm_campaign");
    });

    it("C955682 Check if wpset value of all non product links is the same, tested newsletter url: ", () => {
      //open nl
      /* Add your test code here
            //filter out all links which contain wpset
            //check if the links were found
            //check if all paramter values are equal to each other
            */

      // getNewsletterUrlWithTrackingParameter is a custom command which takes in a parameter(selector).
      // getNewsletterUrlWithTrackingParameter can be found in command.js file in the support folder.
      cy.getNewsletterUrlWithTrackingParameter("wpset");
    });
  });
});
