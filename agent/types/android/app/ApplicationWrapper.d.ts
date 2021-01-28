import { FunctionProperty, ReturnFunctionProperty } from "../../frida_hook";

interface ApplicationWrapper {
    onCreate: FunctionProperty<ApplicationWrapper>
    getApplicationContext(): ReturnFunctionProperty<ApplicationWrapper, ContextWrapper>
}