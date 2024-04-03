import R from "ramda"

const compose = (...funcs: any) => (...args: any[]) => {
    const composedFunc = R.compose(funcs)(...args)
    return composedFunc
}

export default {
    compose
}
