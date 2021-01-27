type HookImpl<T> = (() => void) & {
    implementation: any;
    overload(...args: string[]): HookImpl<T>;
}

type FunctionProperty<T> = ((() => void) & HookImpl<T> & T)