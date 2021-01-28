import { ReturnFunctionProperty } from "../../frida_hook";

interface ContextWrapper {
    getSystemService: ReturnFunctionProperty<ContextWrapper, ServiceWrapper>
}
