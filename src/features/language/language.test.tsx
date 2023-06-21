import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LanguageComponent from "./language.component"
import { LanguageProvider } from "./language.context"


describe('Language buttons component', ()=>{
  beforeEach(() => {
    render( 
      <LanguageProvider>
        <LanguageComponent />
      </LanguageProvider>
    )
  })

  describe('When is rendered', () => {
    it('Should render 3 buttons', () => {

      // render(<Component />)

      const buttons = screen.getAllByRole('button')
      
      expect(buttons.length).toBe(3)
    })

  describe('When button "Spanish" is clicked', ()=> {
    it('Should change its text to "Español"', () => {

      const buttonsText = ['Español', 'Portugués', 'Inglés'];

      // render(<Component />)

      // const button = screen.getByText('Spanish')
      const button = screen.getByRole('button', {name: 'Spanish'})

      userEvent.click(button)
      
      buttonsText.forEach(text => {
        const button = screen.getByRole
        ('button', {name: text})
        
        expect(button).toBeInTheDocument()
      })
    })
  })
    
  })
})