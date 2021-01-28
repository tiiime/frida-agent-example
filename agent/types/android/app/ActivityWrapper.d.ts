import { FunctionProperty } from "../../frida_hook";

interface ActivityWrapper {
    onCreate: FunctionProperty<ActivityWrapper>
    onStart: FunctionProperty<ActivityWrapper>
    onResume: FunctionProperty<ActivityWrapper>
    onPause: FunctionProperty<ActivityWrapper>
    onStop: FunctionProperty<ActivityWrapper>
    onDestroy: FunctionProperty<ActivityWrapper>
    onRestart: FunctionProperty<ActivityWrapper>
    onNewIntent: FunctionProperty<ActivityWrapper>
    onActivityResult: FunctionProperty<ActivityWrapper>
    finish: FunctionProperty<ActivityWrapper>
}