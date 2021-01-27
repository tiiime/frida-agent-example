import { FunctionProperty } from "../../frida_helper";

interface LooperWrapper {
    getMainLooper: FunctionProperty<LooperWrapper>
}