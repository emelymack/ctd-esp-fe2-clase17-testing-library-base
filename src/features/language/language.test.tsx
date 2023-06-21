import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LanguageComponent from "./language.component"
import { LanguageProvider } from "./language.context"


describe('Language buttons component', ()=>{
  describe('When is rendered', () => {
    it('Should render 3 buttons', () => {

      render( <LanguageProvider><LanguageComponent /></LanguageProvider>)

      const buttons = screen.getAllByRole('button')
      
      expect(buttons.length).toBe(3)
    })

  describe('When button "Spanish" is clicked', ()=> {
    it('Should change its text to "Español"', () => {

      render( <LanguageProvider><LanguageComponent /></LanguageProvider>)

      const button = screen.getByText('Spanish')
      userEvent.click(button)
      
      expect(screen.getByText('Español'))
    })
  })
    
  })
})