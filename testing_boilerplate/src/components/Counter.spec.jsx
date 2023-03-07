import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('<Counter />', () => { 
    it('should init with counter zero', () => { 
        render( <Counter  initialCount={0} />)

        const value = screen.getByTestId('countNumber').textContent
        console.log(value)
        expect(value).toEqual('0')
    })

   it('should increment 1 when click at increment button', () => { 
    render(<Counter initialCount={0} />)

    const buttonIncrement = screen.getByRole('button', { name: 'Increment' })
    expect(buttonIncrement)

    fireEvent.click(buttonIncrement)
    expect(screen.getByTestId('countNumber').textContent).toEqual('1')
   })

   it('should decrement 1 when click at decrement button', () => { 
    render(<Counter initialCount={0} />)

    const buttonDecrement = screen.getByRole('button', { name: 'Decrement'})
    expect(buttonDecrement)

    fireEvent.click(buttonDecrement)
    expect(screen.getByTestId('countNumber').textContent).toEqual('-1')
   })

   it('should restart when click at restart button', () => { 
    render(<Counter initialCount={0} />)

    const buttonRestart = screen.getByRole('button', { name: 'Restart'})
    expect(buttonRestart)

    fireEvent.click(buttonRestart)
    expect(screen.getByTestId('countNumber').textContent).toEqual('0')
   })

   it('should Switch Signs when click at Switch Signs button', () => { 
    render(<Counter initialCount={0} />)

    const buttonSwitchSigns = screen.getByRole('button', { name: 'Switch Signs'})
    expect(buttonSwitchSigns)

    fireEvent.click(buttonSwitchSigns)
   })
})