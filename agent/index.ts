import { Activity, ActivityThread } from "./types/android/app"
import { getApplicationContext } from "./utils/frida_android_utils"

Java.perform(function () {
    let context = getApplicationContext()
    console.log(context)
})