import { Log } from "./android/util";
import { Exception } from "./java/lang";

export function printStack(){
    console.log(Log.getStackTraceString(Exception.$new()))
}