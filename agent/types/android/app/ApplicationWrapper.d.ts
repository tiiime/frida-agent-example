import { FunctionProperty } from "../../frida_helper";

interface ApplicationWrapper {
    onCreate: FunctionProperty<ApplicationWrapper>
}