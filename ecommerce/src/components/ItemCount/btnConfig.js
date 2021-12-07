export const btnConfig = (count, available, incrementCount, decrementCount) => {
    return {
        add: {
        className: `counter-button ${count === available ? 'no-stock' : ''}`,
        disabled: count === available,
        onClick: incrementCount
        },

        number: {
        className:`'counter-number' ${count === available || count === 0 ? 'pulse' : ''}`
        },

        subtract: {
        className: `counter-button ${count === 0 ? 'no-stock' : ''}`,
        disabled: count === 0,
        onClick: decrementCount
        }

    }
}
