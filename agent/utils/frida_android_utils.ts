import { Context } from "vm";
import { Activity, ActivityThread } from "../types/android/app";
import { ContextWrapper } from "../types/android/content/ContextWrapper";
import { Bundle } from "../types/android/os";
import { Log } from "../types/android/util";
import { Exception } from "../types/java/lang";

export function printStack() {
    console.log(Log.getStackTraceString(Exception.$new()))
}

export function hookActivityOnCreate() {
    Activity.onCreate.overload(Bundle.$className).implementation = function (bundle: any) {
        this.onCreate(bundle)
        printStack()
    }
}

export function hookBundleGet() {
    Bundle.get.implementation = function (key: any) {
        let res = this.get(key)
        console.log(`${key}: ${res}`)
        return res
    }
}

export function getApplicationContext(): Context {
    return ActivityThread.currentApplication().getApplicationContext()
}