import { FunctionProperty } from "../../frida_hook";

interface LooperWrapper {
    getMainLooper: FunctionProperty<LooperWrapper>
}