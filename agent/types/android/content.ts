import { ApplicationWrapper } from "./app/ApplicationWrapper";

export let Context = Java.use("android.content.Context") as (Java.Wrapper<{}> & ApplicationWrapper);
