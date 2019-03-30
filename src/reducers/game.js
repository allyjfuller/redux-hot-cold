import { GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS } from './actions/index';

const initialState = {
	guesses: [],
	feedback: 'Make a guess!',
	auralStatus: '',
	correctAnswer: Math.round(Math.random() * 100) + 1
};

const game = (state = initialState, action) => {
	switch(action.type) {
		case 'GENERATE_AURAL_UPDATE':
			return {
				// no idea
			}
	}

	switch(action.type) {
		case 'RESTART_GAME':
			return {
				guesses: [],
				feedback: 'Make a guess!',
				auralStatus: '',
				correctAnswer: action.correctAnswer
			}
	}

	// very lost from here on out
}