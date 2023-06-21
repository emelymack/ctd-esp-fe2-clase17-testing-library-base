import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FollowingButtonComponent from "./following-button.component"

describe('Following button', ()=>{
  
  afterEach(() => jest.clearAllMocks())

  describe('When prop isFav is true', () => {
    it('Should render as favorite', async () => {
      const props = { 
        isFav: true,
        onToggleFavorite: jest.fn()
      }

      render(<FollowingButtonComponent 
      {...props} />)

      const image = screen.getByAltText("is_favorite");
      
      expect(image).toBeInTheDocument()
    })

    describe('When prop isFav is false', () => {
      it("Shouldn't render as favorite", () => {
        const props = { 
          isFav: false,
          onToggleFavorite: jest.fn()
        }
  
        render(<FollowingButtonComponent {...props} />)

        const image = screen.getByAltText("is_not_favorite");
      
        expect(image).toBeInTheDocument()
      })
    })

    describe('When button is clicked', () => {
      it("Should invoke toggle function", async () => {
        const props = { 
          isFav: true,
          onToggleFavorite: jest.fn()
        }
  
        render(<FollowingButtonComponent {...props} />)
        const button = screen.getByRole("button")
        act(() => {
          userEvent.click(button)
        })
        
        // expect(mockCallback).toBeCalled()
        expect(props.onToggleFavorite).toBeCalledWith(!props.isFav)
      })
    })
  })
})