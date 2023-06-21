import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FollowingButtonComponent from "./following-button.component"

describe('Following button', ()=>{
  describe('When prop isFav is true', () => {
    it('Should render as favorite', async () => {
      const mockCallback = jest.fn(() => {})

      render(<FollowingButtonComponent isFav={true} onToggleFavorite={mockCallback} />)
      
      expect(screen.getByAltText("is_favorite"))
    })

    describe('When prop isFav is false', () => {
      it("Shouldn't render as favorite", async () => {
        const mockCallback = jest.fn(() => {})
  
        render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockCallback} />)
        
        expect(screen.getByAltText("is_not_favorite"))
      })
    })

    describe('When button is clicked', () => {
      it("Should invoke toggle function", async () => {
        const mockCallback = jest.fn(() => {})
  
        render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockCallback} />)
        const button = screen.getByRole("button")
        act(() => {
          userEvent.click(button)
        })
        
        expect(mockCallback).toBeCalled()
      })
    })
  })
})