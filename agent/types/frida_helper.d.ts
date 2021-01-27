export type HookImpl<T> = (() => void) & {
    implementation: any;
    overload(...args: string[]): HookImpl<T>;
}

export type FunctionProperty<T> = ((() => void) & HookImpl<T> & T)