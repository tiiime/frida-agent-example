import { Application } from "./types/android/app";
import { Looper, Message } from "./types/android/os";
import { Log } from "./types/android/util";
import { printStack } from "./types/frida_utils";
import { Exception } from "./types/java/lang";

Java.perform(function () {

    let res = Looper.getMainLooper.call(Looper)
    console.log(res)

    Message.recycleUnchecked.implementation = function(){
        printStack()
        this.recycleUnchecked()
    }
    
})