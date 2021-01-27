import { Activity } from "./types/android/app";
import { Bundle, Looper, Message } from "./types/android/os";
import { printStack } from "./types/frida_utils";

Java.perform(function () {

    let res = Looper.getMainLooper.call(Looper)

    Activity.onCreate.overload(Bundle.$className).implementation = function (bundle: any) {
        this.onCreate(bundle)
        printStack()
    }
})