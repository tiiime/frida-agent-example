import { FunctionProperty, ReturnFunctionProperty } from "../../frida_hook";
import { ContextWrapper } from "../content/ContextWrapper";

interface ApplicationWrapper {
    onCreate: FunctionProperty<ApplicationWrapper>
    getApplicationContext(): ReturnFunctionProperty<ApplicationWrapper, ContextWrapper>
}