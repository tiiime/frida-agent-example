import { FunctionProperty, ReturnFunctionProperty } from "../../frida_hook";
import { ApplicationWrapper } from "./ApplicationWrapper";

interface ActivityThreadWrapper {
    currentApplication: ReturnFunctionProperty<ActivityThreadWrapper, ApplicationWrapper>
}