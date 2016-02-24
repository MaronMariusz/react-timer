const timerConfig = {
	defaultTimeValue: 60000,
	countDownInterval: 1000,
	buttons: [
		{
			label: '+10',
			action: 'increment',
			resolveWith: 10000
		},
		{
			label: '+5',
			action: 'increment',
			resolveWith: 5000
		},
		{
			label: '+1',
			action: 'increment',
			resolveWith: 1000
		},
		{
			label: '-10',
			action: 'decrement',
			resolveWith: 10000
		},
		{
			label: '-5',
			action: 'decrement',
			resolveWith: 5000
		},
		{
			label: '-1',
			action: 'decrement',
			resolveWith: 1000
		},
		{
			label: 'play',
			action: 'play'
		},
		{
			label: 'resume',
			action: 'resume'
		},
		{
			label: 'stop',
			action: 'stop'
		},
		{
			label: 'reset',
			action: 'reset'
		}
	]
}

export default timerConfig;