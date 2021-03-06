export type HookImpl<T> = Function & {
    implementation: Function;
    overload(...args: string[]): FunctionProperty<T>;
}

export type FunctionProperty<T> = (HookImpl<T> & T)
export type ReturnFunctionProperty<T, Return> = (HookImpl<T> & T & ((...any: any) => Return))  