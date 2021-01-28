import { hookBundleGet } from "./utils/frida_android_utils"

Java.perform(function () {
    hookBundleGet()
})