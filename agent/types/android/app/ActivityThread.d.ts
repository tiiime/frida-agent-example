import { FunctionProperty, ReturnFunctionProperty } from "../../frida_hook";
import { ApplicationWrapper } from "./ApplicationWrapper";

interface ActivityThreadWrapper {
    onCreate: FunctionProperty<ActivityThreadWrapper>
    onStart: FunctionProperty<ActivityThreadWrapper>
    onResume: FunctionProperty<ActivityThreadWrapper>
    onPause: FunctionProperty<ActivityThreadWrapper>
    onStop: FunctionProperty<ActivityThreadWrapper>
    onDestroy: FunctionProperty<ActivityThreadWrapper>
    onRestart: FunctionProperty<ActivityThreadWrapper>
    onNewIntent: FunctionProperty<ActivityThreadWrapper>
    onActivityResult: FunctionProperty<ActivityThreadWrapper>
    finish: FunctionProperty<ActivityThreadWrapper>

    currentApplication: ReturnFunctionProperty<ActivityThreadWrapper, ApplicationWrapper>
}