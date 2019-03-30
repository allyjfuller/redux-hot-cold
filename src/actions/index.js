const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE'
export const generateAuralUpdate = () => ({
	type: GENERATE_AURAL_UPDATE

})

const RESTART_GAME = 'RESTART_GAME'
export const restartGame = () => ({
	type: RESTART_GAME,
	correctAnswer
	
})

const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = () => ({
	type: MAKE_GUESS,
	guess
	
})