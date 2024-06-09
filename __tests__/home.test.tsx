import Header from "@/components/Header";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
// import Home from "@/app/page"


describe("Page", ()=>{
    it("renders header section", () => {
        // render(<Home />);
        render(<Header />)
        const heading = screen.getByText("Works")
        expect(heading).toBeVisible();
    })
})