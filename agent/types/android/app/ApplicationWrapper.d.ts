import { FunctionProperty } from "../../frida_hook";

interface ApplicationWrapper {
    onCreate: FunctionProperty<ApplicationWrapper>
}