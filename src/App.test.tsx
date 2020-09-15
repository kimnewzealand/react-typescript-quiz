import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// Components
import App from './App'
import QuestionCard from './components/QuestionCard'

it('takes a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment).toMatchSnapshot()
})

it('renders the correct title in the document', () => {
    render(<App />)
    expect(screen.getByText('React Quiz')).toBeInTheDocument();
})

it('should have have a start button', () => {
    render(<App />)
    screen.getByRole('button', { name: /Start/i })
})

it('should have have a next button', () => {
    render(<App />)
    screen.getByRole('button', { name: /Next/i })
});

it('clicks the Start button to render a score of 0', () => {
    render(<App />)
    // Click button
    userEvent.click(screen.getByRole('button', { name: /Start/i }))
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
})

it('clicks the Start button to render first question', () => {
    render(<App />)
    // Click button
    userEvent.click(screen.getByRole('button', { name: /Start/i }))
    render(<QuestionCard questionNr={1}
        totalQuestions={10}
        question={'What does GHz stand for?'}
        answers={['Gigahertz', 'Gegahertz', 'Gagahertz', 'Gugahertz']}
        userAnswer={undefined}
        callback={undefined} />)
    expect(screen.getByText('Question: 1/10')).toBeInTheDocument()
})

it('clicks the Next button to render second question', () => {
    render(<App />)
    // Click button
    userEvent.click(screen.getByRole('button', { name: /Start/i }))
    render(<QuestionCard questionNr={1}
        totalQuestions={10}
        question={'What does GHz stand for?'}
        answers={['Gigahertz', 'Gegahertz', 'Gagahertz', 'Gugahertz']}
        userAnswer={undefined}
        callback={undefined} />)
    userEvent.click(screen.getByRole('button', { name: /Next/i }))
    render(<QuestionCard questionNr={2}
        totalQuestions={10}
        question={'What does MHz stand for?'}
        answers={['Megahertz', 'Migahertz', 'Magahertz', 'Mugahertz']}
        userAnswer={undefined}
        callback={undefined} />)
    expect(screen.getByText('Question: 2/10')).toBeInTheDocument()
})

