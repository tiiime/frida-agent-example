import { Looper, Message } from "./types/android/os";
import { Log } from "./types/android/util";
import { Exception } from "./types/java/lang";

Java.perform(function () {

    let res = Looper.getMainLooper.call(Looper)
    console.log(res)
    
})